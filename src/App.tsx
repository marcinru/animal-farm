import React from 'react'
import './index.css'
import { Board } from './Board'

function App() {
  const animals = [
    { name: 'Kura', img: '/img/kura.png' },
    { name: 'Kaczka', img: '/img/kaczka.png' },
    { name: 'Krowa', img: '/img/krowa.png' },
    { name: 'Koń', img: '/img/kon.png' },
    { name: 'Pies', img: '/img/pies.png' },
    { name: 'Kot', img: '/img/kot.png' },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center bg-green-100 p-8">
      <h1 className="mb-8 text-4xl font-bold text-green-800">Farma Zwierząt</h1>
      <p className="mb-12 text-xl text-green-700">Dopasuj zwierzęta na farmie</p>
      <Board animals={animals} />
    </div>
  )
}

export default App
