import { motion } from "framer-motion";
import { RiDownload2Line } from "react-icons/ri";

import { hero } from "../../constants/portfolio";

import profile from "../../assets/profile1.webp";

export const Hero = () => {
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
        xl:px-20and
        "
      >
        <div
          className="
          grid
          gap-10
          md:grid-cols-2
          lg:grid-cols-2
          items-center
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="md:pl-5"            
          >
            {/* Badge */}

            <div
              className="
              flex
              items-center
              gap-4
              mb-6
              "
            >
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
                {hero.badge}
              </p>

              <div className="w-20 h-px bg-white/10" />
            </div>

            {/* NAME */}

            <h1
              className="
              font-bold
              leading-none

              text-6xl              
              md:text-6xl
              lg:text-7xl
              xl:text-8xl

              tracking-tight
              "
            >
              <span className="block">{hero.title[0]}</span>

              <span className="block">
                {hero.title[1]}
              </span>
            </h1>

            {/* Subtitle */}

            <p
              className="
              mt-8
              text-lg
              lg:text-xl
              text-white/55
              max-w-xl
              "
            >
              {hero.subtitle}
            </p>

            {/* CTA */}

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .96 }}

              href="/muhammad-aliyu-lafene-frontend-dev-resume.pdf"

              download="muhammad-aliyu-lafene-frontend-dev-resume.pdf"

              className="
                mt-10

                h-16

                px-8

                rounded-2xl

                inline-flex

                items-center
                gap-6

                border
                border-indigo-400/40

                bg-linear-to-r
                from-indigo-500/30
                to-indigo-500

                shadow-[0_0_35px_rgba(99,102,241,.6)]
              "
            >
              <span className="font-medium">
                {hero.button}
              </span>

              <span
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  bg-white/10
                "
              >
                <RiDownload2Line size={24} />
              </span>
            </motion.a>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .9 }}
            className="
            relative

            flex
            justify-center

            mt-10
            lg:mt-0
            "
          >
            {/* Portrait Card */}

            <div
              className="
              relative

              w-full
              max-w-sm
              md:max-w-md
              xl:max-w-lg           
              h-fit

              rounded-[34px]

              border
              border-indigo-400/40

              bg-white/4

              backdrop-blur-xl

              overflow-hidden

              shadow-[0_0_60px_rgba(99,102,241,.25)]
              "
            >
              <img
                src={profile}
                alt="Muhammad"
                className="
                w-full
                object-cover
                "
              />                            
            </div>

            {/* Floating Orb */}

            <div
              className="
              hidden
              sm:flex

              absolute

              sm:right-0
              sm:bottom-5              
              lg:-right-2
              lg:bottom-12

              w-20
              h-20

              rounded-full

              border
              border-indigo-400/40

              bg-linear-to-br
              from-indigo-500/30
              to-violet-500/30

              backdrop-blur-xl

              items-center
              justify-center

              shadow-[0_0_40px_rgba(99,102,241,.6)]
              "
            >
              ✦
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};