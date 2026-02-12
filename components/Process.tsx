
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="proces" className="py-32 bg-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] bg-brand/5 blur-[150px] rounded-full -z-10 rotate-[-12deg]"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <div className="max-w-2xl">
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-sans font-black tracking-tighter uppercase leading-[0.85]"
            >
              PRŮBĚH <br />
              <span className="text-white/10 italic">SPOLUPRÁCE.</span>
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/40 text-lg max-w-sm pb-2 font-medium border-l border-brand/20 pl-6"
          >
            Váš úspěch není náhoda. Je to výsledek precizně nastaveného procesu, který doručuje výsledky.
          </motion.p>
        </div>

        <motion.div 
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Decorative connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-gradient-to-r from-brand/50 via-white/5 to-transparent -z-0"></div>

          {PROCESS_STEPS.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group relative"
            >
              {/* Step indicator with glow */}
              <div className="relative mb-12">
                <div className="w-24 h-24 rounded-full glass border border-white/10 flex items-center justify-center text-3xl font-sans font-black text-white group-hover:text-dark group-hover:bg-brand group-hover:border-brand transition-all duration-500 shadow-2xl relative z-10">
                  {step.number}
                </div>
                {/* Glow behind the number */}
                <div className="absolute inset-0 bg-brand/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Connector for mobile */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden absolute left-12 top-24 w-px h-12 bg-gradient-to-b from-brand/50 to-transparent"></div>
                )}
              </div>

              {/* Content Card */}
              <div className="space-y-6 relative">
                <div className="flex items-center gap-4">
                  <h4 className="text-3xl font-sans font-black uppercase tracking-tighter group-hover:text-brand transition-colors duration-300">
                    {step.title}
                  </h4>
                  <div className="h-px flex-grow bg-white/5 group-hover:bg-brand/20 transition-all duration-500"></div>
                </div>
                
                <p className="text-white/40 text-lg leading-relaxed font-medium transition-colors duration-500 group-hover:text-white/70">
                  {step.description}
                </p>

                <div className="pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  <span>Fáze {idx + 1}</span>
                  <ArrowRight size={12} />
                </div>
              </div>

              {/* Subtle side number background */}
              <div className="absolute -top-10 -left-6 text-[120px] font-black text-white/[0.02] pointer-events-none select-none -z-10 group-hover:text-brand/[0.03] transition-colors">
                {step.number}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
