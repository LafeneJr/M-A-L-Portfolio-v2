import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../assets/logo.png";

const links = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Experience",
    path: "/experience",
  },  
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Navbar backdrop while scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [isOpen]);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300

        ${
          isScrolled
            ? "bg-[#070B18]/70 backdrop-blur-2xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
        max-w-[1550px]
        mx-auto
        px-5
        sm:px-8
        lg:px-10
        2xl:px-0

        flex
        items-center
        justify-between
      "
      >
        {/* Logo */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="MAL Logo"
              className="
                w-20
                sm:w-20
                md:w-30
                lg:w-40
                xl:w-40
                2xl:w-44
                object-contain
              "
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}

        <nav
          className="
          hidden
          md:flex
          items-center          
          gap-8
          xl:gap-10
          2xl:gap-12
        "
        >
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `
                text-[15px]
                transition
                duration-300

                ${
                  isActive
                    ? "text-white"
                    : "text-white/65 hover:text-white"
                }
              `
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Contact */}

        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Link
            to="/contact"
            className="
              hidden
              md:flex

              items-center
              gap-3

              px-3
              py-2

              lg:px-5
              lg:py-3

              rounded-2xl

              border
              border-white/10

              bg-white/4
              backdrop-blur-xl
            "
          >
            <span className="text-white">
              Contact Me
            </span>

            <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_12px_#6E63FF]" />
          </Link>
        </motion.div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            text-white
            p-2
          "
        >
          {isOpen ? (
            <RiCloseLine size={28} />
          ) : (
            <RiMenu3Line size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              md:hidden

              mt-4
              mx-5

              rounded-3xl

              border
              border-white/10

              bg-[#0D1020]/90
              backdrop-blur-2xl

              overflow-hidden
            "
          >

            <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `
                block
                px-6
                py-5

                border-b
                border-white/5

                transition

                ${
                  isActive
                    ? "text-white bg-white/5"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }
              `
            }
          >
            Home
          </NavLink>

            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                    block
                    px-6
                    py-5

                    border-b
                    border-white/5

                    last:border-none

                    transition

                    ${
                      isActive
                        ? "text-white bg-white/5"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="p-5">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  justify-center
                  items-center
                  gap-3

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/5

                  py-4
                "
              >
                <span>Contact Me</span>

                <span className="w-2 h-2 rounded-full bg-indigo-400" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};