
import React from 'react';
import { Star } from 'lucide-react';

const TrustSignals: React.FC = () => {
  const platforms = [
    { name: 'Google', rating: '4.8/5', reviews: '100+ Reviews' },
    { name: 'Justdial', rating: '4.7/5', reviews: '319 Votes' },
    { name: 'FITPASS', rating: '4.9/5', reviews: 'Top Rated' }
  ];

  return (
    <div className="bg-zinc-900/50 py-12 border-y border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm w-full text-center lg:w-auto">Trusted on platforms like</p>
          {platforms.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-1 group transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-bold heading-font">{p.name}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < 4 ? 'text-amber-500 fill-amber-500' : 'text-zinc-600 fill-zinc-600'}`} />
                  ))}
                </div>
              </div>
              <div className="flex gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                <span className="text-amber-500">{p.rating}</span>
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-400">{p.reviews}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;
