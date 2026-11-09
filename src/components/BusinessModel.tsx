import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  Wind, 
  Waves, 
  Cpu, 
  Battery, 
  LineChart, 
  Wrench, 
  TrendingDown, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Globe2
} from 'lucide-react';

export const BusinessModel: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const startupServices = [
    {
      title: 'Renewable Feasibility Studies',
      icon: Search,
      tag: 'MetOcean & Bathymetry',
      color: 'text-turquoise',
      bg: 'bg-turquoise/10',
      border: 'border-turquoise/30',
      summary: 'High-resolution acoustic Doppler profiling, wave buoy deployment, and satellite wind modeling.',
      deliverables: [
        '12-month in-situ MetOcean resource measurement campaigns',
        'Numerical hydrodynamic modeling (Delft3D / Telemac)',
        'Environmental Impact Assessment (EIA) for coral reef ecosystems',
        'Geotechnical seabed anchor feasibility reports'
      ]
    },
    {
      title: 'Marinized Wind Installation',
      icon: Wind,
      tag: 'Typhoon & Salt Resilient',
      color: 'text-turquoise',
      bg: 'bg-turquoise/10',
      border: 'border-turquoise/30',
      summary: 'Turnkey engineering and offshore micro-siting of marinized Class III/S wind turbines.',
      deliverables: [
        'Near-shore monopile and reef-edge spar buoy micro-siting',
        'Specialized barge and floating crane mobilization logistics',
        'C5-M marine anti-corrosion coating and sealed nacelles',
        'Grid-forming power conditioning synchronization'
      ]
    },
    {
      title: 'Wave Energy Research & Pilots',
      icon: Waves,
      tag: 'Hydrodynamic Innovation',
      color: 'text-seagreen',
      bg: 'bg-seagreen/10',
      border: 'border-seagreen/30',
      summary: 'Pioneering wave energy converter (WEC) prototypes tuned to Arabian Sea long-period groundswells.',
      deliverables: [
        'Subsea anchor tethering and mooring compliance',
        'Resonant hydraulic power take-off (PTO) bench testing',
        'Breakwater-integrated oscillating water column (OWC) pilots',
        'Oceanographic buoy telemetry and acoustic monitoring'
      ]
    },
    {
      title: 'Hybrid Microgrid Development',
      icon: Cpu,
      tag: 'Grid-Forming Synchrony',
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/30',
      summary: 'Architecting synchronized multi-source island grids that operate without spinning diesel reserves.',
      deliverables: [
        'Virtual Synchronous Generator (VSG) inverter design',
        'Underground armored 11 kV ring distribution engineering',
        'Automated black-start and islanding capabilities',
        'SCADA integration with island utility dispatch powerhouses'
      ]
    },
    {
      title: 'Battery Storage Integration',
      icon: Battery,
      tag: 'Utility Scale BESS',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      summary: 'High-safety containerized Lithium Iron Phosphate (LFP) energy storage systems.',
      deliverables: [
        'Multi-megawatt hour containerized LFP architectures',
        'Liquid cooling designed for high-humidity tropical atolls',
        'Fast-frequency response (FFR) sub-20ms reaction loops',
        'Modular scalable capacity for future EV boat charging'
      ]
    },
    {
      title: 'Smart AI Energy Monitoring',
      icon: LineChart,
      tag: 'Predictive SCADA SaaS',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      summary: 'Cloud and edge predictive dispatch software optimizing generation 48 hours in advance.',
      deliverables: [
        'AI wave swell and solar irradiance forecasting',
        'Dynamic merit order dispatch algorithms',
        'Automated carbon avoidance audit and ESG compliance reports',
        'Real-time municipal mobile app for island residents'
      ]
    },
    {
      title: 'Maintenance & Consulting',
      icon: Wrench,
      tag: 'Lifecycle Stewardship',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      summary: 'End-to-end marine O&M, utility advisory, and Viability Gap Funding (VGF) project structuring.',
      deliverables: [
        'Subsea inspection via autonomous underwater vehicles (AUVs)',
        'Local island technical workforce skill-development programs',
        'VGF grant applications and green climate bond structuring',
        'Regulatory tariff filings before electricity regulatory bodies'
      ]
    }
  ];

  return (
    <section id="business" className="py-24 bg-[#061B2B] text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-seagreen/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-seagreen/10 border border-seagreen/20 text-seagreen font-mono text-xs uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Commercialization & Startup Model</span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            HOW GREEN LAKSHADWEEP <br />
            <span className="text-turquoise">OPERATES AS A STARTUP</span>
          </h2>
          
          <p className="mt-4 text-softgrey/80 text-base sm:text-lg leading-relaxed">
            Transitioning remote archipelagos requires more than hardware; it demands specialized island engineering, innovative financing, and an integrated operational services model.
          </p>
        </div>

        {/* LCOE & Generation Cost Economics Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-turquoise/30 mb-16 bg-gradient-to-br from-ocean-surface/80 via-ocean-midnight to-ocean-deep">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-turquoise">
                Transformational Unit Economics
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
                Levelized Cost of Electricity (LCOE) Comparison
              </h3>
              <p className="text-xs text-softgrey/80 mt-1">
                Replacing volatile maritime diesel imports with fixed capital investment unlocks massive recurring savings for government budgets and utility operators.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center">
                <div className="text-[10px] font-mono text-rose-300">INCUMBENT DIESEL</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-rose-400">
                  ₹28–₹45<span className="text-xs font-normal">/kWh</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-turquoise/15 border border-turquoise/40 text-center shadow-[0_0_20px_rgba(33,212,196,0.3)]">
                <div className="text-[10px] font-mono text-turquoise">GREEN LAKSHADWEEP</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-turquoise">
                  ₹12–₹16<span className="text-xs font-normal">/kWh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs text-softgrey/80 leading-relaxed">
            <div>
              <span className="font-bold text-white block mb-1">Fuel Price Insulation:</span>
              Once deployed, renewable wave, wind, and solar eliminate the volatility of global crude oil and high-sea barge charter costs.
            </div>
            <div>
              <span className="font-bold text-white block mb-1">Fiscal Subsidy Relief:</span>
              The Ministry of Power and Island Administration can redeploy tens of crores currently spent on recurring fuel subsidies into island healthcare and education.
            </div>
            <div>
              <span className="font-bold text-white block mb-1">Exportable Island IP:</span>
              Solutions proven across Lakshadweep’s atolls create a validated export platform for 1,200+ isolated island grids across the Indian Ocean and South Pacific.
            </div>
          </div>
        </div>

        {/* The 7 Core Startup Service Pillars */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-turquoise uppercase tracking-wider">
              Seven Core Competencies
            </span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">
              End-to-End Archipelago Energy Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startupServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl ${service.bg} border ${service.border} ${service.color} group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-softgrey/60 px-2 py-0.5 rounded-md bg-white/5">
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-bold text-white mb-1 group-hover:text-turquoise transition-colors">
                      {service.title}
                    </h4>
                    <div className={`text-xs font-mono ${service.color} mb-3`}>{service.tag}</div>

                    <p className="text-xs text-softgrey/80 leading-relaxed mb-4">
                      {service.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-1.5">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-[11px] text-softgrey/70">
                        <Check className="w-3.5 h-3.5 text-seagreen shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3-Phase Scalability Roadmap */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-seagreen uppercase tracking-wider">
              Strategic Commercialization Timeline
            </span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">
              From Scientific Pilot to 100% Island Net-Zero
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Phase 1 */}
            <div className="p-6 rounded-2xl bg-ocean-surface/60 border border-turquoise/30 space-y-3 relative">
              <div className="flex items-center justify-between text-xs font-mono text-turquoise">
                <span className="font-bold">PHASE 1</span>
                <span>2026 – 2027</span>
              </div>
              <h4 className="text-lg font-bold text-white">Resource Mapping & 250 kW Pilot</h4>
              <p className="text-xs text-softgrey/80 leading-relaxed">
                Deploy 4 MetOcean buoys off Kavaratti and Agatti; install first marinized 250 kW wind generator and wave point absorber buoy with 1.4 MWh BESS synchronization.
              </p>
              <div className="text-[11px] font-mono text-turquoise/80 pt-2">
                Target: 30% Diesel Displacement on Pilot Island
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-6 rounded-2xl bg-ocean-surface/60 border border-seagreen/30 space-y-3 relative">
              <div className="flex items-center justify-between text-xs font-mono text-seagreen">
                <span className="font-bold">PHASE 2</span>
                <span>2028 – 2030</span>
              </div>
              <h4 className="text-lg font-bold text-white">Multi-Island Microgrid Expansion</h4>
              <p className="text-xs text-softgrey/80 leading-relaxed">
                Expand to 5 major inhabited atolls (Minicoy, Kadmat, Kalpeni, Amini); aggregate 6 MW hybrid renewable capacity with AI predictive dispatch.
              </p>
              <div className="text-[11px] font-mono text-seagreen/80 pt-2">
                Target: 75% Archipelago Clean Energy Fraction
              </div>
            </div>

            {/* Phase 3 */}
            <div className="p-6 rounded-2xl bg-ocean-surface/60 border border-white/20 space-y-3 relative">
              <div className="flex items-center justify-between text-xs font-mono text-white">
                <span className="font-bold">PHASE 3</span>
                <span>2031 – 2035</span>
              </div>
              <h4 className="text-lg font-bold text-white">100% Net-Zero & Global Atoll Export</h4>
              <p className="text-xs text-softgrey/80 leading-relaxed">
                Complete decommissioning of primary diesel generators to warm standby; commercialize exportable tropical island microgrid technology to Indian Ocean and Pacific states.
              </p>
              <div className="text-[11px] font-mono text-white/80 pt-2">
                Target: 100% Zero Emission Self-Reliance
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
