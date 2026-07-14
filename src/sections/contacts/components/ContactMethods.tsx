import { motion } from "framer-motion";

import {  
  SOCIAL_LINKS,
} from "../../../constants/contact-constant/contact-data";

import { RiArrowRightUpLine } from "react-icons/ri";

export const ContactMethods = () => {
  return (
    <div
      className="w-full"
    >      
      {/* Social Links */}

      <motion.div
        initial={{
          opacity: 0,
          x: 30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: .7,
          delay: .15,
        }}
        viewport={{
          once: true,
        }}
        className="
          rounded-[34px]

          border
          border-white/10

          bg-white/3

          backdrop-blur-2xl

          p-5
        "
      >
        <div className="mb-8">

          <span
            className="
              text-sm

              uppercase

              tracking-[.25em]

              text-indigo-300
            "
          >
            Social
          </span>

          <h3
            className="
              mt-3

              text-2xl

              font-semibold
            "
          >
            Find me online
          </h3>

        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3            

            gap-4
          "
        >
          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"

              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: .45,
                delay: index * .08,
              }}

              whileHover={{
                y: -6,
                scale: 1.03,
              }}

              whileTap={{
                scale: .98,
              }}

              viewport={{
                once: true,
              }}

              className="
                group

                flex

                items-center

                gap-4

                rounded-2xl

                border
                border-white/10

                bg-white/5

                px-5
                py-5

                transition-all
                duration-300

                hover:border-indigo-400/40
                hover:bg-indigo-500/10
              "
            >
              <motion.div
              whileHover={{
                rotate:10,
                scale: 1.08,
              }}
                className="
                  flex

                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-xl

                  bg-white/10

                  text-xl

                  transition-colors
                  duration-300

                  group-hover:bg-indigo-500/20
                  group-hover:text-indigo-300
                "
              >
                <social.icon />
              </motion.div>

              <div className="flex-1">

                <p
                    className="
                        text-xs

                        uppercase

                        tracking-widest

                        text-white/35
                    "
                >
                    {social.name}
                </p>

                <p
                    className="
                        mt-1

                        text-base

                        font-semibold

                        text-white
                    "
                >
                    {social.username}
                </p>

              </div>              
                <motion.div
                    whileHover={{
                    x: 4,
                    y: -4,
                    scale: 1.15,
                    }}
                    className="
                    text-white/30                
        
                    transition-colors
                    duration-300
        
                    group-hover:text-indigo-300
                    "
                >
                    <RiArrowRightUpLine size={20} />
                </motion.div>                      
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};