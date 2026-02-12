
import React, { useState, useRef } from 'react';
import { PROJECTS } from '../constants';
import { ContentType } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ContentType | 'All'>('All');
  const categories: (ContentType | 'All')[] = ['All', 'Reels', 'Commercial', 'Automotive', 'Brand Content', 'Photo'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

  return (
    <section id="portfolio" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-brand font-outfit text-sm font-black tracking-widest uppercase mb-4 italic underline decoration-brand/30 underline-offset-8">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-outfit font-black leading-tight">VÝSLEDKY <br />MÍSTO SLOV.</h3>
          </div>

          {/* Filter UI */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase transition-all ${filter === cat ? 'bg-brand text-dark' : 'bg-white/5 border border-white/10 hover:border-brand/50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className={`relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border-2 ${isHovered ? 'border-brand scale-[1.02]' : 'border-transparent'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${project.isVertical ? 'aspect-[9/16]' : 'aspect-video'} relative bg-white/5`}>
        {/* Background Image / Placeholder */}
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110 opacity-0' : 'opacity-100'}`}
        />
        
        {/* Video Overlay on Hover */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        )}

        {/* Content Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent flex flex-col justify-end p-8 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
          <span className="text-brand text-[10px] font-black uppercase tracking-[0.2em] mb-1">{project.type}</span>
          <h4 className="text-2xl font-outfit font-bold">{project.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
