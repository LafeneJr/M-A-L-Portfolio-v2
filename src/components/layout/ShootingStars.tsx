import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

interface ShootingStarData {
  velocity: THREE.Vector3;
  speed: number;
  timer: number;
  active: boolean;
}

export const ShootingStars = () => {
  const group = useRef<THREE.Group>(null);

  const data = useRef<ShootingStarData[]>([]);

  const stars = useMemo(() => Array.from({ length: 1 }), []);

  const spawnStar = (
    mesh: THREE.Group,
    star: ShootingStarData
  ) => {
    const edge = Math.floor(Math.random() * 4);

    const position = new THREE.Vector3();

    const direction = new THREE.Vector3();

    switch (edge) {
      case 0:
        position.set(
          -7,
          THREE.MathUtils.randFloat(-4, 4),
          -2
        );
        direction.set(1, -0.35, 0);
        break;

      case 1:
        position.set(
          7,
          THREE.MathUtils.randFloat(-4, 4),
          -2
        );
        direction.set(-1, -0.35, 0);
        break;

      case 2:
        position.set(
          THREE.MathUtils.randFloat(-6, 6),
          5,
          -2
        );
        direction.set(
          THREE.MathUtils.randFloat(-0.35, 0.35),
          -1,
          0
        );
        break;

      default:
        position.set(
          THREE.MathUtils.randFloat(-6, 6),
          -5,
          -2
        );
        direction.set(
          THREE.MathUtils.randFloat(-0.35, 0.35),
          1,
          0
        );
    }

    mesh.position.copy(position);

    direction.normalize();

    star.velocity.copy(direction);

    star.speed = THREE.MathUtils.randFloat(18, 26);

    star.active = true;

    mesh.visible = true;

    mesh.rotation.z = Math.atan2(
      direction.y,
      direction.x
    );
  };

  useFrame((_, delta) => {
    group.current?.children.forEach((child, index) => {
      const mesh = child as THREE.Group;

      const star = data.current[index];

      if (!star) return;

      if (!star.active) {
        star.timer -= delta;

        if (star.timer <= 0) {
          spawnStar(mesh, star);
        }

        return;
      }

      mesh.position.addScaledVector(
        star.velocity,
        star.speed * delta
      );

      if (
        Math.abs(mesh.position.x) > 8 ||
        Math.abs(mesh.position.y) > 6
      ) {
        mesh.visible = false;

        star.active = false;

        star.timer = THREE.MathUtils.randFloat(
          8,
          15
        );
      }
    });
  });

  return (
    <group ref={group}>
      {stars.map((_, index) => (
        <group
          key={index}
          visible={false}
          ref={(mesh) => {
            if (!mesh) return;

            data.current[index] = {
              velocity: new THREE.Vector3(),
              speed: 0,
              timer: THREE.MathUtils.randFloat(
                1,
                8
              ),
              active: false,
            };
          }}
        >
          {/* Head */}

          <mesh>
            <sphereGeometry args={[0.03, 16, 16]} />

            <meshBasicMaterial
              color="#ffffff"
            />
          </mesh>

          {/* Trail */}

          <mesh position={[-0.18, 0, 0]}>
            <planeGeometry
              args={[0.35, 0.015]}
            />

            <meshBasicMaterial
              color="#a5b4fc"
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};