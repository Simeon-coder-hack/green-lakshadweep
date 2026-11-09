import React, { useState, useMemo } from 'react';
import { 
  Waves, 
  Activity, 
  Sliders, 
  BookOpen, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  TrendingUp,
  Droplet
} from 'lucide-react';
import { SCIENTIFIC_REFERENCES } from '../data/scientificData';

interface WaveEnergyProps {
  onOpenScientificModal: () => void;
}

export const WaveEnergy: React.FC<WaveEnergyProps> = ({ onOpenScientificModal }) => {
  // Wave Energy Calculator Inputs
  const [wavePowerDensity, setWavePowerDensity] = useState<number>(14); // kW/m
  const [captureLengthMeters, setCaptureLengthMeters] = useState<number>(60); // meters of wavefront
  const [conversionEfficiencyPct, setConversionEfficiencyPct] = useState<number>(30); // 30%
  const [availabilityPct, setAvailabilityPct] = useState<number>(90); // 90%

  // Wave Converter Animation Step Toggle
  const [activeWecType, setActiveWecType] = useState<'point-absorber' | 'owc'>('point-absorber');

  // Preset scenarios
  const applyPreset = (density: number, length: number, eff: number, avail: number) => {
    setWavePowerDensity(density);
    setCaptureLengthMeters(length);
    setConversionEfficiencyPct(eff);
    setAvailabilityPct(avail);
  };

  // Calculation logic
  const calculations = useMemo(() => {
    // Theoretical Incoming Wave Energy = Wave power density × Capture length × 8760 (hours) in kWh
    const theoreticalKwh = wavePowerDensity * captureLengthMeters * 8760;
    const theoreticalMwh = theoreticalKwh / 1000;
    const theoreticalGwh = theoreticalMwh / 1000;

    // Actual Converted Electricity = Theoretical × (Efficiency / 100) × (Availability / 100)
    const actualKwh = theoreticalKwh * (conversionEfficiencyPct / 100) * (availabilityPct / 100);
    const actualMwh = actualKwh / 1000;

    // Diesel offset (~0.27 L/kWh)
    const dieselLitersSaved = actualKwh * 0.27;

    return {
      theoreticalKwh: Math.round(theoreticalKwh),
      theoreticalMwh: Number(theoreticalMwh.toFixed(1)),
      theoreticalGwh: Number(theoreticalGwh.toFixed(3)),
      actualKwh: Math.round(actualKwh),
      actualMwh: Number(actualMwh.toFixed(2)),
      dieselLitersSaved: Math.round(dieselLitersSaved)
    };
  }, [wavePowerDensity, captureLengthMeters, conversionEfficiencyPct, availabilityPct]);

  return (
    <section id="wave" className="py-24 bg-[#081522] text-white relative overflow-hidden border-t border-b border-turquoise/10">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-seagreen/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-seagreen/10 border border-seagreen/20 text-seagreen font-mono text-xs uppercase tracking-wider mb-4">
            <Waves className="w-3.5 h-3.5" />
            <span>Ocean Hydrodynamics & Wave Energy Conversion (WEC)</span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            THE OCEAN IS AN <br />
            <span className="text-turquoise">UNTAPPED ENERGY RESOURCE</span>
          </h2>
          
          <p className="mt-4 text-softgrey/80 text-base sm:text-lg leading-relaxed">
            Waves are nature’s energy battery—accumulating wind kinetic energy across thousands of nautical miles of the Indian Ocean and delivering dense, rhythmic hydraulic power straight to Lakshadweep’s western barrier reefs.
          </p>
        </div>

        {/* Published Lakshadweep Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="glass-panel p-6 rounded-3xl border border-turquoise/20 hover:border-turquoise/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-softgrey/60 mb-2">
                <span>TERRITORY-WIDE AVERAGE</span>
                <span className="px-2 py-0.5 rounded-md bg-turquoise/10 text-turquoise text-[10px]">Verified Research</span>
              </div>
              <div className="text-3xl font-display font-black text-turquoise my-2">
                10–15 <span className="text-base font-normal text-softgrey">kW/m</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Average Archipelago Wave Power</h3>
              <p className="text-xs text-softgrey/80 leading-relaxed">
                National Institute of Ocean Technology (NIOT) wave atlas measurements demonstrate consistent year-round swell propagation along the Laccadive Ridge.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-turquoise/80">
              Ref: NIOT Technical Report MoES/NIOT/OE
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-seagreen/30 hover:border-seagreen/50 transition-all flex flex-col justify-between bg-seagreen/5">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-softgrey/60 mb-2">
                <span>WESTERN BARRIER EXPOSURE</span>
                <span className="px-2 py-0.5 rounded-md bg-seagreen/20 text-seagreen text-[10px]">Peak Season</span>
              </div>
              <div className="text-3xl font-display font-black text-seagreen my-2">
                15–20 <span className="text-base font-normal text-softgrey">kW/m</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Western Lakshadweep Swells</h3>
              <p className="text-xs text-softgrey/80 leading-relaxed">
                During the southwest monsoon (June–September), unobstructed long-period groundswells strike western reefs with immense kinetic force, peaking above 20 kW/m.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-seagreen/80">
              Ref: Indian Ocean MetOcean Buoy Network
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-sky-500/20 hover:border-sky-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-softgrey/60 mb-2">
                <span>KAVARATTI ISLAND ATLAS</span>
                <span className="px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-400 text-[10px]">Peer-Reviewed</span>
              </div>
              <div className="text-3xl font-display font-black text-sky-400 my-2">
                1.5–8.0 <span className="text-base font-normal text-softgrey">kW/m</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Kavaratti Seasonal Variation</h3>
              <p className="text-xs text-softgrey/80 leading-relaxed">
                Published research by Sanil Kumar et al. establishes seasonal variation from 1.5 kW/m in calm pre-monsoon waters to 8.0 kW/m during peak monsoon surges on the western breakwater.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-sky-300/80">
              Ref: Indian Journal of Geo-Marine Sciences (2018)
            </div>
          </div>

        </div>

        {/* 3D-Style Wave Energy Converter Visualizer */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-turquoise uppercase tracking-wider">
                Technology Deep Dive
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                Animated Wave Energy Converter (WEC) Architecture
              </h3>
            </div>

            <div className="flex items-center gap-2 p-1 rounded-xl bg-ocean-deep border border-turquoise/20">
              <button
                onClick={() => setActiveWecType('point-absorber')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeWecType === 'point-absorber'
                    ? 'bg-turquoise text-ocean-deep font-bold'
                    : 'text-softgrey hover:text-white'
                }`}
              >
                Floating Point Absorber
              </button>
              <button
                onClick={() => setActiveWecType('owc')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeWecType === 'owc'
                    ? 'bg-turquoise text-ocean-deep font-bold'
                    : 'text-softgrey hover:text-white'
                }`}
              >
                Oscillating Water Column (OWC)
              </button>
            </div>
          </div>

          {/* Interactive Visual Graphic */}
          <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-gradient-to-b from-[#061B2B] to-[#0a2338] border border-turquoise/20 overflow-hidden flex items-center justify-center">
            
            {/* Animated SVG Ocean Waves */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#21D4C4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#061B2B" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                
                {/* Back wave */}
                <path
                  d="M0,170 Q 100,140 200,170 T 400,170 T 600,170 T 800,170 L 800,300 L 0,300 Z"
                  fill="url(#waveGradient)"
                  className="animate-wave-pulse opacity-50"
                />
                
                {/* Front wave */}
                <path
                  d="M0,185 Q 120,150 240,185 T 480,185 T 720,185 T 800,185 L 800,300 L 0,300 Z"
                  fill="url(#waveGradient)"
                  className="animate-wave-pulse"
                  style={{ animationDuration: '4s' }}
                />
              </svg>
            </div>

            {/* Point Absorber Visualization */}
            {activeWecType === 'point-absorber' && (
              <div className="relative z-10 flex flex-col items-center animate-float-slow">
                {/* Upper Telemetry Antenna */}
                <div className="w-1.5 h-10 bg-turquoise rounded-full"></div>
                {/* Heaving Buoy Float */}
                <div className="w-28 h-14 rounded-full bg-gradient-to-r from-turquoise via-seagreen to-turquoise border-2 border-white shadow-[0_0_30px_rgba(33,212,196,0.6)] flex items-center justify-center text-[10px] font-bold text-ocean-deep font-mono uppercase">
                  Point Absorber
                </div>
                {/* Hydraulic PTO Shaft */}
                <div className="w-4 h-24 bg-gradient-to-b from-white/90 via-softgrey to-ocean-surface border border-turquoise/40 flex flex-col items-center justify-between py-2">
                  <div className="w-2.5 h-1.5 bg-turquoise rounded-sm"></div>
                  <div className="w-2.5 h-1.5 bg-rose-400 rounded-sm"></div>
                  <div className="w-2.5 h-1.5 bg-turquoise rounded-sm"></div>
                </div>
                {/* Seabed Anchor Tether */}
                <div className="w-20 h-4 bg-ocean-midnight rounded-md border border-white/20 text-[9px] text-center font-mono text-softgrey/60">
                  Subsea Anchor
                </div>
              </div>
            )}

            {/* OWC Visualization */}
            {activeWecType === 'owc' && (
              <div className="relative z-10 flex flex-col items-center">
                {/* Air Chamber Duct */}
                <div className="w-36 h-36 border-4 border-turquoise/80 rounded-t-3xl bg-ocean-surface/60 backdrop-blur-md flex flex-col items-center justify-between p-3 relative overflow-hidden">
                  <div className="w-12 h-6 rounded-full bg-seagreen border border-white flex items-center justify-center text-[9px] font-mono text-ocean-deep font-bold animate-spin">
                    Wells Rot
                  </div>
                  <div className="text-[10px] font-mono text-turquoise text-center">
                    Air Compression Chamber
                  </div>
                  {/* Rising / Falling Water Column Indicator */}
                  <div className="w-full h-12 bg-turquoise/30 rounded-t-xl animate-pulse"></div>
                </div>
                <div className="text-xs font-mono text-softgrey/70 mt-2">
                  Oscillating Water Column (Bi-directional Wells Air Turbine)
                </div>
              </div>
            )}

            {/* Interactive Overlay Info */}
            <div className="absolute bottom-3 left-4 text-xs font-mono text-turquoise bg-ocean-midnight/80 px-3 py-1.5 rounded-xl border border-turquoise/20">
              {activeWecType === 'point-absorber' 
                ? 'Mechanism: Heaving float compresses hydraulic ram generating electricity via high-pressure motor.'
                : 'Mechanism: Water column rises inside cavern, forcing compressed air through self-rectifying Wells turbine.'}
            </div>

          </div>

          {/* Theoretical vs Actual Explanation Bar */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-softgrey/80 leading-relaxed">
            <div className="p-4 rounded-2xl bg-ocean-deep/60 border border-white/10">
              <span className="font-bold text-white block mb-1">Theoretical Wave Power vs Actual Generation:</span>
              Theoretical wave power represents the raw kinetic and potential energy flux transmitted across 1 meter of open sea wavefront. It assumes 100% mechanical capture across infinite absorption width.
            </div>
            <div className="p-4 rounded-2xl bg-ocean-deep/60 border border-turquoise/20">
              <span className="font-bold text-turquoise block mb-1">Engineering Realities & Conversion Efficiencies:</span>
              Actual electricity generation accounts for hydrodynamic capture width ratio (40–60%), mechanical/hydraulic power take-off (PTO) losses, generator conversion, and annual offshore maintenance availability (typically 85–95%).
            </div>
          </div>

        </div>

        {/* PAGE 4: Interactive Wave Energy Calculator */}
        <div id="wave-calculator" className="glass-panel p-6 sm:p-10 rounded-3xl border border-seagreen/30 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-seagreen font-mono text-xs uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-seagreen" />
                <span>Wavefront Hydrodynamic Sizing Tool</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Interactive Wave Energy Calculator
              </h3>
              <p className="text-xs text-softgrey/70 mt-1 font-mono">
                Formula: Annual Electricity = Wave Power Density (kW/m) × Capture Length (m) × 8,760 h × Efficiency × Availability
              </p>
            </div>

            {/* Scenario Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-softgrey/60 font-mono">Presets:</span>
              <button
                onClick={() => applyPreset(4.5, 30, 25, 88)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  wavePowerDensity === 4.5 && captureLengthMeters === 30
                    ? 'bg-seagreen text-ocean-deep font-bold border-seagreen'
                    : 'bg-ocean-surface text-softgrey border-white/10 hover:text-white'
                }`}
              >
                Kavaratti Seasonal (4.5 kW/m)
              </button>
              <button
                onClick={() => applyPreset(12.5, 60, 30, 90)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  wavePowerDensity === 12.5 && captureLengthMeters === 60
                    ? 'bg-seagreen text-ocean-deep font-bold border-seagreen'
                    : 'bg-ocean-surface text-softgrey border-white/10 hover:text-white'
                }`}
              >
                Lakshadweep Mean (12.5 kW/m)
              </button>
              <button
                onClick={() => applyPreset(18.0, 100, 34, 92)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  wavePowerDensity === 18.0 && captureLengthMeters === 100
                    ? 'bg-seagreen text-ocean-deep font-bold border-seagreen'
                    : 'bg-ocean-surface text-softgrey border-white/10 hover:text-white'
                }`}
              >
                Western Monsoon Swell (18 kW/m)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Sliders (Left Column) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Wave Power Density in kW/m */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>Wave Power Density</span>
                    <span className="text-xs font-mono text-softgrey/60">({wavePowerDensity} kW/m)</span>
                  </label>
                  <span className="text-lg font-mono font-bold text-seagreen bg-ocean-surface px-3 py-0.5 rounded-lg border border-seagreen/20">
                    {wavePowerDensity} kW/m
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="25"
                  step="0.5"
                  value={wavePowerDensity}
                  onChange={(e) => setWavePowerDensity(parseFloat(e.target.value))}
                  className="w-full h-2 bg-ocean-surface rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-softgrey/50">
                  <span>3 kW/m (Calm lagoon)</span>
                  <span>12 kW/m (Annual mean)</span>
                  <span>20 kW/m (Monsoon surge)</span>
                </div>
              </div>

              {/* Slider 2: Wave-Energy Capture Length (m) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>Wavefront Capture Length</span>
                    <span className="text-xs font-mono text-softgrey/60">({captureLengthMeters} meters)</span>
                  </label>
                  <span className="text-lg font-mono font-bold text-seagreen bg-ocean-surface px-3 py-0.5 rounded-lg border border-seagreen/20">
                    {captureLengthMeters} m
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={captureLengthMeters}
                  onChange={(e) => setCaptureLengthMeters(parseInt(e.target.value))}
                  className="w-full h-2 bg-ocean-surface rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-softgrey/50">
                  <span>10m (Single Buoy)</span>
                  <span>60m (5-Buoy Array)</span>
                  <span>200m (Reef Attenuator Barrier)</span>
                </div>
              </div>

              {/* Slider 3: Conversion Efficiency % */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>WEC Conversion Efficiency (η)</span>
                    <span className="text-xs font-mono text-softgrey/60">({conversionEfficiencyPct}%)</span>
                  </label>
                  <span className="text-lg font-mono font-bold text-seagreen bg-ocean-surface px-3 py-0.5 rounded-lg border border-seagreen/20">
                    {conversionEfficiencyPct}%
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="45"
                  step="1"
                  value={conversionEfficiencyPct}
                  onChange={(e) => setConversionEfficiencyPct(parseInt(e.target.value))}
                  className="w-full h-2 bg-ocean-surface rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-softgrey/50">
                  <span>15% (Early prototype)</span>
                  <span>30% (Modern Point Absorber)</span>
                  <span>45% (Advanced Resonant PTO)</span>
                </div>
              </div>

              {/* Slider 4: Operating Availability % */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>Operating Availability</span>
                    <span className="text-xs font-mono text-softgrey/60">({availabilityPct}%)</span>
                  </label>
                  <span className="text-lg font-mono font-bold text-seagreen bg-ocean-surface px-3 py-0.5 rounded-lg border border-seagreen/20">
                    {availabilityPct}%
                  </span>
                </div>
                <input
                  type="range"
                  min="70"
                  max="98"
                  step="1"
                  value={availabilityPct}
                  onChange={(e) => setAvailabilityPct(parseInt(e.target.value))}
                  className="w-full h-2 bg-ocean-surface rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-softgrey/50">
                  <span>70% (High sea state downtime)</span>
                  <span>90% (Standard island marine maintenance)</span>
                  <span>98% (High redundancy)</span>
                </div>
              </div>

            </div>

            {/* Calculations Output Panel (Right Column) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-ocean-surface to-ocean-midnight p-6 sm:p-7 rounded-3xl border border-seagreen/30 flex flex-col justify-between space-y-6">
              
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-seagreen">
                  Estimated Delivered Electricity
                </span>
                <div className="mt-2 text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                  {calculations.actualMwh.toLocaleString()} <span className="text-2xl font-bold text-seagreen">MWh</span>
                </div>
                <div className="text-xs font-mono text-softgrey/70 mt-1">
                  = {calculations.actualKwh.toLocaleString()} kWh converted annually
                </div>
              </div>

              {/* Theoretical vs Converted Comparison Box */}
              <div className="p-4 rounded-2xl bg-ocean-deep/90 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-softgrey/80">Theoretical Incoming Wave Energy:</span>
                  <span className="font-mono text-white font-bold">
                    {calculations.theoreticalMwh.toLocaleString()} MWh ({calculations.theoreticalGwh} GWh)
                  </span>
                </div>

                {/* Visual Ratio Bar */}
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-seagreen h-full transition-all duration-300 rounded-full"
                    style={{ width: `${(conversionEfficiencyPct * availabilityPct) / 100}%` }}
                    title="Actual Converted Fraction"
                  />
                </div>

                <div className="flex justify-between text-[10px] font-mono text-softgrey/60">
                  <span>0%</span>
                  <span className="text-seagreen font-bold">
                    Net Conversion Factor: {((conversionEfficiencyPct * availabilityPct) / 100).toFixed(1)}%
                  </span>
                  <span>100% (Theoretical)</span>
                </div>
              </div>

              {/* Diesel Offset */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-turquoise" />
                  <span className="text-xs text-softgrey">Annual Diesel Displaced:</span>
                </div>
                <span className="font-mono text-sm font-bold text-turquoise">
                  {calculations.dieselLitersSaved.toLocaleString()} Liters
                </span>
              </div>

              <div className="text-[10px] font-mono text-softgrey/60 text-center">
                *Scientific note: Theoretical energy represents total wavefront flux. Converted output reflects hydraulic and generator limits.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
