"use client"
import type { ReactNode } from "react"

interface MacWindowProps {
  title: string
  children: ReactNode
  onClose?: () => void
}

export function MacWindow({ title, children, onClose }: MacWindowProps) {
  return (
    <div className="glass-strong rounded-xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Window chrome */}
      <div className="h-10 bg-secondary/50 border-b border-border flex items-center px-4 gap-2">
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-destructive hover:bg-destructive/80 transition-colors"
            aria-label="Close"
          />
          <button
            className="w-3 h-3 rounded-full bg-[oklch(0.75_0.18_60)] hover:bg-[oklch(0.75_0.18_60)]/80 transition-colors"
            aria-label="Minimize"
          />
          <button
            className="w-3 h-3 rounded-full bg-[oklch(0.7_0.2_140)] hover:bg-[oklch(0.7_0.2_140)]/80 transition-colors"
            aria-label="Maximize"
          />
        </div>
        <div className="flex-1 text-center text-sm font-medium text-foreground/80">
          {title}
        </div>
        <div className="w-12" /> {/* Spacer for centering */}
      </div>

      {/* Window content */}
      <div className="p-8 max-h-[70vh] overflow-y-auto">{children}</div>
    </div>
  )
}
