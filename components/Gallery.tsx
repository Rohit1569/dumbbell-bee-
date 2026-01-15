
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { 
      url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1200", 
      span: "md:col-span-2 md:row-span-2",
      label: "Strength Training Floor"
    },
    { 
      url: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?auto=format&fit=crop&q=80&w=800", 
      span: "",
      label: "Modern Dumbbell Rack"
    },
    { 
      url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800", 
      span: "",
      label: "Premium Sauna"
    },
    { 
      url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800", 
      span: "md:col-span-2",
      label: "Functional Training Rig"
    },
    { 
      url: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=800", 
      span: "",
      label: "Cardio Excellence"
    },
    { 
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", 
      span: "",
      label: "Yoga & Wellness"
    },
    { 
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800", 
      span: "",
      label: "Core Intensity"
    },
    { 
      url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800", 
      span: "",
      label: "Expert Coaching"
    },
  ];

  return (
    <div className="py-24 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-6 mb-16">
          <div className="space-y-3">
            <h3 className="text-amber-500 font-bold uppercase tracking-[0.4em] text-xs italic">The Ambience</h3>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none text-white">THE GALLERY</h2>
          </div>
          <div className="max-w-xs">
            <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] leading-relaxed border-l-2 border-amber-500/30 pl-4">
              Premium environment, high-energy music, and state-of-the-art equipment designed for your best 90-minute session in Viman Nagar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
          {images.map((img, idx) => (
            <div key={idx} className={`${img.span} group relative overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900 shadow-xl transition-all duration-500 hover:shadow-amber-500/5 hover:border-zinc-700`}>
              {/* Brightening Glow Overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
              
              {/* Signature Amber Tint on Hover */}
              <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none"></div>
              
              {/* Image with subtle scaling and brightness increase */}
              <img 
                src={img.url} 
                alt={img.label} 
                className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105 group-hover:brightness-110" 
              />
              
              {/* Gradient overlay that lightens slightly on hover to "reveal" the image more clearly */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-700 z-20"></div>
              
              {/* Label Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-30">
                <span className="inline-block px-3 py-1 bg-amber-500 text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-3 shadow-lg">
                  Bee Fitness
                </span>
                <h4 className="text-white font-bold uppercase tracking-widest text-lg md:text-xl italic leading-tight drop-shadow-md">
                  {img.label}
                </h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=dumbbell+bee+fitness+gym+pune+photos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-zinc-500 hover:text-amber-500 font-black uppercase tracking-[0.2em] text-xs transition-colors group"
          >
            See More on Google <div className="w-12 h-[1px] bg-zinc-800 group-hover:bg-amber-500 transition-all group-hover:w-20"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
