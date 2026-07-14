import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const CITY_POINTS = [
  [0.82, 0.58, 0.98],
  [-0.92, 0.34, 0.96],
  [0.55, -0.82, 0.95],
  [-0.55, -0.68, 1.05],
  [0.18, 1.02, 0.92],
  [1.02, -0.12, 0.86],
];

export const PulsingCities = () => {
  const refs = useRef<THREE.Mesh[]>([]);

  const points = useMemo(
    () =>
      CITY_POINTS.map(([x, y, z]) => {
        const v = new THREE.Vector3(x, y, z);

        return v.normalize().multiplyScalar(1.42);
      }),
    []
  );

  useFrame(({ clock }) => {
    refs.current.forEach((mesh, index) => {
      if (!mesh) return;

      const pulse =
        1 +
        Math.sin(clock.elapsedTime * 2.2 + index * 1.4) *
          0.35;

      mesh.scale.setScalar(pulse);

      const material =
        mesh.material as THREE.MeshBasicMaterial;

      material.opacity =
        0.55 +
        Math.sin(clock.elapsedTime * 2.2 + index) *
          0.3;
    });
  });

  return (
    <>
      {points.map((position, index) => (
        <mesh
          key={index}
          ref={(el) => {
            if (el) refs.current[index] = el;
          }}
          position={position}
        >
          <sphereGeometry
            args={[
              0.03,
              20,
              20,
            ]}
          />

          <meshBasicMaterial
            color="#a5b4fc"
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </>
  );
};