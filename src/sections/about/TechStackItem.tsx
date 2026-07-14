import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AnimatedCounter } from "./ui/AnimatedCounter";

type TechStackItemProps = {
  icon: React.ComponentType;
  name: string;
  level: number;
};

export const TechStackItem = ({
  icon: Icon,
  name,
  level,
}: TechStackItemProps) => {
  const [hovered, setHovered] = useState(false);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="
        flex
        flex-col
        items-center
        cursor-pointer
        select-none
      "
    >
      {/* Circle */}

      <motion.div
        animate={{
          y: hovered ? -8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
        className="
          relative

          w-28
          h-28

          rounded-full

          border
          border-white/10

          bg-white/4

          backdrop-blur-xl

          flex
          items-center
          justify-center

          overflow-hidden
        "
      >
        {/* Glow */}

        <motion.div
          animate={{
            opacity: hovered ? [0.2, 0.65, 0.2] : 0,
            scale: hovered ? [0.9, 1.15, 0.9] : 0.7,
          }}
          transition={{
            duration: 2,
            repeat: hovered ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="
            absolute

            w-18
            h-18

            rounded-full

            bg-indigo-500/30

            blur-2xl
          "
        />

        {/* Progress Ring */}

        <svg
          className="
            absolute
            inset-0
          "
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              id={`gradient-${name}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#818CF8"
              />

              <stop
                offset="100%"
                stopColor="#A855F7"
              />
            </linearGradient>
          </defs>

          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,.08)"
            strokeWidth="3"
          />

          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={`url(#gradient-${name})`}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference,
            }}
            animate={{
              strokeDashoffset: hovered
                ? circumference -
                  (circumference * level) / 100
                : circumference,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            style={{
              rotate: -90,
              transformOrigin: "50% 50%",
            }}
          />
        </svg>

        {/* Icon / Percentage */}

        <AnimatePresence mode="wait">
          {!hovered ? (
            <motion.div
              key="icon"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.65,
                rotate: 10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                absolute

                text-5xl

                text-white
              "
            >
              <Icon />
            </motion.div>
          ) : (
            <motion.div
              key="counter"
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.6,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                absolute

                flex
                items-center
                justify-center

                text-indigo-300

                text-lg
                font-semibold
              "
            >
              <AnimatedCounter
                value={level}
                active={hovered}
              />
              %
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tech Name */}

      <motion.p
        animate={{
          opacity: hovered ? 1 : 0.55,
          y: hovered ? 5 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          mt-5

          text-sm
          font-medium

          text-center

          text-white
        "
      >
        {name}
      </motion.p>
    </motion.div>
  );
};