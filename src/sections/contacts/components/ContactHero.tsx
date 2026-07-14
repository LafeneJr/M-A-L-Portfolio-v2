import { motion } from "framer-motion";

import {
  RiCheckboxCircleFill,
  RiArrowRightUpLine,
} from "react-icons/ri";

import {
  CONTACT_HEADER,
  AVAILABILITY,
} from "../../../constants/contact-constant/contact-data";

import { GlobeScene } from "../../../components/three";



export const ContactHero = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .8,
      }}
      className="
        relative        

        flex
        flex-col        
      "
    >
      {/* Section Label */}

      <div
        className="
          flex
          items-center

          gap-4

          mb-8
        "
      >
        <span className="text-white/40">
          03
        </span>

        <div className="w-8 h-px bg-white/20" />

        <span className="text-white/60">
          {CONTACT_HEADER.section}
        </span>
      </div>

      {/* Heading */}

      <h1
        className="
          text-5xl
          md:text-6xl
          lg:text-7xl

          font-bold

          leading-[.95]
          tracking-tight
        "
      >
        {CONTACT_HEADER.title.map((line) => (
          <span
            key={line}
            className="lg:block"
          >
            {line}
          </span>
        ))}
      </h1>

      {/* Description */}

      <p
        className="
          mt-5

          max-w-full
          
          sm:max-w-xl

          text-lg

          leading-8

          text-white/60
        "
      >
        {CONTACT_HEADER.description}
      </p>

      {/* Availability */}

      <motion.div
        whileHover={{
          y: -4,
        }}
        className="
          mt-5

          inline-flex
          w-fit

          items-center

          gap-4

          rounded-2xl

          border
          border-emerald-400/20

          bg-emerald-500/10

          px-6
          py-4

          backdrop-blur-xl
        "
      >
        <RiCheckboxCircleFill
          className="
            text-2xl

            text-emerald-400
          "
        />

        <div>

          <p
            className="
              text-sm

              text-white/50
            "
          >
            {AVAILABILITY[0].title}
          </p>

          <h4
            className="
              font-semibold

              text-emerald-300
            "
          >
            {AVAILABILITY[0].value}
          </h4>

        </div>

        <RiArrowRightUpLine
          className="
            ml-4

            text-xl

            text-white/40
          "
        />
      </motion.div>

      {/* Globe */}

      <div
        className="
          relative

          mt-8

          h-85
          md:h-105          

          overflow-hidden

          rounded-4xl

          border
          border-white/10

          bg-linear-to-b
          from-white/5
          to-transparent

          backdrop-blur-xl
        "
      >
        <GlobeScene />

        {/* Glow */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            bg-radial

            from-indigo-500/15

            via-transparent

            to-transparent
          "
        />
      </div>
    </motion.div>
  );
};