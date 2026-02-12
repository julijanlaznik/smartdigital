
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, Send } from 'lucide-react';

const ContactPhone: React.FC<{ number: string }> = ({ number }) => (
  <a 
    href={`tel:${number.replace(/\s/g, '')}`} 
    className="group flex items-center gap-6 text-2xl md:text-4xl font-black transition-all text-dark hover:opacity-70"
  >
    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-dark/20 flex items-center justify-center group-hover:border-dark transition-colors">
      <Phone size={24} className="text-dark" />
    </div>
    <span>{number}</span>
  </a>
);

const FloatingIphone: React.FC<{ video: string; delay: number; rotation: number; top: string; left: string; scale: number; zIndex: number }> = ({ video, delay, rotation, top, left, scale, zIndex }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotate: rotation }}
    whileInView={{ opacity: 1, scale: scale }}
    animate={{ 
      y: [0, -30, 0],
      rotateZ: [rotation, rotation + 3, rotation] 
    }}
    transition={{ 
      duration: 6 + delay, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: delay 
    }}
    className="absolute hidden lg:block pointer-events-none"
    style={{ top, left, zIndex }}
  >
    <div className="relative w-[180px] aspect-[9/19] rounded-[2.5rem] border-[8px] border-dark overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.3)] bg-black">
      <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  </motion.div>
);

const CTA: React.FC = () => {
  const videos = [
    "/car wrap 1.mp4",
    "/mercedes.mp4",
    "/final ig smart.mp4",
    "/cupra final video.mp4",
    "/PF 2025.mp4",
    "/muzicek showreel.mp4"
  ];

  return (
    <section id="kontakt" className="w-full bg-brand rounded-t-[3rem] md:rounded-t-[8rem] relative overflow-hidden pt-32 pb-24 md:pt-56 md:pb-40">
      
      {/* 3D Floating Mockups Cluster */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIphone video={videos[0]} delay={0.2} rotation={-12} top="10%" left="5%" scale={0.9} zIndex={10} />
        <FloatingIphone video={videos[1]} delay={1.5} rotation={8} top="55%" left="2%" scale={0.8} zIndex={5} />
        <FloatingIphone video={videos[2]} delay={0.8} rotation={-5} top="5%" left="75%" scale={1.1} zIndex={15} />
        <FloatingIphone video={videos[3]} delay={2.2} rotation={15} top="40%" left="82%" scale={0.85} zIndex={5} />
        <FloatingIphone video={videos[4]} delay={1.0} rotation={-20} top="70%" left="65%" scale={0.95} zIndex={12} />
        <FloatingIphone video={videos[5]} delay={0.5} rotation={10} top="25%" left="15%" scale={0.7} zIndex={3} />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h3 className="text-6xl md:text-[10vw] font-sans font-black leading-[0.8] tracking-tighter uppercase text-dark mb-16 md:mb-24">
              POJĎME <br />
              <span className="italic opacity-80 text-[0.9em]">NA TO.</span>
            </h3>

            <div className="flex flex-col items-center space-y-10 md:space-y-16">
              <div className="flex flex-col items-center space-y-6 md:space-y-8">
                <ContactPhone number="+420 733 220 300" />
                <ContactPhone number="+420 608 444 093" />
              </div>

              <div className="w-full h-px bg-dark/10 max-w-md"></div>

              <div className="flex flex-col items-center">
                <a 
                  href="mailto:smdgtl.contact@gmail.com" 
                  className="group flex flex-col items-center"
                >
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-dark/40 mb-2 group-hover:text-dark transition-colors">Direct email</span>
                  <span className="text-2xl md:text-5xl font-black lowercase tracking-tighter text-dark group-hover:italic transition-all">
                    smdgtl.contact@gmail.com
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-12 pt-8">
                <a href="https://www.instagram.com/smartdigital.cz/" className="flex items-center gap-3 text-dark font-black uppercase text-xs tracking-widest hover:opacity-50 transition-opacity">
                  <Instagram size={24} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Mobile Work Preview - visible only on small screens */}
          <div className="lg:hidden mt-24 w-full grid grid-cols-2 gap-4">
             {videos.slice(0, 2).map((v, i) => (
                <div key={i} className="aspect-[9/16] rounded-3xl overflow-hidden border-4 border-dark/10 shadow-xl">
                   <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={v} type="video/mp4" />
                  </video>
                </div>
             ))}
          </div>

        </div>
      </div>

      {/* Extreme branding footer inside the CTA */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center opacity-10 pointer-events-none overflow-hidden whitespace-nowrap">
        <div className="text-[15vw] font-black uppercase tracking-tighter text-dark">
          SMART DIGITAL • MEDIA PRODUCTION • SMART DIGITAL • MEDIA PRODUCTION
        </div>
      </div>
    </section>
  );
};

export default CTA;
