"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { ElegantCharacter } from "./Character3D";
import { ElegantFloatingObjects } from "./FloatingObjects";

interface Scene3DProps {
  mousePosition: { x: number; y: number };
  scrollProgress: number;
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color="#141412" wireframe />
    </mesh>
  );
}

function SceneContent({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 3]} intensity={0.3} color="#faf9f7" />
      <pointLight position={[-5, 2, -3]} intensity={0.5} color="#c9a962" />
      <pointLight position={[5, 2, -3]} intensity={0.3} color="#78716c" />

      <Stars
        radius={80}
        depth={40}
        count={1500}
        factor={3}
        saturation={0}
        fade
        speed={0.3}
      />

      <ElegantFloatingObjects />

      <ElegantCharacter mousePosition={mousePosition} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}

export function Scene3D({ mousePosition, scrollProgress }: Scene3DProps) {
  return (
    <div className="fixed inset-0 -z-10" style={{ opacity: 0.7 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={<LoadingFallback />}>
          <SceneContent mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
    </div>
  );
}
