"use client"
import React, { useState } from 'react'
import ResultadoConversor from './Componentes/ResultadoConversor'
import { ResultadoConversion } from './Modelos/ResultadoConversion'

const ConversorTemperatura: React.FC = () => {
  const [temperatura] = useState<number>(77) 
  const [grados] = useState<string>('F') 

  const convertirTemperatura = (): ResultadoConversion[] => {
    let celsius, fahrenheit, kelvin

    if (grados === 'F') {
      fahrenheit = temperatura
      celsius = (fahrenheit - 32) * 5/9
      kelvin = celsius + 273.15

      return [
        { unidad: 'Celsius', value: celsius.toFixed(1), origen: 'F' },
        { unidad: 'Kelvin', value: kelvin.toFixed(1), origen: 'F' },
        { unidad: 'Celsius', value: (kelvin - 273.15).toFixed(1), origen: 'K', kelvinOriginal: kelvin.toFixed(1) }
      ]
    }

    return []
  }

  const resultados = convertirTemperatura()

  return (
    <div>
      <ResultadoConversor temperatura={temperatura} grados={grados} resultados={resultados} />
    </div>
  )
}

export default ConversorTemperatura