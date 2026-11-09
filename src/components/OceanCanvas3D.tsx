import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, RefreshCw } from 'lucide-react';

export const OceanCanvas3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [fps, setFps] = useState<number>(60);
  const isPlayingRef = useRef<boolean>(true);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x061B2B, 0.018);

    // Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 14, 38);
    camera.lookAt(0, 3, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x082035, 1.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0x21D4C4, 2.4);
    sunLight.position.set(30, 45, 20);
    scene.add(sunLight);

    const softFill = new THREE.DirectionalLight(0x36BFA6, 1.2);
    softFill.position.set(-20, 20, -20);
    scene.add(softFill);

    // Ocean Surface Geometry (Parametric Waves)
    const oceanWidth = 140;
    const oceanHeight = 140;
    const segments = 90;
    const oceanGeometry = new THREE.PlaneGeometry(oceanWidth, oceanHeight, segments, segments);
    oceanGeometry.rotateX(-Math.PI / 2);

    // Custom material for translucent turquoise ocean
    const oceanMaterial = new THREE.MeshStandardMaterial({
      color: 0x072840,
      emissive: 0x051a2c,
      roughness: 0.22,
      metalness: 0.65,
      wireframe: false,
      flatShading: true,
    });

    const oceanMesh = new THREE.Mesh(oceanGeometry, oceanMaterial);
    scene.add(oceanMesh);

    // Store original position coordinates for wave calculation
    const posAttribute = oceanGeometry.attributes.position;
    const initialPositions = posAttribute.clone();

    // Offshore Wind Turbine Group
    const turbineGroup = new THREE.Group();
    turbineGroup.position.set(12, 0, -10);

    // Turbine Base in Water
    const baseGeo = new THREE.CylinderGeometry(1.4, 1.8, 8, 16);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x112233, metalness: 0.8, roughness: 0.3 });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = 1;
    turbineGroup.add(baseMesh);

    // Yellow splash transition zone
    const splashGeo = new THREE.CylinderGeometry(1.3, 1.4, 2, 16);
    const splashMat = new THREE.MeshStandardMaterial({ color: 0xe6a117, metalness: 0.4, roughness: 0.5 });
    const splashMesh = new THREE.Mesh(splashGeo, splashMat);
    splashMesh.position.y = 5.5;
    turbineGroup.add(splashMesh);

    // Tower
    const towerGeo = new THREE.CylinderGeometry(0.7, 1.2, 24, 16);
    const towerMat = new THREE.MeshStandardMaterial({ color: 0xEDF4F5, metalness: 0.5, roughness: 0.2 });
    const towerMesh = new THREE.Mesh(towerGeo, towerMat);
    towerMesh.position.y = 18;
    turbineGroup.add(towerMesh);

    // Nacelle
    const nacelleGeo = new THREE.BoxGeometry(2, 2.2, 5);
    const nacelleMat = new THREE.MeshStandardMaterial({ color: 0xEDF4F5, metalness: 0.5, roughness: 0.2 });
    const nacelleMesh = new THREE.Mesh(nacelleGeo, nacelleMat);
    nacelleMesh.position.set(0, 30, 0.5);
    turbineGroup.add(nacelleMesh);

    // Rotor Hub
    const hubGeo = new THREE.ConeGeometry(1.0, 2.2, 16);
    hubGeo.rotateX(Math.PI / 2);
    const hubMat = new THREE.MeshStandardMaterial({ color: 0x21D4C4, metalness: 0.8, roughness: 0.1 });
    const hubMesh = new THREE.Mesh(hubGeo, hubMat);
    hubMesh.position.set(0, 30, 3.2);

    // Blades
    const rotorGroup = new THREE.Group();
    rotorGroup.position.set(0, 30, 3.4);

    const bladeGeo = new THREE.BoxGeometry(0.6, 13, 0.12);
    const bladeMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, metalness: 0.3, roughness: 0.2 });

    for (let i = 0; i < 3; i++) {
      const bladeArm = new THREE.Group();
      bladeArm.rotation.z = (i * 2 * Math.PI) / 3;

      const singleBlade = new THREE.Mesh(bladeGeo, bladeMat);
      singleBlade.position.y = 6.5;
      bladeArm.add(singleBlade);

      // Turquoise tip
      const tipGeo = new THREE.BoxGeometry(0.62, 2, 0.14);
      const tipMat = new THREE.MeshStandardMaterial({ color: 0x21D4C4, emissive: 0x21D4C4, emissiveIntensity: 0.6 });
      const tipMesh = new THREE.Mesh(tipGeo, tipMat);
      tipMesh.position.y = 12;
      bladeArm.add(tipMesh);

      rotorGroup.add(bladeArm);
    }
    turbineGroup.add(hubMesh);
    turbineGroup.add(rotorGroup);

    // Second smaller distant turbine
    const distantTurbine = turbineGroup.clone();
    distantTurbine.position.set(-24, 0, -32);
    distantTurbine.scale.set(0.7, 0.7, 0.7);
    scene.add(distantTurbine);

    scene.add(turbineGroup);

    // Wave Energy Converter (WEC) - Point Absorber Buoy
    const wecGroup = new THREE.Group();
    wecGroup.position.set(-8, 0, 8);

    // Floater Ring
    const floatRingGeo = new THREE.TorusGeometry(2.4, 0.7, 16, 32);
    floatRingGeo.rotateX(Math.PI / 2);
    const floatRingMat = new THREE.MeshStandardMaterial({
      color: 0x21D4C4,
      emissive: 0x139e91,
      emissiveIntensity: 0.3,
      metalness: 0.6,
      roughness: 0.2,
    });
    const floatRing = new THREE.Mesh(floatRingGeo, floatRingMat);
    wecGroup.add(floatRing);

    // Central PTO (Power Take-Off) Column
    const ptoGeo = new THREE.CylinderGeometry(0.8, 0.8, 6, 20);
    const ptoMat = new THREE.MeshStandardMaterial({ color: 0x0e3b5e, metalness: 0.9, roughness: 0.1 });
    const ptoMesh = new THREE.Mesh(ptoGeo, ptoMat);
    ptoMesh.position.y = 1;
    wecGroup.add(ptoMesh);

    // Glowing Power Pulse Ring
    const pulseRingGeo = new THREE.TorusGeometry(1.6, 0.15, 12, 32);
    pulseRingGeo.rotateX(Math.PI / 2);
    const pulseRingMat = new THREE.MeshBasicMaterial({ color: 0x61e8db });
    const pulseRing = new THREE.Mesh(pulseRingGeo, pulseRingMat);
    pulseRing.position.y = 2.2;
    wecGroup.add(pulseRing);

    scene.add(wecGroup);

    // Floating particles (ocean mist & plankton glow)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 80;
      particlePositions[i + 1] = Math.random() * 20;
      particlePositions[i + 2] = (Math.random() - 0.5) * 80;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x21D4C4,
      size: 0.22,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Interaction Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / width - 0.5) * 2;
      mouseY = (y / height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastFpsTime = performance.now();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isPlayingRef.current) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // FPS tracking
      frameCount++;
      const now = performance.now();
      if (now - lastFpsTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastFpsTime = now;
      }

      // Parallax smooth interpolation
      targetX += (mouseX * 5 - targetX) * 0.05;
      targetY += (mouseY * 3 - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = 14 - targetY;
      camera.lookAt(0, 3, 0);

      // Ocean Wave Simulation (Two interfering sine waves + swell)
      const currentPos = oceanGeometry.attributes.position;
      for (let i = 0; i < currentPos.count; i++) {
        const u = initialPositions.getX(i);
        const w = initialPositions.getZ(i);

        // Wave formula: combination of deep-sea swells and cross-swell
        const wave1 = Math.sin(u * 0.12 + elapsed * 1.6) * 1.3;
        const wave2 = Math.cos(w * 0.15 + elapsed * 1.4) * 1.1;
        const ripple = Math.sin((u + w) * 0.2 + elapsed * 2.2) * 0.5;

        currentPos.setY(i, wave1 + wave2 + ripple);
      }
      currentPos.needsUpdate = true;
      oceanGeometry.computeVertexNormals();

      // Rotate Turbine Blades
      rotorGroup.rotation.z -= delta * 1.8;
      const distantRotor = distantTurbine.children[distantTurbine.children.length - 1];
      if (distantRotor) {
        distantRotor.rotation.z -= delta * 1.6;
      }

      // Wave Energy Converter (WEC) Heave & Pitch Dynamics
      const wecWaveX = -8;
      const wecWaveZ = 8;
      const wecElevation =
        Math.sin(wecWaveX * 0.12 + elapsed * 1.6) * 1.3 +
        Math.cos(wecWaveZ * 0.15 + elapsed * 1.4) * 1.1 +
        Math.sin((wecWaveX + wecWaveZ) * 0.2 + elapsed * 2.2) * 0.5;

      wecGroup.position.y = wecElevation * 0.85 + 0.3;
      wecGroup.rotation.z = Math.sin(elapsed * 1.8) * 0.08;
      wecGroup.rotation.x = Math.cos(elapsed * 1.5) * 0.06;

      // Pulse ring emission
      const pulseScale = 1 + Math.sin(elapsed * 3) * 0.15;
      pulseRing.scale.set(pulseScale, pulseScale, pulseScale);

      // Animate mist particles
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= delta * 0.8;
        if (positions[i] < 0) {
          positions[i] = 18;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      oceanGeometry.dispose();
      oceanMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[520px] md:min-h-[680px] overflow-hidden rounded-3xl border border-turquoise/20 bg-gradient-to-b from-[#061B2B]/60 via-[#081522]/90 to-[#061B2B]">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating HUD Controls */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-3 bg-ocean-midnight/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-turquoise/20 text-xs">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-turquoise opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-turquoise"></span>
        </span>
        <span className="text-softgrey font-mono uppercase tracking-wider text-[11px]">MetOcean 3D Simulation</span>
        <span className="text-turquoise/80 font-mono text-[10px] pl-1 border-l border-white/10">{fps} FPS</span>
      </div>

      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-full bg-ocean-midnight/80 backdrop-blur-md border border-white/10 text-white hover:text-turquoise hover:border-turquoise/40 transition-all text-xs flex items-center gap-1.5"
          title={isPlaying ? 'Pause Simulation' : 'Play Simulation'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span className="text-[11px] pr-1">{isPlaying ? 'Pause' : 'Resume'}</span>
        </button>
      </div>

      {/* Bottom Technical Overlay Legend */}
      <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none flex flex-wrap items-center justify-between gap-3 text-xs text-softgrey/80">
        <div className="flex items-center gap-4 bg-ocean-midnight/70 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 pointer-events-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-turquoise/80 border border-white/40"></div>
            <span className="text-[11px]">Floating Point Absorber (WEC)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-white border border-turquoise/40"></div>
            <span className="text-[11px]">Marinized Offshore Wind Turbine</span>
          </div>
        </div>

        <div className="bg-ocean-midnight/70 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/10 text-[11px] font-mono text-turquoise/90">
          Simulated swell: 1.8m @ 9.2s • Direction: 245° WSW
        </div>
      </div>
    </div>
  );
};
