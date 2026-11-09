import React, { useState, useEffect } from 'react';
import { 
  Wind, 
  Waves, 
  Compass, 
  BarChart3, 
  Layers, 
  BookOpen, 
  Menu, 
  X, 
  Calculator,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenScientificModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenScientificModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorMenuOpen, setCalculatorMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Challenge', href: '#challenge', icon: Layers },
    { name: 'Wind', href: '#wind', icon: Wind },
    { name: 'Wave', href: '#wave', icon: Waves },
    { name: 'Tidal', href: '#tidal', icon: Waves },
    { name: 'Hybrid System', href: '#hybrid', icon: Layers },
    { name: 'Live Dashboard', href: '#dashboard', icon: BarChart3 },
    { name: 'Archipelago Explorer', href: '#explorer', icon: Compass },
    { name: 'Business Model', href: '#business', icon: BookOpen },
    { name: 'Vision', href: '#vision', icon: ShieldCheck },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#061B2B]/90 backdrop-blur-xl border-b border-turquoise/15 py-3 shadow-2xl shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-turquoise/20 via-seagreen/10 to-ocean-midnight border border-turquoise/40 group-hover:border-turquoise transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(33,212,196,0.4)]">
              <div className="w-5 h-5 relative">
                {/* Custom Wave & Turbine SVG icon */}
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-turquoise">
                  <path d="M2 17C4.5 17 6 15 8.5 15C11 15 12.5 17 15 17C17.5 17 19 15 22 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 20C4.5 20 6 18 8.5 18C11 18 12.5 20 15 20C17.5 20 19 18 22 18" stroke="#36BFA6" strokeWidth="1.6" strokeLinecap="round" opacity="0.8"/>
                  <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2V4M12 10V12M7.5 4.5L9 6M15 9.5L16.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-turquoise transition-colors">
                GREEN <span className="text-turquoise">LAKSHADWEEP</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-mono text-softgrey/60 hidden sm:block">
                Powering Islands. Protecting Oceans.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 text-xs font-medium text-softgrey/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg hover:text-turquoise hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions & Scientific Data Trigger */}
          <div className="hidden md:flex items-center space-x-2.5">
            {/* Calculators Jump Menu */}
            <div className="relative">
              <button
                onClick={() => setCalculatorMenuOpen(!calculatorMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-ocean-surface/80 hover:bg-ocean-surface border border-turquoise/20 text-xs text-turquoise hover:text-white transition-all"
              >
                <Calculator className="w-3.5 h-3.5 text-turquoise" />
                <span>Calculators</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${calculatorMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {calculatorMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-52 rounded-2xl bg-ocean-midnight/95 backdrop-blur-2xl border border-turquoise/30 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2"
                  onClick={() => setCalculatorMenuOpen(false)}
                >
                  <a 
                    href="#wind-calculator" 
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-softgrey hover:text-turquoise hover:bg-white/5 transition-colors"
                  >
                    <Wind className="w-4 h-4 text-turquoise" />
                    <div>
                      <div className="font-semibold text-white">Wind Energy Calculator</div>
                      <div className="text-[10px] text-softgrey/60">Annual MWh & diesel offset</div>
                    </div>
                  </a>
                  <a 
                    href="#wave-calculator" 
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-softgrey hover:text-turquoise hover:bg-white/5 transition-colors mt-1"
                  >
                    <Waves className="w-4 h-4 text-seagreen" />
                    <div>
                      <div className="font-semibold text-white">Wave Energy Calculator</div>
                      <div className="text-[10px] text-softgrey/60">Capture length & efficiency</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Scientific References Button */}
            <button
              onClick={onOpenScientificModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-ocean-surface/60 hover:bg-ocean-surface border border-white/10 hover:border-turquoise/30 text-xs text-softgrey hover:text-white transition-all"
              title="Verified Scientific Data & Formal References"
            >
              <BookOpen className="w-3.5 h-3.5 text-seagreen" />
              <span>Scientific Data</span>
            </button>

            {/* Contact / CTA Button */}
            <a
              href="#vision"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-turquoise to-seagreen hover:from-turquoise-light hover:to-seagreen-light text-ocean-deep font-semibold text-xs transition-all shadow-[0_0_20px_rgba(33,212,196,0.3)] hover:shadow-[0_0_28px_rgba(33,212,196,0.6)] hover:scale-[1.02]"
            >
              Explore Vision
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenScientificModal}
              className="p-2 rounded-xl bg-ocean-surface border border-turquoise/20 text-turquoise text-xs"
              title="Data Sources"
            >
              <BookOpen className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-ocean-surface border border-white/10 text-softgrey hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#061B2B]/98 backdrop-blur-2xl border-b border-turquoise/20 px-6 py-6 transition-all animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 text-sm font-medium text-softgrey hover:text-turquoise py-2 px-3 rounded-xl hover:bg-white/5"
              >
                <link.icon className="w-4 h-4 text-turquoise" />
                <span>{link.name}</span>
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-2">
              <a
                href="#wind-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-xs text-turquoise py-2 px-3 rounded-xl bg-ocean-surface border border-turquoise/20"
              >
                <Calculator className="w-4 h-4" />
                <span>Open Wind & Wave Calculators</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenScientificModal();
                }}
                className="flex items-center space-x-2 text-xs text-softgrey py-2 px-3 rounded-xl bg-ocean-surface border border-white/10"
              >
                <BookOpen className="w-4 h-4 text-seagreen" />
                <span>View Scientific Data & Sources</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
