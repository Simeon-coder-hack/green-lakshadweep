import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EnergyChallenge } from './components/EnergyChallenge';
import { WindEnergy } from './components/WindEnergy';
import { WaveEnergy } from './components/WaveEnergy';
import { TidalEnergy } from './components/TidalEnergy';
import { HybridSystem } from './components/HybridSystem';
import { InteractiveDashboard } from './components/InteractiveDashboard';
import { IslandExplorer } from './components/IslandExplorer';
import { BusinessModel } from './components/BusinessModel';
import { VisionAndContact } from './components/VisionAndContact';
import { ScientificModal } from './components/ScientificModal';
import { Footer } from './components/Footer';

export function App() {
  const [scientificModalOpen, setScientificModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#061B2B] text-white selection:bg-[#21D4C4] selection:text-[#061B2B] overflow-x-hidden">
      {/* Top Fixed Header */}
      <Navbar onOpenScientificModal={() => setScientificModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* PAGE 1: Cinematic Hero & 3D Ocean Visual */}
        <Hero onOpenScientificModal={() => setScientificModalOpen(true)} />

        {/* PAGE 2: The Energy Challenge & Diesel Dependency */}
        <EnergyChallenge onOpenScientificModal={() => setScientificModalOpen(true)} />

        {/* PAGE 3: Wind Energy Research & Interactive Calculator */}
        <WindEnergy onOpenScientificModal={() => setScientificModalOpen(true)} />

        {/* PAGE 4: Ocean Wave Energy & 3D WEC Architecture & Calculator */}
        <WaveEnergy onOpenScientificModal={() => setScientificModalOpen(true)} />

        {/* PAGE 5: Tidal Energy & Hydrokinetic Physics */}
        <TidalEnergy onOpenScientificModal={() => setScientificModalOpen(true)} />

        {/* PAGE 6: Hybrid Energy System Flow Diagram */}
        <HybridSystem />

        {/* PAGE 7: Interactive Energy Dashboard & 24h Telemetry Scrubber */}
        <InteractiveDashboard />

        {/* PAGE 8: Island Explorer & Geospatial Archipelago Map */}
        <IslandExplorer onOpenScientificModal={() => setScientificModalOpen(true)} />

        {/* PAGE 9: Business Model & Scalability Roadmap */}
        <BusinessModel />

        {/* PAGE 10: Our Vision & Validated Stakeholder Contact Gateway */}
        <VisionAndContact />
      </main>

      {/* Website Footer */}
      <Footer onOpenScientificModal={() => setScientificModalOpen(true)} />

      {/* Scientific Literature & Methodology Modal */}
      <ScientificModal
        isOpen={scientificModalOpen}
        onClose={() => setScientificModalOpen(false)}
      />
    </div>
  );
}

export default App;
