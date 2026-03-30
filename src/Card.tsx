import React, { ReactNode } from 'react'

interface CardProps {
  isSelected?: boolean
  isMatched?: boolean
  onClick?: () => void
  children: ReactNode
}

export function Card({ isSelected, isMatched, onClick, children }: CardProps) {
  const bgColor = isMatched
    ? 'bg-opacity-70 bg-green-100 ring-4 ring-green-500'
    : isSelected
      ? 'bg-opacity-70 bg-blue-100 ring-4 ring-blue-500'
      : 'bg-white'

  return (
    <div
      className={`flex min-h-40 flex-col items-center justify-center rounded-xl p-4 shadow-lg transition-transform ${isMatched ? 'cursor-not-allowed opacity-80' : 'cursor-pointer hover:scale-105'} ${bgColor}`}
      onClick={isMatched ? undefined : onClick}
    >
      {children}
    </div>
  )
}
