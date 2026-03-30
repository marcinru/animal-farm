import React, { ReactNode } from 'react'

interface CardProps {
  isSelected?: boolean
  onClick?: () => void
  children: ReactNode
}

export function Card({ isSelected, onClick, children }: CardProps) {
  return (
    <div
      className={`flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl p-4 shadow-lg transition-transform hover:scale-105 ${isSelected ? 'bg-opacity-70 bg-blue-100 ring-4 ring-blue-500' : 'bg-white'}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
