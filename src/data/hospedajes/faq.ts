export interface FAQItem {
  id: string;
  pregunta: string;
  respuesta: string;
}

export const FAQS_HOSPEDAJES: FAQItem[] = [
  {
    id: "sunat",
    pregunta: "¿Reemplaza mi boleta de SUNAT?",
    respuesta: "No. Sigues emitiendo tu boleta como hoy. Cuadrape controla lo que la boleta no ve: quién ocupó cada habitación, cuánto tiempo y quién cobró."
  },
  {
    id: "internet",
    pregunta: "¿Y si se va el internet?",
    respuesta: "Anota en papel la hora, la habitación, la tarifa, el pago y los ocupantes. Cuando vuelva la conexión, lo registras dentro del mismo turno. No se pierde nada ni se descuadra la caja."
  },
  {
    id: "recepcionista",
    pregunta: "¿Qué pasa si cambio de recepcionista?",
    respuesta: "Le envías el video de capacitación. Es sin costo adicional, siempre."
  },
  {
    id: "equipos",
    pregunta: "¿Necesito comprar equipos?",
    respuesta: "No. Funciona en el celular, la tablet o la PC que ya tienes, con conexión a internet."
  },
  {
    id: "datos",
    pregunta: "¿Quién ve los datos de mis huéspedes?",
    respuesta: "Solo tú y tu personal, cada uno según su rol. Tus recepcionistas no pueden descargar la lista de huéspedes."
  },
  {
    id: "cancelacion",
    pregunta: "¿Puedo cancelar cuando quiera?",
    respuesta: "Sí, sin permanencia. Si cancelas, te entregamos toda tu información en una exportación de datos y la eliminamos de nuestros sistemas."
  },
  {
    id: "varios-locales",
    pregunta: "Tengo más de un hospedaje, ¿cómo funciona?",
    respuesta: "Cada local tiene su propio acceso y sus propios reportes. Desde el segundo local tienes un precio especial; escríbenos por WhatsApp."
  },
  {
    id: "factura",
    pregunta: "¿Emiten comprobantes de pago?",
    respuesta: "Sí, emitimos comprobantes oficiales por el servicio mensual e implementación."
  }
];
