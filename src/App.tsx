import React from 'react'
import './index.css'

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

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {animals.map((animal) => (
          <div
            key={animal.name}
            className="flex cursor-pointer flex-col items-center rounded-xl bg-white p-4 shadow-lg transition-transform hover:scale-105"
          >
            <img src={animal.img} alt={animal.name} className="mb-4 h-32 w-32 object-contain" />
            <span className="text-lg font-semibold text-gray-700">{animal.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
