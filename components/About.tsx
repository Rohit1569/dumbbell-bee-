
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    "Hygienic Environment & Sanitation",
    "High-Quality Modern Equipment",
    "Premium Sauna Facilities",
    "Friendly & Expert Certified Staff",
    "Energetic Music & Ambience",
    "Tailored Fitness Programs"
  ];

  return (
    <div className="py-24 md:py-32 overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-zinc-800 group shadow-2xl bg-zinc-900">
              <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200" 
                alt="Dumbbell Bee Fitness Interior"
                className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            
            {/* Experience Floating Card */}
            <div className="absolute -bottom-10 -right-6 md:right-12 bg-amber-500 text-black p-10 rounded-[2.5rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 z-20">
              <div className="text-6xl font-black heading-font leading-none mb-2">#1</div>
              <div className="text-xl font-black leading-tight uppercase tracking-tighter italic">
                RATED GYM IN<br/>VIMAN NAGAR
              </div>
            </div>

            {/* Accent Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-amber-500/20 rounded-tl-[4rem] pointer-events-none"></div>
          </div>

          {/* Text Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-amber-500 font-bold uppercase tracking-[0.4em] text-xs italic">Established Excellence</h3>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] italic text-white">
                YOUR ULTIMATE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">FITNESS HUB</span>
              </h2>
            </div>
            
            <p className="text-zinc-400 text-xl leading-relaxed font-medium">
              Dumbbell Bee Fitness GYM is Pune's premium destination for high-intensity training and recovery. 
              We've created a space where elite equipment meets an electric atmosphere.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/50 hover:border-amber-500/40 transition-all group">
                  <div className="bg-amber-500/10 p-2 rounded-lg group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 group-hover:text-black" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a href="#contact" className="inline-flex items-center gap-4 px-12 py-6 bg-amber-500 text-black font-black uppercase rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20">
                Claim Your Free Day Pass
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
