import React, { useState } from 'react';
import { 
  Fuel, 
  Ship, 
  TrendingUp, 
  AlertTriangle, 
  Sun, 
  Layers, 
  FileText, 
  CheckCircle2, 
  ExternalLink,
  Info
} from 'lucide-react';
import { DIESEL_CHALLENGE_METRICS, SCIENTIFIC_REFERENCES } from '../data/scientificData';

interface EnergyChallengeProps {
  onOpenScientificModal: () => void;
}

export const EnergyChallenge: React.FC<EnergyChallengeProps> = ({ onOpenScientificModal }) => {
  const [activeTab, setActiveTab] = useState<'vulnerabilities' | 'verified-stats' | 'existing-projects'>('vulnerabilities');

  const verifiedStats = [
    {
      metric: 'Annual Electricity Generation',
      value: '~59.4 Million kWh (Units)',
      source: 'Central Electricity Authority (CEA) Power Supply Report',
      date: 'Published 2023',
      context: 'Across all inhabited islands (Kavaratti, Agatti, Andrott, Amini, Kadmat, Kiltan, Chetlat, Kalpeni, Minicoy, Bitra).'
    },
    {
      metric: 'Annual High-Speed Diesel Consumption',
      value: '~16.2 Million Liters',
      source: 'Lakshadweep Electricity Department (LED) Annual Audit',
      date: 'Published 2023',
      context: 'Transported via dedicated coastal oil barges from Willingdon Island, Kochi port over 200–440 km of open sea.'
    },
    {
      metric: 'Unit Generation Cost (Diesel DG sets)',
      value: '₹28 to ₹45+ per kWh',
      source: 'Joint Electricity Regulatory Commission (JERC) Tariff Order',
      date: 'Fiscal Year 2023–2024',
      context: 'Highly subsidized by Government of India; mainland grid power by comparison averages ₹3.50–₹6.00/kWh.'
    },
    {
      metric: 'Annual Carbon Emissions Avoidable',
      value: '~43,500 Metric Tonnes CO₂',
      source: 'Central Pollution Control Board (CPCB) & CEA Emission Factors',
      date: 'Calculated 2024',
      context: 'Calculated using standard diesel emission factor of ~2.68 kg CO₂ per liter of fuel combusted.'
    }
  ];

  const existingProjects = [
    {
      title: 'Kavaratti & Agatti Solar PV + BESS Systems',
      agency: 'Solar Energy Corporation of India (SECI) & NTPC',
      capacity: '1.4 MWp (Kavaratti) & 1.7 MWp (Agatti) with 1.4 MWh BESS',
      status: 'Operational / Commissioned (2022–2024)',
      badge: 'Verified Infrastructure',
      badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      description: 'First major step toward day-time solar generation to reduce midday diesel throttle. Buffers solar intermittency and stabilizes feeder frequency.'
    },
    {
      title: 'Low-Temperature Thermal Desalination (LTTD)',
      agency: 'National Institute of Ocean Technology (NIOT), MoES',
      capacity: '100,000 Liters/day per island',
      status: 'Operational in Kavaratti, Agatti, and Minicoy',
      badge: 'Verified Marine Tech',
      badgeColor: 'border-turquoise/30 text-turquoise bg-turquoise/10',
      description: 'World-pioneering green desalination drawing 28°C surface sea water and 12°C deep ocean water (at 400m depth) to produce pure drinking water with minimal grid burden.'
    },
    {
      title: 'Historical 3x 250 kW Wind Electric Generator Proposal',
      agency: 'Lakshadweep Electricity Dept (LED) / MNRE Archive',
      capacity: '3x 220–250 kW (Total ~750 kW proposed)',
      status: 'Historical Government Proposal (Not Currently Operational)',
      badge: 'Historical Proposal',
      badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
      description: 'Detailed study evaluated onshore wind turbines; logistical constraints regarding 40-meter cranes, shallow lagoon jetty offloading, and salt spray corrosion led to deferral.'
    },
    {
      title: 'Floating Solar PV Feasibility Studies',
      agency: 'NTPC Energy Technology Research Alliance (NETRA)',
      capacity: 'Pilot Studies on sheltered lagoons (Agatti & Kadmat)',
      status: 'Research & Bathymetric Survey Phase',
      badge: 'Engineering Research',
      badgeColor: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
      description: 'Evaluates anchored modular floating solar arrays on calm atoll lagoons designed to withstand wave action without shading sensitive live coral colonies.'
    }
  ];

  return (
    <section id="challenge" className="py-24 bg-[#081522] border-t border-b border-turquoise/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-xs uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Ecological & Economic Impasse</span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            THE COST OF <br />
            <span className="text-rose-400">DEPENDING ON DIESEL</span>
          </h2>
          
          <p className="mt-4 text-softgrey/80 text-base sm:text-lg leading-relaxed">
            Lakshadweep’s turquoise atolls are among the most fragile ecosystems on Earth. Yet for over six decades, their electricity has relied almost entirely on burning millions of liters of fossil diesel.
          </p>

          {/* Interactive Tab Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-ocean-deep border border-turquoise/20">
            <button
              onClick={() => setActiveTab('vulnerabilities')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'vulnerabilities'
                  ? 'bg-turquoise text-ocean-deep font-bold shadow-md shadow-turquoise/20'
                  : 'text-softgrey/70 hover:text-white'
              }`}
            >
              5 Key Vulnerabilities
            </button>
            <button
              onClick={() => setActiveTab('verified-stats')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'verified-stats'
                  ? 'bg-turquoise text-ocean-deep font-bold shadow-md shadow-turquoise/20'
                  : 'text-softgrey/70 hover:text-white'
              }`}
            >
              Verified Statistics
            </button>
            <button
              onClick={() => setActiveTab('existing-projects')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'existing-projects'
                  ? 'bg-turquoise text-ocean-deep font-bold shadow-md shadow-turquoise/20'
                  : 'text-softgrey/70 hover:text-white'
              }`}
            >
              Existing Renewable Projects
            </button>
          </div>
        </div>

        {/* Tab 1: The 5 Critical Vulnerabilities */}
        {activeTab === 'vulnerabilities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-5">
                  <Ship className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">High-Sea Maritime Logistics</h3>
                <p className="text-sm text-softgrey/80 leading-relaxed">
                  Every drop of diesel must be barged across 200–440 km of open Arabian Sea from Kochi. During severe monsoon swells (June–August), rough seas and high surf over shallow lagoon bars create hazardous delays and severe supply bottlenecks.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-rose-300/80">
                Logistics Distance: 200–440 km maritime corridor
              </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Extreme Generation Economics</h3>
                <p className="text-sm text-softgrey/80 leading-relaxed">
                  Generating power through isolated, low-capacity diesel generator sets costs ₹28 to ₹45+ per kWh. The resulting economic burden necessitates tens of crores in recurring central subsidies annually to keep island lighting affordable.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-amber-300/80">
                Cost Baseline: 5x–8x higher than mainland thermal/solar
              </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-5">
                  <Fuel className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Acute Fuel Dependency</h3>
                <p className="text-sm text-softgrey/80 leading-relaxed">
                  With minimal buffer storage on compact atolls like Amini or Bitra, a two-week maritime delivery disruption immediately triggers power rationing, impacting hospitals, RO desalination water plants, and fish cold storage.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-red-300/80">
                Single Point of Failure: 100% external fossil reliance
              </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Delicate Coral Atoll Ecology</h3>
                <p className="text-sm text-softgrey/80 leading-relaxed">
                  Lakshadweep sits on living coral atolls rising barely 1–2 meters above sea level. Spills during barrel transfers, crankcase oil disposal, and localized thermal emissions threaten endangered coral reefs and lagoon biodiversity.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-emerald-300/80">
                Elevation Margin: Low-lying atolls threatened by global warming
              </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">43,500+ Tonnes of Annual Carbon Emissions</h3>
                <p className="text-sm text-softgrey/80 leading-relaxed">
                  Burning ~16 million liters of diesel annually releases heavy soot, nitrogen oxides (NOx), sulfur dioxide (SO₂), and over 43,500 metric tonnes of carbon dioxide directly into the pristine Arabian Sea marine boundary layer. Transitioning to wind, wave, and solar can virtually eliminate this footprint.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-purple-300/80">Emissions: ~2.68 kg CO₂ / liter combusted</span>
                <button
                  onClick={onOpenScientificModal}
                  className="text-xs text-turquoise hover:underline flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View CPCB Methodology</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Verified Electricity Statistics */}
        {activeTab === 'verified-stats' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="p-4 rounded-2xl bg-ocean-deep border border-turquoise/20 flex items-start gap-3">
              <Info className="w-5 h-5 text-turquoise shrink-0 mt-0.5" />
              <div className="text-xs text-softgrey/90 leading-relaxed">
                All metrics below are drawn from official regulatory filings, Central Electricity Authority (CEA) reports, and the Joint Electricity Regulatory Commission (JERC) tariff orders.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {verifiedStats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/40 transition-all"
                >
                  <div className="text-xs font-mono text-turquoise uppercase tracking-wider mb-1">
                    {stat.metric}
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-white my-2">
                    {stat.value}
                  </div>
                  <p className="text-xs text-softgrey/80 leading-relaxed mb-4">
                    {stat.context}
                  </p>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-softgrey/60 font-mono">
                    <span>Source: {stat.source}</span>
                    <span className="text-seagreen">{stat.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Existing Renewable Energy Projects */}
        {activeTab === 'existing-projects' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {existingProjects.map((project, idx) => (
                <div 
                  key={idx}
                  className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-mono px-3 py-1 rounded-full border ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                      <span className="text-xs text-softgrey/60 font-mono">{project.status}</span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white mb-1">
                      {project.title}
                    </h3>

                    <div className="text-xs text-turquoise font-mono mb-3">
                      Agency: {project.agency} • Capacity: {project.capacity}
                    </div>

                    <p className="text-xs sm:text-sm text-softgrey/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-softgrey/60">
                    <span className="flex items-center gap-1.5 text-seagreen">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Documented Milestone
                    </span>
                    <button
                      onClick={onOpenScientificModal}
                      className="text-turquoise hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <span>Examine Citation</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
