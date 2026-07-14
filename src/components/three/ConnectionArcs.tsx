import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const CONNECTIONS = [
  [0, 1],
  [1, 4],
  [4, 2],
  [2, 5],
  [5, 3],
  [3, 0],
];

const CITY_POINTS = [
  [0.82, 0.58, 0.98],
  [-0.92, 0.34, 0.96],
  [0.55, -0.82, 0.95],
  [-0.55, -0.68, 1.05],
  [0.18, 1.02, 0.92],
  [1.02, -0.12, 0.86],
];

export const ConnectionArcs = () => {
  const group = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    return CITY_POINTS.map(([x, y, z]) =>
      new THREE.Vector3(x, y, z)
        .normalize()
        .multiplyScalar(1.42)
    );
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;

    group.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.15) * 0.2;
  });

  return (
    <group ref={group}>
      {CONNECTIONS.map(([start, end], index) => (
        <Line
          key={index}
          points={[
            points[start],
            points[end],
          ]}
          color="#818cf8"
          transparent
          opacity={0.45}
          lineWidth={1}
        />
      ))}
    </group>
  );
};