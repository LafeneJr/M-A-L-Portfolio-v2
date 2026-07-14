import { motion } from "framer-motion";
import {
  RiArrowRightUpLine,
  RiGithubLine,
  RiSparkling2Line,
  RiCodeSSlashLine,
  RiOpenaiLine,
} from "react-icons/ri";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiDrizzle,
  SiNodedotjs,
  SiJsonwebtokens,
  SiFramer,  
  SiMaildotru,
} from "react-icons/si";
import type { Project } from "../../../constants/project-index";

import type { IconType } from "react-icons";

interface TechIcon {
  icon: IconType;
  color: string;
}

const techIcons: Record<string, TechIcon> = {
  "Next.js": {
    icon: SiNextdotjs,
    color: "text-white",
  },

  React: {
    icon: SiReact,
    color: "text-cyan-400",
  },

  TypeScript: {
    icon: SiTypescript,
    color: "text-blue-500",
  },

  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },

  Express: {
    icon: SiExpress,
    color: "text-gray-300",
  },

  PostgreSQL: {
    icon: SiPostgresql,
    color: "text-sky-500",
  },

  "Drizzle ORM": {
    icon: SiDrizzle,
    color: "text-lime-400",
  },

  OpenAI: {
    icon: RiOpenaiLine,
    color: "text-emerald-400",
  },

  "Node.js": {
    icon: SiNodedotjs,
    color: "text-green-500",
  },

  JWT: {
    icon: SiJsonwebtokens,
    color: "text-pink-400",
  },

  "Framer Motion": {
    icon: SiFramer,
    color: "text-fuchsia-400",
  },

  EmailJS: {
    icon: SiMaildotru,
    color: "text-orange-400",
  },

  "REST API": {
    icon: RiCodeSSlashLine,
    color: "text-indigo-300",
  },
};

interface FeaturedProjectProps {
  project: Project;
}

export const FeaturedProject = ({
  project,
}: FeaturedProjectProps) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: .2,
      }}
      transition={{
        duration: .8,
      }}
      className="
        group
        relative

        overflow-hidden

        rounded-[42px]

        border
        border-white/10

        bg-white/3

        backdrop-blur-2xl
      "
    >
      <div
        className="
          grid

          lg:grid-cols-2
        "
      >

        <div
          className="
            flex
            flex-col
          "
        >
        {/* IMAGE */}

        <div
          className="
            relative

            overflow-hidden
          "
        >
          <motion.img
            whileHover={{
              scale: 1.04,
            }}
            transition={{
              duration: .8,
            }}
            src={project.image}
            alt={project.title}
            className="
              h-fit
              w-fit

              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0

              bg-linear-to-t

              from-[#070B18]

              via-transparent

              to-transparent
            "
          />  
          </div>

          {/* Desktop Buttons */}

          <div
            className="
              hidden

              lg:flex

              items-center
              justify-center

              gap-6

              p-8
            "
          >
            {project.links.liveDemo && (
              <motion.a
                whileHover={{
                  x: -6,
                }}
                href={project.links.liveDemo.href}
                className="
                  flex

                  items-center

                  gap-3

                  rounded-2xl

                  bg-linear-to-r

                  from-indigo-600
                  to-violet-600

                  px-7
                  py-4

                  font-medium

                  shadow-[0_0_35px_rgba(99,102,241,.4)]
                "
              >
                {project.links.liveDemo.label}

                <RiArrowRightUpLine size={20} />
              </motion.a>
            )}

            {project.links.github && (
              <motion.a
                whileHover={{
                  rotate: 10,
                  x: 6,
                }}
                href={project.links.github.href}
                className="
                  flex

                  items-center

                  gap-3

                  rounded-2xl

                  bg-linear-to-r

                  from-indigo-600
                  to-violet-600

                  px-7
                  py-4

                  font-medium

                  shadow-[0_0_35px_rgba(99,102,241,.4)]
                "
              >
                {project.links.github.label}

                <RiGithubLine size={20} />
              </motion.a>
            )}
          </div>

        </div>

        {/* CONTENT */}

        <div
          className="
            flex

            flex-col

            justify-center

            px-3
            md:px-8
            p-8            
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p className="text-indigo-300">
              {project.subtitle}
            </p>

            <div
              className="
                inline-flex
                items-center
                gap-2

                self-start

                rounded-full

                border
                border-indigo-400/30

                bg-indigo-500/15

                px-4
                py-2

                backdrop-blur-xl
              "
            >
              <RiSparkling2Line className="text-indigo-300" />

              <span className="text-sm text-indigo-300">
                Featured Project
              </span>
            </div>
          </div>

          <h2
            className="
              mt-4

              text-4xl
              md:text-5xl

              font-bold

              leading-tight
            "
          >
            {project.title}
          </h2>

          <p
            className="
              mt-1

              max-w-xl

              leading-8

              text-white/60
            "
          >
            {project.description}
          </p>

          {/* STATS */}

          {project.stats && (
            <div
              className="
                mt-2
                grid
                grid-cols-3
                gap-2
              "
            >
              {project.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    rounded-2xl

                    border
                    border-white/10

                    bg-white/5

                    p-1
                    text-center

                  "
                >
                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    {stat.value}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-white/45
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TECH */}

          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-2
            "
          >
            {project.technologies.map((tech) => {
              const item = techIcons[tech];

              return (
                <motion.span
                  key={tech}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  className="
                    group

                    flex
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-white/10

                    bg-white/5

                    px-4
                    py-2

                    text-xs
                    text-white/75

                    transition-colors
                    duration-300

                    hover:border-indigo-400/30
                    hover:bg-indigo-500/10
                  "
                >
                  {item && (
                      <item.icon
                          className={`
                              text-base
                              transition-all
                              duration-300

                              ${item.color}

                              group-hover:scale-110
                          `}
                      />
                  )}

                  {tech}
                </motion.span>
              );
            })}
          </div>

          <div className="flex lg:hidden mx-auto gap-8">

            {/* BUTTON */}

            {project.links.liveDemo && (
                <motion.a
                whileHover={{                    
                    x: -6,
                }}
                href={project.links.liveDemo.href}
                className="
                    mt-4
                    flex
                    w-fit
                    items-center
                    gap-3
                    rounded-2xl
                    bg-linear-to-r
                    from-indigo-600
                    to-violet-600
                    px-7
                    py-4
                    font-medium
                    shadow-[0_0_35px_rgba(99,102,241,.4)]
                "
                >
                {project.links.liveDemo.label}

                <RiArrowRightUpLine
                    size={20}
                />
                </motion.a>
            )}


            {project.links.github && (
                <motion.a
                whileHover={{
                    rotate: 10,
                    x: 6,
                }}
                href={project.links.github.href}
                className="
                    mt-4
                    flex
                    w-fit
                    items-center
                    gap-3
                    rounded-2xl
                    bg-linear-to-r
                    from-indigo-600
                    to-violet-600
                    px-7
                    py-4
                    font-medium
                    shadow-[0_0_35px_rgba(99,102,241,.4)]
                "
                >
                {project.links.github.label}

                <RiGithubLine size={20} />                
                </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-96
          w-96
          rounded-full
          bg-indigo-500/10
          blur-[140px]
        "
      />
    </motion.section>
  );
};