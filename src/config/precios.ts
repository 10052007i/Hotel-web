export const PRECIOS_CONFIG = {
  planMensual: {
    monto: 119,
    moneda: "PEN",
    simbolo: "S/",
    periodo: "mes",
    igvIncluido: true,
    sinPermanencia: true,
    limiteHabitaciones: 30,
  },
  implementacion: {
    monto: 300,
    moneda: "PEN",
    simbolo: "S/",
    pagoUnico: true,
    igvIncluido: true,
    ciudadBase: "Pucallpa",
  },
  calcularEscalaDiaria: function(): string {
    return (this.planMensual.monto / 30).toFixed(2);
  }
} as const;
