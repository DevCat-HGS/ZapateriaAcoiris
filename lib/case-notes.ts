/**
 * Los seis campos que el documento pide por cada caso de «Antes y después».
 * La clave es el título capitalizado que produce buildBeforeAfterCases().
 */
export interface CaseNote {
  diagnosis: string
  process: string
  materials: string
  recommendation: string
}

export const caseNotes: Record<string, CaseNote> = {
  "Cambio de capellada": {
    diagnosis:
      "La parte superior del calzado presentaba rotura, desgaste o pérdida de forma en la zona que cubre el pie.",
    process:
      "Retiramos la sección deteriorada, cortamos y adaptamos la pieza nueva, la fijamos según la construcción y damos acabado al contorno.",
    materials: "Cuero, sintético o textil compatible con la capellada original, más hilo y adhesivo de alta resistencia.",
    recommendation:
      "Evita forzar el calce con el pie y revisa las costuras de la capellada cada cierto tiempo: un descosido pequeño es más fácil de contener que un desgarro.",
  },
  "Cambio de cordonera en cuero": {
    diagnosis:
      "Los ojales, ganchos o el refuerzo alrededor de los cordones estaban rotos, deformados o desprendidos.",
    process:
      "Reforzamos o sustituimos la zona de la cordonera, instalamos ojales o ganchos nuevos y rematamos para que el cordón vuelva a tensar sin rasgar el cuero.",
    materials: "Cuero de refuerzo, ojales o ganchos metálicos e hilo de alta resistencia.",
    recommendation:
      "No aprietes el cordón sobre un ojal suelto: la tensión se concentra ahí y vuelve a romper el cuero. Si un gancho se afloja, tráelo antes de que rasgue la capellada.",
  },
  "Cambio de pilón": {
    diagnosis:
      "El pilón del tacón —la pieza que recibe el impacto contra el suelo— estaba desgastado, partido o desnivelado.",
    process:
      "Retiramos el pilón deteriorado, preparamos la base del tacón, instalamos el recambio y perfilamos para recuperar altura y apoyo.",
    materials: "Pilones de caucho o material sintético de dureza acorde al tipo de tacón.",
    recommendation:
      "Cámbialo apenas notes que el tacón empieza a inclinarse: caminar desnivelado desgasta también la suela y el contrafuerte.",
  },
  "Cambio de cuello": {
    diagnosis:
      "El cuello que rodea el tobillo estaba desgastado por fricción, con forro roto, espuma expuesta o costuras abiertas.",
    process:
      "Retiramos el material deteriorado, evaluamos la espuma, cortamos el nuevo cuello, lo instalamos y lo cosemos o fijamos según la construcción.",
    materials: "Cuero o forro textil, espuma de relleno e hilo de alta resistencia.",
    recommendation:
      "El cuello se desgasta por el roce diario del tobillo. Si ves espuma asomando, no esperes: el borde áspero acelera el daño y puede lastimar la piel.",
  },
  "Remonta prefabricada de guayos": {
    diagnosis:
      "La suela del guayo estaba desgastada o despegada y la construcción permitía sustituirla por una remonta prefabricada.",
    process:
      "Desmontamos la suela deteriorada, preparamos la superficie, pegamos la remonta prefabricada, prensamos y perfilamos el contorno.",
    materials: "Remonta prefabricada compatible con la horma del guayo y adhesivo específico para caucho y sintéticos.",
    recommendation:
      "Limpia el barro y la humedad de la suela después de cada uso. El agua estancada en las tacos acorta la vida del pegado.",
  },
  "Teñido industrial de bolsos de cuero": {
    diagnosis:
      "El color del cuero se había perdido, desteñido o ya no coincidía con el uso que el cliente quería darle al bolso.",
    process:
      "Identificamos el tipo de cuero, lo limpiamos y preparamos, igualamos el color, aplicamos el tinte, sellamos y protegemos el acabado.",
    materials: "Tintes para cuero, selladores y acabados protectores compatibles con el artículo.",
    recommendation:
      "Evita el sol directo prolongado y no uses cremas genéricas sobre el tinte. Si el bolso se moja, sécalo a la sombra y tráelo si el color se abre.",
  },
  "Remonta de neolite para dama": {
    diagnosis:
      "La suela original de un zapato de dama estaba desgastada y la construcción pedía un material fino, resistente y fácil de perfilar.",
    process:
      "Diagnóstico, desmontaje, preparación de superficies, corte y montaje de neolite, pegado, prensado, perfilado y acabado.",
    materials: "Neolite en el calibre adecuado a la construcción del zapato y adhesivo para suela.",
    recommendation:
      "El neolite resiste bien el desgaste urbano, pero no es inmune a bordes afilados. Si se empieza a desgastar de un lado, conviene nivelarlo a tiempo.",
  },
  "Cambio de suelas": {
    diagnosis:
      "La suela —la parte que pisa el suelo— estaba desgastada, resquebrajada o ya no daba apoyo ni tracción.",
    process:
      "Evaluamos si basta un cambio localizado o si se requiere remonta completa; preparamos, pegamos, prensamos y perfilamos el nuevo componente.",
    materials: "Crupón, crepé, neolite o caucho expandido, según el tipo de calzado y el uso.",
    recommendation:
      "No esperes a que la suela se perfore: cuando el desgaste llega a la entresuela el trabajo es mayor y el resultado, menos predecible.",
  },
  "Cambio de puntera en cuero": {
    diagnosis:
      "La puntera de cuero estaba rota, desgastada o desprendida, dejando expuesta la estructura delantera del calzado.",
    process:
      "Retiramos la puntera deteriorada, cortamos una pieza nueva, la adaptamos a la horma, la fijamos y damos acabado de color y borde.",
    materials: "Cuero compatible en espesor y color, adhesivo y, si la construcción lo pide, refuerzo interno.",
    recommendation:
      "La puntera recibe golpes contra el suelo y el bordillo. Un protector o un recambio oportuno evita que el daño llegue a la capellada.",
  },
  "Teñido de tenis de tela": {
    diagnosis:
      "El color de la tela se había perdido o el cliente quería cambiarlo, con el tejido todavía en condiciones de recibir tinte.",
    process:
      "Clasificamos la prenda, la preparamos, aplicamos el baño de teñido, fijamos, lavamos y secamos con control de temperatura.",
    materials: "Colorantes para fibras textiles y auxiliares de fijación, según la composición de la tela.",
    recommendation:
      "Lava el tenis teñido por separado las primeras veces y evita el sol directo al secar. El teñido no elimina manchas estructurales ni roturas.",
  },
  "Cambio de tacón": {
    diagnosis:
      "El tacón estaba desnivelado, partido, corto o ya no sostenía la parte trasera del calzado.",
    process:
      "Evaluamos la construcción y el margen de modificación; recortamos, nivelamos o sustituimos el tacón y damos acabado al perfil.",
    materials: "Material del tacón original o recambio compatible, más tapas o pilones de apoyo.",
    recommendation:
      "Un tacón desnivelado tuerce todo el zapato. Si escuchas golpeteo o ves que camina hacia un lado, tráelo antes de que se deforme la capellada.",
  },
  "Cambio de tapete": {
    diagnosis:
      "El tapete interno o la pieza de recubrimiento estaba desgastado, suelto o ya no protegía la plantilla.",
    process:
      "Retiramos el tapete deteriorado, tomamos la forma, cortamos el recambio, lo pegamos o cosemos y revisamos el ajuste interno.",
    materials: "Cuero, sintético o textil de recubrimiento, según el interior original del calzado.",
    recommendation:
      "Saca las plantillas a secar si el zapato se moja. Un tapete húmedo se despega y genera olor mucho antes de romperse.",
  },
  "Cambio de plantillas": {
    diagnosis:
      "La plantilla había perdido soporte, se había deformado o ya no cubría bien la base interna del calzado.",
    process:
      "Medimos el espacio interno, elegimos plantilla prehormada o estructural, la adaptamos a la talla y la instalamos.",
    materials: "Plantillas prehormadas o materiales estructurales de soporte.",
    recommendation:
      "Una plantilla no sustituye una evaluación del pie. Si hay dolor persistente, elige el modelo con nosotros después de probar el espacio real del zapato.",
  },
  "Cambio de tapas": {
    diagnosis:
      "La tapa —el componente que pisa el suelo en la parte inferior del tacón— estaba gastada, suelta o desnivelada.",
    process:
      "Retiro, inspección, preparación, selección del material, instalación, perfilado y acabado.",
    materials: "Cauchos de distinta dureza o materiales sintéticos para tacón, según el tipo de calzado.",
    recommendation:
      "Es de los recambios más rápidos del taller. Cámbiala apenas notes que el metal o la madera del tacón empieza a verse: eso sí daña la estructura.",
  },
  "Teñido de zapatos de cuero": {
    diagnosis:
      "El color del cuero se había perdido, rayado o el cliente quería un tono distinto, con el material todavía recuperable.",
    process:
      "Diagnóstico, identificación del cuero, limpieza, preparación, corrección, igualación de color, aplicación, acabado y protección.",
    materials: "Tintes para cuero, selladores y acabados protectores.",
    recommendation:
      "No uses tintes de casa ni betún de otro color encima. El cuero teñido se cuida con productos neutros y se protege de la lluvia las primeras semanas.",
  },
  "Blanqueamiento de suelas": {
    diagnosis:
      "La suela blanca o clara había amarilleado, sucio incrustado o pérdida de apariencia por uso y oxidación.",
    process:
      "Limpieza profunda de la suela, tratamiento de manchas y blanqueamiento controlado para recuperar el tono original.",
    materials: "Productos específicos para caucho y suelas claras, sin atacar adhesivos ni espumas vecinas.",
    recommendation:
      "El sol y el tiempo vuelven a amarillear algunas suelas. Guárdalas cubiertas y limpia el polvo de la ranura entre suela y capellada.",
  },
  "Forrado de sandalias": {
    diagnosis:
      "El forro interno de la sandalia estaba desgastado, sucio o despegado, dejando una superficie áspera contra el pie.",
    process:
      "Retiramos el forro viejo, cortamos el nuevo con el patrón de la horma, lo pegamos o cosemos y rematamos los bordes.",
    materials: "Cuero o forro textil compatible con el interior original, más adhesivo para piel.",
    recommendation:
      "El forro de una sandalia trabaja a la vista y al sudor. Si se levanta una esquina, no la arranques: tráela para rehacerla antes de que se ensucie el adhesivo.",
  },
}

export function caseNoteFor(title: string): CaseNote | undefined {
  return caseNotes[title]
}
