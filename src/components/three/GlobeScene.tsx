import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
} from "@react-three/drei";

import { Globe } from "./Globe";

import { Stars } from "./Stars";
import { PulsingCities } from "./PulsingCities";
import { ConnectionArcs } from "./ConnectionArcs";





export const GlobeScene = () => {
  return (
    <Canvas
      camera={{
        position: [
          0,
          0,
          4,
        ],

        fov: 45,
      }}
    >
      <ambientLight intensity={0.8} />
      <hemisphereLight
          intensity={1.2}
          groundColor="#0f172a"
          color="#a5b4fc"
        />

      <directionalLight
        position={[
          5,
          5,
          5,
        ]}
        intensity={2}
      />

      <pointLight
        position={[
          -5,
          -5,
          5,
        ]}
        color="#6366f1"
        intensity={20}
      />

      <Stars />

      <Globe />

      <PulsingCities />

      <ConnectionArcs />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};