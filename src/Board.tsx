import React, { useMemo } from 'react'
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
  const animalList = Object.entries(animals)
  const pictures = useMemo(() => randomize(animalList), [animalList])
  const names = useMemo(() => randomize(animalList), [animalList])

  return (
    <div className="grid grid-cols-2 gap-12">
      <div className="flex flex-col gap-6">
        {pictures.map(([name, img]) => (
          <PictureCard key={`${name}-pic`} name={name} img={img} />
        ))}
      </div>
      <div className="flex flex-col gap-6">
        {names.map(([name]) => (
          <TextCard key={`${name}-text`} name={name} />
        ))}
      </div>
    </div>
  )
}
