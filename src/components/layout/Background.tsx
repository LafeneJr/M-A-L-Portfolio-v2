import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  PointMaterial,
  Points,
} from "@react-three/drei";

import { inSphere } from "maath/random";
import {
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";
import { ShootingStars } from "./ShootingStars";

function BackgroundParticles() {
  const pointsRef =
    useRef<THREE.Points>(null);

  const particles = useMemo(
  () =>
    inSphere(
      new Float32Array(7000),
      {
        radius: 2,
      }
    ) as Float32Array,
  []
);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y +=
      delta * 0.01;

    pointsRef.current.rotation.x +=
      delta * 0.003;
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.08}
      floatIntensity={0.12}
    >
      <Points
        ref={pointsRef}
        positions={particles}
        stride={3}
      >
        <PointMaterial
          transparent
          color="#818cf8"
          size={0.008}
          sizeAttenuation
          depthWrite={false}
          opacity={0.55}
        />
      </Points>
    </Float>
  );
}

export const Background = () => {
  return (
    <>
      {/* Base Background */}

      <div className="fixed inset-0 -z-50 bg-[#050816]" />

      {/* Aurora Glow */}

      <div
        className="
          fixed
          inset-0
          -z-40

          opacity-30

          bg-[radial-gradient(circle_at_center,rgba(99,102,241,.18),transparent_60%)]
        "
      />

      {/* Desktop Grid */}

      <div
        className="
          hidden
          md:block

          fixed
          inset-0
          -z-30

          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]

          bg-size-[60px_60px]
        "
      />

      {/* Three.js Particles */}

      <div
        className="
          pointer-events-none

          fixed
          inset-0
          -z-20
        "
      >
        <Canvas
          camera={{
            position: [0, 0, 1],
          }}
        >
          <BackgroundParticles />
          <ShootingStars />
        </Canvas>
      </div>
    </>
  );
};