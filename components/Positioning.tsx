
import React from 'react';
import { Target, Zap, Layout } from 'lucide-react';

const Positioning: React.FC = () => {
  const points = [
    {
      icon: <Target className="text-brand" size={32} />,
      title: 'Strategie obsahu',
      description: 'Neprodukujeme "videa". Budujeme obsahové systémy, které reálně plní vaše obchodní cíle.'
    },
    {
      icon: <Zap className="text-brand" size={32} />,
      title: 'Rychlá produkce',
      description: 'Minimum meetingů, maximum akce. Od nápadu po finální export v rekordním čase.'
    },
    {
      icon: <Layout className="text-brand" size={32} />,
      title: 'Distribuce-ready',
      description: 'Dodáváme formáty přímo pro vaše kanály. Žádné ořezávání na poslední chvíli.'
    }
  ];

  return (
    <section id="positioning" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-brand font-outfit text-sm font-black tracking-widest uppercase mb-4">Dlouhodobý Partner</h2>
            <h3 className="text-5xl md:text-7xl font-outfit font-black mb-8">NEJSME <br /><span className="text-white/20">AGENTURA.</span></h3>
            <p className="text-xl text-white/60 font-medium mb-12 leading-relaxed">
              Jsme media production tým – parta tvůrců, kteří produkují vysoce kvalitní foto a video obsah pro silné, rostoucí byznysy. Nečekejte od nás marketingové klišé ani hodiny zbytečných porad. Čekejte výsledky.
            </p>
            
            <div className="grid grid-cols-1 gap-8">
              {points.map((p, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-brand/50 transition-all">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative">
             <div className="aspect-square bg-white/5 rounded-[4rem] border-2 border-white/10 overflow-hidden relative group">
                <img 
                  src="/" 
                  alt="Production Team" 
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-brand/5 mix-blend-color"></div>
                <div className="absolute bottom-10 left-10 p-8 glass-nav border border-white/10 rounded-3xl max-w-xs">
                  <p className="text-2xl font-outfit font-bold mb-2">„Obsah už není volba. Je to podmínka růstu.“</p>
                  <p className="text-brand font-black text-xs uppercase tracking-widest">— Tým Smart Digital</p>
                </div>
             </div>
             {/* 3D-like parallax effect elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand/20 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
