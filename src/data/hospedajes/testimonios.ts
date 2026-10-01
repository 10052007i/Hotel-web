export interface PilotoData {
  habitaciones: number;
  recepcionistas: number;
  metodoAnterior: string;
  salidasAntesDeTiempoRegistradas: number;
  diferenciasCajaReportadas: number;
  cuadresExactosPorcentaje: number;
  citaDueno: string;
  ubicacion: string;
}

export const DATOS_PILOTO: PilotoData = {
  habitaciones: 24,
  recepcionistas: 3,
  metodoAnterior: "Cuaderno manuscrito",
  salidasAntesDeTiempoRegistradas: 42,
  diferenciasCajaReportadas: 0,
  cuadresExactosPorcentaje: 98,
  citaDueno: "Antes no sabía si la habitación 5 que se liberaba a las 3 p.m. se volvía a alquilar. Ahora desde mi celular veo cada salida y el turno cuadra perfecto al cambio de recepcionista.",
  ubicacion: "Hospedaje en Pucallpa"
};
