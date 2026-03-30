import React from 'react'

interface TextCardProps {
  name: string
  isSelected?: boolean
  onClick?: () => void
}

export function TextCard({ name, isSelected, onClick }: TextCardProps) {
  return (
    <div
      className={`flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl p-4 shadow-lg transition-transform hover:scale-105 ${isSelected ? 'bg-opacity-70 bg-blue-100 ring-4 ring-blue-500' : 'bg-white'}`}
      onClick={onClick}
    >
      <span className="text-lg font-semibold text-gray-700">{name}</span>
    </div>
  )
}
