
import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const Counter: React.FC<{ end: number; duration: number; suffix?: string }> = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className="font-sans tabular-nums">{count}{suffix}</span>;
};

const Hero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight || 800;
      
      const progress = Math.min(Math.max(scrollY / sectionHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftTranslate = -115 - (scrollProgress * 150);
  const rightTranslate = 15 + (scrollProgress * 150);
  const sideRotation = 12 + (scrollProgress * 20);
  const sideOpacity = 0.4 - (scrollProgress * 0.4);
  const centerScale = 1 - (scrollProgress * 0.1);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Headline & Description */}
          <div className="lg:col-span-4 text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-sans font-black mb-6 leading-[1.1] tracking-tighter uppercase opacity-0 animate-pop-up">
              VIZUÁLNÍ DOKONALOST <br />
              <span className="text-brand italic">VAŠEHO BYZNYSU.</span>
            </h1>
            <p className="text-lg text-white/60 mb-8 font-medium leading-relaxed max-w-sm opacity-0 animate-pop-up delay-200">
              Jsme media production tým, který vaší značce dodá vizuální tvář v té nejvyšší možné kvalitě.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-pop-up delay-400">
              <a href="#kontakt" className="px-10 py-5 bg-brand text-dark font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand/20 flex items-center justify-center group text-sm uppercase tracking-wider">
                CHCI VYPADAT NEJLÉPE
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>
          </div>

          {/* CENTER: Triple Vertical Video Mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center h-[450px] md:h-[600px] order-1 lg:order-2 opacity-0 animate-pop-up delay-100">
            <div 
              className="absolute left-1/2 z-0 transition-transform duration-100 ease-out"
              style={{ 
                transform: `translateX(${leftTranslate}%) rotate(${-sideRotation}deg) scale(${0.75 + (scrollProgress * 0.1)})`,
                opacity: sideOpacity
              }}
            >
              <div className="relative rounded-[2.5rem] border-4 border-white/5 overflow-hidden aspect-[9/19] h-[350px] md:h-[480px] shadow-2xl bg-dark/80">
                 <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="/PF 2025.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div 
              className="absolute left-1/2 z-0 transition-transform duration-100 ease-out"
              style={{ 
                transform: `translateX(${rightTranslate}%) rotate(${sideRotation}deg) scale(${0.75 + (scrollProgress * 0.1)})`,
                opacity: sideOpacity
              }}
            >
              <div className="relative rounded-[2.5rem] border-4 border-white/5 overflow-hidden aspect-[9/19] h-[350px] md:h-[480px] shadow-2xl bg-dark/80">
                 <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="/mercedes.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div 
              className="relative z-10 group transition-transform duration-100 ease-out"
              style={{ transform: `scale(${centerScale})` }}
            >
              <div className="relative rounded-[3rem] border-8 border-white/10 overflow-hidden aspect-[9/19] h-[400px] md:h-[550px] shadow-2xl shadow-brand/20 bg-dark ring-4 ring-brand/5">
                 <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-100">
                  <source src="/car wrap 1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-brand/20 blur-3xl rounded-full opacity-50"></div>
            </div>
          </div>

          {/* RIGHT: Stats & Social Proof */}
          <div className="lg:col-span-3 flex flex-col gap-10 order-3 lg:items-start">
            <div className="relative group opacity-0 animate-pop-up delay-300">
              <div className="text-5xl md:text-6xl font-sans font-black text-brand mb-1 tracking-tighter drop-shadow-[0_0_15px_rgba(199,247,21,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(199,247,21,0.5)] transition-all">
                <Counter end={5} duration={2000} suffix="+" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Spokojených klientů</p>
            </div>

            <div className="relative group opacity-0 animate-pop-up delay-400">
              <div className="text-5xl md:text-6xl font-sans font-black text-brand mb-1 tracking-tighter drop-shadow-[0_0_15px_rgba(199,247,21,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(199,247,21,0.5)] transition-all">
                <Counter end={12} duration={2000} suffix="+" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Hotových projektů</p>
            </div>

            <div className="relative group opacity-0 animate-pop-up delay-500">
              <div className="text-5xl md:text-6xl font-sans font-black text-brand mb-1 tracking-tighter drop-shadow-[0_0_15px_rgba(199,247,21,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(199,247,21,0.5)] transition-all">
                <Counter end={24} duration={2000} suffix="/7" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Produkční nasazení</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
