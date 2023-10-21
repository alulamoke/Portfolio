import { Element } from "react-scroll";

import { Button } from "@/components/ui/button";
// Constants
import projects from "@/constants/projects";
import { Github, Link } from "lucide-react";

export const Projects = () => (
  <Element name="Projects" className="bg-inherit px-4 py-16">
    <section className="mx-auto max-w-screen-lg space-y-8">
      <header className="text-center text-xl font-semibold underline underline-offset-4 md:text-2xl">
        Projects
      </header>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.link}
            className="flex flex-col rounded-md border shadow-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-80 w-full rounded-md object-contain"
            />
            <div className="flex flex-col gap-4 bg-background p-4">
              <h1 className="font-bold">{project.title}</h1>
              <p className="text-sm">{project.desc}</p>
              <div className="flex flex-wrap items-center justify-between gap-8">
                <Button size="sm" className="flex items-center gap-2">
                  <Link size={16} />
                  <span>Demo</span>
                </Button>
                <a href={project.link} target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Element>
);
