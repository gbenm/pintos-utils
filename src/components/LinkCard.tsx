import Link from "@docusaurus/Link"
import React from "react"
import BaseCard from "./BaseCard"


export default ({ children, style, className, to }: Props) => {
  return (
    <Link style={{ all: "unset" }} to={to}>
      <BaseCard className={className} style={{
        ...style,
        border: "1px solid white",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center"
      }}>
        <span style={{ fontSize: "1.25rem" }}>&#x29c9;</span>
        <span style={{ marginLeft: "1rem" }}>{children}</span>
      </BaseCard>
    </Link>
  )
}

export interface Props {
  children: React.ReactNode
  to: string
  style?: React.CSSProperties
  className?: string
}
