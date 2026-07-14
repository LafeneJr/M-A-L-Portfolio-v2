import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

type AnimatedCounterProps = {
  value: number;
  active: boolean;
};

export const AnimatedCounter = ({
  value,
  active,
}: AnimatedCounterProps) => {

  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) => Math.round(latest)
  );

  useEffect(() => {

    const controls = animate(
      count,
      active ? value : 0,
      {
        duration: 0.8,
      }
    );

    return () => controls.stop();

  }, [active, value, count]);

  return (
    <motion.span>
      {rounded}
    </motion.span>
  );
};