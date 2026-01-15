
import React from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const fullAddress = "Dumbbell Bee Fitness GYM, Level II, 44/1, opp. Hotel Brookside, Sainik Nagar, Clover Park, Viman Nagar, Pune, Maharashtra 411014";
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <div className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm italic">Get In Touch</h3>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">START TODAY</h2>
              <p className="text-zinc-400 text-lg">Visit us in Viman Nagar or give us a call to book your free trial session.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase heading-font mb-2">Location</h4>
                  <p className="text-zinc-400 max-w-sm leading-relaxed">
                    {fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase heading-font mb-2">Phone</h4>
                  <a href="tel:+919021312105" className="text-zinc-100 font-bold text-2xl hover:text-amber-500 transition-colors tracking-tight">+91 90213 12105</a>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase heading-font mb-2">Hours</h4>
                  <div className="space-y-1 text-zinc-400">
                    <p><span className="text-zinc-200 font-bold">Daily:</span> Closes at 10 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Link - Fixed CTA hiding behind text */}
            <div className="relative rounded-[2rem] overflow-hidden h-64 border-2 border-zinc-800 group shadow-xl shadow-amber-500/5">
              <img 
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800" 
                alt="Map Background"
                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
                 <div className="bg-amber-500 text-black p-3 rounded-full mb-4 shadow-lg">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <a 
                   href={mapLink} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="relative z-30 bg-amber-500 hover:bg-white text-black px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-amber-500/40 transform hover:scale-110 active:scale-95"
                 >
                   View on Google Maps
                 </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-10 md:p-16 rounded-[3rem] shadow-2xl">
            <h3 className="text-2xl font-black heading-font uppercase italic mb-8">Quick Inquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-zinc-500 px-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-amber-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-zinc-500 px-1">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-amber-500 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-zinc-500 px-1">Email (Optional)</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-amber-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-zinc-500 px-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your fitness goals..." className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 focus:border-amber-500 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black py-5 rounded-xl font-black uppercase text-lg tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-500/10">
                SEND MESSAGE <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
