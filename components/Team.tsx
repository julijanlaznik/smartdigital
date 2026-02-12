
import React, { useState, useRef, useEffect } from 'react';
import { Instagram, Linkedin, Camera, Zap, Target } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: 'Julijan Laznik',
    role: 'Creativity, DOP',
    specialty: 'Visual Lead',
    image: '/julijan.jpg'
  },
  {
    name: 'Matyáš Hartl',
    role: 'Communication, Strategy',
    specialty: 'Growth',
    image: '/maytas1.jpg'
  },
  {
    name: 'Marek Panoch',
    role: 'Photo, Automatization',
    specialty: 'Tech Ops',
    image: '/mara2.jpg'
  }
];

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[3/4] group perspective-1000 cursor-none"
      style={{ perspective: '1500px' }}
    >
      <div 
        className="w-full h-full relative transition-transform duration-200 ease-out preserve-3d"
        style={{ 
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Main Card Body */}
        <div className="absolute inset-0 bg-card rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl overflow-hidden translate-z-20">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
          
          {/* Neon Border Glow */}
          <div className="absolute inset-0 border-2 border-brand/0 group-hover:border-brand/60 rounded-[2.5rem] transition-all duration-500 z-30"></div>
        </div>

        {/* Content Floating in Front (Translate Z) */}
        <div 
          className="absolute inset-0 flex flex-col justify-end p-8 z-40 pointer-events-none"
          style={{ transform: 'translateZ(60px)' }}
        >
          <div className="overflow-hidden mb-2">
            <h4 className="text-3xl font-outfit font-black uppercase tracking-tighter translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              {member.name}
            </h4>
          </div>
          <div className="overflow-hidden">
            <p className="text-brand font-black text-xs uppercase tracking-[0.3em] translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">
              {member.role}
            </p>
          </div>
          
          <div className="mt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 pointer-events-auto">
            <button className="p-2 bg-white/5 rounded-full hover:bg-brand hover:text-dark transition-all">
              <Instagram size={16} />
            </button>
            <button className="p-2 bg-white/5 rounded-full hover:bg-brand hover:text-dark transition-all">
              <Linkedin size={16} />
            </button>
          </div>
        </div>

        {/* Floating Specialty Badge (Behind everything but with high Z) */}
        <div 
          className="absolute -top-4 -right-4 px-4 py-2 bg-brand text-dark font-black text-[10px] uppercase tracking-widest rounded-full z-50 shadow-xl"
          style={{ transform: 'translateZ(80px)' }}
        >
          {member.specialty}
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-dark relative overflow-hidden">
      {/* 3D Background Decoration */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-7xl font-outfit font-black tracking-tighter uppercase leading-none">
              KDO JE <br />
              <span className="text-white/20">SMART DIGITAL?</span>
            </h3>
          </div>
          <div className="hidden md:block pb-4">
            <p className="text-white/40 text-sm font-medium tracking-widest uppercase italic">
              — Parta, se kterou budete chtít tvořit
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {team.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
