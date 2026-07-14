import { motion } from "framer-motion";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDrizzle,
  SiDocker,    
  SiHtml5,
  SiCss,  
} from "react-icons/si";

import { TechStackItem } from "./TechStackItem";

import {
  aboutTimeline,
  techStack,  
} from "../../constants/portfolio";

const icons = {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDrizzle,
  SiDocker,    
  SiHtml5,
  SiCss,
};

export const AboutOverview = () => {
  return (
    <section
      className="
      mt-14
      "
    >
      <div
        className="
        mx-auto

        px-6
        lg:pr-1
        md:ml-20
        lg:ml-18
        xl:px-15
        "
      >
        <div
          className="
          grid
          gap-8
          lg:grid-cols-[1.55fr_.95fr]
          items-start
          "
        >        
            {/* EXPERIENCE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="
            rounded-4xl
            border
            border-white/10
            bg-white/3
            backdrop-blur-xl

            p-8
            "
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="text-white/40">
                02
              </span>

              <div className="w-8 h-px bg-white/20" />

              <span className="text-white/60">
                Experience
              </span>
            </div>

            <div className="space-y-10">

              {aboutTimeline.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-6"
                >
                  {/* Timeline */}

                  <div className="flex flex-col items-center">

                    <span
                      className={`
                      w-4
                      h-4
                      rounded-full
                      border-2

                      ${
                        item.current
                          ? "border-indigo-400 bg-indigo-400 shadow-[0_0_20px_rgba(99,102,241,.8)]"
                          : "border-indigo-400 bg-[#070B18]"
                      }
                      `}
                    />

                    {index !== aboutTimeline.length - 1 && (
                      <div
                        className="
                        mt-3
                        flex-1
                        w-px
                        bg-white/10
                        "
                      />
                    )}

                  </div>

                  {/* Content */}

                  <div>

                    <div className="flex items-center gap-4">

                      <span className="text-sm text-white/40">
                        {item.year}
                      </span>

                      {item.current && (

                        <span
                          className="
                          px-3
                          py-1
                          rounded-full

                          border
                          border-indigo-400/20

                          bg-indigo-500/10

                          text-xs
                          text-indigo-300
                          "
                        >
                          Current
                        </span>

                      )}

                    </div>

                    <h3
                      className="
                      mt-3
                      text-2xl
                      font-semibold
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="mt-1 text-white/55">
                      {item.company}
                    </p>

                    <p
                      className="
                      mt-4
                      leading-7
                      text-white/45
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>
          </motion.div>

          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-3
            gap-8
            justify-items-center
            "
          >
            {techStack.map((tech) => {

              const Icon =
                icons[
                  tech.icon as keyof typeof icons
                ];

              return (
                <TechStackItem
                  key={tech.name}
                  icon={Icon}
                  name={tech.name}
                  level={tech.level}
                />
              );

            })}
          </div>                              
          <div />          

          <div />

        </div>
      </div>
    </section>
  );
};