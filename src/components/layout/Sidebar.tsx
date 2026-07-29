import {
  RiHome5Fill,
  RiUser3Line,
  RiCodeSSlashLine,
  RiFolder3Line,
  RiMailLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navigation = [
  {
    icon: RiHome5Fill,
    href: "/",
    label: "Home",
  },
  {
    icon: RiUser3Line,
    href: "/about",
    label: "About",
  },
  {
    icon: RiCodeSSlashLine,
    href: "/projects",
    label: "Projects",
  },
  {
    icon: RiFolder3Line,
    href: "/experience",
    label: "Experience",
  },
  {
    icon: RiMailLine,
    href: "/contact",
    label: "Contact",
  },
];

const socials = [
  {
    icon: RiGithubFill,
    href: "https://github.com/LafeneJr",
    label: "GitHub",
  },
  {
    icon: RiLinkedinBoxFill,
    href: "https://www.linkedin.com/in/lafenejr",
    label: "LinkedIn",
  },
  {
    icon: RiTwitterXFill,
    href: "https://x.com/aliyu_lafene",
    label: "Twitter",
  },
];

export const Sidebar = () => {
  return (
    <aside
      className="
        hidden
        md:flex

        fixed
        left-8
        2xl:left-10

        top-1/2
        -translate-y-52

        z-50
      "
    >
      <div
        className="
          w-14
          2xl:w-16

          h-130
          2xl:h-150

          rounded-xl

          border
          border-white/10

          bg-white/3
          backdrop-blur-2xl

          py-6

          flex
          flex-col
          justify-between
        "
      >
        {/* Navigation */}

        <div className="flex flex-col items-center gap-2">
          {navigation.map(({ icon: Icon, href, label }) => (
            <NavLink
              key={href}
              to={href}
              aria-label={label}
              className={({ isActive }) =>
                `
                w-10
                h-10

                rounded-2xl

                flex
                items-center
                justify-center

                transition-all
                duration-300

                ${
                  isActive
                    ? "bg-indigo-500/30 text-indigo-300 shadow-[0_0_25px_rgba(99,102,241,.6)]"
                    : "text-white/70 hover:text-white hover:bg-indigo-500/20 hover:scale-110"
                }
              `
              }
            >
              <Icon size={20} />
            </NavLink>
          ))}
        </div>

        {/* Socials */}

        <div className="flex flex-col items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{
                scale: 1.15,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                text-white/55
                hover:text-white
                transition-colors
              "
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>
      </div>
    </aside>
  );
};