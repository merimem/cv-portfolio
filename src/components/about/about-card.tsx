import clsx from "clsx"
import React from "react"

interface AboutCardProps {
  title: string
  body: string
  index: number
}

const AboutCard = ({ title, body, index }: AboutCardProps) => {
  return (
    <div className="glass rounded-lg p-4 space-y-2">
      <h3
        className={clsx(
          "font-semibold ",
          index % 2 === 0 ? "text-accent" : "text-primary"
        )}
      >
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{body}</p>
    </div>
  )
}

export default AboutCard
