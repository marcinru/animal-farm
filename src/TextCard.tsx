import React from 'react'

interface TextCardProps {
  name: string
}

export function TextCard({ name }: TextCardProps) {
  return (
    <div className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-white p-4 shadow-lg transition-transform hover:scale-105">
      <span className="text-lg font-semibold text-gray-700">{name}</span>
    </div>
  )
}
