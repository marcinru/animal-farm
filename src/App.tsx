import React from 'react'
import './index.css'
import { Board } from './Board'

function App() {
  const animals: Record<string, string> = {
    Kura: '/img/kura.png',
    Kaczka: '/img/kaczka.png',
    Krowa: '/img/krowa.png',
    Koń: '/img/kon.png',
    Pies: '/img/pies.png',
    Kot: '/img/kot.png',
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-green-100 p-8">
      <h1 className="mb-8 text-4xl font-bold text-green-800">Farma Zwierząt</h1>
      <p className="mb-12 text-xl text-green-700">Dopasuj zwierzęta na farmie</p>
      <Board animals={animals} />
    </div>
  )
}

export default App
