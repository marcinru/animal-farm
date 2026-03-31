import React, { useState } from 'react'
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
  const [pictures, setPictures] = useState(() => randomize(Object.entries(animals)))
  const [names, setNames] = useState(() => randomize(Object.entries(animals)))
  const [selectedPicture, setSelectedPicture] = useState<string | null>(null)
  const [selectedText, setSelectedText] = useState<string | null>(null)
  const [matchedAnimals, setMatchedAnimals] = useState<Set<string>>(new Set())

  const handleReset = () => {
    setPictures(randomize(Object.entries(animals)))
    setNames(randomize(Object.entries(animals)))
    setSelectedPicture(null)
    setSelectedText(null)
    setMatchedAnimals(new Set())
  }

  const handlePictureClick = (name: string) => {
    if (selectedText === name) {
      setMatchedAnimals((prev) => new Set(prev).add(name))
      setSelectedPicture(null)
      setSelectedText(null)
    } else {
      setSelectedPicture(name)
    }
  }

  const handleTextClick = (name: string) => {
    if (selectedPicture === name) {
      setMatchedAnimals((prev) => new Set(prev).add(name))
      setSelectedPicture(null)
      setSelectedText(null)
    } else {
      setSelectedText(name)
    }
  }

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="grid grid-cols-2 gap-12">
        <div className="grid grid-cols-2 gap-6">
          {pictures.map(([name, img]) => (
            <PictureCard
              key={`${name}-pic`}
              name={name}
              img={img}
              isSelected={selectedPicture === name}
              isMatched={matchedAnimals.has(name)}
              onClick={() => handlePictureClick(name)}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          {names.map(([name]) => (
            <TextCard
              key={`${name}-text`}
              name={name}
              isSelected={selectedText === name}
              isMatched={matchedAnimals.has(name)}
              onClick={() => handleTextClick(name)}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleReset}
        className="cursor-pointer rounded-xl bg-white px-8 py-4 font-bold tracking-[1px] text-red-600 shadow-lg transition-all hover:scale-105 hover:bg-gray-50"
      >
        RESET
      </button>
    </div>
  )
}
