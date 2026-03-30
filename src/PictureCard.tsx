import React from 'react'

interface PictureCardProps {
  name: string
  img: string
  isSelected?: boolean
  onClick?: () => void
}

export function PictureCard({ name, img, isSelected, onClick }: PictureCardProps) {
  return (
    <div
      className={`flex cursor-pointer flex-col items-center rounded-xl p-4 shadow-lg transition-transform hover:scale-105 ${isSelected ? 'bg-opacity-70 bg-blue-100 ring-4 ring-blue-500' : 'bg-white'}`}
      onClick={onClick}
    >
      <img src={img} alt={name} className="h-32 w-32 object-contain" />
    </div>
  )
}
