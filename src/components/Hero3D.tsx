"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function AbstractJersey() {
  return (
    <mesh castShadow receiveShadow scale={1.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#00ffcc"
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={0.8}
        roughness={0.2}
        distort={0.4}
        speed={2}
      />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[70vh] relative flex items-center justify-center bg-black overflow-hidden rounded-xl border border-white/10 shadow-[0_0_50px_rgba(0,255,204,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none" />
      
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
         <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green tracking-tighter mb-4 animate-pulse">
           Édition World Cup 2026
         </h1>
         <p className="text-gray-400 text-lg md:text-xl font-light uppercase tracking-widest">
           L'avenir du football commence ici
         </p>
      </div>

      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }} className="opacity-80 z-0">
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow color="#00ffcc" />
          <Environment preset="city" />
          
          <Float speed={3} rotationIntensity={1} floatIntensity={2}>
             <AbstractJersey />
          </Float>
          
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.0} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
        </Suspense>
      </Canvas>
    </div>
  );
}
