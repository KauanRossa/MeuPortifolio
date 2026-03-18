"use client"

import { useEffect, useRef, type ReactNode } from "react"

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
              entry.target.classList.remove("opacity-0", "translate-y-4")
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-4 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  )
}
