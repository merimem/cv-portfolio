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
            <p className="text-2xl">
              <span className="text-primary">React</span>,{" "}
              <span className="text-accent">NodeJS</span>,{" "}
              <span className="text-chart-5">Solidity</span>
            </p>
          </h1>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Building the future of decentralized applications with modern web
          technologies and blockchain innovation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Who I Am</h2>
        <p className="text-muted-foreground leading-relaxed">
          I`m a passionate developer with expertise in creating seamless user
          experiences on the frontend while architecting secure and efficient
          smart contracts on the blockchain. My work bridges the gap between
          Web2 and Web3, delivering applications that are both beautiful and
          decentralized.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          With a strong foundation in React, Next.js, and TypeScript, combined
          with deep knowledge of Solidity, Ethereum, and DeFi protocols, I
          create full-stack dApps that push the boundaries of whats possible in
          Web3.
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
