"use client"

import { socials } from "@/app/constants/socials"
import { User, Code2, Wrench, Mail, Briefcase } from "lucide-react"

interface DockNavProps {
  activeWindow: string
  setActiveWindow: (window: string) => void
}

export function DockNav({ activeWindow, setActiveWindow }: DockNavProps) {
  const apps = [
    { id: "about", icon: User, label: "About" },
    { id: "career", icon: Briefcase, label: "Career" },
    { id: "projects", icon: Code2, label: "Projects" },
    { id: "skills", icon: Wrench, label: "Skills" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-strong rounded-2xl px-3 py-2 shadow-2xl">
        <div className="flex items-end gap-2">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => setActiveWindow(app.id)}
              className={`group relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${
                activeWindow === app.id
                  ? "bg-primary/20 shadow-lg shadow-primary/50"
                  : "bg-secondary/50 hover:bg-secondary/70"
              }`}
              aria-label={app.label}
            >
              <app.icon className="w-7 h-7 text-foreground" />

              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-popover rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {app.label}
              </div>

              {activeWindow === app.id && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground" />
              )}
            </button>
          ))}

          <div className="w-px h-12 bg-border mx-1" />

          {socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-xl bg-secondary/50 hover:bg-secondary/70 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6 text-foreground" />

              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-popover rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {link.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
