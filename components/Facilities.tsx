
import React from 'react';
import { ShieldCheck, Flame, Music, Activity, Wind, Sparkles } from 'lucide-react';

const Facilities: React.FC = () => {
  const items = [
    {
      icon: <Flame className="w-10 h-10" />,
      title: "PREMIUM SAUNA",
      desc: "Relax and detoxify your body in our premium temperature-controlled sauna units."
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "PRO EQUIPMENT",
      desc: "Top-of-the-line strength and cardio machines for maximum muscle engagement."
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "HYGIENIC SPACE",
      desc: "Regular sanitation and cleaning protocols to ensure a safe workout environment."
    },
    {
      icon: <Music className="w-10 h-10" />,
      title: "ELITE SOUND",
      desc: "Energetic, bass-heavy playlists curated to keep your motivation high."
    },
    {
      icon: <Wind className="w-10 h-10" />,
      title: "VENTILATION",
      desc: "Spacious layout with modern air filtration systems for fresh breathing."
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "LOCKER ROOMS",
      desc: "Secure storage and clean shower facilities for your convenience."
    }
  ];

  return (
    <div className="bg-zinc-900/30 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h3 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm italic">Elite Amenities</h3>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">PREMIUM FACILITIES</h2>
          <p className="text-zinc-500 text-lg">Every detail is optimized to provide you with the most effective 90-minute fitness session.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group relative bg-zinc-900 border border-zinc-800 p-10 rounded-3xl hover:border-amber-500 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-amber-500/10 transition-colors"></div>
              
              <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform origin-left">
                {item.icon}
              </div>
              
              <h4 className="text-2xl font-bold heading-font mb-4 italic uppercase">{item.title}</h4>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              
              <div className="mt-8 h-1 w-12 bg-zinc-800 group-hover:w-full group-hover:bg-amber-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
