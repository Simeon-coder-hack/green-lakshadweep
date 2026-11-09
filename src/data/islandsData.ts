export interface IslandData {
  id: string;
  name: string;
  coordinates: { lat: number; lng: number };
  population: string;
  areaKm2: number;
  lagoonAreaKm2: number;
  distanceFromKochiKm: number;
  existingInfrastructure: {
    dieselCapacity: string;
    solarPV: string;
    bessStorage: string;
    desalination: string;
    source: string;
    statusDate: string;
  };
  renewableOpportunities: {
    wind: string;
    wave: string;
    solar: string;
    tidalFeasibility: string;
  };
  dataConfidence: 'High (Verified Reports)' | 'Moderate (Regional MetOcean)' | 'Preliminary Field Studies';
  description: string;
  highlightTag: string;
}

export const ISLANDS: IslandData[] = [
  {
    id: 'kavaratti',
    name: 'Kavaratti',
    coordinates: { lat: 10.57, lng: 72.64 },
    population: '11,210 (2011 Census)',
    areaKm2: 4.22,
    lagoonAreaKm2: 4.96,
    distanceFromKochiKm: 404,
    existingInfrastructure: {
      dieselCapacity: '7.85 MW (Multi-DG Powerhouse, Lakshadweep Electricity Dept)',
      solarPV: '1.4 MWp Grid-Connected SPV (SECI/NTPC initiatives)',
      bessStorage: '1.4 MWh BESS Integration Pilot',
      desalination: '100,000 L/day Low-Temperature Thermal Desalination (NIOT)',
      source: 'Lakshadweep Electricity Dept Annual Operational Report & CEA Baseline',
      statusDate: '2023-2024'
    },
    renewableOpportunities: {
      wind: 'Offshore fringing reef margin offers steady trade wind corridor (est. 6.2–7.1 m/s annual mean at 80m).',
      wave: 'Published seasonal wave power density of 1.5–8.0 kW/m on western breakwater; monsoon swells reach peak energy.',
      solar: 'Rooftop and floating SPV on protected lagoon surface with wave attenuation barriers.',
      tidalFeasibility: 'Reef entrance channel current velocities moderate (0.8–1.4 m/s); requires high-resolution ADCP survey before kinetic consideration.'
    },
    dataConfidence: 'High (Verified Reports)',
    description: 'The administrative capital of Lakshadweep. Site of India’s pioneering NIOT oceanic thermal desalination plant and initial solar-diesel hybrid microgrid testbed.',
    highlightTag: 'Archipelago Capital & Innovation Hub'
  },
  {
    id: 'agatti',
    name: 'Agatti',
    coordinates: { lat: 10.85, lng: 72.19 },
    population: '7,560 (2011 Census)',
    areaKm2: 3.84,
    lagoonAreaKm2: 17.50,
    distanceFromKochiKm: 459,
    existingInfrastructure: {
      dieselCapacity: '4.50 MW DG units (Airport & Domestic Microgrid)',
      solarPV: '1.7 MWp Distributed Rooftop & Ground SPV',
      bessStorage: '1.0 MWh BESS buffer',
      desalination: '100,000 L/day Desalination Plant',
      source: 'AAI & Lakshadweep Electricity Department Operational Records',
      statusDate: '2023-2024'
    },
    renewableOpportunities: {
      wind: 'Open western ocean approach provides uninterrupted wind flow; airport runway zone requires strict height micro-siting.',
      wave: 'High outer-reef swell exposure from Arabian Sea; average annual wave power of 12–16 kW/m.',
      solar: 'Vast calm 17.5 km² lagoon offers prime candidate waters for modular floating solar arrays.',
      tidalFeasibility: 'Lagoon channel exchanges water during 1.6m spring tides; current monitoring needed.'
    },
    dataConfidence: 'High (Verified Reports)',
    description: 'The primary aviation gateway to Lakshadweep. Boasts one of the largest protected lagoons in the archipelago, ideal for wave-attenuated hybrid generation.',
    highlightTag: 'Aviation Hub & Vast Lagoon'
  },
  {
    id: 'bangaram',
    name: 'Bangaram',
    coordinates: { lat: 10.94, lng: 72.29 },
    population: 'Seasonal / Eco-Tourism Resort Staff',
    areaKm2: 0.58,
    lagoonAreaKm2: 46.25,
    distanceFromKochiKm: 460,
    existingInfrastructure: {
      dieselCapacity: 'Standby captive DG generators (~350 kVA)',
      solarPV: 'Distributed 50 kWp solar resort array',
      bessStorage: 'Small battery bank (lead-acid / LFP hybrid)',
      desalination: 'Reverse osmosis small-scale unit',
      source: 'Tourism Dept & Island Administration Eco-Guidelines',
      statusDate: '2023'
    },
    renewableOpportunities: {
      wind: 'Low acoustic signature micro-turbines suitable for eco-sensitive tourism sanctuary.',
      wave: 'Outer barrier reef absorbs massive swell energy; suitable for submerged point absorbers.',
      solar: 'Floating solar platform and resort roof integration with 100% quiet battery storage.',
      tidalFeasibility: 'Passage between Bangaram, Tinnakara, and Parali islands has tidal surge currents.'
    },
    dataConfidence: 'Moderate (Regional MetOcean)',
    description: 'A breathtaking teardrop-shaped uninhabited atoll home to a world-renowned eco-resort. Completely reliant on maritime fuel shipments, making it a prime candidate for 100% renewable zero-emission microgrid status.',
    highlightTag: 'Eco-Sanctuary Demonstration Site'
  },
  {
    id: 'minicoy',
    name: 'Minicoy',
    coordinates: { lat: 8.28, lng: 73.05 },
    population: '10,447 (2011 Census)',
    areaKm2: 4.80,
    lagoonAreaKm2: 30.60,
    distanceFromKochiKm: 398,
    existingInfrastructure: {
      dieselCapacity: '6.20 MW Centralized DG Plant',
      solarPV: '600 kWp Distributed SPV',
      bessStorage: 'Trial battery bank',
      desalination: '100,000 L/day NIOT Desalination unit',
      source: 'Lakshadweep Electricity Dept & NIOT Coastal Station Data',
      statusDate: '2023'
    },
    renewableOpportunities: {
      wind: 'Southernmost geographical isolation aligns with the 8-degree channel; highest consistent wind energy density in the territory.',
      wave: 'Southern oceanic swell window captures Southern Ocean long-period groundswells; wave power density 15–20 kW/m during June–September.',
      solar: 'High solar insolation (>5.4 kWh/m²/day annual mean).',
      tidalFeasibility: 'Northern lagoon pass has marked tidal exchange; current speeds require acoustic measurement.'
    },
    dataConfidence: 'High (Verified Reports)',
    description: 'The southernmost island of the Union Territory, culturally and geographically distinct. Located near major international shipping lanes with immense wind and wave energy density.',
    highlightTag: 'Southern Monsoon Swell Front'
  },
  {
    id: 'kadmat',
    name: 'Kadmat',
    coordinates: { lat: 11.23, lng: 72.78 },
    population: '5,389 (2011 Census)',
    areaKm2: 3.20,
    lagoonAreaKm2: 25.00,
    distanceFromKochiKm: 407,
    existingInfrastructure: {
      dieselCapacity: '3.60 MW DG Powerhouse',
      solarPV: '350 kWp Rooftop and ground SPV',
      bessStorage: 'Planned under Island Transformation Initiative',
      desalination: 'RO Desalination station',
      source: 'Lakshadweep District Energy Assessment & Census',
      statusDate: '2023'
    },
    renewableOpportunities: {
      wind: 'Long, narrow island morphology (8 km long, only 550 m wide) allows optimal crosswind turbine micro-siting.',
      wave: 'Western barrier reef experiences continuous swell action (12–15 kW/m annual mean).',
      solar: 'Huge 25 km² shallow, clear-water lagoon ideal for coral-friendly floating PV structures.',
      tidalFeasibility: 'Inter-island channel between Kadmat and Amini has notable flow during tidal shifts.'
    },
    dataConfidence: 'Moderate (Regional MetOcean)',
    description: 'Renowned for its expansive turquoise lagoon and shallow reef flat. Its elongated footprint makes it an exceptional testbed for linear renewable distribution arrays.',
    highlightTag: 'Elongated Reef Morphology'
  },
  {
    id: 'kalpeni',
    name: 'Kalpeni',
    coordinates: { lat: 10.08, lng: 73.65 },
    population: '4,418 (2011 Census)',
    areaKm2: 2.79,
    lagoonAreaKm2: 25.60,
    distanceFromKochiKm: 287,
    existingInfrastructure: {
      dieselCapacity: '2.80 MW DG Station',
      solarPV: '250 kWp Solar Installations',
      bessStorage: 'Auxiliary backup',
      desalination: 'Desalination plant operational',
      source: 'Lakshadweep Power Station Ledger',
      statusDate: '2023'
    },
    renewableOpportunities: {
      wind: 'Easternmost position in the central cluster; highly responsive to northeast winter trades.',
      wave: 'Massive storm debris bank on eastern shore testifies to historical ocean energy dynamics.',
      solar: 'High rooftop potential among concentrated settlements and government buildings.',
      tidalFeasibility: 'Lagoon channel flow requires ecological impact study on live coral bommies.'
    },
    dataConfidence: 'Moderate (Regional MetOcean)',
    description: 'Features a spectacular lagoon surrounded by a massive coral debris barrier resulting from a historic 1847 cyclone. Highly vulnerable to sea-level rise, making renewable self-reliance urgent.',
    highlightTag: 'Storm Debris Bank & Atoll Ring'
  },
  {
    id: 'amini',
    name: 'Amini',
    coordinates: { lat: 11.12, lng: 72.73 },
    population: '7,656 (2011 Census)',
    areaKm2: 2.60,
    lagoonAreaKm2: 1.50,
    distanceFromKochiKm: 407,
    existingInfrastructure: {
      dieselCapacity: '4.20 MW DG Generator Cluster',
      solarPV: '400 kWp Rooftop Arrays',
      bessStorage: 'Planned microgrid modernization',
      desalination: 'Desalination unit providing drinking water',
      source: 'Lakshadweep Electricity Dept Reports',
      statusDate: '2023-2024'
    },
    renewableOpportunities: {
      wind: 'Compact island footprint requires near-shore marinized offshore monopiles.',
      wave: 'Exposed western perimeter receives direct Arabian Sea swell energy.',
      solar: 'Intensive rooftop solar program on municipal and domestic structures.',
      tidalFeasibility: 'Reef passes are narrow and shallow; environmental impact of turbines on artisan fisheries must be safeguarded.'
    },
    dataConfidence: 'High (Verified Reports)',
    description: 'One of the most densely populated islands in the archipelago. Land constraints demand innovative near-shore offshore solutions to displace heavy diesel burning in close proximity to residential homes.',
    highlightTag: 'High Density Compact Grid'
  }
];
