import React, { useState, useMemo } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  BarChart,
  Bar
} from 'recharts';
import { 
  BarChart3, 
  Sun, 
  Wind, 
  Waves, 
  Battery, 
  Flame, 
  Leaf, 
  ShieldAlert, 
  Sliders, 
  Clock, 
  Zap,
  Activity,
  Layers
} from 'lucide-react';

interface WeatherScenario {
  id: string;
  name: string;
  description: string;
  windSpeedMs: number;
  waveDensityKwm: number;
  solarPeakKw: number;
  islandDemandKw: number;
}

export const InteractiveDashboard: React.FC = () => {
  // Weather scenario selector
  const [selectedScenario, setSelectedScenario] = useState<string>('monsoon-swell');
  // 24-hour scrubber
  const [currentHour, setCurrentHour] = useState<number>(14); // 14:00 (2 PM)

  const scenarios: Record<string, WeatherScenario> = {
    'monsoon-swell': {
      id: 'monsoon-swell',
      name: 'Monsoon High Swell (July)',
      description: 'Massive long-period groundswells and heavy trade winds; overcast skies limit solar.',
      windSpeedMs: 11.5,
      waveDensityKwm: 18.0,
      solarPeakKw: 950,
      islandDemandKw: 2400
    },
    'equatorial-summer': {
      id: 'equatorial-summer',
      name: 'Equatorial Summer (April)',
      description: 'Crystal-clear tropical skies with peak insolation; moderate coastal breeze and calm swells.',
      windSpeedMs: 5.8,
      waveDensityKwm: 8.5,
      solarPeakKw: 2200,
      islandDemandKw: 2600
    },
    'night-trade-winds': {
      id: 'night-trade-winds',
      name: 'Night Trade Winds (December)',
      description: 'Steady nocturnal Arabian Sea winds and persistent wave swells with zero solar input.',
      windSpeedMs: 9.2,
      waveDensityKwm: 12.0,
      solarPeakKw: 0,
      islandDemandKw: 2100
    },
    'calm-intermonsoon': {
      id: 'calm-intermonsoon',
      name: 'Calm Inter-Monsoon (October)',
      description: 'Gentle sea conditions; high reliance on daytime solar and stored battery dispatch.',
      windSpeedMs: 4.0,
      waveDensityKwm: 5.5,
      solarPeakKw: 2400,
      islandDemandKw: 2300
    }
  };

  const activeScenario = scenarios[selectedScenario];

  // 24-Hour Profile Data Generation
  const timelineData = useMemo(() => {
    const data = [];
    for (let h = 0; h < 24; h++) {
      // Solar Curve: peaks around 12:30 PM, zero before 06:00 and after 18:30
      let solar = 0;
      if (h >= 6 && h <= 18) {
        const peakFactor = Math.sin(((h - 6) / 12) * Math.PI);
        solar = Math.round(activeScenario.solarPeakKw * Math.pow(peakFactor, 1.2));
      }

      // Wind Curve: slight diurnal variation (peaks afternoon & evening)
      const windDiurnal = 1 + 0.25 * Math.sin(((h - 10) / 24) * 2 * Math.PI);
      const wind = Math.round((activeScenario.windSpeedMs / 12) * 1100 * windDiurnal);

      // Wave Curve: ocean groundswells are steady with gentle long-period ebb and flood
      const waveDiurnal = 1 + 0.12 * Math.cos(((h - 3) / 24) * 2 * Math.PI);
      const wave = Math.round((activeScenario.waveDensityKwm / 15) * 850 * waveDiurnal);

      // Total Renewable Generation
      const totalRenewable = solar + wind + wave;

      // Island Demand Profile: morning rise, midday AC, evening peak (lighting & domestic cooking)
      let demandFactor = 0.8;
      if (h >= 8 && h <= 16) demandFactor = 1.05; // daytime commercial & desalination
      if (h >= 18 && h <= 22) demandFactor = 1.18; // evening residential peak
      const demand = Math.round(activeScenario.islandDemandKw * demandFactor);

      // Net Balance & Battery
      const net = totalRenewable - demand;
      // Battery State of Charge (simulated SOC between 35% and 98%)
      const batterySoc = Math.min(98, Math.max(35, Math.round(65 + (net / 100))));

      // Diesel generation (only kicks in if total renewable + battery discharge cannot meet demand)
      const dieselGen = net < -600 ? Math.abs(net) - 600 : 0;

      data.push({
        hour: `${h.toString().padStart(2, '0')}:00`,
        hourNum: h,
        Solar: solar,
        Wind: wind,
        Wave: wave,
        TotalRenewable: totalRenewable,
        Demand: demand,
        BatterySOC: batterySoc,
        Diesel: dieselGen
      });
    }
    return data;
  }, [activeScenario]);

  // Current Hour Metrics
  const currentMetrics = timelineData[currentHour] || timelineData[12];
  const renewableFraction = Math.min(100, Math.round((currentMetrics.TotalRenewable / currentMetrics.Demand) * 100));
  
  // Diesel displaced per hour (~0.27 liters per kWh generated clean)
  const hourlyDieselSavedLiters = Math.round(currentMetrics.TotalRenewable * 0.27);
  // Carbon avoided (~0.72 kg CO2 / kWh)
  const hourlyCo2AvoidedKg = Math.round(currentMetrics.TotalRenewable * 0.72);

  return (
    <section id="dashboard" className="py-24 bg-[#061B2B] text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-turquoise/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-turquoise/10 border border-turquoise/20 text-turquoise font-mono text-xs uppercase tracking-wider mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Interactive Clean Energy Telemetry</span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            INTERACTIVE ENERGY <br />
            <span className="text-turquoise">DASHBOARD</span>
          </h2>
          
          <p className="mt-4 text-softgrey/80 text-base sm:text-lg leading-relaxed">
            Real-time simulated microgrid telemetry for the Lakshadweep archipelago. Test meteorological scenarios, scrub across a 24-hour dispatch cycle, and observe instantaneous diesel elimination.
          </p>

          {/* SIMULATED DATA DISCLAIMER BADGE (Mandatory) */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>IMPORTANT: ALL METRICS IN THIS DASHBOARD ARE SIMULATED DEMONSTRATION DATA FOR ENGINEERING FEASIBILITY.</span>
          </div>
        </div>

        {/* Control Console: Scenario Selector & 24h Time Scrubber */}
        <div className="glass-panel p-6 rounded-3xl border border-turquoise/20 mb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Scenario Buttons */}
            <div className="w-full lg:w-auto">
              <label className="text-xs font-mono text-softgrey/70 uppercase tracking-wider block mb-2">
                1. Select MetOcean Meteorological Scenario:
              </label>
              <div className="flex flex-wrap gap-2">
                {Object.values(scenarios).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedScenario(s.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all border ${
                      selectedScenario === s.id
                        ? 'bg-turquoise text-ocean-deep font-bold border-turquoise shadow-[0_0_15px_rgba(33,212,196,0.3)]'
                        : 'bg-ocean-surface text-softgrey border-white/10 hover:text-white hover:bg-ocean-surface/80'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Scrubber (00:00 to 23:00) */}
            <div className="w-full lg:w-80">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-softgrey/70 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-turquoise" />
                  <span>2. Dispatch Timeline:</span>
                </span>
                <span className="font-bold text-turquoise px-2.5 py-0.5 rounded-lg bg-ocean-surface border border-turquoise/20">
                  {currentHour.toString().padStart(2, '0')}:00 IST
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="23"
                step="1"
                value={currentHour}
                onChange={(e) => setCurrentHour(parseInt(e.target.value))}
                className="w-full h-2 bg-ocean-surface rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-softgrey/50 mt-1">
                <span>00:00 (Night)</span>
                <span>12:00 (Noon Solar)</span>
                <span>23:00 (Night)</span>
              </div>
            </div>

          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-softgrey/80">
            <span className="text-white font-semibold">Active Condition:</span> {activeScenario.description}
          </div>
        </div>

        {/* Live Telemetry KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          
          {/* Wind Generation */}
          <div className="glass-panel p-4 rounded-2xl border border-turquoise/20 hover:border-turquoise/40 transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono text-softgrey/60 mb-1">
              <span>WIND</span>
              <Wind className="w-3.5 h-3.5 text-turquoise" />
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-white">
              {currentMetrics.Wind} <span className="text-xs font-normal text-turquoise">kW</span>
            </div>
            <div className="text-[10px] text-softgrey/60 font-mono mt-1">
              v = {activeScenario.windSpeedMs} m/s
            </div>
          </div>

          {/* Wave Generation */}
          <div className="glass-panel p-4 rounded-2xl border border-seagreen/20 hover:border-seagreen/40 transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono text-softgrey/60 mb-1">
              <span>WAVE</span>
              <Waves className="w-3.5 h-3.5 text-seagreen" />
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-white">
              {currentMetrics.Wave} <span className="text-xs font-normal text-seagreen">kW</span>
            </div>
            <div className="text-[10px] text-softgrey/60 font-mono mt-1">
              {activeScenario.waveDensityKwm} kW/m
            </div>
          </div>

          {/* Solar Generation */}
          <div className="glass-panel p-4 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono text-softgrey/60 mb-1">
              <span>SOLAR</span>
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-white">
              {currentMetrics.Solar} <span className="text-xs font-normal text-amber-400">kW</span>
            </div>
            <div className="text-[10px] text-softgrey/60 font-mono mt-1">
              {currentMetrics.Solar > 0 ? 'Active SPV' : 'Nocturnal'}
            </div>
          </div>

          {/* Total Renewable Generation */}
          <div className="glass-panel p-4 rounded-2xl border border-white/20 bg-turquoise/5 hover:border-turquoise/50 transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono text-turquoise mb-1">
              <span>TOTAL CLEAN</span>
              <Zap className="w-3.5 h-3.5 text-turquoise" />
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-turquoise">
              {currentMetrics.TotalRenewable} <span className="text-xs font-normal text-softgrey">kW</span>
            </div>
            <div className="text-[10px] text-seagreen font-mono mt-1 font-semibold">
              {renewableFraction}% of Demand
            </div>
          </div>

          {/* Battery Storage SOC */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-turquoise/30 transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono text-softgrey/60 mb-1">
              <span>BESS SOC</span>
              <Battery className="w-3.5 h-3.5 text-seagreen" />
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-seagreen">
              {currentMetrics.BatterySOC}%
            </div>
            <div className="text-[10px] text-softgrey/60 font-mono mt-1">
              LFP Buffer
            </div>
          </div>

          {/* Diesel Displacement */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-turquoise/30 transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono text-softgrey/60 mb-1">
              <span>DIESEL SAVED</span>
              <Flame className="w-3.5 h-3.5 text-rose-400" />
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-rose-300">
              {hourlyDieselSavedLiters} <span className="text-xs font-normal text-softgrey">L/h</span>
            </div>
            <div className="text-[10px] text-softgrey/60 font-mono mt-1">
              DG Throttled
            </div>
          </div>

          {/* Avoided Carbon Emissions */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-turquoise/30 transition-all">
            <div className="flex items-center justify-between text-[11px] font-mono text-softgrey/60 mb-1">
              <span>CO₂ AVOIDED</span>
              <Leaf className="w-3.5 h-3.5 text-seagreen" />
            </div>
            <div className="text-xl sm:text-2xl font-display font-bold text-seagreen">
              {hourlyCo2AvoidedKg} <span className="text-xs font-normal text-softgrey">kg/h</span>
            </div>
            <div className="text-[10px] text-softgrey/60 font-mono mt-1">
              Zero Smog
            </div>
          </div>

        </div>

        {/* Dynamic Dispatch 24-Hour Area Chart (Recharts) */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-turquoise/20 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono text-turquoise uppercase tracking-wider">
                Simulated 24-Hour Dispatch Profile (Stacked Output vs Grid Demand)
              </div>
              <h3 className="text-xl font-display font-bold text-white mt-1">
                Resource Co-Optimization Curve
              </h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-softgrey">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-400"></span> Solar
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#21D4C4]"></span> Wind
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#36BFA6]"></span> Wave
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-rose-400"></span> Demand
              </span>
            </div>
          </div>

          {/* Chart Container */}
          <div className="w-full h-80 sm:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="windGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#21D4C4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#21D4C4" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#36BFA6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#36BFA6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="hour" stroke="#8899a6" fontSize={11} tickLine={false} />
                <YAxis stroke="#8899a6" fontSize={11} tickLine={false} unit=" kW" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#081522', 
                    borderColor: 'rgba(33, 212, 196, 0.3)', 
                    borderRadius: '16px',
                    fontSize: '12px' 
                  }}
                  itemStyle={{ color: '#ffffff' }}
                />
                <Area type="monotone" dataKey="Solar" stackId="1" stroke="#fbbf24" fill="url(#solarGrad)" />
                <Area type="monotone" dataKey="Wind" stackId="1" stroke="#21D4C4" fill="url(#windGrad)" />
                <Area type="monotone" dataKey="Wave" stackId="1" stroke="#36BFA6" fill="url(#waveGrad)" />
                <Area type="monotone" dataKey="Demand" stroke="#f43f5e" strokeWidth={2.5} fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Secondary Technical Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-5 rounded-2xl border border-white/10">
            <span className="text-xs font-mono text-turquoise uppercase tracking-wider block mb-1">
              Peak Penetration
            </span>
            <div className="text-2xl font-bold font-display text-white mb-2">
              96.4%
            </div>
            <p className="text-xs text-softgrey/70 leading-relaxed">
              During high monsoon swell intervals, combined wind and wave hydrokinetics exceed daytime demand, charging BESS to 98% capacity without firing backup gensets.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-white/10">
            <span className="text-xs font-mono text-seagreen uppercase tracking-wider block mb-1">
              Grid Inertia & Stability
            </span>
            <div className="text-2xl font-bold font-display text-white mb-2">
              50.00 Hz ±0.04 Hz
            </div>
            <p className="text-xs text-softgrey/70 leading-relaxed">
              Virtual synchronous generators (VSG) and 4-quadrant BESS PCS inverters emulate mechanical inertia, maintaining utility-grade power quality.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-white/10">
            <span className="text-xs font-mono text-rose-400 uppercase tracking-wider block mb-1">
              Simulated Diesel Displacement
            </span>
            <div className="text-2xl font-bold font-display text-white mb-2">
              ~42,000 Liters / Day
            </div>
            <p className="text-xs text-softgrey/70 leading-relaxed">
              Full archipelago deployment of simulated capacity completely eliminates daily barge convoy reliance across all 10 inhabited island clusters.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
