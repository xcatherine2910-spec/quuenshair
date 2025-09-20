"use client";

import { useEffect } from "react";

// Adds a scroll-based reveal animation to any element with `data-reveal`
// Elements will get a one-time `animate-fade-up` when entering the viewport
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const selector = "[data-reveal]";
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));

    // Prepare initial state (only if not already prepared)
    nodes.forEach((el) => {
      if (!el.dataset.revealPrepared) {
        el.style.opacity = "0";
        el.style.transform = "translateY(8px)";
        el.style.willChange = "opacity, transform";
        el.dataset.revealPrepared = "true";
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Play the animation
            el.classList.add("animate-fade-up");
            // Cleanup inline styles after the animation ends (~800ms)
            window.setTimeout(() => {
              el.style.opacity = "";
              el.style.transform = "";
              el.style.willChange = "";
            }, 900);
            io.unobserve(el); // reveal once
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    nodes.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
