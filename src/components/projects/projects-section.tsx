import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const projects = [
    {
      title: "Donation Dapp",
      description: `Chain4Goog Dapp is a decentralized donation platform that connects associations, donors, and beneficiaries within a single transparent ecosystem. 
        Donors select a cause they care about and contribute funds, which are automatically staked in a shared liquidity pool to generate passive yield.
When an emergency crisis arises, associations can submit a funding request through a decentralized form. 
Donors then vote on-chain to approve or reject the release of funds, ensuring community-driven governance and transparency. 
Once approved, only verified beneficiaries can withdraw the funds as redeemable coupons, ensuring that donations are used ethically and reach those in real need.`,
      tech: ["Solidity", "React", "ethers.js", "Hardhat", "RainbowKit"],
      github: "https://github.com/merimem/donations-dapp",
      demo: "https://chain4good.vercel.app/",
      highlight: "Smart Contracts",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="text-muted-foreground">
          A selection of my recent work in Web3 and decentralized applications
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass rounded-lg p-6 space-y-4 hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge
                    variant={
                      project.highlight === "Smart Contracts"
                        ? "default"
                        : "secondary"
                    }
                    className={
                      project.highlight === "Smart Contracts"
                        ? "bg-accent/20 text-accent border-accent/30"
                        : ""
                    }
                  >
                    {project.highlight}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
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

            <div className="flex gap-3">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
