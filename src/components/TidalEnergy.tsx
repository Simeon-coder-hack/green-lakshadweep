import React from 'react';
import { 
  Waves, 
  ShieldAlert, 
  CheckCircle2, 
  HelpCircle, 
  Compass, 
  Fish, 
  Anchor, 
  Gauge, 
  AlertTriangle,
  FileSearch
} from 'lucide-react';

interface TidalEnergyProps {
  onOpenScientificModal: () => void;
}

export const TidalEnergy: React.FC<TidalEnergyProps> = ({ onOpenScientificModal }) => {
  return (
    <section id="tidal" className="py-24 bg-[#061B2B] text-white relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-turquoise/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Hydrokinetic Stream Dynamics</span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            TURNING TIDAL MOVEMENT <br />
            <span className="text-sky-400">INTO ELECTRICITY</span>
          </h2>
          
          <p className="mt-4 text-softgrey/80 text-base sm:text-lg leading-relaxed">
            The gravitational pull of the moon and sun creates rhythmic oceanic tides. Harnessing underwater currents requires precise hydrodynamic physics and uncompromised ecological safeguarding.
          </p>
        </div>

        {/* Scientific Rigor & Non-Fabrication Notice */}
        <div className="glass-panel p-6 rounded-3xl border border-sky-500/30 bg-sky-500/5 mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold block mb-1">
                  Scientific Integrity Principle • Verified Physical Boundaries
                </span>
                <p className="text-xs sm:text-sm text-softgrey/90 leading-relaxed max-w-3xl">
                  In accordance with strict scientific accuracy, <strong className="text-white">Green Lakshadweep does not publish fabricated or unverified tidal energy potential figures</strong>. While tidal surges occur through atoll reef channels, commercial tidal stream deployment requires comprehensive in-situ Acoustic Doppler Current Profiler (ADCP) survey campaigns.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenScientificModal}
              className="shrink-0 px-4 py-2 rounded-xl bg-ocean-surface hover:bg-ocean-deep border border-sky-500/30 text-sky-300 text-xs font-mono flex items-center gap-2 transition-all"
            >
              <FileSearch className="w-3.5 h-3.5" />
              <span>Methodology Docket</span>
            </button>
          </div>
        </div>

        {/* Physics & Engineering Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: How Tidal Turbines Work */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise mb-4">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">How Tidal Turbines Work</h3>
              <p className="text-xs sm:text-sm text-softgrey/80 leading-relaxed">
                Tidal stream generators operate akin to underwater wind turbines. Horizontal or vertical axis hydrokinetic rotors extract kinetic energy from flood and ebb tidal currents, mounted on seabed gravity foundations or anchored tension-leg platforms.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-turquoise">
              100% Predictable: Governed by lunar celestial mechanics
            </div>
          </div>

          {/* Card 2: Density Advantage vs Velocity Threshold */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-seagreen/10 border border-seagreen/20 flex items-center justify-center text-seagreen mb-4">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">Water Density vs Velocity Threshold</h3>
              <p className="text-xs sm:text-sm text-softgrey/80 leading-relaxed">
                Seawater is approximately <strong className="text-white">832 times denser than air</strong> (ρ ≈ 1,025 kg/m³). Thus, a 2.0 m/s water current carries power equivalent to a 19 m/s storm wind. However, commercial turbines typically mandate flow velocities &gt; 1.8–2.5 m/s for economic viability.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-seagreen">
              Formula: P = 0.5 · ρ_water · A · v³
            </div>
          </div>

          {/* Card 3: Marine Environmental Considerations */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-turquoise/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Fish className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">Marine Ecology Considerations</h3>
              <p className="text-xs sm:text-sm text-softgrey/80 leading-relaxed">
                Lakshadweep lagoons are delicate nurseries for sea turtles, manta rays, and live hermatypic corals. Rotational tip speeds must remain below acoustic and kinetic injury thresholds (&lt; 10–12 m/s), paired with acoustic deterrents and turtle-exclusion shrouds.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-emerald-300">
              Zero Impact Policy: Low RPM hydrodynamic shrouds
            </div>
          </div>

        </div>

        {/* Technical Feasibility Breakdown for Lakshadweep */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
            Technical Feasibility Assessment for Lakshadweep Atolls
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-softgrey/80 leading-relaxed">
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-ocean-surface/60 border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-seagreen" />
                  <span>Semi-Diurnal Tidal Range (0.6m – 1.7m)</span>
                </div>
                <p className="text-xs text-softgrey/70">
                  Lakshadweep experiences micro to meso-tidal regimes with typical spring tidal elevations reaching 1.4–1.7 meters. While tidal range barrages are environmentally unsuitable for living atolls, narrow reef passes concentrate moving volume during ebb and flood cycles.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ocean-surface/60 border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Channel Depth & Maritime Vessel Draft</span>
                </div>
                <p className="text-xs text-softgrey/70">
                  Natural reef cuts into atolls (such as the entrance pass into Kavaratti or Agatti lagoons) have water depths ranging between 3 to 10 meters. Submerged rotors require minimum seabed clearance and sufficient overhead draught to prevent interference with inter-island passenger ferries and local fishing dhows.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-ocean-surface/60 border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-seagreen" />
                  <span>Sediment Transport & Coral Sand Mobility</span>
                </div>
                <p className="text-xs text-softgrey/70">
                  Tidal channels maintain lagoon water exchange and sediment equilibrium. Any submerged hydrokinetic structure must undergo numerical hydrodynamic modeling (such as Telemac or Delft3D) to guarantee that tidal velocities are not attenuated to the detriment of lagoon flushing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ocean-surface/60 border border-turquoise/20">
                <div className="flex items-center gap-2 text-turquoise font-bold mb-1">
                  <Compass className="w-4 h-4 text-turquoise" />
                  <span>Green Lakshadweep Phased Roadmap</span>
                </div>
                <p className="text-xs text-softgrey/70">
                  Rather than making premature commercial claims, our startup roadmap begins with deployable seabed Acoustic Doppler Current Profilers (ADCP) to record 12 months of high-resolution velocity transects across 4 selected channel passes.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
