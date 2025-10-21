import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { experiences } from "./career.constants"

export function CareerSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Career Journey</h2>
        <p className="text-muted-foreground">
          A timeline of my professional experience, highlighting key roles,
          projects, and achievements throughout my career in technology.
        </p>
      </div>

      <div className="grid gap-6">
        {experiences.map((project, index) => (
          <div
            key={index}
            className="glass rounded-lg p-6 space-y-4 hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  {project.logo && (
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="w-12 h-12 object-contain"
                      width="120"
                      height={"120"}
                    />
                  )}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open project link in a new tab"
                    title="Open project link"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                  <Badge
                    variant={
                      project.highlight === "Frontend" ? "default" : "secondary"
                    }
                    className={
                      project.highlight === "Frontend"
                        ? "bg-accent/20 text-accent border-accent/30"
                        : ""
                    }
                  >
                    {project.highlight}
                  </Badge>
                </div>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  {project.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* <div className="flex gap-3">
              <Button size="sm" variant="outline" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}
