import { Stars as DreiStars } from "@react-three/drei";



export const Stars = () => {
  return (
    <DreiStars
      radius={100}
      depth={50}
      count={4000}
      factor={4}
      saturation={0}
      fade
      speed={0.8}
    />
  );
};