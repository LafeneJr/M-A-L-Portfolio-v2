import { motion } from "framer-motion";
import { RiFolderLine } from "react-icons/ri";

interface ProjectsStatsCardProps {
  totalProjects: number;
}

export const ProjectsStatsCard = ({
  totalProjects,
}: ProjectsStatsCardProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
        relative
        
        hidden
        lg:inline        

        overflow-hidden

        rounded-[30px]

        lg:my-auto

        bg-white/3

        p-4

        backdrop-blur-2xl

        transition-all
        duration-500

        hover:border-indigo-400/30
        hover:shadow-[0_0_60px_rgba(99,102,241,.18)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute

          -right-12
          -bottom-12

          h-36
          w-36

          rounded-full

          bg-indigo-500/40

          blur-3xl
        "
      />

      {/* Icon */}

      <div
        className="
            mb-3

            inline-flex
            items-center
            gap-3    
        "
        >
        <div
            className="
            flex

            h-10
            w-10

            items-center
            justify-center

            rounded-lg

            bg-indigo-500/15
            "
        >
            <RiFolderLine
            className="text-xl text-indigo-300"
            />
        </div>

        <div>
            <p className="text-sm text-white/45">
            Total Personal Projects
            </p>
        </div>
        </div>


      <div className="text-center">
        <h2
            className="
            mt-2

            text-5xl

            font-bold
            "
        >
            {totalProjects}+
        </h2>

        <p
            className="
            mt-2

            text-white/60
            "
        >
            Completed
        </p>
      </div>
    </motion.div>
  );
};