import React from 'react';
import { Wind, Waves, Compass, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenScientificModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenScientificModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05131f] text-white border-t border-turquoise/15 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-turquoise/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-turquoise/20 border border-turquoise text-turquoise">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-turquoise">
                  <path d="M2 17C4.5 17 6 15 8.5 15C11 15 12.5 17 15 17C17.5 17 19 15 22 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 20C4.5 20 6 18 8.5 18C11 18 12.5 20 15 20C17.5 20 19 18 22 18" stroke="#36BFA6" strokeWidth="1.6" strokeLinecap="round" opacity="0.8"/>
                  <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                GREEN <span className="text-turquoise">LAKSHADWEEP</span>
              </span>
            </div>

            <p className="text-xs font-mono text-turquoise/90 uppercase tracking-widest">
              "Powering Islands. Protecting Oceans."
            </p>

            <p className="text-xs text-softgrey/70 leading-relaxed max-w-sm">
              An innovative renewable energy startup concept engineered to eliminate diesel dependence across the Lakshadweep archipelago through marinized wind, ocean wave, solar PV, and battery microgrids.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenScientificModal}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-ocean-surface hover:bg-ocean-deep border border-turquoise/30 text-xs text-turquoise transition-all font-mono"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Research Methodology & Citations</span>
              </button>
            </div>
          </div>

          {/* Column 2: Architecture & Technologies */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">
              Marine Technologies
            </div>
            <ul className="space-y-2 text-xs text-softgrey/70">
              <li><a href="#wind" className="hover:text-turquoise transition-colors">Offshore Wind Micro-Siting</a></li>
              <li><a href="#wave" className="hover:text-turquoise transition-colors">Point Absorber Buoys (WEC)</a></li>
              <li><a href="#wave" className="hover:text-turquoise transition-colors">Oscillating Water Columns</a></li>
              <li><a href="#tidal" className="hover:text-turquoise transition-colors">Tidal Hydrokinetics & ADCP</a></li>
              <li><a href="#hybrid" className="hover:text-turquoise transition-colors">Floating Lagoon Solar PV</a></li>
              <li><a href="#hybrid" className="hover:text-turquoise transition-colors">Lithium Iron Phosphate BESS</a></li>
            </ul>
          </div>

          {/* Column 3: Tools & Calculators */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">
              Calculators & Maps
            </div>
            <ul className="space-y-2 text-xs text-softgrey/70">
              <li><a href="#wind-calculator" className="hover:text-turquoise transition-colors">Wind Energy Calculator</a></li>
              <li><a href="#wave-calculator" className="hover:text-turquoise transition-colors">Wave Energy Calculator</a></li>
              <li><a href="#dashboard" className="hover:text-turquoise transition-colors">Interactive 24h Dashboard</a></li>
              <li><a href="#explorer" className="hover:text-turquoise transition-colors">Archipelago Geospatial Map</a></li>
              <li><a href="#challenge" className="hover:text-turquoise transition-colors">Diesel Vulnerability Audit</a></li>
              <li><a href="#business" className="hover:text-turquoise transition-colors">LCOE Unit Economics</a></li>
            </ul>
          </div>

          {/* Column 4: Archipelago Inhabited Atolls */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">
              Target Atolls
            </div>
            <ul className="space-y-2 text-xs text-softgrey/70">
              <li><a href="#explorer" className="hover:text-turquoise transition-colors">Kavaratti (Capital)</a></li>
              <li><a href="#explorer" className="hover:text-turquoise transition-colors">Agatti (Airport Hub)</a></li>
              <li><a href="#explorer" className="hover:text-turquoise transition-colors">Minicoy (Southern Channel)</a></li>
              <li><a href="#explorer" className="hover:text-turquoise transition-colors">Kadmat & Amini</a></li>
              <li><a href="#explorer" className="hover:text-turquoise transition-colors">Kalpeni & Bangaram</a></li>
              <li><a href="#vision" className="hover:text-turquoise transition-colors">Executive Partnership</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-softgrey/50 font-mono">
          <div>
            © {new Date().getFullYear()} GREEN LAKSHADWEEP STARTUP INITIATIVE • ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenScientificModal}
              className="hover:text-turquoise transition-colors"
            >
              Academic Citations
            </button>
            <span className="text-white/20">•</span>
            <span>Simulated Research Concept</span>
            <span className="text-white/20">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-turquoise hover:underline"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
