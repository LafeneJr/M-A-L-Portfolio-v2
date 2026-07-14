import { motion } from "framer-motion";
import {  
  RiChat3Line,
} from "react-icons/ri";

import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export const ProjectsCTA = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: .8,
      }}
      className="
        relative

        mt-15

        overflow-hidden

        rounded-[36px]

        border
        border-white/10

        bg-white/3

        backdrop-blur-2xl

        px-8
        py-6

        md:px-10
        lg:px-12
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none

          absolute

          -right-24
          -top-24

          h-72
          w-72

          rounded-full

          bg-indigo-500/10

          blur-[120px]
        "
      />

      <div
        className="
          relative

          flex
          flex-col

          gap-8

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left */}

        <div>

          <h2
            className="
              text-3xl
              md:text-4xl

              font-bold
            "
          >
            Interested in working together?
          </h2>

          <p
            className="
              mt-3

              text-white/60

              text-lg
            "
          >
            Let's build something exceptional.
          </p>

        </div>

        {/* Right */}

        <div
          className="
            flex

            flex-wrap

            items-center

            gap-4

            lg:justify-end
          "
        >          
          

          <MotionLink
              to="/contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-7
                py-4
                font-medium
                backdrop-blur-xl
                transition-colors
                hover:border-indigo-400/30
                hover:bg-white/8
              "
            >
              Let's Talk
              <RiChat3Line size={20} />
            </MotionLink>

        </div>

      </div>
    </motion.section>
  );
};