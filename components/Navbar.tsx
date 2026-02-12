
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[60] pointer-events-none">
        <div className="container mx-auto px-6 py-6 relative h-24 flex items-center justify-between">
          
          <div className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out ${scrolled ? 'opacity-0 translate-y-[-20px] pointer-events-none' : 'opacity-100 translate-y-0 pointer-events-auto'}`}>
            <a href="#" className="block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full overflow-hidden flex items-center justify-center">
                  <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                </div>
                <span className="font-sans text-2xl font-black tracking-tighter text-white">Smart<span className="text-white/50">.</span></span>
              </div>
            </a>

            <button 
              className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:border-brand transition-all"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="text-white" size={24} />
            </button>
          </div>

          <div 
            className={`absolute top-6 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out pointer-events-auto
              ${scrolled 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-90 translate-y-[-10px] pointer-events-none'}`}
          >
            <button 
              className="group flex items-center justify-center w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/10 hover:border-brand transition-all shadow-2xl"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu Floating"
            >
              <Menu className="text-white" size={28} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-dark z-[70] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <button 
          className="absolute top-8 right-8 w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-brand hover:scale-110 transition-transform"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full -z-10"></div>
        
        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          {[
            { label: 'Domů', href: '#hero' },
            { label: 'Kdo jsme', href: '#team' },
            { label: 'Náš proces', href: '#proces' },
            { label: 'Reference', href: '#testimonials-section' },
          ].map((item, idx) => (
            <a 
              key={idx}
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-4xl md:text-7xl font-sans font-black uppercase tracking-tighter hover:text-brand transition-all hover:italic group flex items-center"
            >
              <span className="text-brand text-xs mr-4 opacity-0 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
              {item.label}
            </a>
          ))}
          <a 
            href="#kontakt" 
            onClick={() => setIsOpen(false)} 
            className="mt-8 px-12 py-5 bg-brand text-dark text-xl font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand/20 uppercase tracking-widest"
          >
            CHCI VYPADAT NEJLÉPE
          </a>
        </div>

        <div className="absolute bottom-12 text-center text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
          Media Production Partner • Prague, CZ
        </div>
      </div>
    </>
  );
};

export default Navbar;
