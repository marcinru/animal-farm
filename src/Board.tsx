import React, { useMemo, useState } from 'react'
import { PictureCard } from './PictureCard'
import { TextCard } from './TextCard'

interface BoardProps {
  animals: Record<string, string>
}

function randomize<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function Board(props: BoardProps) {
  const { animals } = props
  const pictures = useMemo(() => randomize(Object.entries(animals)), [])
  const names = useMemo(() => randomize(Object.entries(animals)), [])
  const [selectedPicture, setSelectedPicture] = useState<string | null>(null)
  const [selectedText, setSelectedText] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-2 gap-12">
      <div className="flex flex-col gap-6">
        {pictures.map(([name, img]) => (
          <PictureCard
            key={`${name}-pic`}
            name={name}
            img={img}
            isSelected={selectedPicture === name}
            onClick={() => setSelectedPicture(name)}
          />
        ))}
      </div>
      <div className="flex flex-col gap-6">
        {names.map(([name]) => (
          <TextCard
            key={`${name}-text`}
            name={name}
            isSelected={selectedText === name}
            onClick={() => setSelectedText(name)}
          />
        ))}
      </div>
    </div>
  )
}
