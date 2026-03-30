import React from 'react'
import { Card } from './Card'

interface PictureCardProps {
  name: string
  img: string
  isSelected?: boolean
  onClick?: () => void
}

export function PictureCard({ name, img, isSelected, onClick }: PictureCardProps) {
  return (
    <Card isSelected={isSelected} onClick={onClick}>
      <img src={img} alt={name} className="h-32 w-32 object-contain" />
    </Card>
  )
}
