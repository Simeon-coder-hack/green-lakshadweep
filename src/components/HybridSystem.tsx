import React, { useState } from 'react';
import { 
  Wind, 
  Waves, 
  Sun, 
  Cpu, 
  BatteryCharging, 
  Network, 
  Home, 
  ArrowDown, 
  CheckCircle2, 
  Activity, 
  SlidersHorizontal,
  Sparkles,
  Info
} from 'lucide-react';

interface NodeDetails {
  id: string;
  name: string;
  role: string;
  techSpec: string;
  efficiency: string;
  controlLogic: string;
  metrics: { label: string; val: string }[];
}

export const HybridSystem: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('smart-ems');

  const nodes: Record<string, NodeDetails> = {
    'wind': {
      id: 'wind',
      name: 'Offshore Wind Turbines',
      role: 'Trade Wind & Monsoon Harvester',
      techSpec: 'Class III/S marinized offshore wind generators with active individual blade pitch control and corrosion-resistant coatings.',
      efficiency: '42% - 48% aerodynamic efficiency (Betz limit theoretical max 59.3%)',
      controlLogic: 'Feeds variable AC power; synchronized via grid-forming inverters with automated low-wind cut-in (3.0 m/s) and storm storm-lock (25 m/s).',
      metrics: [
        { label: 'Seasonal Peak', val: 'Southwest Monsoon (Jun-Sep)' },
        { label: 'Diurnal Peak', val: 'Late Afternoon to Midnight' },
        { label: 'Interconnection', val: 'Medium Voltage 11 kV Subsea Cable' }
      ]
    },
    'wave': {
      id: 'wave',
      name: 'Wave Energy Converters',
      role: 'Continuous Hydrodynamic Baseload',
      techSpec: 'Submerged and heaving point absorber arrays tuned to dominant Arabian Sea groundswell periods (6–12 seconds).',
      efficiency: '28% - 36% mechanical-to-electrical capture factor',
      controlLogic: 'Hydraulic PTO pressure accumulator buffers rapid wave crest surges, delivering smooth continuous torque to permanent magnet generator.',
      metrics: [
        { label: 'Continuity', val: '24 Hours / Day (Swell Driven)' },
        { label: 'Siting', val: 'Western Outer Barrier Reef Margin' },
        { label: 'Reef Protection', val: 'Acts as Offshore Wave Attenuator' }
      ]
    },
    'solar': {
      id: 'solar',
      name: 'Rooftop & Floating Solar PV',
      role: 'Midday Peak Solar Generator',
      techSpec: 'Bifacial marine-grade monocrystalline solar modules on municipal rooftops and wave-sheltered lagoon floating platforms.',
      efficiency: '21.5% module conversion efficiency with anti-salt mist nano-coating',
      controlLogic: 'Maximum Power Point Tracking (MPPT) inverters ramping up cleanly between 06:00 and 18:00, relieving midday island air conditioning loads.',
      metrics: [
        { label: 'Peak Hours', val: '10:00 – 15:30 IST' },
        { label: 'Average Insolation', val: '5.2 kWh / m² / day' },
        { label: 'Water Cooled', val: 'Lagoon float reduces temperature derating' }
      ]
    },
    'smart-ems': {
      id: 'smart-ems',
      name: 'Smart Energy Management (EMS)',
      role: 'AI Microgrid Brain & Dispatch Coordinator',
      techSpec: 'Edge-computed SCADA controller with sub-second frequency regulation, predictive weather forecasting, and automated spinning reserve dispatch.',
      efficiency: '> 99.2% control loop precision',
      controlLogic: 'Calculates dynamic net load in 50-millisecond cycles. Determines whether to charge battery bank, activate dump loads, or modulate wave accumulators.',
      metrics: [
        { label: 'Response Time', val: '< 20 Milliseconds' },
        { label: 'Dispatch Model', val: 'Dynamic Merit Order Dispatch' },
        { label: 'Diesel Genset Status', val: 'Automated Cold Standby' }
      ]
    },
    'bess': {
      id: 'bess',
      name: 'Battery Energy Storage (BESS)',
      role: 'Grid Stabilization & Nocturnal Buffer',
      techSpec: 'Lithium Iron Phosphate (LFP) containerized battery systems paired with grid-forming 4-quadrant bi-directional PCS inverters.',
      efficiency: '88% round-trip AC-to-AC efficiency',
      controlLogic: 'Instantaneous synthetic inertia and fast-frequency response (FFR). Absorbs excess noon solar; discharges during night calm intervals.',
      metrics: [
        { label: 'C-Rate', val: '0.5C Continuous / 1C Peak' },
        { label: 'Safety Chemistry', val: 'LFP (Non-Thermal Runaway)' },
        { label: 'Operating Cycle', val: '6,000+ Full Cycles to 80% SOH' }
      ]
    },
    'grid': {
      id: 'grid',
      name: 'Island Electricity Grid',
      role: 'Underground Resilient Distribution Ring',
      techSpec: '11 kV ring-main underground distribution cabling protected from coastal saline air and tropical cyclonic winds.',
      efficiency: '97% low-loss island distribution',
      controlLogic: 'Self-healing sectionalizers isolate localized faults without disrupting the main hospital and municipal power rings.',
      metrics: [
        { label: 'Grid Topology', val: 'Dual-Feeder Redundant Ring' },
        { label: 'Operating Voltage', val: '11 kV / 415 V, 50 Hz ±0.2 Hz' },
        { label: 'Cabling', val: '100% Underground Armored XLPE' }
      ]
    },
    'consumers': {
      id: 'consumers',
      name: 'Homes, Hospitals & Industries',
      role: 'Zero-Emission Island Beneficiaries',
      techSpec: 'Over 65,000 island residents, municipal RO desalination drinking water facilities, primary health centres, cold chains, and electric fishing boats.',
      efficiency: '100% clean power delivery',
      controlLogic: 'Demand-side management (DSM) intelligently schedules water desalination and ice generation during peak renewable generation hours.',
      metrics: [
        { label: 'Reliability', val: '99.9% Power Uptime SLA' },
        { label: 'Noise Pollution', val: 'Zero DG Diesel Hum in Settlements' },
        { label: 'Tariff Equity', val: 'Affordable, Stable Clean Energy' }
      ]
    }
  };

  const active = nodes[selectedNode] || nodes['smart-ems'];

  return (
    <section id="hybrid" className="py-24 bg-[#081522] text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-turquoise/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-turquoise/10 border border-turquoise/20 text-turquoise font-mono text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrated Microgrid Architecture</span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            THREE NATURAL RESOURCES. <br />
            <span className="text-turquoise">ONE ENERGY FUTURE.</span>
          </h2>
          
          <p className="mt-4 text-softgrey/80 text-base sm:text-lg leading-relaxed">
            No single renewable resource can power an isolated island alone. The breakthrough lies in orchestration—combining the complementary cycles of wind, ocean waves, and solar power into a unified, uninterrupted energy stream.
          </p>
        </div>

        {/* Main Flow Canvas & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Visual Animated Flow Diagram (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-turquoise/20 flex flex-col items-center">
            
            <div className="text-xs font-mono text-softgrey/70 uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-turquoise animate-ping"></span>
              <span>Interactive Topology Flow (Click any tier to inspect)</span>
            </div>

            {/* TIER 1: The Three Generation Sources */}
            <div className="w-full">
              <div className="text-center text-[11px] font-mono text-turquoise/70 uppercase tracking-widest mb-3">
                Tier 1: Multi-Resource Harvesters
              </div>

              <div className="grid grid-cols-3 gap-3">
                {/* Wind Node */}
                <button
                  onClick={() => setSelectedNode('wind')}
                  className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                    selectedNode === 'wind'
                      ? 'bg-turquoise/20 border-turquoise shadow-[0_0_20px_rgba(33,212,196,0.4)] scale-105'
                      : 'bg-ocean-surface/60 border-white/10 hover:border-turquoise/40 hover:bg-ocean-surface'
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-turquoise/10 text-turquoise">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-white">Wind Turbines</div>
                    <div className="text-[10px] text-softgrey/60 font-mono">Offshore Array</div>
                  </div>
                </button>

                {/* Wave Node */}
                <button
                  onClick={() => setSelectedNode('wave')}
                  className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                    selectedNode === 'wave'
                      ? 'bg-seagreen/20 border-seagreen shadow-[0_0_20px_rgba(54,191,166,0.4)] scale-105'
                      : 'bg-ocean-surface/60 border-white/10 hover:border-seagreen/40 hover:bg-ocean-surface'
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-seagreen/10 text-seagreen">
                    <Waves className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-white">Wave Converters</div>
                    <div className="text-[10px] text-softgrey/60 font-mono">Point Absorbers</div>
                  </div>
                </button>

                {/* Solar Node */}
                <button
                  onClick={() => setSelectedNode('solar')}
                  className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                    selectedNode === 'solar'
                      ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.4)] scale-105'
                      : 'bg-ocean-surface/60 border-white/10 hover:border-amber-400/40 hover:bg-ocean-surface'
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-white">Solar Panels</div>
                    <div className="text-[10px] text-softgrey/60 font-mono">Roof & Floating PV</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Connecting Animated Pulse 1 */}
            <div className="my-3 flex flex-col items-center">
              <div className="w-0.5 h-6 bg-gradient-to-b from-turquoise to-seagreen animate-pulse"></div>
              <ArrowDown className="w-4 h-4 text-seagreen -mt-1" />
            </div>

            {/* TIER 2: Smart Energy Management */}
            <div className="w-full">
              <button
                onClick={() => setSelectedNode('smart-ems')}
                className={`w-full p-4 rounded-2xl border text-center transition-all flex items-center justify-between gap-4 ${
                  selectedNode === 'smart-ems'
                    ? 'bg-turquoise/20 border-turquoise shadow-[0_0_25px_rgba(33,212,196,0.4)] scale-[1.02]'
                    : 'bg-ocean-surface/80 border-white/10 hover:border-turquoise/40 hover:bg-ocean-surface'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-turquoise/20 text-turquoise">
                    <Cpu className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm text-white">SMART ENERGY MANAGEMENT</div>
                    <div className="text-xs text-turquoise font-mono">Microgrid Controller & AI Dispatch Engine</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-turquoise/10 border border-turquoise/30 text-[10px] font-mono text-turquoise hidden sm:block">
                  Sub-second Grid Forming
                </div>
              </button>
            </div>

            {/* Connecting Animated Pulse 2 */}
            <div className="my-3 flex flex-col items-center">
              <div className="w-0.5 h-6 bg-gradient-to-b from-turquoise to-seagreen animate-pulse"></div>
              <ArrowDown className="w-4 h-4 text-seagreen -mt-1" />
            </div>

            {/* TIER 3: Battery Energy Storage System (BESS) */}
            <div className="w-full">
              <button
                onClick={() => setSelectedNode('bess')}
                className={`w-full p-4 rounded-2xl border text-center transition-all flex items-center justify-between gap-4 ${
                  selectedNode === 'bess'
                    ? 'bg-seagreen/20 border-seagreen shadow-[0_0_25px_rgba(54,191,166,0.4)] scale-[1.02]'
                    : 'bg-ocean-surface/80 border-white/10 hover:border-seagreen/40 hover:bg-ocean-surface'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-seagreen/20 text-seagreen">
                    <BatteryCharging className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm text-white">BATTERY STORAGE (BESS)</div>
                    <div className="text-xs text-seagreen font-mono">Lithium Iron Phosphate (LFP) Frequency Buffer</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-seagreen/10 border border-seagreen/30 text-[10px] font-mono text-seagreen hidden sm:block">
                  Fast Reserve (FFR)
                </div>
              </button>
            </div>

            {/* Connecting Animated Pulse 3 */}
            <div className="my-3 flex flex-col items-center">
              <div className="w-0.5 h-6 bg-gradient-to-b from-seagreen to-turquoise animate-pulse"></div>
              <ArrowDown className="w-4 h-4 text-turquoise -mt-1" />
            </div>

            {/* TIER 4: Island Electricity Grid */}
            <div className="w-full">
              <button
                onClick={() => setSelectedNode('grid')}
                className={`w-full p-4 rounded-2xl border text-center transition-all flex items-center justify-between gap-4 ${
                  selectedNode === 'grid'
                    ? 'bg-sky-500/20 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.4)] scale-[1.02]'
                    : 'bg-ocean-surface/80 border-white/10 hover:border-sky-400/40 hover:bg-ocean-surface'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
                    <Network className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm text-white">ISLAND ELECTRICITY GRID</div>
                    <div className="text-xs text-sky-300 font-mono">11 kV / 415 V Underground Armored Ring</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-[10px] font-mono text-sky-300 hidden sm:block">
                  Weatherproofed
                </div>
              </button>
            </div>

            {/* Connecting Animated Pulse 4 */}
            <div className="my-3 flex flex-col items-center">
              <div className="w-0.5 h-6 bg-gradient-to-b from-sky-400 to-turquoise animate-pulse"></div>
              <ArrowDown className="w-4 h-4 text-turquoise -mt-1" />
            </div>

            {/* TIER 5: Homes and Businesses */}
            <div className="w-full">
              <button
                onClick={() => setSelectedNode('consumers')}
                className={`w-full p-4 rounded-2xl border text-center transition-all flex items-center justify-between gap-4 ${
                  selectedNode === 'consumers'
                    ? 'bg-emerald-500/20 border-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.4)] scale-[1.02]'
                    : 'bg-ocean-surface/80 border-white/10 hover:border-emerald-400/40 hover:bg-ocean-surface'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Home className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm text-white">HOMES AND BUSINESSES</div>
                    <div className="text-xs text-emerald-300 font-mono">Hospitals, RO Desalination, Boats & Atoll Residents</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-[10px] font-mono text-emerald-300 hidden sm:block">
                  100% Zero Emission
                </div>
              </button>
            </div>

          </div>

          {/* Right Column: Node Telemetry & Technical Inspector (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-turquoise/30 bg-gradient-to-br from-ocean-surface to-ocean-midnight">
              <div className="flex items-center justify-between text-xs font-mono text-turquoise uppercase tracking-wider mb-2">
                <span>Subsystem Inspector</span>
                <span className="px-2 py-0.5 rounded-full bg-turquoise/10 border border-turquoise/20 text-[10px]">
                  Online & Synchronized
                </span>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-white mt-1 mb-1">
                {active.name}
              </h3>
              <div className="text-xs text-seagreen font-mono mb-4">{active.role}</div>

              <div className="space-y-4 text-xs sm:text-sm text-softgrey/85">
                <div>
                  <span className="font-semibold text-white block mb-1">Technical Specification:</span>
                  <p className="leading-relaxed bg-ocean-deep/50 p-3 rounded-xl border border-white/5 text-xs">
                    {active.techSpec}
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-white block mb-1">Conversion Efficiency & Performance:</span>
                  <p className="leading-relaxed bg-ocean-deep/50 p-3 rounded-xl border border-white/5 text-xs font-mono text-turquoise">
                    {active.efficiency}
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-white block mb-1">Automated Control Architecture:</span>
                  <p className="leading-relaxed bg-ocean-deep/50 p-3 rounded-xl border border-white/5 text-xs">
                    {active.controlLogic}
                  </p>
                </div>
              </div>

              {/* Subsystem KPIs */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 gap-2">
                {active.metrics.map((m, i) => (
                  <div key={i} className="flex items-center justify-between text-xs p-2 rounded-lg bg-white/5">
                    <span className="text-softgrey/70">{m.label}:</span>
                    <span className="font-mono font-bold text-white text-[11px]">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tri-Resource Complementarity Graph Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-seagreen uppercase tracking-wider mb-2">
                <Activity className="w-3.5 h-3.5" />
                <span>24-Hour Resource Complementarity</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                Why Solar + Wind + Wave Outperforms Single Generation
              </h4>
              <p className="text-xs text-softgrey/80 leading-relaxed mb-4">
                While solar energy peaks in the heat of noon and drops to zero by dusk, trade winds strengthen in the evening and ocean groundswells deliver reliable 24/7 hydraulic baseload.
              </p>

              {/* Graphical Complementarity Timeline Bar */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-16 text-amber-300">Solar PV:</span>
                  <div className="flex-1 bg-white/10 h-2.5 rounded-full overflow-hidden flex">
                    <div className="w-[20%] bg-transparent"></div>
                    <div className="w-[45%] bg-amber-400 rounded-full"></div>
                    <div className="w-[35%] bg-transparent"></div>
                  </div>
                  <span className="text-softgrey/60 text-[10px]">06:00 - 18:00</span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-16 text-turquoise">Offshore Wind:</span>
                  <div className="flex-1 bg-white/10 h-2.5 rounded-full overflow-hidden flex">
                    <div className="w-[30%] bg-turquoise/40"></div>
                    <div className="w-[20%] bg-turquoise/30"></div>
                    <div className="w-[50%] bg-turquoise rounded-full"></div>
                  </div>
                  <span className="text-softgrey/60 text-[10px]">Late PM / Night</span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-16 text-seagreen">Ocean Wave:</span>
                  <div className="flex-1 bg-white/10 h-2.5 rounded-full overflow-hidden flex">
                    <div className="w-full bg-seagreen rounded-full opacity-90"></div>
                  </div>
                  <span className="text-softgrey/60 text-[10px]">24h Continuous</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
