import { Badge } from "@/components/ui/badge"
import { certificates, skillCategories } from "./skills.constants"

export function SkillsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Skills & Technologies</h2>
        <p className="text-muted-foreground">
          My technical toolkit for building modern Web3 applications
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass rounded-lg p-6 space-y-4">
            <h3
              className={`text-xl font-semibold ${
                category.color === "primary" ? "text-primary" : "text-accent"
              }`}
            >
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold">Certifications & Learning</h3>
        <div className="space-y-3">
          {certificates.map((c, i) => (
            <div className="flex items-start gap-3" key={i}>
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="font-medium">{c.title}</p>
                <p className="text-sm text-muted-foreground">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
