
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import BeeToGymAnimation from './BeeToGymAnimation';

const Hero: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showTour, setShowTour] = useState(false);

  // Auto-reveal safety trigger (shorter delay for better experience)
  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with High-End Overlay */}
      <div 
        className={`absolute inset-0 z-0 transition-all duration-[2000ms] ease-out ${
          isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2070')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Animation Overlay Layer */}
      <BeeToGymAnimation onBlast={() => setIsRevealed(true)} />

      {/* Website Hero Content */}
      <div className={`container mx-auto px-4 relative z-20 pt-20 transition-all duration-1000 delay-300 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2 text-amber-500 font-bold text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Pune's Premier Fitness Destination
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] italic text-white drop-shadow-2xl">
            BE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">LIMITLESS</span> SELF
          </h1>
          
          <p className="text-zinc-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
            Elevate your training at <span className="text-amber-500 font-bold">Dumbbell Bee Fitness GYM</span>. 
            Experience an elite environment in Viman Nagar designed for true transformation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-amber-500 hover:bg-white text-black px-12 py-6 rounded-full font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20 uppercase tracking-tight"
            >
              Start Free Trial <ArrowRight className="w-6 h-6" />
            </a>
            <button 
              onClick={() => setShowTour(true)}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-12 py-6 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all group"
            >
              <div className="bg-amber-500 rounded-full p-2 group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-black fill-current translate-x-0.5" />
              </div>
              <span className="uppercase tracking-tight text-white">Virtual Tour</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 md:pt-24 border-t border-zinc-800/40">
            <div className="space-y-1">
              <div className="text-4xl md:text-6xl font-black heading-font text-white italic">4.8+</div>
              <div className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black">Google Rated</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl md:text-6xl font-black heading-font text-white italic">Premium</div>
              <div className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black">Sauna Facilities</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl md:text-6xl font-black heading-font text-white italic">Open</div>
              <div className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black">Daily till 10PM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showTour && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-4 animate-in fade-in duration-300">
          <button 
            onClick={() => setShowTour(false)}
            className="absolute top-8 right-8 text-white hover:text-amber-500 transition-colors z-[110] bg-zinc-900/50 rounded-full p-3 backdrop-blur-md"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-6xl aspect-video bg-zinc-900 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(251,191,36,0.15)] border border-white/5">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-man-training-with-dumbbells-in-the-gym-22874-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex items-center justify-center text-center p-12">
              <div className="space-y-4 max-w-2xl">
                <h3 className="text-4xl md:text-7xl font-black uppercase italic text-amber-500 tracking-tighter">THE HIVE EXPERIENCE</h3>
                <p className="text-white/90 text-lg md:text-2xl font-bold uppercase tracking-widest border-y border-white/20 py-4">State-of-the-Art Training Environment</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Down Scroll Indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-black group-hover:text-amber-500 transition-colors">Explore</span>
          <div className="w-1 h-16 bg-zinc-900 rounded-full overflow-hidden">
            <div className="w-full h-1/2 bg-amber-500 animate-[bounce_2s_infinite]"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
