
import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-amber-500 p-1.5 rounded-lg">
                <Dumbbell className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold tracking-tighter heading-font">
                  DUMBBELL <span className="text-amber-500">BEE</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-500">Fitness & Wellness</span>
              </div>
            </div>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Level up your life with Pune's premier fitness center. High-quality training, expert coaches, and premium facilities in Viman Nagar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-amber-500 hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-amber-500 hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-amber-500 hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-amber-500 hover:text-black transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase heading-font mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-zinc-500 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#facilities" className="text-zinc-500 hover:text-amber-500 transition-colors">Our Facilities</a></li>
              <li><a href="#classes" className="text-zinc-500 hover:text-amber-500 transition-colors">Training Programs</a></li>
              <li><a href="#gallery" className="text-zinc-500 hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-zinc-500 hover:text-amber-500 transition-colors">Free Trial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase heading-font mb-8 text-white">Our Programs</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Personal Training</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Strength Building</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Fat Loss Journey</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Yoga & Wellness</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Sauna Sessions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase heading-font mb-8 text-white">Contact Us</h4>
            <div className="space-y-4 text-zinc-500 text-sm">
              <p>Opp. Hotel Brookside, Sainik Nagar, Viman Nagar, Pune, Maharashtra 411014</p>
              <p className="text-zinc-100 font-bold">+91 90213 12105</p>
              <p>dumbbellbee@gmail.com</p>
              <div className="pt-4">
                <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl">
                  <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-1 italic">Join the Buzz</p>
                  <p className="text-xs text-zinc-300">Subscribe for fitness tips & offers.</p>
                  <div className="flex mt-3">
                    <input type="text" placeholder="Email" className="bg-black border border-zinc-800 px-3 py-2 rounded-l-lg outline-none w-full text-xs" />
                    <button className="bg-amber-500 text-black px-3 py-2 rounded-r-lg font-bold text-xs uppercase">GO</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-zinc-600 uppercase tracking-widest">
          <p>© 2024 Dumbbell Bee Fitness GYM. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
