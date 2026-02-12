
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white/20 rounded-full"></div>
          </div>
          <span className="font-sans text-lg font-black tracking-tighter text-white">Smart<span className="text-white/50">.</span></span>
        </div>


        <div className="text-[10px] font-medium text-white/20 uppercase tracking-widest">
          © {new Date().getFullYear()} SMART DIGITAL. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
