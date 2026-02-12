
import React, { useEffect, useState, useRef } from 'react';

const FullWidthShowcase: React.FC = () => {
  const showcaseVideos = [
    { url: "/car wrap 1.mp4", label: "Lifestyle" },
    { url: "/cupra final video.mp4", label: "Urban" },
    { url: "/PF 2025.mp4", label: "Automotive" },
    { url: "/final ig smart.mp4", label: "Business" },
    { url: "/mercedes.mp4", label: "Tech" },
    { url: "/car wrap 1.mp4", label: "Creative" },
    { url: "/cupra final video.mp4", label: "Premium" },
    { url: "/final ig smart.mp4", label: "Vibe" }
  ];

  const [translateX, setTranslateX] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when top enters bottom, 1 when bottom leaves top
      const scrollStart = rect.top - windowHeight;
      const scrollEnd = rect.bottom;
      const totalScrollHeight = windowHeight + rect.height;
      
      const progress = Math.min(Math.max(-scrollStart / totalScrollHeight, 0), 1);
      
      // Map progress (0 to 1) to translation (e.g., 0px to -800px)
      // We want them to move from right to left
      const maxMove = 1200; // Total horizontal travel in pixels
      setTranslateX(progress * maxMove);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-dark overflow-hidden py-32 border-b border-white/5 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-brand/10 -z-10"></div>
      
      <div 
        className="flex gap-6 px-12 will-change-transform"
        style={{ 
          transform: `translateX(calc(10% - ${translateX}px))`,
          transition: 'transform 0.1s ease-out' 
        }}
      >
        {showcaseVideos.map((video, idx) => (
          <div 
            key={idx} 
            className="relative flex-none w-[260px] md:w-[320px] aspect-[9/19] group overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border-[8px] border-white/10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {/* iPhone Notch Area Simulation */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black z-20 rounded-b-2xl border-x border-b border-white/5"></div>

            {/* Background Video */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            >
              <source src={video.url} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>

            {/* Label Overlay */}
            <div className="absolute bottom-10 left-0 right-0 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 px-4">
              <span className="inline-block px-5 py-2 bg-brand text-dark font-black text-[10px] uppercase tracking-widest rounded-full shadow-xl shadow-brand/30">
                {video.label}
              </span>
            </div>

            {/* Neon Border Glow */}
            <div className="absolute inset-0 border-2 border-brand/0 group-hover:border-brand/40 rounded-[2rem] md:rounded-[3rem] transition-all duration-500 pointer-events-none shadow-[inset_0_0_40px_rgba(199,247,21,0.05)] group-hover:shadow-[inset_0_0_60px_rgba(199,247,21,0.15)]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FullWidthShowcase;
