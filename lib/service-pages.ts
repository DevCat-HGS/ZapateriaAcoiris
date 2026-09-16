import type { WhatsAppContext } from "./whatsapp"

/**
 * Contenido de las páginas de servicio, transcrito del mapa maestro de
 * Documentación/requerimientos.md. Cada página se arma con estos bloques y la
 * ruta /servicios/[slug] los renderiza; así el contenido editorial vive en un
 * solo archivo y no repartido por componentes.
 */
export type ServiceBlock =
  | { kind: "text"; heading?: string; paragraphs: string[] }
  | { kind: "list"; heading: string; intro?: string; items: string[] }
  | {
      kind: "steps"
      heading: string
      intro?: string
      steps: { title: string; body?: string; items?: string[] }[]
    }
  | { kind: "flow"; heading: string; intro?: string; steps: string[] }
  | {
      kind: "definitions"
      heading: string
      intro?: string
      items: { term: string; definition: string }[]
    }
  | { kind: "highlight"; heading: string; paragraphs: string[]; items?: string[] }
  | { kind: "tool"; tool: "remonta-material" | "adhesivo" | "pre-tenido" }

export interface ServicePage {
  slug: string
  eyebrow: string
  h1: string
  lead: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  /** Categoría de la galería con la que se ilustran casos reales del servicio. */
  galleryCategory?: string
  whatsappContext: WhatsAppContext
  blocks: ServiceBlock[]
}

export const servicePages: ServicePage[] = [
  {
    slug: "reparacion-de-calzado",
    eyebrow: "Reparación de calzado",
    h1: "Reparación especializada de calzado",
    lead: "Un zapato o un tenis no es una sola pieza. Está compuesto por diferentes materiales y elementos que trabajan conjuntamente para proporcionar soporte, comodidad, estabilidad y protección a nuestro andar. Por eso una reparación profesional comienza con un diagnóstico: identificamos qué componente está deteriorado, por qué falló o qué se debe corregir, y cuál es la mejor manera de intervenirlo.",
    metaTitle: "Reparación especializada de calzado en Medellín",
    metaDescription:
      "Reparación profesional de calzado en Medellín: cambio de cuello y talonera, cambriones, capelladas, cordoneras, plantillas, recorte de tacones y cambio de tapas. Diagnóstico antes de intervenir.",
    keywords: [
      "reparación de calzado Medellín",
      "cambio de cuello y talonera",
      "cambio de cambriones",
      "reparación de capelladas",
      "cambio de tapas Medellín",
      "recorte de tacones Medellín",
      "plantillas para calzado",
    ],
    galleryCategory: "Capelladas y piezas",
    whatsappContext: "calzado",
    blocks: [
      {
        kind: "definitions",
        heading: "Cambio de cuello y talonera",
        items: [
          {
            term: "¿Qué es el cuello?",
            definition:
              "Es la zona superior que rodea la abertura del calzado y entra en contacto con el tobillo.",
          },
          {
            term: "¿Qué es la talonera?",
            definition:
              "En el contexto de reparación puede referirse a la pieza o sección ubicada alrededor del talón, especialmente el material interno que protege y estructura esa zona.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Problemas habituales",
        items: [
          "Desgaste por fricción",
          "Rotura",
          "Forro deteriorado",
          "Espuma expuesta",
          "Costuras abiertas",
          "Pérdida de acolchado",
        ],
      },
      {
        kind: "flow",
        heading: "Cambio de talonera interna",
        intro:
          "Este servicio merece explicación específica para tenis y zapatos, porque la pieza que se retira condiciona todo lo que viene después.",
        steps: [
          "Retirar el material deteriorado",
          "Evaluar espuma y estructura",
          "Seleccionar nuevo material",
          "Cortar y adaptar",
          "Instalar",
          "Coser o fijar según construcción",
          "Acabado",
        ],
      },
      {
        kind: "highlight",
        heading: "Por qué importa hacerlo bien",
        paragraphs: [
          "La talonera interna está sometida a fricción constante. Una reparación correcta debe recuperar la protección del talón y evitar que los bordes o materiales deteriorados sigan causando desgaste.",
        ],
      },
      {
        kind: "text",
        heading: "Cambio de cambriones",
        paragraphs: [
          "El cambrión es un elemento estructural situado en la zona media de determinados tipos de calzado, entre el talón y la parte delantera, que contribuye al soporte y estabilidad de la suela.",
        ],
      },
      {
        kind: "list",
        heading: "Qué ocurre cuando el cambrión se deteriora",
        items: [
          "Inestabilidad",
          "Flexión incorrecta",
          "Ruidos",
          "Deformación",
          "Pérdida de soporte",
        ],
      },
      {
        kind: "flow",
        heading: "Proceso del cambio de cambrión",
        steps: [
          "Diagnóstico",
          "Desmontaje necesario",
          "Extracción",
          "Selección del nuevo elemento",
          "Instalación",
          "Reconstrucción",
          "Acabado",
        ],
      },
      {
        kind: "highlight",
        heading: "Importante",
        paragraphs: [
          "No todos los zapatos incorporan cambrión y su construcción puede variar. Por eso evaluamos el modelo específico antes de proponer una intervención.",
        ],
      },
      {
        kind: "text",
        heading: "Reparación de capelladas",
        paragraphs: [
          "La capellada es la parte superior del calzado que cubre y envuelve el pie. Puede estar fabricada en cuero, sintético, textil, gamuza, nobuck o combinaciones de materiales.",
        ],
      },
      {
        kind: "list",
        heading: "Problemas en la capellada",
        items: [
          "Roturas",
          "Desgarros",
          "Costuras abiertas",
          "Arañazos",
          "Desprendimientos",
          "Deformaciones",
          "Desgaste",
        ],
      },
      {
        kind: "list",
        heading: "Cómo la reparamos",
        intro: "Dependiendo del daño podemos:",
        items: [
          "Coser",
          "Reforzar",
          "Sustituir secciones",
          "Restaurar",
          "Teñir",
          "Reacondicionar",
        ],
      },
      {
        kind: "list",
        heading: "Cambio de cordoneras",
        intro:
          "La cordonera es la zona o conjunto de elementos donde se alojan los cordones del calzado. Puede requerir:",
        items: [
          "Cambio de ojales",
          "Cambio de ganchos",
          "Reparación de perforaciones",
          "Refuerzo",
          "Sustitución de elementos deteriorados",
        ],
      },
      {
        kind: "list",
        heading: "Cambio de cordones",
        intro:
          "Elegir correctamente el cordón también influye en el ajuste y la apariencia del calzado. Podemos ofrecer diferentes:",
        items: ["Colores", "Longitudes", "Grosores", "Materiales", "Estilos"],
      },
      {
        kind: "definitions",
        heading: "Plantillas para recuperar comodidad y estructura",
        items: [
          {
            term: "Plantillas prehormadas",
            definition:
              "Plantillas fabricadas previamente con formas y características determinadas, que pueden adaptarse a diferentes tipos de calzado.",
          },
          {
            term: "Plantillas estructurales",
            definition:
              "Soluciones diseñadas para aportar soporte y estructura, dependiendo de la construcción y necesidad del calzado.",
          },
          {
            term: "Importante",
            definition:
              "La plantilla adecuada depende del espacio interno, la construcción, la talla y el tipo de calzado.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Ajuste de altura y perfil de tacones y plataformas",
        intro: "Dependiendo de la construcción podemos hacer:",
        items: [
          "Recorte",
          "Nivelación",
          "Perfilado",
          "Corrección de superficies",
          "Acabado",
        ],
      },
      {
        kind: "highlight",
        heading: "Advertencia profesional",
        paragraphs: [
          "No todos los tacones o plataformas pueden modificarse sin alterar la estructura del calzado. Antes de realizar el trabajo evaluamos la construcción y el margen de modificación.",
        ],
      },
      {
        kind: "text",
        heading: "Cambio de tapas",
        paragraphs: [
          "La tapa es el componente que entra directamente en contacto con el suelo en la parte inferior del tacón. Dependiendo del tipo de calzado pueden utilizarse diferentes materiales y durezas.",
        ],
      },
      {
        kind: "flow",
        heading: "Proceso del cambio de tapas",
        steps: [
          "Retiro",
          "Inspección",
          "Preparación",
          "Selección del material",
          "Instalación",
          "Perfilado",
          "Acabado",
        ],
      },
    ],
  },
  {
    slug: "remonta-de-calzado",
    eyebrow: "Remonta",
    h1: "¿Qué es una remonta?",
    lead: "La remonta es un proceso de reconstrucción o sustitución de componentes de la parte inferior del calzado que se encuentran deteriorados.",
    metaTitle: "Remonta de calzado y materiales para suelas en Medellín",
    metaDescription:
      "Qué es una remonta, cómo es el proceso paso a paso y qué materiales usamos: crupón, crepé, neolite y caucho expandido. Remonta de calzado en Medellín con diagnóstico previo.",
    keywords: [
      "remonta de calzado Medellín",
      "qué es una remonta",
      "cambio de suelas Medellín",
      "crupón para suelas",
      "crepé para calzado",
      "neolite reparación calzado",
      "caucho expandido suelas",
    ],
    galleryCategory: "Remontas y suelas",
    whatsappContext: "calzado",
    blocks: [
      {
        kind: "text",
        paragraphs: [
          "Dependiendo de la construcción del zapato, una remonta puede involucrar la sustitución de la suela y otros componentes, además de trabajos de preparación, ajuste, pegado, prensado, perfilado y acabado.",
        ],
      },
      {
        kind: "steps",
        heading: "El proceso de una remonta",
        steps: [
          { title: "Diagnóstico", body: "Evaluamos construcción, materiales y deterioro." },
          { title: "Desmontaje", body: "Retiramos los componentes que deben ser sustituidos." },
          {
            title: "Preparación",
            body: "Limpiamos, desbastamos y nivelamos las superficies cuando corresponde.",
          },
          {
            title: "Selección de materiales",
            body: "Elegimos el material considerando:",
            items: [
              "Tipo de calzado",
              "Uso",
              "Construcción",
              "Flexibilidad",
              "Resistencia",
              "Apariencia",
            ],
          },
          { title: "Montaje", body: "Adaptamos el nuevo componente." },
          { title: "Pegado o costura", body: "Según la construcción del calzado." },
          {
            title: "Prensado",
            body: "Garantizamos contacto uniforme cuando el sistema lo requiere.",
          },
          { title: "Perfilado", body: "Se ajusta la forma y el contorno." },
          { title: "Acabado", body: "Lijado, pulido, limpieza y revisión final." },
        ],
      },
      {
        kind: "definitions",
        heading: "Materiales para remontas",
        items: [
          {
            term: "Crupón",
            definition:
              "Material de cuero de estructura densa y resistente, tradicionalmente utilizado en determinadas construcciones y reparaciones donde se necesita estabilidad y resistencia.",
          },
          {
            term: "Crepé",
            definition:
              "Material utilizado en suelas que proporciona características particulares de flexibilidad, confort y absorción. Existen diferentes calibres y formulaciones, y el espesor se selecciona de acuerdo con la construcción del calzado.",
          },
          {
            term: "Neolite",
            definition:
              "Material sintético tradicionalmente utilizado en reparación de calzado por su versatilidad, resistencia al desgaste y facilidad para ser trabajado.",
          },
          {
            term: "Caucho expandido",
            definition:
              "Material de estructura celular que permite obtener soluciones ligeras y flexibles, especialmente interesantes para determinados tipos de calzado casual y de confort.",
          },
        ],
      },
      {
        kind: "flow",
        heading: "Cómo trabajamos el crupón",
        intro:
          "Del cuero en bruto a la suela terminada, el crupón pasa por cuatro etapas que definen el resultado.",
        steps: ["Textura", "Espesor", "Preparación", "Resultado final"],
      },
      { kind: "tool", tool: "remonta-material" },
      {
        kind: "text",
        heading: "Zapatos especiales",
        paragraphs: [
          "El calzado ortopédico y los zapatos con adaptaciones especiales requieren un criterio aparte: cualquier cambio en la parte inferior puede modificar la altura, la nivelación o el apoyo para el que fueron construidos. En esos casos evaluamos la pieza con el cliente antes de proponer cualquier intervención.",
        ],
      },
    ],
  },
  {
    slug: "pegado-de-calzado",
    eyebrow: "Pegado",
    h1: "El pegado profesional de calzado",
    lead: "Pegar un zapato no significa simplemente aplicar pegante. Diferentes materiales requieren diferentes sistemas adhesivos y diferentes preparaciones de superficie.",
    metaTitle: "Pegado profesional de calzado en Medellín",
    metaDescription:
      "El pegado de calzado paso a paso: diagnóstico de materiales, preparación mecánica y química, adhesivo apropiado, presión y curado. No existe un único pegante para todo.",
    keywords: [
      "pegado de calzado Medellín",
      "pegar suela de zapato",
      "adhesivos para calzado",
      "despegado de suela",
      "pegante para cuero y caucho",
    ],
    whatsappContext: "calzado",
    blocks: [
      {
        kind: "steps",
        heading: "Proceso de pegado",
        steps: [
          { title: "Diagnóstico", body: "Identificamos los materiales." },
          {
            title: "Desmontaje",
            body: "Separamos cuidadosamente las superficies cuando es necesario.",
          },
          {
            title: "Limpieza",
            body: "Eliminamos polvo, grasa, residuos y adhesivos anteriores.",
          },
          {
            title: "Preparación mecánica",
            body: "Dependiendo del material puede ser necesario:",
            items: ["Lijar", "Desbastar", "Rebajar", "Texturizar"],
          },
          {
            title: "Preparación química",
            body: "Algunos materiales requieren primer o activador específico para favorecer la adhesión.",
          },
          {
            title: "Aplicación del adhesivo",
            body: "Se utiliza el adhesivo apropiado para la combinación de materiales.",
          },
          {
            title: "Tiempo de evaporación o activación",
            body: "Los adhesivos no necesariamente deben unirse inmediatamente después de aplicarlos.",
          },
          { title: "Unión", body: "Se posicionan correctamente las piezas." },
          { title: "Presión", body: "Se aplica presión adecuada para favorecer el contacto." },
          {
            title: "Curado",
            body: "El adhesivo necesita tiempo para desarrollar sus propiedades.",
          },
          { title: "Acabado", body: "Retiramos excedentes y verificamos la unión." },
        ],
      },
      {
        kind: "highlight",
        heading: "No existe un único pegante para todo",
        paragraphs: [
          "Un pegante adecuado para una combinación de cuero y caucho puede no ser el mismo que se necesita para determinadas espumas, textiles, sintéticos o plásticos.",
          "La selección depende de:",
        ],
        items: [
          "Material",
          "Porosidad",
          "Flexibilidad",
          "Temperatura de trabajo",
          "Tipo de esfuerzo",
          "Área de contacto",
          "Construcción del calzado",
        ],
      },
      { kind: "tool", tool: "adhesivo" },
    ],
  },
  {
    slug: "lavanderia-de-calzado",
    eyebrow: "Lavandería",
    h1: "Lavandería especializada de calzado",
    lead: "Tus tenis favoritos merecen algo más que un ciclo de lavadora.",
    metaTitle: "Lavandería especializada de calzado y tenis en Medellín",
    metaDescription:
      "Lavado profesional de tenis y calzado en Medellín: lavado superficial y profundo, limpieza de gamuza y nobuck, limpieza de cuero, limpieza de suelas y tratamiento de manchas.",
    keywords: [
      "lavandería de calzado Medellín",
      "lavado de tenis Medellín",
      "limpieza de gamuza",
      "limpieza de nobuck",
      "limpieza de suelas",
      "lavado profesional de zapatos",
    ],
    galleryCategory: "Lavandería",
    whatsappContext: "calzado",
    blocks: [
      {
        kind: "steps",
        heading: "¿Por qué no lavarlos en casa?",
        steps: [
          {
            title: "Exceso de agua",
            body: "Puede afectar determinados materiales, espumas, adhesivos y estructuras.",
          },
          {
            title: "Residuos de jabón",
            body: "Un enjuague insuficiente puede dejar residuos que al secarse generan halos o cambios de apariencia.",
          },
          {
            title: "Secado incorrecto",
            body: "El secado es parte del proceso. Una pieza que permanece húmeda demasiado tiempo puede desarrollar olores y otros problemas.",
          },
          {
            title: "Materiales diferentes",
            body: "Un mismo tenis puede tener cuero, malla, sintético, caucho y espuma. Cada componente puede requerir un tratamiento diferente.",
          },
        ],
      },
      {
        kind: "definitions",
        heading: "Procesos de lavandería",
        items: [
          { term: "Lavado superficial", definition: "Para suciedad ligera." },
          { term: "Lavado profundo", definition: "Para suciedad acumulada." },
          { term: "Limpieza de gamuza y nobuck", definition: "Tratamiento específico." },
          {
            term: "Limpieza de cuero",
            definition: "Limpieza y acondicionamiento cuando corresponde.",
          },
          {
            term: "Limpieza de suelas",
            definition: "Tratamiento específico para recuperar apariencia.",
          },
          { term: "Tratamiento de manchas", definition: "Evaluación individual." },
        ],
      },
    ],
  },
  {
    slug: "tenido-de-cuero",
    eyebrow: "Restauración de cuero",
    h1: "Recuperar el color también es recuperar la vida del artículo",
    lead: "Restauramos y teñimos artículos de cuero identificando primero el material, para devolverle color y protección dentro de lo que es técnicamente posible.",
    metaTitle: "Restauración y teñido de cuero en Medellín",
    metaDescription:
      "Teñido y restauración de artículos de cuero en Medellín: diagnóstico, limpieza, corrección, igualación de color, acabado y protección. Zapatos, botas, bolsos y chaquetas.",
    keywords: [
      "teñido de cuero Medellín",
      "restauración de cuero Medellín",
      "cambiar color de zapatos de cuero",
      "restaurar bolso de cuero",
      "teñido de chaqueta de cuero",
    ],
    galleryCategory: "Teñido de cuero",
    whatsappContext: "cuero",
    blocks: [
      {
        kind: "flow",
        heading: "Proceso de restauración y teñido",
        steps: [
          "Diagnóstico",
          "Identificación del material",
          "Limpieza",
          "Preparación",
          "Corrección",
          "Igualación de color",
          "Aplicación",
          "Acabado",
          "Protección",
        ],
      },
      {
        kind: "list",
        heading: "¿Por qué restaurar un artículo de cuero?",
        intro: "Porque puede tener:",
        items: [
          "Valor económico",
          "Valor sentimental",
          "Calidad de construcción",
          "Diseño difícil de reemplazar",
          "Materiales que todavía pueden recuperarse",
        ],
      },
      {
        kind: "highlight",
        heading: "Qué significa restaurar",
        paragraphs: [
          "Restaurar no significa hacer que un artículo parezca nuevo a cualquier costo. Significa recuperar, dentro de lo técnicamente posible, su funcionalidad, apariencia y carácter.",
        ],
      },
    ],
  },
  {
    slug: "tenido-de-prendas",
    eyebrow: "Teñido de prendas",
    h1: "Teñido especializado de prendas de algodón",
    lead: "Cambiar el color de una prenda puede darle una segunda vida y evitar reemplazarla cuando la tela y la construcción todavía se encuentran en buenas condiciones.",
    metaTitle: "Teñido de prendas de algodón en Medellín",
    metaDescription:
      "Teñido industrial de prendas de algodón en Medellín: proceso, cuándo vale la pena teñir y qué riesgos existen. Jeans, camisetas, pantalones y vestidos.",
    keywords: [
      "teñido de ropa Medellín",
      "teñir jeans Medellín",
      "tintorería de prendas de algodón",
      "teñido industrial de ropa",
      "riesgos del teñido de ropa",
    ],
    galleryCategory: "Teñido de tela",
    whatsappContext: "ropa",
    blocks: [
      {
        kind: "list",
        heading: "¿Por qué teñir una prenda en lugar de comprar una nueva?",
        intro: "Puede valer la pena cuando:",
        items: [
          "La prenda tiene buena calidad",
          "El tejido está en buen estado",
          "El diseño todavía gusta",
          "Tiene valor sentimental",
          "El desgaste está principalmente relacionado con el color",
          "Se desea cambiar completamente su apariencia",
        ],
      },
      {
        kind: "highlight",
        heading: "Pero debemos ser transparentes",
        paragraphs: [
          "El teñido no elimina daños estructurales, manchas permanentes, desgaste de la fibra o decoloraciones que hayan alterado profundamente el tejido.",
        ],
      },
      {
        kind: "steps",
        heading: "Proceso de teñido industrial",
        intro: "Es distinto del teñido manual y se controla en cada etapa.",
        steps: [
          {
            title: "Clasificación",
            body: "Se revisa:",
            items: ["Composición", "Color", "Peso", "Construcción", "Estado"],
          },
          {
            title: "Preparación",
            body: "La prenda debe estar limpia y preparada para recibir el color.",
          },
          {
            title: "Baño de teñido",
            body: "La prenda se somete a un baño con:",
            items: ["Agua", "Colorante apropiado", "Auxiliares químicos según el sistema"],
          },
          {
            title: "Temperatura",
            body: "Dependiendo del colorante y la fibra, se trabaja a una temperatura determinada.",
          },
          {
            title: "Tiempo y movimiento",
            body: "La circulación del baño permite favorecer una distribución uniforme.",
          },
          {
            title: "Fijación",
            body: "Se crean las condiciones necesarias para que el colorante se fije a la fibra.",
          },
          {
            title: "Lavado posterior",
            body: "Se eliminan colorantes no fijados y residuos.",
          },
          { title: "Secado", body: "Se controla el proceso para reducir alteraciones." },
          {
            title: "Acabado",
            body: "Se revisa:",
            items: ["Uniformidad", "Intensidad", "Apariencia", "Tacto"],
          },
        ],
      },
      {
        kind: "highlight",
        heading: "Riesgos del teñido de prendas",
        paragraphs: [
          "El teñido industrial es un proceso técnico que implica calor, agua, productos químicos y movimiento mecánico. Por eso no podemos garantizar que todas las prendas reaccionen exactamente igual.",
          "Una prenda puede estar compuesta de algodón, poliéster, elastano, hilo de otro material y estampado. El algodón puede absorber el color de una manera diferente a los demás componentes.",
        ],
        items: [
          "Encogimiento",
          "Cambio de textura",
          "Variación de tono",
          "Diferencias de color entre materiales",
          "Alteración de estampados",
          "Alteración de bordados",
          "Cambios en hilos de costura",
          "Afectación de accesorios",
          "Diferencias de absorción",
          "Cambios en el acabado",
        ],
      },
      { kind: "tool", tool: "pre-tenido" },
    ],
  },
  {
    slug: "reparacion-de-bolsos",
    eyebrow: "Bolsos y morrales",
    h1: "Restauramos bolsos para que vuelvan a acompañarte",
    lead: "Cierres, asas, forros, bases, herrajes o el color del cuero: evaluamos cada parte del bolso y reparamos lo que se puede recuperar.",
    metaTitle: "Reparación de bolsos, morrales y maletines en Medellín",
    metaDescription:
      "Reparación de bolsos en Medellín: cambio de cierres, asas, forros, bases, tapas y herrajes, reparación de costuras y correas, y restauración de cuero. También morrales y maletas.",
    keywords: [
      "reparación de bolsos Medellín",
      "cambio de cierre de bolso",
      "cambio de asa de bolso",
      "cambio de forro de bolso",
      "reparación de morrales Medellín",
      "reparación de maletines",
    ],
    galleryCategory: "Bolsos",
    whatsappContext: "bolsos",
    blocks: [
      {
        kind: "list",
        heading: "Servicios para bolsos",
        items: [
          "Cambio de cierres",
          "Cambio de asas",
          "Cambio de forros",
          "Cambio de bases",
          "Cambio de tapas",
          "Cambio de herrajes",
          "Reparación de costuras",
          "Reparación de correas",
          "Restauración de cuero",
          "Restauración de color",
        ],
      },
      {
        kind: "definitions",
        heading: "Cambio de cierres",
        items: [
          {
            term: "Cierres metálicos y de cobre",
            definition:
              "Sustitución del sistema de cierre deteriorado por uno compatible con la construcción del bolso.",
          },
          {
            term: "Cierres de nylon",
            definition:
              "Reemplazo del cierre cuando la cinta, los dientes o el sistema completo se encuentran deteriorados.",
          },
          {
            term: "Cursor",
            definition:
              "En algunos casos el problema puede solucionarse reemplazando únicamente el cursor, si el resto del cierre se encuentra en buenas condiciones.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Cambio de asas en cuero",
        intro: "Fabricamos o adaptamos nuevas piezas considerando:",
        items: ["Espesor", "Color", "Ancho", "Largo", "Sistema de fijación"],
      },
      {
        kind: "text",
        heading: "Cambio de asas en sintético",
        paragraphs: [
          "Evaluamos el material original y buscamos una alternativa compatible con el diseño y con la carga que debe soportar el asa.",
        ],
      },
      {
        kind: "flow",
        heading: "Cambio de forro",
        steps: [
          "Desmontar",
          "Retirar el forro deteriorado",
          "Tomar medidas y patrones",
          "Cortar",
          "Confeccionar",
          "Instalar",
          "Terminar",
        ],
      },
      {
        kind: "list",
        heading: "El forro nuevo puede incluir",
        items: ["Bolsillos", "Compartimentos", "Cierres", "Refuerzos"],
      },
      {
        kind: "text",
        heading: "Cambio de base",
        paragraphs: [
          "La base soporta fricción, peso y contacto con superficies. Cuando está deteriorada podemos estudiar su sustitución utilizando un material compatible con el diseño.",
        ],
      },
      {
        kind: "list",
        heading: "Cambio de herrajes",
        items: ["Argollas", "Hebillas", "Mosquetones", "Broches", "Remaches", "Pasadores"],
      },
      {
        kind: "highlight",
        heading: "El herraje correcto",
        paragraphs: [
          "Debe ser compatible no solo visualmente, sino también con la carga y la función que desempeña.",
        ],
      },
      {
        kind: "list",
        heading: "Reparación de costuras",
        intro: "Los problemas más frecuentes son:",
        items: [
          "Hilo roto",
          "Costura abierta",
          "Desgarro",
          "Unión debilitada",
          "Asa descosida",
          "Bolsillo desprendido",
        ],
      },
      {
        kind: "flow",
        heading: "Proceso de reparación de costuras",
        steps: [
          "Evaluación",
          "Preparación",
          "Selección de hilo",
          "Costura",
          "Refuerzo",
          "Remate",
        ],
      },
      {
        kind: "list",
        heading: "Morrales y maletas pequeñas y medianas",
        intro: "En morrales, maletas y maletines podemos trabajar:",
        items: [
          "Tirantas",
          "Asas",
          "Cierres",
          "Costuras",
          "Bolsillos",
          "Forros",
          "Bases",
          "Herrajes",
          "Correas",
          "Refuerzos",
        ],
      },
      {
        kind: "highlight",
        heading: "Por qué los tratamos aparte",
        paragraphs: [
          "Los morrales y maletas reciben cargas y tensiones superiores a las de muchos bolsos. Por eso buscamos no solo cerrar el daño, sino recuperar la resistencia de la zona intervenida.",
        ],
      },
    ],
  },
]

export function findServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug)
}

export const servicePageSlugs = servicePages.map((page) => page.slug)

/** Enlaces de navegación hacia las páginas de servicio. */
export const servicePageLinks = servicePages.map((page) => ({
  label: page.eyebrow,
  href: `/servicios/${page.slug}`,
}))

const categoryToPage: Record<string, string> = {
  "Remontas y suelas": "/servicios/remonta-de-calzado",
  "Cuellos y plantillas": "/servicios/reparacion-de-calzado",
  "Capelladas y piezas": "/servicios/reparacion-de-calzado",
  "Tacones y tapas": "/servicios/reparacion-de-calzado",
  "Teñido de cuero": "/servicios/tenido-de-cuero",
  "Teñido de tela": "/servicios/tenido-de-prendas",
  Lavandería: "/servicios/lavanderia-de-calzado",
  Bolsos: "/servicios/reparacion-de-bolsos",
}

export function servicePageHrefForCategory(category: string) {
  return categoryToPage[category]
}
