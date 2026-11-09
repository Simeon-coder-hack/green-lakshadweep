import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Waves, 
  Wind, 
  Sun, 
  ShieldCheck, 
  Zap, 
  FileText, 
  CheckCircle2, 
  ChevronRight,
  Info
} from 'lucide-react';
import { ISLANDS, IslandData } from '../data/islandsData';

interface IslandExplorerProps {
  onOpenScientificModal: () => void;
}

export const IslandExplorer: React.FC<IslandExplorerProps> = ({ onOpenScientificModal }) => {
  const [selectedIsland, setSelectedIsland] = useState<IslandData>(ISLANDS[0]); // default to Kavaratti

  // Mapping coordinate bounding box:
  // Lat: 8.0 to 12.0 N
  // Lng: 71.5 to 74.0 E
  const getMapPosition = (lat: number, lng: number) => {
    // Top-to-bottom: 12.0 N is near top (0%), 8.0 N is near bottom (100%)
    const topPct = ((12.0 - lat) / (12.0 - 8.0)) * 88 + 6;
    // Left-to-right: 71.8 E is left (0%), 74.0 E is right (100%)
    const leftPct = ((lng - 71.8) / (74.0 - 71.8)) * 84 + 8;
    return { top: `${topPct}%`, left: `${leftPct}%` };
  };

  return (
    <section id="explorer" className="py-24 bg-[#081522] text-white relative overflow-hidden border-t border-b border-turquoise/10">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-turquoise/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-turquoise/10 border border-turquoise/20 text-turquoise font-mono text-xs uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Geospatial Resource Mapping</span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            ISLAND <br />
            <span className="text-turquoise">EXPLORER</span>
          </h2>
          
          <p className="mt-4 text-softgrey/80 text-base sm:text-lg leading-relaxed">
            Every atoll in the Lakshadweep archipelago possesses distinct geographic morphology, lagoon bathymetry, and swell exposure. Explore verified energy data and scientific research opportunities island by island.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-softgrey/70 font-mono">
            <Info className="w-3.5 h-3.5 text-turquoise" />
            <span>Strict Scientific Standard: Island metrics derived only from verified administration & MetOcean records.</span>
          </div>
        </div>

        {/* Main Grid: Interactive Map (Left) & Telemetry Dossier (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map Canvas (7 cols) */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-turquoise/20 flex flex-col items-center">
            
            <div className="w-full flex items-center justify-between text-xs font-mono text-softgrey/60 mb-4 pb-3 border-b border-white/10">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-turquoise" />
                <span>Lakshadweep Sea • Arabian Sea Basin</span>
              </span>
              <span className="text-turquoise">Click an atoll to inspect</span>
            </div>

            {/* Interactive SVG / Visual Map Container */}
            <div className="relative w-full h-[520px] sm:h-[600px] bg-gradient-to-b from-[#061B2B] via-[#07243a] to-[#061B2B] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-4">
              
              {/* Subtle geographic grid lines */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-6 opacity-10 pointer-events-none">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="border border-turquoise"></div>
                ))}
              </div>

              {/* Ocean depth bathymetric contours (artistic SVG backdrop) */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 600">
                <path d="M50,80 Q150,150 120,300 T80,500" stroke="#21D4C4" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                <path d="M250,50 Q320,200 280,400 T220,580" stroke="#36BFA6" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M180,20 Q220,250 190,480" stroke="#21D4C4" strokeWidth="1.5" fill="none" opacity="0.4" />
              </svg>

              {/* Coordinates Markers on Map */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-softgrey/40">
                12°00' N / 71°48' E
              </div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-softgrey/40">
                08°00' N / 74°00' E
              </div>

              {/* Island Interactive Pins */}
              {ISLANDS.map((island) => {
                const pos = getMapPosition(island.coordinates.lat, island.coordinates.lng);
                const isSelected = selectedIsland.id === island.id;

                return (
                  <div
                    key={island.id}
                    style={{ top: pos.top, left: pos.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      onClick={() => setSelectedIsland(island)}
                      className="group flex flex-col items-center focus:outline-none"
                    >
                      {/* Animated Ping Ring if Selected */}
                      <div className="relative flex items-center justify-center">
                        {isSelected && (
                          <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-turquoise opacity-75"></span>
                        )}
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${
                            isSelected
                              ? 'bg-turquoise border-white shadow-[0_0_20px_rgba(33,212,196,0.8)] scale-125'
                              : 'bg-ocean-midnight/90 border-turquoise/60 hover:border-turquoise hover:scale-110'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-ocean-deep' : 'bg-turquoise'}`} />
                        </div>
                      </div>

                      {/* Island Name Tag */}
                      <span
                        className={`mt-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold tracking-tight whitespace-nowrap transition-all ${
                          isSelected
                            ? 'bg-turquoise text-ocean-deep shadow-md'
                            : 'bg-ocean-midnight/80 text-white/90 border border-white/10 group-hover:text-turquoise'
                        }`}
                      >
                        {island.name}
                      </span>
                    </button>
                  </div>
                );
              })}

            </div>

            {/* Quick Island Selector Pills */}
            <div className="w-full mt-4 flex flex-wrap gap-1.5 justify-center">
              {ISLANDS.map((island) => (
                <button
                  key={island.id}
                  onClick={() => setSelectedIsland(island)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono transition-all border ${
                    selectedIsland.id === island.id
                      ? 'bg-turquoise text-ocean-deep font-bold border-turquoise shadow-sm'
                      : 'bg-ocean-surface text-softgrey/80 border-white/10 hover:text-white'
                  }`}
                >
                  {island.name}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Island Dossier (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-turquoise/30 bg-gradient-to-br from-ocean-surface to-ocean-midnight">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-turquoise/10 border border-turquoise/30 text-turquoise text-[11px] font-mono">
                  {selectedIsland.highlightTag}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{selectedIsland.dataConfidence}</span>
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-3xl font-display font-extrabold text-white">
                {selectedIsland.name} Atoll
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-softgrey/85 leading-relaxed">
                {selectedIsland.description}
              </p>

              {/* Geographical Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-ocean-deep/60 border border-white/5">
                  <div className="text-[10px] font-mono text-softgrey/60">COORDINATES</div>
                  <div className="text-xs font-mono font-bold text-white mt-0.5">
                    {selectedIsland.coordinates.lat}° N, {selectedIsland.coordinates.lng}° E
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-ocean-deep/60 border border-white/5">
                  <div className="text-[10px] font-mono text-softgrey/60">LAND AREA</div>
                  <div className="text-xs font-mono font-bold text-white mt-0.5">
                    {selectedIsland.areaKm2} km²
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-ocean-deep/60 border border-white/5">
                  <div className="text-[10px] font-mono text-softgrey/60">LAGOON AREA</div>
                  <div className="text-xs font-mono font-bold text-turquoise mt-0.5">
                    {selectedIsland.lagoonAreaKm2} km²
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-ocean-deep/60 border border-white/5">
                  <div className="text-[10px] font-mono text-softgrey/60">TO KOCHI PORT</div>
                  <div className="text-xs font-mono font-bold text-white mt-0.5">
                    {selectedIsland.distanceFromKochiKm} km
                  </div>
                </div>
              </div>

              {/* Verified Existing Infrastructure Dossier */}
              <div className="mb-6 space-y-3">
                <div className="text-xs font-mono text-seagreen uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-seagreen" />
                  <span>Verified Existing Energy Infrastructure</span>
                </div>

                <div className="p-4 rounded-2xl bg-ocean-deep/80 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-softgrey/70">Diesel Generator Powerhouse:</span>
                    <span className="font-mono font-bold text-white text-right">
                      {selectedIsland.existingInfrastructure.dieselCapacity}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-softgrey/70">Grid-Connected Solar PV:</span>
                    <span className="font-mono font-bold text-amber-300 text-right">
                      {selectedIsland.existingInfrastructure.solarPV}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-softgrey/70">Battery Storage (BESS):</span>
                    <span className="font-mono font-bold text-seagreen text-right">
                      {selectedIsland.existingInfrastructure.bessStorage}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-softgrey/70">Drinking Water Desalination:</span>
                    <span className="font-mono font-bold text-sky-300 text-right">
                      {selectedIsland.existingInfrastructure.desalination}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-[10px] text-softgrey/50 font-mono flex items-center justify-between">
                    <span>Source: {selectedIsland.existingInfrastructure.source}</span>
                    <span>Date: {selectedIsland.existingInfrastructure.statusDate}</span>
                  </div>
                </div>
              </div>

              {/* Potential Renewable Energy Research Opportunities */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-turquoise uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-turquoise" />
                  <span>Renewable Energy Research Opportunities</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-ocean-deep/50 border border-white/5 flex items-start gap-3">
                    <Wind className="w-4 h-4 text-turquoise shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white block">Wind Potential:</span>
                      <p className="text-xs text-softgrey/80 leading-relaxed">
                        {selectedIsland.renewableOpportunities.wind}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-ocean-deep/50 border border-white/5 flex items-start gap-3">
                    <Waves className="w-4 h-4 text-seagreen shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white block">Wave Resource:</span>
                      <p className="text-xs text-softgrey/80 leading-relaxed">
                        {selectedIsland.renewableOpportunities.wave}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-ocean-deep/50 border border-white/5 flex items-start gap-3">
                    <Sun className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white block">Solar Deployment:</span>
                      <p className="text-xs text-softgrey/80 leading-relaxed">
                        {selectedIsland.renewableOpportunities.solar}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-ocean-deep/50 border border-white/5 flex items-start gap-3">
                    <Compass className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white block">Tidal Hydrokinetic Feasibility:</span>
                      <p className="text-xs text-softgrey/80 leading-relaxed">
                        {selectedIsland.renewableOpportunities.tidalFeasibility}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
