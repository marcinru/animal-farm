import React from 'react'

interface BoardProps {
  animals: Record<string, string>
}

export function Board(props: BoardProps) {
  const { animals } = props

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {Object.entries(animals).map(([name, img]) => (
        <div
          key={name}
          className="flex cursor-pointer flex-col items-center rounded-xl bg-white p-4 shadow-lg transition-transform hover:scale-105"
        >
          <img src={img} alt={name} className="mb-4 h-32 w-32 object-contain" />
          <span className="text-lg font-semibold text-gray-700">{name}</span>
        </div>
      ))}
    </div>
  )
}
