import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark animate-fade-in">
      {/* Header */}
      <nav className="bg-dark sticky top-0 z-50 border-b border-dark-lighter/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 grid grid-cols-3 items-center">
            {/* Left: search icon placeholder */}
            <div className="flex items-center"></div>
            {/* Center: brand */}
            <div className="flex items-center justify-center">
              <div className="text-center leading-tight">
                <div className="text-3xl font-semibold text-accent">Queen&apos;s Hair</div>
                <div className="text-[11px] tracking-[0.35em] text-primary uppercase">Hair salon</div>
              </div>
            </div>
            {/* Right: placeholder */}
            <div className="flex justify-end items-center"></div>
          </div>
          <div className="hidden md:flex justify-center gap-8 pb-4 text-sm">
            <a href="#home" className="text-accent/80 hover:text-accent transition-colors">Úvod</a>
            <a href="#before-after" className="text-accent/80 hover:text-accent transition-colors">Proměny</a>
            <a href="#contact" className="text-accent/80 hover:text-accent transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-dark to-secondary py-32 px-4 sm:px-6 lg:px-8 overflow-hidden animate-fade-in">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          
          {/* Luxury hair photo background (optimized) */}
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
              alt="Queen&apos;s Hair hero"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* Contrast overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Centered hero overlay content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-up">
            <div className="text-sm tracking-widest text-accent/80 uppercase">HAIR SALON</div>
            <h1 className="mt-2 text-6xl md:text-7xl font-semibold text-accent leading-tight">Prodlužování <span className="text-accent/80">vlasů</span></h1>
            <a href="#before-after" className="mt-3 inline-block border border-accent/40 text-accent/90 px-4 py-2 text-sm tracking-wider">NAŠE PROMĚNY</a>
            <div className="mt-8">
              <a href="#contact" className="inline-block bg-accent text-dark px-6 py-3 rounded-sm text-sm tracking-wider hover:bg-accent/90 transition">Objednat se</a>
            </div>
          </div>
        </div>
      </section>
      

      {/* Block Quote Section */}
      <section id="quote" className="py-16 bg-dark border-t border-dark-lighter/60 animate-fade-in" style={{animationDelay:'80ms'}}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="relative">
            <p className="font-display text-3xl md:text-4xl text-accent leading-snug italic">
              „Tvá koruna krásy, tvé nové sebevědomí.“
            </p>
            <footer className="mt-4 text-accent/60 tracking-widest text-xs">QUEEN&apos;S HAIR</footer>
          </blockquote>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="relative py-24 bg-black overflow-hidden border-t border-dark-lighter/60 animate-fade-in" style={{animationDelay:'160ms'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl tracking-[0.25em] text-accent/90 mb-10 text-center">O SALONU</h2>
          <div className="grid md:grid-cols-2 gap-10 bg-dark-lighter/40 border border-dark-lighter rounded-xl p-6 md:p-10">
            {/* Left collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative aspect-[16/10] overflow-hidden rounded-md">
                <Image src="/22-inch-halo-hair-extensions-dark-brown-_2-2_f21d697d-5093-4d05-95b7-fa31844a86d2_1200x1200.webp" alt="Studio look" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image src="/61mD6mBXL-L.jpg" alt="Detail" fill className="object-cover" sizes="(min-width: 768px) 25vw, 50vw" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image src="/todle.jpg" alt="Portrait" fill className="object-cover" sizes="(min-width: 768px) 25vw, 50vw" />
              </div>
            </div>
            {/* Right copy */}
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-4xl text-accent mb-4">Krásné vlasy nejsou jen ozdobou – jsou zrcadlem sebevědomí.</h3>
              <p className="text-gray-300 leading-relaxed">
                Vlasy jsou pro každou ženu mnohem víc než jen součást vzhledu. Jsou vyjádřením její osobnosti, ženskosti a vnitřní síly. Dlouhé, zdravé a lesklé vlasy dokážou zázraky – pozvednou náladu, zvýrazní přirozenou krásu a dodají sebejistotu v každém kroku.
                <br /><br />
                V našem salonu se specializujeme na prodlužování vlasů keratinem – šetrnou a efektivní metodou, která vytváří přirozený vzhled a splývá s Vašimi vlastními vlasy. Ať už toužíte po delší hřívě, větším objemu nebo jen po změně, která vás rozzáří, jsme tady pro vás.
                <br /><br />
                Protože když se žena cítí krásná, je šťastná. A krásné vlasy jsou ten nejlepší začátek.
              </p>
              <div className="mt-10">
                <a href="#contact" className="inline-block border border-accent px-5 py-3 text-sm tracking-wider text-accent hover:bg-accent hover:text-dark transition rounded-sm">
                  OBJEDNAT KONZULTACI
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="before-after" className="py-16 bg-dark border-t border-dark-lighter/60 animate-fade-in" style={{animationDelay:'240ms'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl tracking-[0.25em] text-accent/90 mb-8">PŘED A PO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { before: '/IMG_0933.png', after: '/IMG_1299.jpg' },
              { before: '/IMG_0937.png', after: '/IMG_1300.jpg' },
            ].map((pair, i) => (
              <div key={i} className="bg-dark-lighter/40 border border-dark-lighter rounded-lg overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={pair.before} alt={`Před ${i+1}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  <span className="absolute top-2 left-2 bg-black/70 text-accent text-xs tracking-wider px-2 py-1">PŘED</span>
                </div>
                <div className="relative aspect-[4/3] border-t border-dark-lighter">
                  <Image src={pair.after} alt={`Po ${i+1}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  <span className="absolute top-2 left-2 bg-black/70 text-accent text-xs tracking-wider px-2 py-1">PO</span>
                </div>
              </div>
            ))}
          </div>

          {/* Social follow prompt */}
          <div className="text-center mt-10">
            <p className="font-display text-2xl md:text-3xl text-accent mb-6">Pro více proměn nás sledujte na sociálních sítích</p>
            <div className="flex items-center justify-center gap-6 md:gap-8">
              {/* Facebook */}
              <a href="https://facebook.com/queenshair" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                    <path d="M22 12.06C22 6.507 17.523 2 12 2S2 6.507 2 12.06C2 17.08 5.657 21.205 10.438 22v-7.012H7.898v-2.928h2.54V9.845c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.196 2.238.196v2.47h-1.26c-1.243 0-1.631.775-1.631 1.57v1.885h2.773l-.443 2.928h-2.33V22C18.343 21.205 22 17.08 22 12.06Z"/>
                  </svg>
                </div>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/queenshair" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/>
                  </svg>
                </div>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com/@queenshair" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-[#25F4EE] to-[#FE2C55] text-white flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                    <path d="M21.25 8.5a7.25 7.25 0 0 1-4.5-1.55v7.31a5.56 5.56 0 1 1-5.56-5.56c.24 0 .47.02.7.05v2.63a2.93 2.93 0 1 0 2.93 2.93V2.75h2.05c.21.85.68 1.6 1.32 2.16A5.2 5.2 0 0 0 21.25 6v2.5Z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-dark to-secondary overflow-hidden animate-fade-in" style={{animationDelay:'320ms'}}>
        {/* Background decorative elements (softer, non-interactive) */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          {/* Subtle gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-pink-500/10"></div>
          {/* Enlarged, softer blobs */}
          <div className="absolute top-16 left-8 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-8 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-6">
              <span className="text-primary font-medium text-sm">✨ Kontaktujte nás</span>
            </div>
            <h2 className="text-5xl font-bold text-accent leading-tight">
              Rezervujte si
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Konzultaci
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-accent mb-8">Kontaktní informace</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-xl">📍</span>
                  </div>
                  <div>
                    <div className="text-accent font-medium">Lokace</div>
                    <div className="text-gray-300">Masarykovo náměstí 1098/3a, LETOVICE 679 61</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-xl">📞</span>
                  </div>
                  <div>
                    <div className="text-accent font-medium">Telefon</div>
                    <div className="text-gray-300">+420 720 329 593</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-xl">✉️</span>
                  </div>
                  <div>
                    <div className="text-accent font-medium">Email</div>
                    <div className="text-gray-300">info@queenshair.cz</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-xl">🕒</span>
                  </div>
                  <div>
                    <div className="text-accent font-medium">Otevírací hodiny</div>
                    <div className="text-gray-300">Po-So: 9:00-19:00, Ne: 10:00-17:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-dark-lighter to-secondary p-8 rounded-3xl shadow-2xl border border-primary/20">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✨</span>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-accent mb-2">Jméno</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-accent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="Vaše celé jméno"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-accent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="vas@email.cz"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-accent mb-2">Zpráva</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-accent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none" 
                      placeholder="Řekněte nám o vašich potřebách prodloužení vlasů..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-pink-500 text-white py-4 px-6 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-lg"
                  >
                    Odeslat zprávu
                  </button>
                </form>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">💎</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-accent py-8 border-t border-dark-lighter/60 animate-fade-in" style={{animationDelay:'400ms'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-display text-2xl font-semibold text-accent mb-2">Queen&apos;s Hair</h3>
            <p className="text-accent/70 mb-4">„Tvá koruna krásy, tvé nové sebevědomí.“</p>
            <div className="flex justify-center gap-6">
              <a href="https://facebook.com/queenshair" className="text-accent/70 hover:text-accent transition">Facebook</a>
              <a href="https://instagram.com/queenshair" className="text-accent/70 hover:text-accent transition">Instagram</a>
              <a href="https://tiktok.com/@queenshair" className="text-accent/70 hover:text-accent transition">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
