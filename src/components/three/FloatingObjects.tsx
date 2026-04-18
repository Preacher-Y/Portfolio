"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Seeded PRNG for deterministic random values
function createSeededRandom(seed: number) {
  return function() {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
}

interface FloatingElementProps {
  position: [number, number, number];
  geometry: "torus" | "octahedron" | "icosahedron";
  size?: number;
  rotationSpeed?: number;
  floatSpeed?: number;
  floatOffset?: number;
}

function FloatingElement({
  position,
  geometry,
  size = 0.5,
  rotationSpeed = 0.3,
  floatSpeed = 0.5,
  floatOffset = 0,
}: FloatingElementProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  const initialX = position[0];

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime * floatSpeed + floatOffset;
    meshRef.current.position.y = initialY + Math.sin(time) * 0.3;
    meshRef.current.position.x = initialX + Math.cos(time * 0.5) * 0.1;
    meshRef.current.rotation.x += 0.001 * rotationSpeed;
    meshRef.current.rotation.y += 0.002 * rotationSpeed;
  });

  const geom = useMemo(() => {
    switch (geometry) {
      case "torus":
        return new THREE.TorusGeometry(size, size * 0.15, 16, 80);
      case "octahedron":
        return new THREE.OctahedronGeometry(size);
      case "icosahedron":
        return new THREE.IcosahedronGeometry(size, 0);
      default:
        return new THREE.SphereGeometry(size);
    }
  }, [geometry, size]);

  return (
    <mesh ref={meshRef} position={position}>
      <primitive object={geom} attach="geometry" />
      <meshStandardMaterial
        color="#c9a962"
        metalness={0.9}
        roughness={0.15}
        emissive="#c9a962"
        emissiveIntensity={0.08}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

export function ElegantFloatingObjects() {
  const objects = useMemo(() => {
    const random = createSeededRandom(54321);
    const items = [];
    const geometries = ["torus", "octahedron", "icosahedron"] as const;

    const placements = [
      { x: -6, y: 2, z: -4 },
      { x: 5, y: -1, z: -3 },
      { x: -4, y: -2, z: -5 },
      { x: 6, y: 3, z: -4 },
      { x: -7, y: 0, z: -6 },
      { x: 7, y: -2, z: -5 },
      { x: -5, y: 3, z: -3 },
      { x: 4, y: 2, z: -6 },
    ];

    for (let i = 0; i < placements.length; i++) {
      const p = placements[i];
      items.push({
        id: i,
        position: [p.x, p.y, p.z] as [number, number, number],
        geometry: geometries[i % geometries.length],
        size: 0.15 + random() * 0.25,
        rotationSpeed: 0.2 + random() * 0.3,
        floatSpeed: 0.3 + random() * 0.3,
        floatOffset: random() * Math.PI * 2,
      });
    }
    return items;
  }, []);

  return (
    <group>
      {objects.map((obj) => (
        <FloatingElement key={obj.id} {...obj} />
      ))}
    </group>
  );
}

interface ElegantRingProps {
  position: [number, number, number];
  radius?: number;
  speed?: number;
  color?: string;
}

export function ElegantRing({ position, radius = 2, speed = 0.2, color = "#c9a962" }: ElegantRingProps) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.001 * speed;
      ringRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
    }
  });

  return (
    <group ref={ringRef} position={position}>
      <mesh>
        <torusGeometry args={[radius, 0.003, 16, 120]} />
        <meshStandardMaterial
          color={color}
          metalness={1}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.15}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}
