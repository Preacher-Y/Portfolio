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

interface ElegantCharacterProps {
  mousePosition: { x: number; y: number };
}

export function ElegantCharacter({ mousePosition }: ElegantCharacterProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const particleRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;

    groupRef.current.position.y = Math.sin(time * 0.3) * 0.15 - 0.3;

    const targetRotationX = mousePosition.y * 0.15;
    const targetRotationY = mousePosition.x * 0.25;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.03);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.03);

    if (coreRef.current) {
      coreRef.current.rotation.y += 0.003;
      coreRef.current.rotation.z = Math.sin(time * 0.5) * 0.05;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += 0.004;
      ring1Ref.current.rotation.y += 0.002;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= 0.003;
      ring2Ref.current.rotation.z += 0.004;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y += 0.005;
      ring3Ref.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }

    if (particleRef.current) {
      particleRef.current.rotation.y -= 0.001;
    }
  });

  const particlePositions = useMemo(() => {
    const random = createSeededRandom(12345);
    const positions = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      const radius = 1.5 + random() * 1;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} scale={1}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.5, 2]} />
        <meshStandardMaterial
          color="#c9a962"
          metalness={0.95}
          roughness={0.1}
          emissive="#c9a962"
          emissiveIntensity={0.15}
        />
      </mesh>

      <mesh ref={ring1Ref} position={[0, 0, 0]}>
        <torusGeometry args={[0.8, 0.008, 16, 100]} />
        <meshStandardMaterial
          color="#c9a962"
          metalness={1}
          roughness={0.1}
          emissive="#c9a962"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh ref={ring2Ref} position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.0, 0.006, 16, 100]} />
        <meshStandardMaterial
          color="#c9a962"
          metalness={1}
          roughness={0.1}
          emissive="#c9a962"
          emissiveIntensity={0.15}
        />
      </mesh>

      <mesh ref={ring3Ref} position={[0, 0, 0]} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[1.3, 0.005, 16, 100]} />
        <meshStandardMaterial
          color="#78716c"
          metalness={0.9}
          roughness={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>

      <points ref={particleRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#c9a962"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      <mesh position={[0.6, 0.3, 0.3]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial
          color="#c9a962"
          emissive="#c9a962"
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh position={[-0.5, -0.2, 0.4]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial
          color="#c9a962"
          emissive="#c9a962"
          emissiveIntensity={0.4}
        />
      </mesh>

      <mesh position={[0.3, -0.5, -0.3]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshStandardMaterial
          color="#c9a962"
          emissive="#c9a962"
          emissiveIntensity={0.3}
        />
      </mesh>

      <pointLight position={[0, 0, 1]} color="#c9a962" intensity={0.8} distance={4} />
      <pointLight position={[1, 1, 1]} color="#c9a962" intensity={0.4} distance={3} />
      <pointLight position={[-1, -0.5, 1]} color="#78716c" intensity={0.2} distance={2} />
    </group>
  );
}
