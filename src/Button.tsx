import React from 'react'

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-xl bg-white px-8 py-4 font-bold tracking-[1px] text-red-600 shadow-lg transition-all hover:scale-105 hover:bg-gray-50"
    >
      {children}
    </button>
  )
}
