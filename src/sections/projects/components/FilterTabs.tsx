"use client";

import { motion } from "framer-motion";
import { PROJECT_CATEGORIES, type ProjectCategory } from "../../../constants/project-index";


interface FilterTabsProps {
  categories: ProjectCategory[];

  activeCategory: ProjectCategory;

  onChange: (
    category: ProjectCategory
  ) => void;
}

export function FilterTabs({
  activeCategory,
  onChange,
}: FilterTabsProps) {
  return (
    <div
      className="
        relative

        flex
        items-center

        gap-3

        overflow-x-auto

        pb-2

        scrollbar-hide
      "
    >
      {PROJECT_CATEGORIES.map((category) => {
        const active = category === activeCategory;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className="
              relative

              whitespace-nowrap

              rounded-full

              px-5
              py-2.5

              text-sm
              font-medium

              transition-colors
            "
          >
            {active && (
              <motion.div
                layoutId="active-project-filter"

                transition={{
                  type: "spring",

                  stiffness: 280,

                  damping: 26,
                }}

                className="
                  absolute

                  inset-0

                  rounded-full

                  border
                  border-indigo-500/40

                  bg-linear-to-r
                  from-indigo-600
                  via-violet-600
                  to-blue-600

                  shadow-[0_0_30px_rgba(99,102,241,.45)]
                "
              />
            )}

            <span
              className={`
                relative
                z-10

                transition-colors

                ${
                  active
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }
              `}
            >
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
}