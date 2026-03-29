import React from 'react'

interface Animal {
  name: string
  img: string
}

interface BoardProps {
  animals: Animal[]
}

export function Board(props: BoardProps) {
  const { animals } = props

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {animals.map((animal) => (
        <div
          key={animal.name}
          className="flex cursor-pointer flex-col items-center rounded-xl bg-white p-4 shadow-lg transition-transform hover:scale-105"
        >
          <img src={animal.img} alt={animal.name} className="mb-4 h-32 w-32 object-contain" />
          <span className="text-lg font-semibold text-gray-700">{animal.name}</span>
        </div>
      ))}
    </div>
  )
}
