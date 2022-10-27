import React, { useCallback, useEffect, useState } from "react"
import { useColorMode } from '@docusaurus/theme-common';

const backgroundColors = {
  light: {
    hover: "#eaeaea",
    normal: "#f1f1f1"
  },
  dark: {
    hover: "#262738",
    normal: "#262728"
  }
}

export default function ({ children, style, className }: Props) {
  const { colorMode } = useColorMode()
  const [bg, setBg] = useState({ variant: "normal", color: backgroundColors[colorMode].hover })

  const changeBg = useCallback((mode: string, variant: string) => {
    setBg({
      color: backgroundColors[mode][variant],
      variant: variant
    })
  }, [])

  useEffect(() => {
    changeBg(colorMode, bg.variant)
  }, [colorMode])

  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: bg.color,
        cursor: "pointer",
        borderRadius: "0.5rem",
        padding: "1rem 2rem"
      }}
      onPointerOver={() => changeBg(colorMode, "hover")}
      onPointerLeave={() => changeBg(colorMode, "normal")}
    >
      {children}
    </div>
  )
}

interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}
