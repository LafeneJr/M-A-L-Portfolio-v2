import { motion } from "framer-motion";
import { useState } from "react";

import {
  RiArrowRightUpLine,
  RiLoader4Line,
} from "react-icons/ri";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    // EmailJS / Resend integration later

    await new Promise((resolve) =>
      setTimeout(resolve, 1800)
    );

    setLoading(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
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
        duration: .8,
        delay: .15,
      }}
      className="
        relative

        rounded-[36px]

        border
        border-white/10

        bg-white/3

        backdrop-blur-2xl

        p-5
        sm:p-6
        md:p-8
      "
    >
      {/* Heading */}

      <div className="mb-10">

        <span
          className="
            text-sm

            uppercase

            tracking-[.25em]

            text-indigo-300
          "
        >
          Start a Conversation
        </span>

        <h2
          className="
            mt-3

            text-4xl

            font-bold
          "
        >
          Let's build something
          <br />
          <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          exceptional.
          </span>
        </h2>

      </div>

      {/* Name */}

      <div className="mb-7">

        <label
          htmlFor="name"
          className="
            mb-3

            block

            text-sm

            text-white/55
          "
        >
          Full Name
        </label>

        <input
          id="name"
          type="text"
          placeholder="John Doe"
          required
          className="
            w-full

            rounded-2xl

            border
            border-white/10

            bg-white/5

            px-4
            py-3

            outline-none

            transition-all
            duration-300

            placeholder:text-white/25

            focus:border-indigo-400/50

            focus:bg-white/7

            focus:shadow-[0_0_25px_rgba(99,102,241,.18)]
          "
        />

      </div>

      {/* Email */}

      <div className="mb-7">

        <label
          htmlFor="email"
          className="
            mb-3

            block

            text-sm

            text-white/55
          "
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          placeholder="john@email.com"
          required
          className="
            w-full

            rounded-2xl

            border
            border-white/10

            bg-white/5

            px-4
            py-3

            outline-none

            transition-all
            duration-300

            placeholder:text-white/25

            focus:border-indigo-400/50

            focus:bg-white/7

            focus:shadow-[0_0_25px_rgba(99,102,241,.18)]
          "
        />

      </div>

      {/* Subject */}

      <div className="mb-7">

        <label
          htmlFor="subject"
          className="
            mb-3

            block

            text-sm

            text-white/55
          "
        >
          Subject
        </label>

        <input
          id="subject"
          type="text"
          placeholder="Project inquiry"
          required
          className="
            w-full

            rounded-2xl

            border
            border-white/10

            bg-white/5

            px-4
            py-3

            outline-none

            transition-all
            duration-300

            placeholder:text-white/25

            focus:border-indigo-400/50

            focus:bg-white/7

            focus:shadow-[0_0_25px_rgba(99,102,241,.18)]
          "
        />

      </div>

      {/* Message */}

      <div>

        <label
          htmlFor="message"
          className="
            mb-3

            block

            text-sm

            text-white/55
          "
        >
          Message
        </label>

        <textarea
          id="message"
          rows={7}
          placeholder="Tell me about your project..."
          required
          className="
            w-full

            resize-none

            rounded-2xl

            border
            border-white/10

            bg-white/5

            px-4
            py-3

            outline-none

            transition-all
            duration-300

            placeholder:text-white/25

            focus:border-indigo-400/50

            focus:bg-white/7

            focus:shadow-[0_0_25px_rgba(99,102,241,.18)]
          "
        />

      </div>

      {/* Bottom */}

      <div
        className="
          mt-10

          flex
          flex-col
          gap-3

          sm:flex-row

          md:items-center

          md:justify-between
        "
      >
        <p
          className="
            max-w-sm

            text-sm

            leading-7

            text-white/45
          "
        >
          I'll usually respond within 24 hours.
          Looking forward to hearing about your
          project.
        </p>

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: .96,
          }}
          disabled={loading}
          type="submit"
          className="
            inline-flex

            items-center

            gap-3

            rounded-2xl

            bg-linear-to-r
            from-indigo-600
            to-violet-600

            w-full
            justify-center

            sm:w-auto

            px-6
            py-3

            font-medium

            shadow-[0_0_35px_rgba(99,102,241,.35)]
          "
        >
          {loading ? (
            <>
              <RiLoader4Line
                className="
                  animate-spin
                  text-xl
                "
              />

              Sending...
            </>
          ) : (
            <>
              Send Message

              <RiArrowRightUpLine
                className="text-xl"
              />
            </>
          )}
        </motion.button>

      </div>

      {/* Decorative Glow */}

      <div
        className="
          pointer-events-none

          absolute

          -right-24
          -bottom-24

          h-72
          w-72

          rounded-full

          bg-indigo-500/10

          blur-[110px]
        "
      />
    </motion.form>
  );
};