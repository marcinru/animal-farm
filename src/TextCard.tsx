import React from 'react'
import { Card } from './Card'

interface TextCardProps {
  name: string
  isSelected?: boolean
  onClick?: () => void
}

export function TextCard({ name, isSelected, onClick }: TextCardProps) {
  return (
    <Card isSelected={isSelected} onClick={onClick}>
      <span className="text-lg font-semibold text-gray-700">{name}</span>
    </Card>
  )
}
