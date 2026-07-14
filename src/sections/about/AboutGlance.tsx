import { motion } from "framer-motion";

import { aboutStats } from "../../constants/portfolio";

export const AboutGlance = () => {
  return (
    <section>
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
        {/* Heading */}

        <div className="flex items-center gap-4 mb-8">
          <span className="text-white/40">
            03
          </span>

          <div className="w-8 h-px bg-white/20" />

          <span className="text-white/60">
            At a Glance
          </span>
        </div>

        <div
          className="
          grid
          gap-5

          sm:grid-cols-2
          "
        >
          {aboutStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .55,
                delay: index * .12,
              }}
              whileHover={{
                y: -8,
              }}
              className="
              rounded-4xl

              border
              border-white/10

              bg-white/3

              backdrop-blur-xl

              p-8

              transition-colors
              hover:border-indigo-400/30
              "
            >
              <h3
                className="
                text-5xl
                font-bold

                bg-linear-to-r
                from-indigo-300
                to-violet-400

                bg-clip-text
                text-transparent
                "
              >
                {item.value}
              </h3>

              <p
                className="
                mt-3
                text-white/50
                "
              >
                {item.label}
              </p>

              <div
                className="
                mt-6
                h-px

                bg-linear-to-r
                from-indigo-500
                to-transparent
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};