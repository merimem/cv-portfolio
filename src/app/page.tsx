"use client"

import { useState } from "react"
import { MacWindow } from "@/components/mac-window"
import { AboutSection } from "@/components/about/about-section"
import { ProjectsSection } from "@/components/projects/projects-section"
import { SkillsSection } from "@/components/skills/skills-section"
import { ContactSection } from "@/components/contact-section"
import { DockNav } from "@/components/dock-nav"
import MenuBar from "@/components/menu-bar"

import Background from "@/components/background"
import { CareerSection } from "@/components/career/career"

export default function Portfolio() {
  const [activeWindow, setActiveWindow] = useState<string>("about")

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />

      <MenuBar />

      {/* Main content area */}
      <div className="relative z-10 pt-16 pb-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Windows */}
          <div className="grid gap-6">
            {activeWindow === "about" && (
              <MacWindow title="Portfolio" onClose={() => setActiveWindow("")}>
                <AboutSection />
              </MacWindow>
            )}

            {activeWindow === "projects" && (
              <MacWindow title="Projects" onClose={() => setActiveWindow("")}>
                <ProjectsSection />
              </MacWindow>
            )}

            {activeWindow === "skills" && (
              <MacWindow
                title="Skills & Tech Stack"
                onClose={() => setActiveWindow("")}
              >
                <SkillsSection />
              </MacWindow>
            )}

            {activeWindow === "career" && (
              <MacWindow title="Career" onClose={() => setActiveWindow("")}>
                <CareerSection />
              </MacWindow>
            )}

            {activeWindow === "contact" && (
              <MacWindow title="Contact" onClose={() => setActiveWindow("")}>
                <ContactSection />
              </MacWindow>
            )}
          </div>
        </div>
      </div>

      <DockNav activeWindow={activeWindow} setActiveWindow={setActiveWindow} />
    </div>
  )
}
