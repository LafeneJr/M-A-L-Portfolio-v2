import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

import { AnimatedSignature } from "./ui/AnimatedSignature";

export const AboutSignature = () => {
  return (
    <section className="mt-10 mb-10">
      <div
        className="        

        mx-auto

        px-6
        md:ml-20
        lg:ml-18
        xl:px-15
      "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .8,
          }}
          className="
          relative

          overflow-hidden

          rounded-[34px]

          border
          border-white/10

          bg-white/3

          backdrop-blur-2xl

          px-8
          py-10

          md:px-12
          md:py-12
          
          lg:py-5

          shadow-[0_0_60px_rgba(99,102,241,.08)]
        "
        >
          {/* Background Glow */}

          <div
            className="
            absolute

            -right-24
            -top-24

            w-80
            h-80

            rounded-full

            bg-indigo-500/10

            blur-[130px]
          "
          />

          <div
            className="
            relative

            flex

            flex-col

            lg:flex-row

            justify-between

            items-start
            lg:items-end

            gap-5
          "
          >
            {/* Quote */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: .2,
                duration: .7,
              }}
              viewport={{ once: true }}
            >
              <RiDoubleQuotesL
                className="
                text-6xl

                text-indigo-400

                mb-2
              "
              />

              <p
                className="
                max-w-full

                text-xl
                md:text-2xl

                leading-relaxed

                text-white/80
              "
              >
                I don't just write code — I solve problems,
                design systems, and craft experiences that
                leave a lasting impact.
              </p>
            </motion.div>

            {/* Animated Signature */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: .45,
                duration: .8,
              }}
              viewport={{ once: true }}

              className="self-end
            lg:self-auto opacity-90"
            >
              <AnimatedSignature />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};