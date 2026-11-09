import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink, 
  ShieldAlert, 
  Layers, 
  Scale, 
  FileText,
  Filter
} from 'lucide-react';
import { SCIENTIFIC_REFERENCES, ResearchReference } from '../data/scientificData';

interface ScientificModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScientificModal: React.FC<ScientificModalProps> = ({ isOpen, onClose }) => {
  const [filter, setFilter] = useState<string>('all');

  if (!isOpen) return null;

  const categories = [
    'all',
    'Verified Research Data',
    'Historical Government Proposals',
    'Engineering Estimates',
    'Simulated Demonstration Data'
  ];

  const filteredReferences = filter === 'all'
    ? SCIENTIFIC_REFERENCES
    : SCIENTIFIC_REFERENCES.filter(r => r.category === filter);

  const getBadgeStyle = (category: ResearchReference['category']) => {
    switch (category) {
      case 'Verified Research Data':
        return 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400';
      case 'Historical Government Proposals':
        return 'bg-amber-500/15 border-amber-500/30 text-amber-400';
      case 'Engineering Estimates':
        return 'bg-sky-500/15 border-sky-500/30 text-sky-400';
      case 'Simulated Demonstration Data':
        return 'bg-purple-500/15 border-purple-500/30 text-purple-400';
      default:
        return 'bg-white/10 border-white/20 text-white';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-[#081522] border border-turquoise/30 rounded-3xl shadow-[0_0_50px_rgba(33,212,196,0.2)] flex flex-col overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-ocean-surface/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-turquoise/15 text-turquoise border border-turquoise/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-display font-extrabold text-white">
                Scientific References & Data Methodology
              </h3>
              <p className="text-xs text-softgrey/70 font-mono">
                Full documentation of verified research, historical records, and simulation parameters.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-softgrey hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Classification Filter Tabs */}
        <div className="px-6 py-3 border-b border-white/10 bg-ocean-deep/60 flex items-center gap-2 overflow-x-auto">
          <Filter className="w-3.5 h-3.5 text-softgrey/60 shrink-0 ml-1 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                filter === cat
                  ? 'bg-turquoise text-ocean-deep font-bold border-turquoise'
                  : 'bg-ocean-surface text-softgrey/80 border-white/10 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Data Classifications' : cat}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-softgrey/90">
          
          {/* Scientific Transparency Commitment */}
          <div className="p-4 rounded-2xl bg-ocean-surface/80 border border-turquoise/20 flex items-start gap-3">
            <Scale className="w-5 h-5 text-turquoise shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <strong className="text-white block mb-0.5">Scientific Rigor Guarantee:</strong>
              Green Lakshadweep adheres to peer-reviewed standards. All physical measurements (wave heights, density, historical proposals, diesel consumption) are cited from published academic journals and government agency reports. Demonstration dashboard metrics are explicitly labeled as computer-simulated models.
            </div>
          </div>

          {/* References List */}
          <div className="space-y-4">
            {filteredReferences.map((ref) => (
              <div 
                key={ref.id}
                className="p-5 rounded-2xl bg-ocean-deep/90 border border-white/10 hover:border-turquoise/30 transition-all space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${getBadgeStyle(ref.category)}`}>
                    {ref.category}
                  </span>
                  <span className="text-xs font-mono text-softgrey/60">{ref.year}</span>
                </div>

                <h4 className="text-base font-bold text-white">
                  {ref.title}
                </h4>

                <div className="text-xs text-turquoise/90 font-mono">
                  {ref.authorsOrInstitution} • <em>{ref.publication}</em>
                </div>

                <p className="text-xs text-softgrey/80 leading-relaxed bg-black/20 p-3 rounded-xl border border-white/5">
                  <strong className="text-white">Key Finding / Metric: </strong>
                  {ref.keyFinding}
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-softgrey/60">
                  <span>Citation: {ref.urlOrCitation}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Core Mathematical Formulations */}
          <div className="p-5 rounded-2xl bg-ocean-surface/70 border border-white/10 space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider text-turquoise">
              Core Engineering Formulations Applied on Website
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-ocean-deep border border-white/5 space-y-1">
                <span className="text-turquoise font-bold">1. Wind Power Density</span>
                <div className="text-white">P/A = 0.5 × ρ × v³</div>
                <div className="text-[11px] text-softgrey/70">ρ = air density (~1.225 kg/m³ at sea level)</div>
              </div>

              <div className="p-3 rounded-xl bg-ocean-deep border border-white/5 space-y-1">
                <span className="text-seagreen font-bold">2. Annual Turbine Generation</span>
                <div className="text-white">E = N × P_cap × CF × 8,760 h</div>
                <div className="text-[11px] text-softgrey/70">N = turbines, CF = capacity factor (%)</div>
              </div>

              <div className="p-3 rounded-xl bg-ocean-deep border border-white/5 space-y-1">
                <span className="text-sky-400 font-bold">3. Converted Wave Electricity</span>
                <div className="text-white">E_wave = P_density × L × 8,760 × η × Avail</div>
                <div className="text-[11px] text-softgrey/70">P_density in kW/m, L = capture length (m)</div>
              </div>

              <div className="p-3 rounded-xl bg-ocean-deep border border-white/5 space-y-1">
                <span className="text-rose-400 font-bold">4. Diesel & Carbon Displaced</span>
                <div className="text-white">Diesel (L) = kWh × 0.27 • CO₂ (kg) = kWh × 0.72</div>
                <div className="text-[11px] text-softgrey/70">Based on CPCB & CEA baseline factors</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-ocean-surface/60 flex items-center justify-between">
          <div className="text-xs font-mono text-softgrey/60">
            Green Lakshadweep Academic & Public Policy Archive (v2.4)
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-turquoise text-ocean-deep font-bold text-xs hover:bg-turquoise-light transition-all"
          >
            Close Scientific Dossier
          </button>
        </div>

      </div>

    </div>
  );
};
