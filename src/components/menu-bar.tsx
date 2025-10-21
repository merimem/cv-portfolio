import React from "react"
import Image from "next/image"

const MenuBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-7 glass-strong z-50 flex items-center px-4 text-sm">
      <div className="flex items-center gap-4">
        <Image src="/apple.svg" alt="Logo" width={20} height={20} priority />
        <span className="font-semibold">Portfolio</span>
        <span className="text-muted-foreground">File</span>
        <span className="text-muted-foreground">Edit</span>
        <span className="text-muted-foreground">View</span>
        <span className="text-muted-foreground">Window</span>
      </div>
      <div className="ml-auto flex items-center gap-3 text-xs">
        <span>
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </span>
        <span>
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  )
}

export default MenuBar
