"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Stars,
} from "@react-three/drei";

function Globe() {
  return (
    <Float
      speed={2}
      rotationIntensity={0.6}
      floatIntensity={0.8}
    >
      <Sphere args={[1.45, 64, 64]}>
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#4f46e5"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.6}
          distort={0.18}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

export const GlobeCanvas = () => {
  return (
    <div
      className="
        relative

        h-130
        w-full

        overflow-hidden

        rounded-[42px]

        border
        border-white/10

        bg-[#070B18]
      "
    >
      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 45,
        }}
      >
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <pointLight
          position={[-5, -3, 2]}
          intensity={2}
          color="#7c3aed"
        />

        <Stars
          radius={80}
          depth={50}
          count={2500}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <Globe />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>

      {/* Glow */}

      <div
        className="
          pointer-events-none

          absolute

          inset-x-0
          bottom-0

          h-40

          bg-linear-to-t

          from-[#070B18]

          via-[#070B18]/50

          to-transparent
        "
      />

      {/* Floating Badge */}

      <div
        className="
          absolute

          left-8
          top-8

          rounded-full

          border
          border-indigo-400/20

          bg-indigo-500/10

          px-5
          py-3

          backdrop-blur-xl
        "
      >
        <p className="text-sm text-indigo-300">
          Available Worldwide
        </p>
      </div>
    </div>
  );
};