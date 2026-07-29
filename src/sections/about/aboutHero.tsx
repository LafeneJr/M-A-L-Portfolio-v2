import { motion } from "framer-motion";

import workspace from "../../assets/workspace.webp";

import { about } from "../../constants/portfolio";
import {  
  RiFlashlightLine,
  RiStackLine,
  RiMedalLine,
} from "react-icons/ri";

export const AboutHero = () => {
  return (
    <section      
      className="
      relative
      w-full       
      "
    >
      <div
        className="        
        mx-auto

        px-6
        md:ml-20
        lg:ml-18
        xl:px-15
        "
      >
        <div
          className="
          grid
          gap-5
          lg:grid-cols-2
          items-center
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-white/40">
                01
              </span>

              <div className="w-8 h-px bg-white/20" />

              <span className="text-white/60">
                {about.section}
              </span>
            </div>

            <h2
              className="
              font-bold
              leading-tight

              text-4xl
              md:text-5xl
              xl:text-5xl
              "
            >
              {about.title[0]}

              <br />

              {about.title[1]}

              <br />

              <span
                className="
                bg-linear-to-r
                from-indigo-400
                to-violet-400

                bg-clip-text
                text-transparent
                "
              >
                {about.title[2]}
              </span>
            </h2>

            <p
              className="
              mt-4
              text-white/60
              leading-8
              text-md
              max-w-xl              
              "
            >
              {about.description}
            </p>

            <div
              className="
              mt-10
              lg:mt-4

              grid
              gap-4
              md:grid-cols-3
              "
            >
              {/* Performance */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                rounded-3xl

                border
                border-white/10

                bg-white/4

                backdrop-blur-xl

                p-5
                lg:p-3
                lg:h-fit

                transition-all
                duration-300

                hover:border-indigo-400/40
                hover:shadow-[0_0_30px_rgba(99,102,241,.25)]
                "
              >
                <RiFlashlightLine
                  className="
                  text-2xl
                  text-indigo-400
                  mb-4
                  lg:mb-2
                  "
                />

                <h3 className="font-semibold">
                  Performance
                </h3>

                <p
                  className="
                  mt-3
                  lg:mt-1
                  text-sm
                  text-white/55
                  leading-6
                  "
                >
                  <span className="hidden lg:inline">
                    Fast, optimized and built for scale.
                  </span>

                  <span className="lg:hidden">
                    Building fast, optimized interfaces that feel smooth across every device.
                  </span>
                </p>
              </motion.div>

              {/* Scalability */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                rounded-3xl

                border
                border-white/10

                bg-white/4

                backdrop-blur-xl

                p-5
                lg:py-3
                lg:px-2

                lg:h-fit

                transition-all
                duration-300

                hover:border-indigo-400/40
                hover:shadow-[0_0_30px_rgba(99,102,241,.25)]
                "
              >
                <RiStackLine
                  className="
                  text-2xl
                  text-indigo-400
                  mb-4
                  lg:mb-2
                  "
                />

                <h3 className="font-semibold">
                  Scalability
                </h3>

                <p
                  className="
                  mt-3
                  lg:mt-1
                  text-sm
                  text-white/55
                  leading-6
                  "
                >
                  <span className="hidden lg:inline">
                    Clean architecture that grows with you.
                  </span>

                  <span className="lg:hidden">
                    Writing clean, maintainable architecture that scales with growing products.
                  </span>
                </p>
              </motion.div>

              {/* Experience */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                rounded-3xl

                border
                border-white/10

                bg-white/4

                backdrop-blur-xl

                p-5
                lg:p-3

                lg:h-fit

                transition-all
                duration-300

                hover:border-indigo-400/40
                hover:shadow-[0_0_30px_rgba(99,102,241,.25)]
                "
              >
                <RiMedalLine
                  className="
                  text-2xl
                  text-indigo-400
                  mb-4
                  lg:mb-2
                  "
                />

                <h3 className="font-semibold">
                  Experience
                </h3>

                <p
                  className="
                  mt-3
                  lg:mt-1
                  text-sm
                  text-white/55
                  leading-6
                  "
                >
                  <span className="hidden lg:inline">
                    Intuitive interfaces users love.
                  </span>

                  <span className="lg:hidden">
                    Creating intuitive user experiences through thoughtful design and motion.
                  </span>
                </p>
              </motion.div>
            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .9 }}
            className="relative"
          >
            <div
              className="
              overflow-hidden

              rounded-[34px]

              border
              border-indigo-400/20

              bg-white/5

              backdrop-blur-xl

              shadow-[0_0_60px_rgba(99,102,241,.2)]
              "
            >
              <img
                src={workspace}
                alt="Workspace"
                className="
                w-full
                object-cover
                "
              />
                            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};