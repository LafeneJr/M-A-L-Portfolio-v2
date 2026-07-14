import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS, type ProjectCategory } from "../../constants/project-index";
import { FeaturedProject } from "./components/FeaturedProject";
import { FilterTabs } from "./components/FilterTabs";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectsStatsCard } from "./components/ProjectsStatsCard";
import { ProjectsCTA } from "./components/ProjectsCTA";



export const ProjectsSection = () => {
  const featuredProject = PROJECTS.find(
    (project) => project.featured
  );

  const categories = useMemo(() => {
    return [
      "All Projects",
      ...new Set(
        PROJECTS.flatMap((project) => project.categories)
      ),
    ] as ProjectCategory[];
  }, []);

  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("All Projects");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      if (project.featured) return false;

      if (activeCategory === "All Projects") {
        return true;
      }

      return project.categories.includes(activeCategory);
    });
  }, [activeCategory]);

  const totalProjects = PROJECTS.length;

  return (
    <section
      className="
        relative        
        w-full
        overflow-hidden        
      "
    >
      <div
        className="                              
          mx-auto

          px-6
          md:ml-20
          lg:ml-18
          xl:px-15
        "
      >
        {/* Section Header */}

        <div
          className="
            grid
            gap-5
            
            lg:grid-cols-[1fr_260px]                        

            items-start
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .7,
            }}
          >
            <div className="flex items-center gap-4 mb-8">

              <span className="text-white/40">
                02
              </span>

              <div className="w-8 h-px bg-white/20" />

              <span className="text-white/60 uppercase tracking-[.25em] text-sm">
                Projects
              </span>

            </div>

            <h1
              className="
                text-5xl
                md:text-6xl

                font-bold

                leading-tight
              "
            >
              Projects that blend

              <br />

              <span
                className="
                  bg-linear-to-r

                  from-indigo-400
                  to-violet-400

                  bg-clip-text

                  text-transparent
                "
              >
                design & engineering
              </span>
            </h1>

            <p
              className="
                mt-3

                max-w-3xl

                leading-8

                text-white/55
              "
            >
              A collection of products I've designed and
              engineered, ranging from AI platforms to
              modern web applications with a strong focus
              on performance, scalability and delightful
              user experiences.
            </p>

          </motion.div>

          <ProjectsStatsCard          
            totalProjects={totalProjects}
          />
        </div>

        {/* Featured */}

        {featuredProject && (
          <div className="mt-15">
            <FeaturedProject
              project={featuredProject}
            />
          </div>
        )}

        {/* Filters */}

        <div className="mt-14">

          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

        </div>

        {/* Grid */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: .35,
            }}
            className="
              mt-10

              grid

              gap-8

              lg:grid-cols-2
            "
          >
            {filteredProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              )
            )}
          </motion.div>

        </AnimatePresence>
        <ProjectsCTA />
      </div>
    </section>
  );
};