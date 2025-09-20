"use client";

import React, { useEffect, useRef } from "react";

// Subtle glitter cursor trail using a fixed canvas overlay
export default function GlitterCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const state = {
      particles: [] as Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        life: number; // 1 -> 0
        size: number;
        color: string;
      }>,
      lastX: 0,
      lastY: 0,
      lastEmit: 0,
    };

    function resize() {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function randomSilver() {
      // Silver palette variants
      const palette = [
        "#C0C0C0",
        "#E5E5E5",
        "#AFAFAF",
        "#F5F5F5",
        "#D4D4D4",
      ];
      return palette[Math.floor(Math.random() * palette.length)];
    }

    function spawn(x: number, y: number, amount = 6) {
      for (let i = 0; i < amount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.6 + Math.random() * 1.2; // px/frame-ish
        state.particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: 1 + Math.random() * 2.5,
          color: randomSilver(),
        });
      }
      // Cap total particles for perf
      if (state.particles.length > 300) {
        state.particles.splice(0, state.particles.length - 300);
      }
    }

    function onMove(e: MouseEvent) {
      const now = performance.now();
      const x = e.clientX;
      const y = e.clientY;
      state.lastX = x;
      state.lastY = y;
      // Throttle emit rate
      if (now - state.lastEmit > 16) {
        spawn(x, y, 8);
        state.lastEmit = now;
      }
    }

    function onTouch(e: TouchEvent) {
      const t = e.touches[0];
      if (!t) return;
      spawn(t.clientX, t.clientY, 10);
    }

    function tick() {
      // Fade previous frame softly
      ctx.fillStyle = "rgba(0,0,0,0.08)"; // subtle trail blending with dark bg
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // Draw particles
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        // physics
        p.vy += 0.02; // gentle gravity
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;

        if (p.life <= 0) {
          state.particles.splice(i, 1);
          continue;
        }

        const alpha = Math.max(0, Math.min(1, p.life));
        ctx.globalAlpha = alpha;
        // glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        grad.addColorStop(0, p.color);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove as any);
      window.removeEventListener("touchmove", onTouch as any);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[60]"
      aria-hidden="true"
    />
  );
}
