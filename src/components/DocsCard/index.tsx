import React from "react"
import BaseCard from "../BaseCard"

export default function ({ description, title, style, className }: Props) {
  return (
    <BaseCard className={className} style={{
      ...style,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "9rem",
    }}>
      <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>{title}</div>
      <div style={{ display: "flex", flexGrow: "1", alignItems: "center", textAlign: "center" }}>
        {description}
      </div>
    </BaseCard>
  )
}

interface Props {
  title: string
  description: string
  style?: React.CSSProperties
  className?: string
}
