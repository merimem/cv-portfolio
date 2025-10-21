import React from "react"
import Image from "next/image"

const Background = () => {
  return (
    <div className="fixed inset-0">
      <Image
        src="/wallpaper.jpg"
        alt="macOS wallpaper"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br  via-secondary ">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  )
}

export default Background
