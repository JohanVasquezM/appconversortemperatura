"use client"
import React, { useState } from 'react'

const ConversorTemperatura: React.FC = () => {
  const [temperatura] = useState<number>(77) 
  const [grados] = useState<string>('°F') 

  const convertirTemperatura = () => {
    let celsius, fahrenheit, kelvin

    if (grados === '°F') {
      fahrenheit = temperatura
      celsius = (fahrenheit - 32) * 5/9
      kelvin = celsius + 273.15

      return [
        { unidad: 'Celsius', value: celsius.toFixed(1), origen: 'F' },
        { unidad: 'Kelvin', value: kelvin.toFixed(1), origen: 'F' },
        { unidad: 'Celsius', value: (kelvin - 273.15).toFixed(1), origen: 'K' }
      ]
    }

    return []
  }

  const results = convertirTemperatura()
  return (
    <div>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {result.origen === 'K'
              ? `${results[1].value}K es igual a ${result.value}°C` 
              : `${temperatura}${grados} es igual a ${result.value}${result.unidad === 'Celsius' ? '°C' : 'K'}`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ConversorTemperatura