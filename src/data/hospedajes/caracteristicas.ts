export interface Caracteristica {
  titulo: string;
  descripcion: string;
  badge?: string;
}

export const CARACTERISTICAS_TRABAJO: Caracteristica[] = [
  {
    titulo: "Por horas, por noche o por semana",
    descripcion: "Tú defines las tarifas. El recepcionista solo elige la modalidad; nunca escribe el monto manualmente para evitar errores o manipulaciones."
  },
  {
    titulo: "Efectivo, Yape y POS bien separados",
    descripcion: "Al cerrar el turno, solo se cuenta el efectivo en caja. Los cobros digitales se concilian exactamente con su número de operación."
  },
  {
    titulo: "Control de productos y friobar",
    descripcion: "Gaseosas, cervezas, snacks y todo lo que entregas en recepción o habitación, sincronizado con su stock real."
  },
  {
    titulo: "En celular, tablet o PC",
    descripcion: "Sin instalar nada. Un ingreso de huésped se completa en segundos de forma fluida."
  }
];

export const REGLAS_REGISTRO: Caracteristica[] = [
  {
    titulo: "Todos los ocupantes registrados",
    descripcion: "Se exige el documento de cada persona que ingresa a la habitación, no solo de quien realiza el pago."
  },
  {
    titulo: "Bloqueo automático de menores",
    descripcion: "Si el sistema detecta que un ocupante es menor de 18 años, el ingreso se bloquea inmediatamente y no se puede saltar."
  },
  {
    titulo: "Privacidad y seguridad total",
    descripcion: "No guardamos fotos de documentos ni vendemos información. Los datos de tu hospedaje son 100% de tu propiedad."
  }
];
