import { motion } from "framer-motion";
import {
  RiArrowRightUpLine,
  RiGithubLine,
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



interface ProjectCardProps {
  project: Project;

  index?: number;
}

export const ProjectCard = ({
  project,
  index = 0,
}: ProjectCardProps) => {  
  return (
    <motion.article
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
        amount: .25,
      }}
      transition={{
        duration: .7,
        delay: index * .12,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        relative

        overflow-hidden

        rounded-[34px]

        border
        border-white/10

        bg-white/3

        backdrop-blur-2xl

        transition-all
        duration-500

        hover:border-indigo-400/30
        hover:shadow-[0_0_60px_rgba(99,102,241,.18)]
      "
    >
      {/* Image */}

      <div
        className="
          relative

          overflow-hidden

          aspect-16/10
        "
      >
        <motion.img
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: .6,
          }}
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full

            object-cover
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-linear-to-t
            from-[#070B18]
            via-[#070B18]/20
            to-transparent

            opacity-80
          "
        />

        {/* Featured Badge */}

        {project.featured && (
          <div
            className="
              absolute

              top-5
              left-5

              rounded-full

              border
              border-indigo-400/30

              bg-indigo-500/15

              px-4
              py-2

              backdrop-blur-xl

              text-xs
              font-medium
              text-indigo-300
            "
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}

      <div className="p-8">

        <p className="text-sm text-indigo-300">
          {project.subtitle}
        </p>

        <h3
          className="
            mt-3

            text-3xl

            font-bold
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-5

            leading-7

            text-white/55
          "
        >
          {project.description}
        </p>

        {/* Tech */}

        <div
          className="
            mt-8

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

        {/* Footer */}

        <div
          className="
            mt-10

            flex

            items-center

            justify-between
          "
        >
          {/* Live Demo */}

          {project.links.liveDemo ? (
            <motion.a
              whileHover={{
                x: 5,
              }}
              href={project.links.liveDemo.href}
              className="
                flex
                items-center

                gap-2

                font-medium

                text-indigo-300
              "
            >
              {project.links.liveDemo.label}

              <RiArrowRightUpLine
                size={18}
              />
            </motion.a>
          ) : (
            <div />
          )}

          {/* GitHub */}

          {project.links.github && (
            <motion.a
              whileHover={{
                rotate: 10,
                scale: 1.1,
              }}
              href={project.links.github.href}
              target="_blank"
              className="
                flex

                h-12
                w-12

                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-white/5
              "
            >
              <RiGithubLine size={20} />
            </motion.a>
          )}
        </div>

      </div>

      {/* Glow */}

      <div
        className="
          pointer-events-none

          absolute

          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute

            -top-20
            right-0

            h-56
            w-56

            rounded-full

            bg-indigo-500/10

            blur-3xl
          "
        />
      </div>

    </motion.article>
  );
};