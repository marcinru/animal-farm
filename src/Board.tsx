import React from 'react'
import { PictureCard } from './PictureCard'
import { TextCard } from './TextCard'

interface BoardProps {
  animals: Record<string, string>
}

export function Board(props: BoardProps) {
  const { animals } = props

  return (
    <div className="grid grid-cols-2 gap-12">
      <div className="flex flex-col gap-6">
        {Object.entries(animals).map(([name, img]) => (
          <PictureCard key={`${name}-pic`} name={name} img={img} />
        ))}
      </div>
      <div className="flex flex-col gap-6">
        {Object.entries(animals).map(([name]) => (
          <TextCard key={`${name}-text`} name={name} />
        ))}
      </div>
    </div>
  )
}
