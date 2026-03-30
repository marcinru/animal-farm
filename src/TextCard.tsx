import React from 'react'
import { Card } from './Card'

interface TextCardProps {
  name: string
  isSelected?: boolean
  isMatched?: boolean
  onClick?: () => void
}

export function TextCard({ name, isSelected, isMatched, onClick }: TextCardProps) {
  return (
    <Card isSelected={isSelected} isMatched={isMatched} onClick={onClick}>
      <span className="text-lg font-semibold text-gray-700">{name}</span>
    </Card>
  )
}
