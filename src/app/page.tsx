"use client"
import React, { useState } from 'react'

const ConversorTemperatura: React.FC = () => {
  const [temperatura] = useState<number>(77) 
  const [grados] = useState<string>('F') 

  const convertirTemperatura = () => {
    let celsius, fahrenheit, kelvin

    if (grados === 'F') {
      fahrenheit = temperatura
      celsius = (fahrenheit - 32) * 5/9
      kelvin = (fahrenheit - 32) * 5/9 + 273.15
    } else {
      return [];
    }

    return [
      {unidad:'Celsius', value: celsius.toFixed(1) },
      {unidad:'Kelvin', value: kelvin.toFixed(1) }
    ]
  }

  const results = convertirTemperatura()
  return (
    <div>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{`${temperatura}${grados} es igual a ${result.value}${result.unidad === 'Celsius' ? 'C' : 'K'}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default ConversorTemperatura