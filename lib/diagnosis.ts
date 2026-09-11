import type { WhatsAppContext } from "./whatsapp"

export interface DiagnosisSolution {
  id: string
  title: string
  what: string
  how: string
  materials: string[]
  duration: string
  factors: string
}

// Contenido de referencia para la herramienta "Diagnostica tu artículo".
export const diagnosisSolutions: Record<string, DiagnosisSolution> = {
  "suela-desgastada": {
    id: "suela-desgastada",
    title: "Suela desgastada",
    what: "La suela es la parte inferior del calzado que está en contacto directo con el suelo, por lo que es de los componentes que más se desgasta con el uso.",
    how: "Evaluamos si es posible un cambio de tapa localizado o si se requiere una remonta completa, sustituyendo la suela y preparando, pegando, prensando y perfilando el nuevo componente.",
    materials: ["Crupón", "Crepé", "Neolite", "Caucho expandido"],
    duration: "Entre 2 y 5 días hábiles, según la construcción del calzado.",
    factors:
      "El tipo de construcción, el material original de la suela y el estado de componentes cercanos (cambrión, entresuela) pueden afectar el alcance del trabajo.",
  },
  remonta: {
    id: "remonta",
    title: "Remonta de calzado",
    what: "La remonta es un proceso de reconstrucción o sustitución de los componentes de la parte inferior del calzado que se encuentran deteriorados.",
    how: "Diagnóstico, desmontaje, preparación de superficies, selección de materiales, montaje, pegado o costura, prensado, perfilado y acabado.",
    materials: ["Crupón", "Crepé", "Neolite", "Caucho expandido"],
    duration: "Aproximadamente 3 a 6 días hábiles.",
    factors:
      "La construcción del zapato, el material disponible y el nivel de deterioro determinan el alcance de la remonta.",
  },
  tapa: {
    id: "tapa",
    title: "Cambio de tapas",
    what: "La tapa es el componente que entra directamente en contacto con el suelo en la parte inferior del tacón.",
    how: "Retiro de la tapa desgastada, inspección, preparación, selección del material, instalación, perfilado y acabado.",
    materials: ["Cauchos de distinta dureza", "Materiales sintéticos para tacón"],
    duration: "Servicio rápido, normalmente el mismo día.",
    factors: "El tipo de tacón y su sistema de fijación determinan el material más adecuado.",
  },
  tacon: {
    id: "tacon",
    title: "Ajuste de tacones y plataformas",
    what: "Corrección de altura, nivelación o perfil de tacones y plataformas.",
    how: "Evaluamos la construcción y el margen de modificación antes de recortar, nivelar, perfilar y dar acabado.",
    materials: ["Materiales propios del tacón original", "Tapas de recambio"],
    duration: "Entre 1 y 3 días hábiles.",
    factors:
      "No todos los tacones o plataformas pueden modificarse sin alterar la estructura del calzado; por eso siempre evaluamos antes de intervenir.",
  },
  "cuello-talonera": {
    id: "cuello-talonera",
    title: "Cambio de cuello y talonera",
    what: "El cuello es la zona superior que rodea la abertura del calzado y roza el tobillo; la talonera es el material interno que protege y estructura el talón.",
    how: "Retiramos el material deteriorado, evaluamos la espuma y estructura interna, seleccionamos el nuevo material, lo cortamos, adaptamos, instalamos y cosemos o fijamos según la construcción.",
    materials: ["Cuero", "Forros textiles", "Espuma de relleno"],
    duration: "Entre 2 y 4 días hábiles.",
    factors:
      "El desgaste por fricción y la pérdida de acolchado son las causas más comunes; repararlo evita que el borde deteriorado siga generando incomodidad.",
  },
  cambrion: {
    id: "cambrion",
    title: "Cambio de cambrión",
    what: "El cambrión es un elemento estructural situado en la zona media del calzado, entre el talón y la parte delantera, que aporta soporte y estabilidad.",
    how: "Diagnóstico, desmontaje necesario, extracción, selección del nuevo elemento, instalación, reconstrucción y acabado.",
    materials: ["Cambriones de distintos materiales según construcción"],
    duration: "Entre 3 y 5 días hábiles.",
    factors:
      "No todos los zapatos incorporan cambrión y su construcción puede variar, por lo que el proceso depende del modelo específico.",
  },
  capellada: {
    id: "capellada",
    title: "Reparación de capellada",
    what: "La capellada es la parte superior del calzado que cubre y envuelve el pie.",
    how: "Según el daño, cosemos, reforzamos, sustituimos secciones, restauramos, teñimos o reacondicionamos la zona afectada.",
    materials: ["Cuero", "Sintéticos", "Textiles", "Gamuza", "Nobuck"],
    duration: "Entre 2 y 4 días hábiles.",
    factors:
      "El material de la capellada y la extensión del daño determinan si se repara, refuerza o sustituye una sección.",
  },
  cordones: {
    id: "cordones",
    title: "Cambio de cordones",
    what: "El cordón correcto influye tanto en el ajuste como en la apariencia del calzado.",
    how: "Seleccionamos junto al cliente el color, largo, grosor, material y estilo más adecuado y lo instalamos.",
    materials: ["Cordones planos y redondos", "Distintos materiales y colores"],
    duration: "Servicio inmediato.",
    factors: "El tipo de ojales y el estilo del calzado ayudan a definir el cordón más adecuado.",
  },
  cordonera: {
    id: "cordonera",
    title: "Cambio de cordonera",
    what: "La cordonera es la zona o conjunto de elementos donde se alojan los cordones del calzado.",
    how: "Cambio de ojales o ganchos, reparación de perforaciones, refuerzo o sustitución de los elementos deteriorados.",
    materials: ["Ojales metálicos", "Ganchos", "Refuerzos textiles o de cuero"],
    duration: "Entre 1 y 3 días hábiles.",
    factors: "El material de la capellada alrededor de la cordonera determina el tipo de refuerzo posible.",
  },
  plantilla: {
    id: "plantilla",
    title: "Plantillas",
    what: "Las plantillas prehormadas ya vienen fabricadas con formas determinadas; las plantillas estructurales se diseñan para aportar soporte adicional.",
    how: "Evaluamos el espacio interno, la construcción, la talla y la necesidad específica antes de recomendar el tipo de plantilla.",
    materials: ["Plantillas prehormadas", "Materiales estructurales de soporte"],
    duration: "Servicio inmediato o hasta 2 días si requiere adaptación.",
    factors: "El tipo de calzado y la necesidad puntual del pie definen la plantilla adecuada.",
  },
  pegado: {
    id: "pegado",
    title: "Pegado profesional",
    what: "Pegar un artículo no significa simplemente aplicar pegante: distintos materiales requieren distintos sistemas adhesivos y preparaciones de superficie.",
    how: "Diagnóstico de materiales, limpieza, preparación mecánica y química, aplicación del adhesivo, tiempo de activación, unión, presión, curado y acabado.",
    materials: ["Adhesivos específicos según cuero, caucho, sintético, textil, espuma o EVA"],
    duration: "Entre 1 y 3 días hábiles, según el tiempo de curado del adhesivo.",
    factors:
      "El material, la porosidad, la flexibilidad, la temperatura de trabajo y el tipo de esfuerzo determinan el adhesivo adecuado.",
  },
  lavado: {
    id: "lavado",
    title: "Lavandería especializada",
    what: "Tus tenis y zapatos merecen un lavado especializado, distinto al de una lavadora convencional.",
    how: "Aplicamos lavado superficial o profundo, limpieza de gamuza/nobuck, limpieza y acondicionamiento de cuero, limpieza de suelas y tratamiento de manchas según el caso.",
    materials: ["Productos específicos para cuero, gamuza y textiles"],
    duration: "Entre 1 y 2 días hábiles.",
    factors:
      "El exceso de agua, los residuos de jabón y un secado incorrecto pueden dañar ciertos materiales; por eso evaluamos cada componente antes de lavar.",
  },
  "tenido-cuero": {
    id: "tenido-cuero",
    title: "Restauración y teñido de cuero",
    what: "Recuperar el color de un artículo de cuero también es recuperar su vida útil, dentro de lo técnicamente posible.",
    how: "Diagnóstico, identificación del material, limpieza, preparación, corrección, igualación de color, aplicación, acabado y protección.",
    materials: ["Tintes para cuero", "Selladores y acabados protectores"],
    duration: "Entre 3 y 5 días hábiles.",
    factors:
      "El estado previo del cuero (grietas, resequedad) y el color solicitado influyen en el resultado. Consulta nuestra política de teñido y riesgos.",
  },
  restauracion: {
    id: "restauracion",
    title: "Restauración general",
    what: "Restaurar no significa hacer que un artículo parezca nuevo a cualquier costo, sino recuperar su funcionalidad, apariencia y carácter dentro de lo técnicamente posible.",
    how: "Evaluamos el artículo por completo y combinamos limpieza, reparación estructural, teñido y acabado según lo que necesite.",
    materials: ["Según el material del artículo (cuero, sintético, textil)"],
    duration: "Entre 3 y 7 días hábiles, según el alcance.",
    factors: "El valor sentimental o económico del artículo y su estado de conservación ayudan a definir el alcance.",
  },
  cierre: {
    id: "cierre",
    title: "Cambio de cierres",
    what: "Sustitución de cierres metálicos, de nylon o solo del cursor, según el estado del sistema completo.",
    how: "Evaluamos si el problema se soluciona cambiando únicamente el cursor o si se requiere sustituir el cierre completo por uno compatible con la construcción del bolso.",
    materials: ["Cierres metálicos/cobre", "Cierres de nylon", "Cursores de repuesto"],
    duration: "Entre 1 y 3 días hábiles.",
    factors: "El tipo de cierre original y su compatibilidad con el diseño del bolso determinan la solución.",
  },
  asa: {
    id: "asa",
    title: "Cambio de asas",
    what: "Fabricación o adaptación de nuevas asas en cuero o sintético.",
    how: "Consideramos espesor, color, ancho, largo y sistema de fijación para fabricar o adaptar la nueva asa.",
    materials: ["Cuero", "Materiales sintéticos compatibles"],
    duration: "Entre 2 y 4 días hábiles.",
    factors: "El sistema de fijación original y el peso que debe soportar el asa influyen en el material elegido.",
  },
  forro: {
    id: "forro",
    title: "Cambio de forro",
    what: "El forro interno protege el contenido del bolso y da estructura a bolsillos y compartimentos.",
    how: "Desmontamos, retiramos el forro deteriorado, tomamos medidas y patrones, cortamos, confeccionamos e instalamos el nuevo forro.",
    materials: ["Telas de forro", "Refuerzos internos"],
    duration: "Entre 3 y 5 días hábiles.",
    factors: "La cantidad de bolsillos, compartimentos y cierres internos afecta el tiempo de confección.",
  },
  base: {
    id: "base",
    title: "Cambio de base",
    what: "La base del bolso soporta fricción, peso y contacto directo con superficies.",
    how: "Evaluamos la sustitución utilizando un material compatible con el diseño original.",
    materials: ["Cuero", "Materiales reforzados resistentes al roce"],
    duration: "Entre 2 y 4 días hábiles.",
    factors: "El peso habitual que carga el bolso y el material original definen la solución más duradera.",
  },
  "tapa-bolso": {
    id: "tapa-bolso",
    title: "Cambio de tapa de bolso",
    what: "La tapa es la solapa que cubre la apertura del bolso y protege su contenido.",
    how: "Evaluamos el material y el sistema de fijación para fabricar o adaptar una nueva tapa acorde al diseño.",
    materials: ["Cuero", "Sintéticos compatibles con el diseño original"],
    duration: "Entre 2 y 4 días hábiles.",
    factors: "El sistema de cierre de la tapa (broche, imán, hebilla) condiciona el proceso de adaptación.",
  },
  herrajes: {
    id: "herrajes",
    title: "Cambio de herrajes",
    what: "Incluye argollas, hebillas, mosquetones, broches, remaches y pasadores.",
    how: "Seleccionamos un herraje compatible no solo visualmente, sino también con la carga y función que desempeña.",
    materials: ["Herrajes metálicos de distintos acabados"],
    duration: "Entre 1 y 3 días hábiles.",
    factors: "La resistencia y el acabado del herraje deben ser compatibles con el uso real del artículo.",
  },
  costuras: {
    id: "costuras",
    title: "Reparación de costuras",
    what: "Hilo roto, costura abierta, desgarros o uniones debilitadas se solucionan con una reparación específica.",
    how: "Evaluación, preparación, selección de hilo, costura, refuerzo y remate.",
    materials: ["Hilos de alta resistencia"],
    duration: "Entre 1 y 2 días hábiles.",
    factors: "El punto de tensión y la carga habitual del artículo determinan el refuerzo necesario.",
  },
  "tenido-ropa": {
    id: "tenido-ropa",
    title: "Teñido de prendas de algodón",
    what: "Cambiar el color de una prenda puede darle una segunda vida y evitar reemplazarla.",
    how: "Clasificación, preparación, baño de teñido, control de temperatura y tiempo, fijación, lavado posterior, secado y acabado.",
    materials: ["Colorantes para algodón", "Auxiliares químicos de fijación"],
    duration: "Entre 3 y 5 días hábiles.",
    factors:
      "La composición de la prenda (algodón, poliéster, elastano) puede generar variaciones de color entre materiales. Consulta nuestra política de teñido y riesgos.",
  },
  "restauracion-color": {
    id: "restauracion-color",
    title: "Restauración de color",
    what: "Recuperamos el color original de una prenda o artículo cuando el desgaste está principalmente relacionado con el color.",
    how: "Evaluamos el tejido o material y aplicamos el proceso de teñido o igualación de color más adecuado.",
    materials: ["Colorantes específicos según el material"],
    duration: "Entre 3 y 5 días hábiles.",
    factors: "El teñido no elimina daños estructurales ni manchas permanentes; por eso evaluamos antes de intervenir.",
  },
  "recuperacion-apariencia": {
    id: "recuperacion-apariencia",
    title: "Recuperación de apariencia",
    what: "Cuando una prenda conserva buena calidad y construcción, podemos recuperar su apariencia general.",
    how: "Combinamos limpieza, planchado técnico y, si es necesario, teñido para devolverle una apariencia renovada.",
    materials: ["Según el tejido y estado de la prenda"],
    duration: "Entre 2 y 4 días hábiles.",
    factors: "El estado de la fibra y del diseño original determinan qué tan renovada puede quedar la prenda.",
  },
}

export interface DiagnosisCategory {
  id: string
  label: string
  emoji: string
  context: WhatsAppContext
  problems: { id: string; label: string }[]
}

export const diagnosisCategories: DiagnosisCategory[] = [
  {
    id: "calzado",
    label: "Zapatos",
    emoji: "👞",
    context: "calzado",
    problems: [
      { id: "suela-desgastada", label: "Suela desgastada" },
      { id: "remonta", label: "Remonta" },
      { id: "tapa", label: "Tapa" },
      { id: "tacon", label: "Tacón" },
      { id: "cuello-talonera", label: "Cuello / talonera" },
      { id: "cambrion", label: "Cambrión" },
      { id: "capellada", label: "Capellada" },
      { id: "cordones", label: "Cordones" },
      { id: "cordonera", label: "Cordonera" },
      { id: "plantilla", label: "Plantilla" },
      { id: "pegado", label: "Pegado" },
      { id: "lavado", label: "Lavado" },
      { id: "tenido-cuero", label: "Teñido" },
      { id: "restauracion", label: "Restauración" },
    ],
  },
  {
    id: "tenis",
    label: "Tenis",
    emoji: "👟",
    context: "calzado",
    problems: [
      { id: "lavado", label: "Lavado" },
      { id: "suela-desgastada", label: "Suela" },
      { id: "capellada", label: "Capellada" },
      { id: "cuello-talonera", label: "Talonera / cuello" },
      { id: "cordones", label: "Cordones" },
      { id: "plantilla", label: "Plantilla" },
      { id: "pegado", label: "Pegado" },
      { id: "restauracion", label: "Restauración" },
    ],
  },
  {
    id: "bolsos",
    label: "Bolsos",
    emoji: "👜",
    context: "bolsos",
    problems: [
      { id: "cierre", label: "Cierre" },
      { id: "asa", label: "Asa" },
      { id: "forro", label: "Forro" },
      { id: "base", label: "Base" },
      { id: "tapa-bolso", label: "Tapa" },
      { id: "herrajes", label: "Herrajes" },
      { id: "costuras", label: "Costuras" },
      { id: "restauracion", label: "Restauración" },
    ],
  },
  {
    id: "prendas",
    label: "Prendas",
    emoji: "👕",
    context: "ropa",
    problems: [
      { id: "tenido-ropa", label: "Teñido" },
      { id: "restauracion-color", label: "Restauración de color" },
      { id: "recuperacion-apariencia", label: "Recuperación de apariencia" },
    ],
  },
]
