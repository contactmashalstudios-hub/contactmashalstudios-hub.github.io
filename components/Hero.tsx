import React from 'react';
import { ArrowRight, MessageCircle, BarChart3, Globe2, Sparkles, ExternalLink } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute top-[-5%] right-[-5%] lg:top-[-10%] lg:right-[-10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-indigo-200/40 rounded-full blob-bg animate-pulse"></div>
      <div className="absolute bottom-[-5%] left-[-5%] lg:bottom-[-10%] lg:left-[-10%] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-blue-100/50 rounded-full blob-bg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Portrait Section */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
              <div className="hidden sm:block absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-24 h-24 lg:w-32 lg:h-32 bg-indigo-600 rounded-3xl rotate-12 opacity-10 animate-pulse"></div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 w-16 h-16 lg:w-24 lg:h-24 border-4 border-zinc-200 rounded-full opacity-30"></div>
              
              <div className="relative z-10 aspect-square sm:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] bg-zinc-100 border-[8px] lg:border-[12px] border-white animate-float">
                <img
                  src="/images/Mainimage.png"
                  alt="Mashal - Website & Meta Ads Expert"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Floating Skill Badges */}
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6 p-2 lg:p-3 glass-panel rounded-xl lg:rounded-2xl shadow-xl flex items-center gap-2 lg:gap-3 animate-float" style={{ animationDelay: '-1s' }}>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-600 rounded-lg lg:rounded-xl flex items-center justify-center text-white">
                    <BarChart3 className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <p className="text-[8px] lg:text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Specialist</p>
                    <p className="text-xs lg:text-sm font-bold text-zinc-900 leading-none mt-1">Meta Ads</p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 p-2 lg:p-3 glass-panel rounded-xl lg:rounded-2xl shadow-xl flex items-center gap-2 lg:gap-3 animate-float" style={{ animationDelay: '-2s' }}>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-lg lg:rounded-xl flex items-center justify-center text-indigo-600 border border-zinc-100">
                    <Globe2 className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <p className="text-[8px] lg:text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Developer</p>
                    <p className="text-xs lg:text-sm font-bold text-zinc-900 leading-none mt-1">Web Design</p>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 bg-white p-2 lg:p-4 rounded-2xl lg:rounded-3xl shadow-2xl flex flex-col items-center gap-1 border border-zinc-100">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                <span className="text-[8px] lg:text-[10px] font-black text-zinc-900 uppercase writing-mode-vertical">Online Now</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-indigo-50 border border-indigo-100 rounded-full">
              <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-indigo-600" />
              <span className="text-[10px] lg:text-sm font-bold tracking-tight text-indigo-600 uppercase">Open for new projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]">
              I am <span className="text-indigo-600">Mashal</span>,<br />
              <span className="text-zinc-400">Website & Meta Ads Expert.</span>
            </h1>
            
            <p className="max-w-xl mx-auto lg:mx-0 text-lg lg:text-2xl text-zinc-500 leading-relaxed font-medium">
              Helping brands scale through <span className="text-zinc-900">performance marketing</span> and <span className="text-zinc-900">high-converting web design</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-4 pt-4">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 lg:px-10 lg:py-5 bg-zinc-900 text-white rounded-2xl font-bold transition-all hover:bg-zinc-800 hover:shadow-2xl hover:scale-105 active:scale-95 group"
              >
                Let's Talk
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a 
                href="https://www.fiverr.com/s/5rZpYav" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 lg:px-10 lg:py-5 bg-emerald-600 text-white rounded-2xl font-bold transition-all hover:bg-emerald-700 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Order on Fiverr
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/923045571667" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 lg:px-10 lg:py-5 glass-panel text-zinc-900 rounded-2xl font-bold transition-all hover:bg-white hover:shadow-xl active:scale-95"
              >
                <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" />
                WhatsApp
              </a>
            </div>

            <div className="pt-8 lg:pt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 border-t border-zinc-200">
              <div className="space-y-1">
                <p className="text-2xl lg:text-3xl font-extrabold text-zinc-900">98%</p>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Satisfaction</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl lg:text-3xl font-extrabold text-zinc-900">3x+</p>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Avg. ROAS</p>
              </div>
              <div className="hidden sm:block space-y-1">
                <p className="text-2xl lg:text-3xl font-extrabold text-zinc-900">Quick</p>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Turnaround</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
};

export default Hero;
