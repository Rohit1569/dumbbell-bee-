
import React from 'react';
import { Users, User, Zap, Timer, Flame } from 'lucide-react';

const Classes: React.FC = () => {
  const programs = [
    {
      title: "Dumbbell Zone",
      category: "Strength Training",
      image: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?auto=format&fit=crop&q=80&w=800",
      icon: <User className="w-5 h-5" />,
      price: "Pure Power"
    },
    {
      title: "Functional Lab",
      category: "Group HIIT",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
      icon: <Users className="w-5 h-5" />,
      price: "Energetic"
    },
    {
      title: "Premium Sauna",
      category: "Recovery & Wellness",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
      icon: <Flame className="w-5 h-5" />,
      price: "Elite Spa"
    }
  ];

  return (
    <div className="py-24 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <h3 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm italic">Training Programs</h3>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">TRANSFORM YOURSELF</h2>
            <p className="text-zinc-400 text-lg">We offer a variety of specialized classes designed to push your boundaries and deliver visible results.</p>
          </div>
          <a href="#contact" className="px-8 py-4 border-2 border-amber-500 text-amber-500 font-bold uppercase hover:bg-amber-500 hover:text-black transition-all rounded-full tracking-widest text-sm italic">
            View All Programs
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, idx) => (
            <div key={idx} className="group overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-zinc-800 transition-all hover:border-amber-500/50 shadow-2xl">
              <div className="relative h-64 overflow-hidden bg-zinc-800">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute top-4 left-4 bg-amber-500 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest z-10 shadow-lg">
                  {p.price}
                </div>
              </div>
              <div className="p-10 space-y-6">
                <div className="flex items-center gap-2 text-zinc-500 uppercase tracking-[0.2em] font-bold text-xs">
                  {p.icon}
                  {p.category}
                </div>
                <h4 className="text-3xl font-black heading-font italic uppercase tracking-tight text-white">{p.title}</h4>
                <div className="flex items-center gap-4 text-zinc-400 text-sm">
                  <div className="flex items-center gap-1"><Timer className="w-4 h-4 text-amber-500" /> 60-90 Min</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
                  <div className="uppercase font-bold tracking-tighter">Daily Batches</div>
                </div>
                <button className="w-full py-4 bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-100 font-bold uppercase rounded-2xl transition-all shadow-md group-hover:shadow-amber-500/20">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
