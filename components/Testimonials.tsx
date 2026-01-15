
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Rahul Verma",
      role: "Member for 2 Years",
      text: "Best gym in Viman Nagar! The ambience and lighting are amazing. The equipment is modern and very well maintained. The sauna is the icing on the cake after a heavy workout.",
      rating: 5
    },
    {
      name: "Sneha Kapoor",
      role: "Member for 6 Months",
      text: "Friendly staff and a really energetic atmosphere. I love the music playlists, they really help me push through my HIIT sessions. Very hygienic place.",
      rating: 5
    },
    {
      name: "Amit Deshmukh",
      role: "Personal Training Client",
      text: "Highly recommended for serious fitness enthusiasts. The trainers here are very knowledgeable and the variety of classes is impressive. Great crowd too.",
      rating: 5
    }
  ];

  return (
    <div className="bg-zinc-950 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-zinc-900/20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h3 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm italic">Success Stories</h3>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">PEOPLE ❤️ US</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-zinc-900/50 border border-zinc-800/80 p-10 rounded-[2rem] hover:bg-zinc-900 transition-all group">
              <div className="mb-6 flex justify-between items-start">
                <Quote className="w-10 h-10 text-amber-500/20 group-hover:text-amber-500 transition-colors" />
                <div className="flex gap-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed italic mb-8">"{r.text}"</p>
              <div className="pt-6 border-t border-zinc-800">
                <div className="font-bold text-xl heading-font uppercase text-white tracking-wide">{r.name}</div>
                <div className="text-amber-500/80 text-xs font-bold uppercase tracking-widest mt-1">{r.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-50">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 grayscale invert" />
          <div className="text-2xl font-black heading-font text-white italic">JUSTDIAL</div>
          <div className="text-2xl font-black heading-font text-white italic">FITPASS</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
