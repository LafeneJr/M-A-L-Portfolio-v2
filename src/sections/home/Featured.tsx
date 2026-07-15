import { motion } from "framer-motion";
import { RiArrowRightLine, RiNextjsLine, RiTailwindCssLine, RiOpenaiLine, } from "react-icons/ri";

import {
  SiTypescript,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";

import { featuredProject } from "../../constants/portfolio";

import mockup from "../../assets/travelbrain.webp";

const techIcons = {
  "Next.js": {
    icon: RiNextjsLine,
    color: "text-white",
  },

  TypeScript: {
    icon: SiTypescript,
    color: "text-[#3178C6]",
  },

  "Tailwind CSS": {
    icon: RiTailwindCssLine,
    color: "text-[#38BDF8]",
  },

  Express: {
    icon: SiExpress,
    color: "text-white/80",
  },

  PostgreSQL: {
    icon: SiPostgresql,
    color: "text-[#336791]",
  },

  "OpenAI API": {
    icon: RiOpenaiLine,
    color: "text-[#10A37F]",
  },
} as const;

export const Featured = () => {
  return (
    <section
      className="
      relative
      w-full
      mt-20
      lg:mt-24
      xl:mt-16
      pb-3
      "
    >
      <div
        className="                       

        mx-auto

        px-6
        md:ml-20
        lg:ml-18
        xl:px-20
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="
          rounded-[34px]

          border
          border-white/10

          bg-white/4

          backdrop-blur-2xl

          overflow-hidden
          "
        >
          <div
            className="
            grid
            gap-10
            lg:gap-2

            p-8
            lg:p-5

            lg:grid-cols-[360px_1fr_170px]
            "
          >
            <div className="flex flex-col">

              <div className="flex items-center gap-3">

                <span
                  className="
                  w-2
                  h-2
                  rounded-full
                  bg-indigo-400
                  shadow-[0_0_20px_rgba(99,102,241,.8)]
                  "
                />

                <p
                  className="
                  uppercase
                  tracking-[0.35em]
                  text-[11px]
                  text-white/60
                  "
                >
                  {featuredProject.badge}
                </p>

              </div>

              <h2
                className="
                mt-8
                text-4xl
                font-semibold
                "
              >
                {featuredProject.title}
              </h2>

              <p
                className="
                mt-6
                leading-8
                text-white/55
                "
              >
                {featuredProject.description}
              </p>

              <motion.a
                whileHover={{
                  x: 4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href={featuredProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-10

                  inline-flex
                  w-fit

                  items-center
                  gap-4

                  rounded-2xl

                  border
                  border-white/10

                  px-7
                  py-4

                  transition

                  hover:border-indigo-400/60
                "
              >
                {featuredProject.button}

                <RiArrowRightLine />
              </motion.a>

            </div>
               <div
                className="
                flex
                items-center
                justify-center                  
                "
                >
              <motion.img
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: .4,
                }}
                src={mockup}
                alt="TravelBrain AI"

                className="                
                w-full
                object-contain
                rounded-2xl
                lg:pr-2
                "
              />
            </div>
                <div
                className="
                flex
                flex-col
                justify-between
                "
                  >
              <div>

                <p
                  className="
                  uppercase
                  tracking-[0.3em]
                  text-[11px]
                  text-white/60
                  mb-6
                  "
                >
                  Technologies
                </p>

                <div className="space-y-3">

                  {featuredProject.technologies.map((tech) => {
                    const Tech = techIcons[tech as keyof typeof techIcons];

                    return (
                      <motion.div
                        key={tech}
                        whileHover={{
                          y: -3,
                        }}
                        className="
                          flex
                          items-center
                          gap-3

                          rounded-xl

                          border
                          border-white/10

                          bg-white/4

                          px-4
                          py-3

                          text-sm

                          transition-all

                          hover:border-indigo-400
                        hover:bg-indigo-500/10
                          hover:shadow-[0_0_25px_rgba(99,102,241,.18)]
                        "
                      >
                        <Tech.icon
                          className={`
                            text-lg
                            ${Tech.color}
                          `}
                        />

                        <span>
                          {tech}
                        </span>
                      </motion.div>
                    );
                  })}

                </div>

              </div>

              <motion.a
                whileHover={{
                  scale: 1.08,
                  rotate: -10,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href={featuredProject.GitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  self-end

                  mt-10

                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  transition

                  hover:border-indigo-400
                "
              >
                <RiArrowRightLine size={22} />
              </motion.a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};