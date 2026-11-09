import React from 'react';
import { OceanCanvas3D } from './OceanCanvas3D';
import { ArrowRight, Compass, Sparkles, Shield, Zap, Droplets } from 'lucide-react';

interface HeroProps {
  onOpenScientificModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenScientificModal }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#061B2B] via-[#081522] to-[#061B2B]">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-turquoise/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-seagreen/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Concept Badge */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ocean-surface/90 border border-turquoise/30 backdrop-blur-md shadow-lg shadow-black/20 text-xs font-mono text-turquoise">
            <Sparkles className="w-3.5 h-3.5 text-turquoise animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              Archipelago Clean Energy Frontier • Concept & Research
            </span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white">
            WHAT IF THE OCEAN <br />
            <span className="bg-gradient-to-r from-turquoise via-seagreen-light to-white bg-clip-text text-transparent">
              POWERED AN ISLAND?
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-softgrey/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Discover a new energy future for Lakshadweep through wind, waves and intelligent renewable technology.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#hybrid"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-turquoise to-seagreen hover:from-turquoise-light hover:to-seagreen-light text-[#061B2B] font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(33,212,196,0.4)] hover:shadow-[0_0_40px_rgba(33,212,196,0.7)] hover:scale-[1.02]"
            >
              <span>EXPLORE OUR VISION</span>
              <ArrowRight className="w-4 h-4 text-[#061B2B]" />
            </a>

            <a
              href="#dashboard"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-ocean-midnight/80 hover:bg-ocean-surface/90 border border-turquoise/30 hover:border-turquoise text-white font-semibold text-sm tracking-wide transition-all backdrop-blur-md hover:scale-[1.02]"
            >
              <span>VIEW ENERGY POTENTIAL</span>
              <Zap className="w-4 h-4 text-turquoise" />
            </a>
          </div>
        </div>

        {/* 3D Cinematic Visual Centerpiece */}
        <div className="mt-4 mb-10 w-full relative">
          <OceanCanvas3D />
        </div>

        {/* Real-world Energy Telemetry Ticker */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
          
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-turquoise/30 transition-all">
            <div className="flex items-center justify-between text-softgrey/60 text-xs font-mono mb-1">
              <span>ARCHIPELAGO ISLANDS</span>
              <Compass className="w-3.5 h-3.5 text-turquoise" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">36</div>
            <div className="text-[11px] text-softgrey/70 mt-1">10 Inhabited Atolls & Coral Rings</div>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-turquoise/30 transition-all">
            <div className="flex items-center justify-between text-softgrey/60 text-xs font-mono mb-1">
              <span>HISTORICAL DIESEL RELIANCE</span>
              <Droplets className="w-3.5 h-3.5 text-rose-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-rose-300">&gt; 88%</div>
            <div className="text-[11px] text-softgrey/70 mt-1">~16M Liters Shipped Annually</div>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-turquoise/30 transition-all">
            <div className="flex items-center justify-between text-softgrey/60 text-xs font-mono mb-1">
              <span>WESTERN WAVE POWER</span>
              <Zap className="w-3.5 h-3.5 text-turquoise" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-turquoise">15–20 <span className="text-sm font-normal text-softgrey/80">kW/m</span></div>
            <div className="text-[11px] text-softgrey/70 mt-1">Verified NIOT Research Data</div>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-turquoise/30 transition-all">
            <div className="flex items-center justify-between text-softgrey/60 text-xs font-mono mb-1">
              <span>NET-ZERO ATTAINMENT</span>
              <Shield className="w-3.5 h-3.5 text-seagreen" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-seagreen">100%</div>
            <div className="text-[11px] text-softgrey/70 mt-1">Tri-Resource Hybrid Target 2035</div>
          </div>

        </div>

      </div>

      {/* Decorative Wave Divider at Section Bottom */}
      <div className="w-full overflow-hidden leading-none mt-16 text-[#081522] opacity-80 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-current">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
};
