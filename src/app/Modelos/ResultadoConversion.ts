export interface ResultadoConversion {
  unidad: 'Celsius' | 'Kelvin';
  value: string;
  origen: 'F' | 'K';
  kelvinOriginal?: string; 
}