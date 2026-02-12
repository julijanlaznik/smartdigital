
import React, { useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface FloatingCardProps {
  testimonial: typeof TESTIMONIALS[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ testimonial, index, scrollYProgress }) => {
  // Každá karta má unikátní parametry pohybu pro pocit náhody
  const speeds = [150, -200, 100, -150, 250];
  const rotations = [-5, 8, -3, 12, -7];
  const xOffsets = [0, 20, -20, 40, -40];
  
  const speed = speeds[index % speeds.length];
  const rotation = rotations[index % rotations.length];
  const xOffset = xOffsets[index % xOffsets.length];

  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotation]);
  const x = useTransform(scrollYProgress, [0, 1], [0, xOffset]);

  return (
    <motion.div
      style={{ y, rotate, x }}
      className={`relative glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 hover:border-brand/40 transition-colors duration-500 shadow-2xl interactive mb-12 max-w-md
        ${index % 2 === 0 ? 'ml-auto' : 'mr-auto md:ml-20'}
      `}
    >
      <Quote className="absolute -top-6 -left-6 w-24 h-24 text-brand/10 -z-10" />
      
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-brand fill-brand" />
        ))}
      </div>

      <p className="text-xl md:text-2xl font-medium mb-10 text-white/90 leading-tight tracking-tight">
        „{testimonial.content}“
      </p>
      
      <div className="flex items-center gap-4 pt-8 border-t border-white/5">
        <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center font-black text-brand text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-black text-sm uppercase tracking-tighter text-white">{testimonial.name}</h4>
          <p className="text-brand text-[9px] font-black tracking-[0.2em] uppercase mt-0.5">
            {testimonial.role} — {testimonial.company}
          </p>
        </div>
      </div>

      {/* Subtle glow inside card */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand/5 blur-3xl rounded-full pointer-events-none"></div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef} 
      className="py-40 bg-dark relative overflow-hidden min-h-[150vh] flex flex-col justify-center"
    >
      {/* Background Ambient Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand/5 blur-[150px] rounded-full animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col">
          {TESTIMONIALS.map((t, i) => (
            <FloatingCard 
              key={i} 
              testimonial={t} 
              index={i} 
              scrollYProgress={scrollYProgress} 
            />
          ))}

          {/* Extra visual element to anchor the section */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -300]) }}
            className="self-center mt-20"
          >
            <div className="group bg-brand p-16 rounded-[4rem] text-center interactive shadow-[0_50px_100px_rgba(199,247,21,0.15)] max-w-sm rotate-2">
              <h4 className="text-3xl font-black text-dark uppercase tracking-tighter leading-none mb-6">
                BUĎTE DALŠÍ <br />V ŘADĚ.
              </h4>
              <a 
                href="#kontakt" 
                className="inline-block px-10 py-4 bg-dark text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all"
              >
                CHCI SE SETKAT
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
    </section>
  );
};

export default Testimonials;
