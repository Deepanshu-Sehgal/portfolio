"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

const Earth = () => {
  // Using a reliable high-res public earth texture
  const earthMap = useLoader(
    THREE.TextureLoader,
    "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
  );
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      
      // Interactive Mouse tracking
      // Interpolate the earth's rotation based on mouse coordinates
      const targetX = (state.pointer.y * Math.PI) / 4;
      const targetY = (state.pointer.x * Math.PI) / 4;
      
      ref.current.rotation.x += 0.05 * (targetX - ref.current.rotation.x);
      ref.current.rotation.y += 0.05 * (targetY - ref.current.rotation.y);
    }
  });

  return (
    <mesh ref={ref} position={[3, -2, -6]} scale={3}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial 
        map={earthMap} 
        emissive="#0a2a43"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const RotatingStars = () => {
  const ref = useRef();
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x -= 0.0002;
      ref.current.rotation.y -= 0.0002;
    }
  });

  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

export default function StarBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#030614] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 5, 10]} intensity={1.5} color="#c8e6ff" />
        <RotatingStars />
        <React.Suspense fallback={null}>
          <Earth />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
