import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

import signature from "../../../assets/signature.png";

export const ContactCTA = () => {
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
      transition={{
        duration: .8,
      }}
      viewport={{
        once: true,
      }}
      className="
        relative

        overflow-hidden

        rounded-[36px]

        border
        border-white/10

        bg-white/3

        backdrop-blur-2xl

        p-5        
      "
    >
      <div
        className="
          flex
          flex-col

          gap-2

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left */}

        <div
          className="
            flex

            items-start

            gap-3
          "
        >
          <RiDoubleQuotesL
            className="
              mt-1

              shrink-0

              text-5xl
              md:text-6xl

              text-indigo-400
            "
          />

          <div>
            <h3
              className="
                text-2xl
                md:text-3xl

                font-semibold

                leading-tight
              "
            >
              Great ideas start with a conversation.
            </h3>

            <p
              className="
                mt-3

                text-white/55

                leading-7
              "
            >
              I'm excited to hear about your project.
            </p>
          </div>
        </div>

        {/* Signature */}

        <motion.img
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: .8,
            delay: .2,
          }}
          viewport={{
            once: true,
          }}
          src={signature}
          alt="Muhammad Aliyu Lafene Signature"
          className="
            h-20
            md:h-50

            w-auto

            shrink-0

            self-end
            lg:self-auto

            opacity-90
          "
        />
      </div>

      {/* Background Glow */}

      <div
        className="
          pointer-events-none

          absolute

          -right-20
          -bottom-20

          h-72
          w-72

          rounded-full

          bg-indigo-500/20

          blur-[120px]
        "
      />
    </motion.section>
  );
};