"use client"

import { useState, useEffect } from "react"

const roles = [
  "Desenvolvedor Full Stack",
  "Apaixonado por Tecnologia",
  "Estudante de Programacao",
]

export function TypewriterEffect() {
  const [currentRole, setCurrentRole] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentChar < role.length) {
            setCurrentChar((prev) => prev + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentChar > 0) {
            setCurrentChar((prev) => prev - 1)
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80,
    )

    return () => clearTimeout(timeout)
  }, [currentChar, isDeleting, currentRole])

  return (
    <span className="text-primary font-mono">
      {roles[currentRole].substring(0, currentChar)}
      <span className="animate-pulse text-primary">{"_"}</span>
    </span>
  )
}
