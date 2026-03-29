import React from 'react'

interface PictureCardProps {
  name: string
  img: string
}

export function PictureCard({ name, img }: PictureCardProps) {
  return (
    <div className="flex cursor-pointer flex-col items-center rounded-xl bg-white p-4 shadow-lg transition-transform hover:scale-105">
      <img src={img} alt={name} className="h-32 w-32 object-contain" />
    </div>
  )
}
