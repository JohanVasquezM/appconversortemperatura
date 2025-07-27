"use client"
import React from 'react'
import { ResultadoConversion } from '../Modelos/ResultadoConversion'

interface Props{
  temperatura: number;
  grados: string;
  resultados: ResultadoConversion[];
}

const ResultadoConversor: React.FC<Props> = ({temperatura, grados, resultados }) => {
  return (
    <ul>
      {resultados.map((result, index) => (
        <li key={index}>
          {result.origen === 'K'
            ? `${result.kelvinOriginal}K es igual a ${result.value}°C`
            : `${temperatura}°${grados} es igual a ${result.value}${result.unidad === 'Celsius' ? '°C' : 'K'}`}
        </li>
      ))}
    </ul>
  )
}

export default ResultadoConversor