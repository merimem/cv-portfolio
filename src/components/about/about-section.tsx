import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { skills } from "./about.constants"
import AboutCard from "./about-card"

export function AboutSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-4 ">
        <div className="flex gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold text-balance">
            Senior Full-Stack Developer
            <p className="text-xl">
              <span className="text-primary">React</span>,{" "}
              <span className="text-accent">Remix/Next.JS</span>,{" "}
              <span className="text-chart-5">NodeJS</span>,{" "}
              <span className="text-primary">Solidity</span>
            </p>
          </h1>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          An engineer experienced in working with major companies and helping
          startups create powerful, high-impact websites. With a strong sense of
          art and design, I combine technical expertise with creativity to
          deliver visually stunning and performance-driven digital experiences.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Who I Am</h2>
        <p className="text-muted-foreground leading-relaxed">
          I`m an expert in building modern, high-performance web applications
          and currently training in developing decentralized applications
          (dApps) and smart contracts within the Web3 ecosystem. My work bridges
          the gap between Web2 and Web3, focusing on creating innovative,
          scalable, and user-centric solutions.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          With a deep understanding of modern UI/UX principles and
          component-driven architecture, I transform complex ideas into
          seamless, interactive user experiences that drive real impact.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">What I Do</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill, i) => (
            <AboutCard
              title={skill.title}
              body={skill.description}
              key={skill.title + i}
              index={i}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" className="text-yellow-200">
          Available for hire
        </Badge>
        <Badge variant="outline">Open to collaborations</Badge>
        <Badge variant="outline">Remote friendly</Badge>
      </div>
    </div>
  )
}
