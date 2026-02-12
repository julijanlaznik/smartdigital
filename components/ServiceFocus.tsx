
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceFocus: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background accents - very subtle */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand/5 blur-[150px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col space-y-24">
          
          {/* Main Statement */}
          <div className="max-w-4xl">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-sans font-black leading-[1.1] tracking-tighter uppercase mb-8"
            >
              VÁŠ VIZUÁL DEFINUJE <br />
              <span className="text-brand italic">VAŠI CENU NA TRHU.</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/40 font-medium leading-relaxed max-w-2xl"
            >
              Rozdíl mezi „mít video“ a mít „filmovou prezentaci“ je rozdíl mezi průměrným zájmem a okamžitou autoritou. Pokud vypadáte jako lídr, lidé se k vám tak budou chovat.
            </motion.p>
          </div>

          {/* Visual Showcase with context */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group"
              >
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                >
                  <source src="/muzicek showreel.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-transparent transition-colors duration-700"></div>
                
                {/* Status Badge inside video */}
                <div className="absolute bottom-8 left-8 glass px-5 py-2.5 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-[0.3em] text-white backdrop-blur-md">
                  High-End Standard
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 space-y-12 order-1 lg:order-2 lg:pt-6">
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tighter text-white">ATTENTION HACKING</h4>
                <p className="text-white/40 text-lg leading-relaxed font-medium">
                  V digitálním šumu je pozornost nejdražší komodita. Tvoříme vizuální šok, který přinutí vašeho klienta zastavit a sledovat váš projekt v plné kvalitě.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tighter text-white">FILTRACE ELITY</h4>
                <p className="text-white/40 text-lg leading-relaxed font-medium">
                  Prémiová produkce funguje jako filtr. Přitahuje klienty, kteří hledají kvalitu a autoritu, a automaticky odrazuje ty, kteří řeší jen nejnižší cenu.
                </p>
              </div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="pt-4"
              >
                <a href="#kontakt" className="flex items-center gap-4 text-brand font-black text-sm uppercase tracking-widest group">
                  CHCI TENTO STATUS <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Authority Footer */}
          <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-md">
              <h5 className="text-3xl font-black uppercase tracking-tighter mb-4">MÉNĚ SLOV, VÍC DOPADU.</h5>
              <p className="text-white/30 font-medium leading-relaxed">
                Neztrácejte čas vysvětlováním, že jste profesionálové. Nechte svou vizuální prezentaci, ať to udělá za vás dřív, než dojde k prvnímu kontaktu.
              </p>
            </div>
            <div className="hidden md:flex items-end">
              <div className="text-8xl font-black leading-none text-white/[0.02] select-none pointer-events-none tracking-tighter">
                SMART DIGITAL
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceFocus;
