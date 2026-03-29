import React from 'react'
import { Card } from './Card'

interface BoardProps {
  animals: Record<string, string>
}

export function Board(props: BoardProps) {
  const { animals } = props

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {Object.entries(animals).map(([name, img]) => (
        <Card key={name} name={name} img={img} />
      ))}
    </div>
  )
}
