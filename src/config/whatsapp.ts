export const WHATSAPP_CONFIG = {
  numero: "51961984210",
  mensajePredeterminado: "Hola, vi la página de Cuadrape y quiero una demostración. Mi hospedaje tiene ___ habitaciones.",
  obtenerLink: function(habitaciones?: number | string): string {
    const textoHab = habitaciones ? `${habitaciones}` : "___";
    const msg = `Hola, vi la página de Cuadrape y quiero una demostración. Mi hospedaje tiene ${textoHab} habitaciones.`;
    return `https://wa.me/${this.numero}?text=${encodeURIComponent(msg)}`;
  }
} as const;
