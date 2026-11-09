import React, { useState, useMemo } from 'react';
import { 
  Wind, 
  RotateCw, 
  Gauge, 
  Sparkles, 
  Check, 
  AlertCircle, 
  Flame, 
  Home, 
  Leaf, 
  Cpu,
  BookmarkCheck
} from 'lucide-react';

interface WindEnergyProps {
  onOpenScientificModal: () => void;
}

export const WindEnergy: React.FC<WindEnergyProps> = ({ onOpenScientificModal }) => {
  // Calculator State
  const [numTurbines, setNumTurbines] = useState<number>(3);
  const [turbineCapacityKw, setTurbineCapacityKw] = useState<number>(250);
  const [capacityFactorPct, setCapacityFactorPct] = useState<number>(28);

  // Preset Configurations
  const applyPreset = (n: number, cap: number, cf: number) => {
    setNumTurbines(n);
    setTurbineCapacityKw(cap);
    setCapacityFactorPct(cf);
  };

  // Calculation Results
  const results = useMemo(() => {
    // Annual electricity = Number of turbines × Turbine capacity × (Capacity factor / 100) × 8760
    const annualKwh = numTurbines * turbineCapacityKw * (capacityFactorPct / 100) * 8760;
    const annualMwh = annualKwh / 1000;
    
    // Derived impacts:
    // ~0.27 liters of diesel saved per kWh displaced in island DG sets
    const dieselLitersSaved = annualKwh * 0.27;
    // ~0.72 kg of CO2 avoided per kWh
    const co2TonnesAvoided = (annualKwh * 0.72) / 1000;
    // Island domestic household consumption (~1,800 kWh per household annually)
    const homesPowered = Math.round(annualKwh / 1800);

    return {
      annualKwh: Math.round(annualKwh),
      annualMwh: Number(annualMwh.toFixed(2)),
      dieselLitersSaved: Math.round(dieselLitersSaved),
      co2TonnesAvoided: Number(co2TonnesAvoided.toFixed(1)),
      homesPowered
    };
  }, [numTurbines, turbineCapacityKw, capacityFactorPct]);

  return (
    <section id="wind" className="py-24 bg-[#061B2B] text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-turquoise/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-turquoise/10 border border-turquoise/20 text-turquoise font-mono text-xs uppercase tracking-wider mb-4">
            <Wind className="w-3.5 h-3.5 animate-spin" />
            <span>Aerodynamic & Resource Science</span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            HARNESSING THE <br />
            <span className="text-turquoise">POWER OF WIND</span>
          </h2>
          
          <p className="mt-4 text-softgrey/80 text-base sm:text-lg leading-relaxed">
            Surrounded by hundreds of miles of open Arabian Sea, Lakshadweep’s atolls experience uninterrupted trade winds and seasonal monsoon currents with high kinetic energy density.
          </p>
        </div>

        {/* Technical Explanations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-2">How Wind Turbines Work</h3>
            <p className="text-xs sm:text-sm text-softgrey/80 leading-relaxed">
              Aerodynamic lift turns kinetic air momentum into mechanical torque. An active yaw motor keeps the rotor oriented into prevailing Arabian Sea winds, while individual blade pitch actuators continuously regulate aerodynamic load during cyclonic squalls.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-seagreen/10 border border-seagreen/20 flex items-center justify-center text-seagreen mb-4">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-2">Wind Speed & Power Density</h3>
            <p className="text-xs sm:text-sm text-softgrey/80 leading-relaxed">
              Available kinetic power scales with the cube of wind speed: <span className="font-mono text-turquoise">P/A = 0.5 · ρ · v³</span>. Doubling wind velocity increases harvestable power by 8-fold. At 7.5 m/s, marine boundary layer air density (ρ ≈ 1.225 kg/m³) provides dense energetic flow.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
              <RotateCw className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-2">Onshore vs. Offshore Siting</h3>
            <p className="text-xs sm:text-sm text-softgrey/80 leading-relaxed">
              Lakshadweep’s atoll islands are narrow ribbons of land crowded with coconut groves and settlements. Near-shore shallow reef monopiles or floating spar buoys prevent competing for scarce terrestrial acreage while harvesting 20–30% higher unobstructed sea winds.
            </p>
          </div>

        </div>

        {/* Historical Government Proposal Clarification Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-amber-500/5 mb-16 relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-[11px] uppercase tracking-wider">
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>Historical Government Proposal • Not Currently Operational</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Historical Lakshadweep Electricity Dept (LED) Wind Study
              </h3>
              <p className="text-xs sm:text-sm text-softgrey/90 leading-relaxed max-w-3xl">
                Between 1998 and 2004, the Lakshadweep Electricity Department formulated a pioneering project proposal to install <span className="text-amber-200 font-semibold">three 220–250 kW Wind Electric Generators</span>. While computer wind regimes confirmed feasibility, logistical hurdles—such as delivering 40-meter cranes across shallow lagoon passages and early gearbox salt-spray corrosion—prevented full operational commissioning.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onOpenScientificModal}
                className="px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Examine Historical Archive Ref</span>
              </button>
            </div>
          </div>
        </div>

        {/* PAGE 3: Interactive Wind Energy Calculator */}
        <div id="wind-calculator" className="glass-panel p-6 sm:p-10 rounded-3xl border border-turquoise/30 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-turquoise font-mono text-xs uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-turquoise" />
                <span>Parametric Energy Engineering Tool</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Interactive Wind Energy Calculator
              </h3>
              <p className="text-xs text-softgrey/70 mt-1 font-mono">
                Formula: Annual Electricity = Number of Turbines × Turbine Capacity (kW) × Capacity Factor × 8,760 hours
              </p>
            </div>

            {/* Scenario Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-softgrey/60 font-mono">Presets:</span>
              <button
                onClick={() => applyPreset(3, 250, 28)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  numTurbines === 3 && turbineCapacityKw === 250
                    ? 'bg-turquoise text-ocean-deep font-bold border-turquoise'
                    : 'bg-ocean-surface text-softgrey border-white/10 hover:text-white'
                }`}
              >
                LED Historical (3x 250 kW)
              </button>
              <button
                onClick={() => applyPreset(4, 500, 32)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  numTurbines === 4 && turbineCapacityKw === 500
                    ? 'bg-turquoise text-ocean-deep font-bold border-turquoise'
                    : 'bg-ocean-surface text-softgrey border-white/10 hover:text-white'
                }`}
              >
                Kavaratti Offset (4x 500 kW)
              </button>
              <button
                onClick={() => applyPreset(8, 750, 34)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  numTurbines === 8 && turbineCapacityKw === 750
                    ? 'bg-turquoise text-ocean-deep font-bold border-turquoise'
                    : 'bg-ocean-surface text-softgrey border-white/10 hover:text-white'
                }`}
              >
                Island Ring (8x 750 kW)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Number of Turbines */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>Number of Wind Turbines</span>
                    <span className="text-xs font-mono text-softgrey/60">({numTurbines} units)</span>
                  </label>
                  <span className="text-lg font-mono font-bold text-turquoise bg-ocean-surface px-3 py-0.5 rounded-lg border border-turquoise/20">
                    {numTurbines}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={numTurbines}
                  onChange={(e) => setNumTurbines(parseInt(e.target.value))}
                  className="w-full h-2 bg-ocean-surface rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-softgrey/50">
                  <span>1 Turbine (Micro-pilot)</span>
                  <span>6 Turbines (Island scale)</span>
                  <span>12 Turbines (Archipelago ring)</span>
                </div>
              </div>

              {/* Slider 2: Turbine Capacity in kW */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>Turbine Rated Capacity</span>
                    <span className="text-xs font-mono text-softgrey/60">({turbineCapacityKw} kW)</span>
                  </label>
                  <span className="text-lg font-mono font-bold text-turquoise bg-ocean-surface px-3 py-0.5 rounded-lg border border-turquoise/20">
                    {turbineCapacityKw} kW
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="50"
                  value={turbineCapacityKw}
                  onChange={(e) => setTurbineCapacityKw(parseInt(e.target.value))}
                  className="w-full h-2 bg-ocean-surface rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-softgrey/50">
                  <span>100 kW (Micro)</span>
                  <span>250 kW (Historical Proposal)</span>
                  <span>750 kW (Marinized)</span>
                  <span>1,500 kW (Offshore Class)</span>
                </div>
              </div>

              {/* Slider 3: Capacity Factor % */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>Capacity Factor (CF)</span>
                    <span className="text-xs font-mono text-softgrey/60">({capacityFactorPct}%)</span>
                  </label>
                  <span className="text-lg font-mono font-bold text-turquoise bg-ocean-surface px-3 py-0.5 rounded-lg border border-turquoise/20">
                    {capacityFactorPct}%
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="45"
                  step="1"
                  value={capacityFactorPct}
                  onChange={(e) => setCapacityFactorPct(parseInt(e.target.value))}
                  className="w-full h-2 bg-ocean-surface rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-softgrey/50">
                  <span>15% (Low Wind Season)</span>
                  <span>28% (Annual Island Average)</span>
                  <span>42% (High Monsoon Corridor)</span>
                </div>
              </div>

              {/* Total Installed Capacity Tag */}
              <div className="p-3.5 rounded-2xl bg-ocean-deep/80 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-softgrey/80">Total Nameplate Installed Wind Capacity:</span>
                <span className="font-mono font-bold text-seagreen text-sm">
                  {(numTurbines * turbineCapacityKw) / 1000} MW ({numTurbines * turbineCapacityKw} kW)
                </span>
              </div>

            </div>

            {/* Results Display Panel (Right Column) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-ocean-surface to-ocean-midnight p-6 sm:p-7 rounded-3xl border border-turquoise/30 flex flex-col justify-between space-y-6">
              
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-turquoise">
                  Calculated Annual Clean Output
                </span>
                <div className="mt-2 text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                  {results.annualMwh.toLocaleString()} <span className="text-2xl font-bold text-turquoise">MWh</span>
                </div>
                <div className="text-xs font-mono text-softgrey/70 mt-1">
                  = {results.annualKwh.toLocaleString()} kWh / year
                </div>
              </div>

              {/* Real World Impact Cards */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-rose-400" />
                    <span className="text-xs text-softgrey">Diesel Displaced:</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-rose-300">
                    {results.dieselLitersSaved.toLocaleString()} L/yr
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Leaf className="w-4 h-4 text-seagreen" />
                    <span className="text-xs text-softgrey">Avoided CO₂:</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-seagreen">
                    {results.co2TonnesAvoided.toLocaleString()} tonnes/yr
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Home className="w-4 h-4 text-sky-400" />
                    <span className="text-xs text-softgrey">Island Homes Powered:</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-sky-300">
                    ~{results.homesPowered.toLocaleString()} households
                  </span>
                </div>

              </div>

              <div className="text-[11px] text-softgrey/60 font-mono text-center pt-2">
                *Based on standard 8,760 operating hours per calendar year.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
