import { Float } from "@react-three/drei";

export const Globe = () => {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.35}
      floatIntensity={0.8}
    >
      <group>
        {/* Inner Sphere */}

        <mesh>
          <sphereGeometry
            args={[
              1.33,
              64,
              64,
            ]}
          />

          <meshStandardMaterial
            color="#312e81"
            emissive="#4338ca"
            emissiveIntensity={0.65}
            transparent
            opacity={0.18}
            roughness={0.8}
            metalness={0.15}
          />
        </mesh>

        {/* Wireframe Globe */}

        <mesh>
          <sphereGeometry
            args={[
              1.4,
              64,
              64,
            ]}
          />

          <meshStandardMaterial
            color="#818cf8"
            emissive="#6366f1"
            emissiveIntensity={1.35}
            roughness={0.25}
            metalness={0.35}
            wireframe
          />
        </mesh>

        {/* Outer Glow */}

        <mesh scale={1.06}>
          <sphereGeometry
            args={[
              1.4,
              64,
              64,
            ]}
          />

          <meshBasicMaterial
            color="#6366f1"
            transparent
            opacity={0.05}
            side={2} // THREE.BackSide
          />
        </mesh>
      </group>
    </Float>
  );
};