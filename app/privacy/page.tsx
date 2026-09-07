import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arcoiriszapateria.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Política de privacidad | Arcoiris Zapatería Especializada",
  description:
    "Política de privacidad y tratamiento de datos personales de Arcoiris Zapatería Especializada.",
  keywords: [
    "política de privacidad",
    "tratamiento de datos personales",
    "Arcoiris Zapatería Especializada",
    "protección de datos Medellín",
    "reparación de calzado privacidad",
  ],
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Política de privacidad | Arcoiris Zapatería Especializada",
    description:
      "Política de privacidad y tratamiento de datos personales de Arcoiris Zapatería Especializada.",
    url: `${siteUrl}/privacy`,
    siteName: "Arcoiris Zapatería Especializada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de privacidad | Arcoiris Zapatería Especializada",
    description:
      "Política de privacidad y tratamiento de datos personales de Arcoiris Zapatería Especializada.",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8 lg:p-12">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS PERSONALES
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Última actualización: 27 de agosto de 2026
            </p>

            <article className="mt-10 max-w-none space-y-6 text-foreground [&>h2]:mt-2 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h3]:mt-2 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>p]:leading-7 [&>ul]:space-y-2 [&>ol]:space-y-2 [&>ul_li]:leading-7 [&>ol_li]:leading-7 [&>p_strong]:text-foreground">
              <h2>1. Responsable del tratamiento</h2>
              <p>
                <strong>Arcoiris Zapatería Especializada</strong> es responsable del tratamiento de los datos
                personales recopilados y utilizados en relación con sus servicios de reparación de artículos y
                las comunicaciones realizadas con sus clientes.
              </p>
              <p>Para consultas, solicitudes o ejercicio de derechos relacionados con los datos personales, los
                clientes podrán comunicarse a través de:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +57 311 630 1609</li>
                <li><strong>Correo electrónico:</strong> danielllano_87@hotmail.com</li>
                <li><strong>Dirección:</strong> Laureles: Av. 33 # 82-14, Medellín, Colombia - Poblado: Cra. 42 # 9-6, Medellín, Colombia</li>
              </ul>

              <h2>2. Alcance de esta política</h2>
              <p>
                Esta Política de Privacidad explica cómo Arcoiris Zapatería Especializada recopila, utiliza,
                almacena, protege y, cuando corresponda, elimina información personal de sus clientes en el
                desarrollo de sus servicios.
              </p>
              <p>
                En particular, esta política aplica al uso de herramientas tecnológicas destinadas a gestionar
                órdenes de servicio y enviar comunicaciones a los clientes mediante WhatsApp.
              </p>
              <p>
                El tratamiento de datos personales se realiza de conformidad con la normativa colombiana
                aplicable en materia de protección de datos personales, incluyendo la Ley 1581 de 2012 y las
                normas que la reglamenten, modifiquen o sustituyan.
              </p>

              <h2>3. Información que podemos recopilar</h2>
              <p>Dependiendo de la relación del cliente con Arcoiris Zapatería Especializada y de los servicios
                utilizados, podemos tratar las siguientes categorías de información:</p>

              <h3>Datos de identificación y contacto</h3>
              <ul>
                <li>Nombre del cliente.</li>
                <li>Número de teléfono y número asociado a WhatsApp.</li>
                <li>Correo electrónico.</li>
                <li>Documento de identidad, cuando sea necesario para la prestación del servicio o para cumplir obligaciones legales.</li>
              </ul>

              <h3>Información relacionada con órdenes y reparaciones</h3>
              <ul>
                <li>Número o identificador de la orden.</li>
                <li>Información del artículo entregado para reparación.</li>
                <li>Descripción del servicio solicitado.</li>
                <li>Estado de la reparación.</li>
                <li>Fechas relacionadas con la recepción, reparación y entrega.</li>
                <li>Información necesaria para coordinar la prestación del servicio.</li>
              </ul>

              <h3>Información relacionada con pagos</h3>
              <ul>
                <li>Estado del pago.</li>
                <li>Valores asociados a la orden o servicio.</li>
                <li>Información o referencias relacionadas con la operación de pago, cuando sea necesaria para gestionar la orden.</li>
              </ul>
              <p>
                Arcoiris Zapatería Especializada no pretende recopilar información financiera confidencial que no
                sea necesaria para la gestión de sus servicios.
              </p>

              <h3>Comunicaciones y contenido</h3>
              <ul>
                <li>Mensajes enviados o recibidos relacionados con la atención del cliente.</li>
                <li>Información proporcionada por el cliente durante la comunicación.</li>
                <li>Fotografías del artículo en reparación, cuando sean necesarias para gestionar, documentar o informar sobre el servicio.</li>
              </ul>

              <h2>4. Finalidades del tratamiento</h2>
              <p>La información personal será utilizada exclusivamente para finalidades relacionadas con la relación entre el cliente y Arcoiris Zapatería Especializada, incluyendo:</p>
              <ol>
                <li>Gestionar órdenes de servicio y reparaciones.</li>
                <li>Identificar correctamente los artículos entregados para reparación.</li>
                <li>Informar al cliente sobre el estado de sus artículos en reparación.</li>
                <li>Informar sobre avances, novedades o cambios relacionados con una orden.</li>
                <li>Comunicar información relacionada con pagos de las órdenes.</li>
                <li>Informar cuando un artículo se encuentre listo para entrega.</li>
                <li>Responder consultas relacionadas con órdenes y servicios.</li>
                <li>Mantener registros necesarios para la gestión administrativa y operativa del servicio.</li>
                <li>Atender solicitudes relacionadas con los derechos de los titulares de los datos.</li>
                <li>Cumplir obligaciones legales, contractuales y administrativas aplicables.</li>
              </ol>

              <h2>5. Comunicaciones mediante WhatsApp</h2>
              <p>
                Arcoiris Zapatería Especializada utiliza servicios de WhatsApp Business/WhatsApp Business Platform
                como canal de comunicación con sus clientes.
              </p>
              <p>
                Estos servicios pueden utilizarse para enviar notificaciones relacionadas con las órdenes,
                reparaciones y pagos.
              </p>
              <p>
                Las comunicaciones realizadas mediante WhatsApp tienen como finalidad principal facilitar la
                prestación y gestión del servicio solicitado por el cliente.
              </p>
              <p>
                <strong>Actualmente, esta aplicación no se utiliza para enviar publicidad, promociones, campañas comerciales o mensajes de marketing no relacionados con una orden o servicio del cliente.</strong>
              </p>
              <p>
                El funcionamiento y tratamiento de información realizado directamente por WhatsApp y Meta se
                encuentra además sujeto a las políticas, términos y condiciones de dichas plataformas.
              </p>

              <h2>6. Almacenamiento de información</h2>
              <p>
                La aplicación utiliza servicios de <strong>Firebase y Google Cloud/Firestore</strong> para almacenar y
                procesar información necesaria para la gestión de las órdenes, reparaciones y comunicaciones.
              </p>
              <p>
                Dependiendo de la arquitectura implementada, la información puede incluir datos de clientes,
                órdenes, estados de reparación, información relacionada con pagos, fotografías y registros
                necesarios para el funcionamiento de la aplicación.
              </p>
              <p>
                Arcoiris Zapatería Especializada procura implementar medidas razonables de seguridad para
                proteger la información contra acceso no autorizado, pérdida, alteración, divulgación o destrucción.
              </p>

              <h2>7. Proveedores tecnológicos</h2>
              <p>Para prestar sus servicios, Arcoiris Zapatería Especializada puede utilizar proveedores tecnológicos que actúan como plataformas de infraestructura, almacenamiento, comunicación o procesamiento de información.</p>
              <p>Entre ellos se encuentran actualmente:</p>
              <ul>
                <li><strong>Meta/WhatsApp</strong>, como plataforma de comunicación.</li>
                <li><strong>Firebase/Firestore</strong>, como infraestructura de almacenamiento y servicios tecnológicos.</li>
              </ul>
              <p>
                Estos proveedores pueden tratar información de acuerdo con sus propios términos, políticas de
                privacidad y condiciones de servicio aplicables.
              </p>
              <p>
                Arcoiris Zapatería Especializada procurará utilizar únicamente la información necesaria para las
                finalidades descritas en esta política.
              </p>

              <h2>8. Inteligencia artificial</h2>
              <p>
                Actualmente, la aplicación descrita en esta política <strong>no utiliza inteligencia artificial para
                  procesar o generar automáticamente las comunicaciones enviadas a los clientes</strong>.
              </p>
              <p>
                En caso de que Arcoiris Zapatería Especializada incorpore posteriormente herramientas de
                inteligencia artificial u otras tecnologías que impliquen nuevas formas de tratamiento de datos
                personales, se revisarán y actualizarán las prácticas de privacidad y, cuando corresponda, esta
                política será modificada para informar adecuadamente a los titulares.
              </p>

              <h2>9. Conservación de los datos</h2>
              <p>
                Los datos personales serán conservados durante el tiempo necesario para cumplir las finalidades
                descritas en esta política y atender las obligaciones legales, contractuales, contables,
                administrativas o de otra naturaleza que resulten aplicables.
              </p>
              <p>
                Cuando los datos ya no sean necesarios para dichas finalidades y no exista una obligación legal
                que requiera conservarlos, podrán ser eliminados, anonimizados o tratados de acuerdo con las
                disposiciones aplicables.
              </p>

              <h2>10. Derechos de los titulares</h2>
              <p>
                De acuerdo con la legislación colombiana aplicable, los titulares de los datos personales pueden
                ejercer, entre otros, los siguientes derechos:
              </p>
              <ul>
                <li>Conocer los datos personales que están siendo tratados.</li>
                <li>Solicitar la actualización de sus datos.</li>
                <li>Solicitar la corrección de información incompleta, inexacta o desactualizada.</li>
                <li>Solicitar información sobre el uso que se ha dado a sus datos.</li>
                <li>Solicitar la eliminación de sus datos cuando sea procedente.</li>
                <li>Solicitar la revocatoria de la autorización para el tratamiento cuando sea legalmente procedente.</li>
                <li>Presentar consultas o reclamos relacionados con el tratamiento de sus datos.</li>
                <li>Acceder gratuitamente a sus datos personales en los términos establecidos por la normativa aplicable.</li>
              </ul>
              <p>
                El ejercicio de estos derechos estará sujeto a las excepciones y obligaciones de conservación
                establecidas por la legislación colombiana.
              </p>

              <h2>11. Cómo solicitar la eliminación o modificación de datos</h2>
              <p>
                El titular puede solicitar la consulta, actualización, corrección o eliminación de sus datos
                comunicándose con Arcoiris Zapatería Especializada mediante cualquiera de los siguientes canales:
              </p>
              <p><strong>WhatsApp:</strong> +57 311 630 1609</p>
              <p><strong>Correo electrónico:</strong> danielllano_87@hotmail.com</p>
              <p>
                En la solicitud se podrá requerir información suficiente para verificar la identidad del
                solicitante y proteger la información personal frente a solicitudes realizadas por terceros no
                autorizados.
              </p>

              <h2>12. Seguridad</h2>
              <p>
                Arcoiris Zapatería Especializada adopta medidas técnicas, administrativas y organizativas
                razonables orientadas a proteger los datos personales frente a accesos no autorizados, pérdida,
                alteración, divulgación o uso indebido.
              </p>
              <p>
                El acceso a los datos se limita, en la medida necesaria, a las personas y sistemas que requieren
                dicha información para prestar los servicios o administrar la operación.
              </p>
              <p>
                No obstante, ningún sistema de almacenamiento o transmisión de información puede garantizar
                seguridad absoluta.
              </p>

              <h2>13. Compartición de información</h2>
              <p>
                Arcoiris Zapatería Especializada no comercializa los datos personales de sus clientes.
              </p>
              <p>
                La información podrá ser compartida o procesada por proveedores tecnológicos cuando sea necesario
                para prestar los servicios descritos en esta política, incluyendo servicios de almacenamiento,
                infraestructura tecnológica y mensajería.
              </p>
              <p>
                También podrá divulgarse información cuando exista una obligación legal, requerimiento de una
                autoridad competente o resulte necesario para proteger derechos, seguridad o intereses legítimos
                de Arcoiris Zapatería Especializada o de terceros, de acuerdo con la legislación aplicable.
              </p>

              <h2>14. Transferencias y tratamiento internacional</h2>
              <p>
                Al utilizar proveedores tecnológicos como Meta/WhatsApp y Firebase/Firestore, determinada
                información podría ser almacenada o procesada en infraestructura ubicada fuera de Colombia.
              </p>
              <p>
                Arcoiris Zapatería Especializada procurará que cualquier transferencia o tratamiento internacional
                de datos personales se realice de acuerdo con la legislación colombiana aplicable y las
                condiciones contractuales y de privacidad de los proveedores utilizados.
              </p>

              <h2>15. Datos de menores de edad</h2>
              <p>
                Los servicios de Arcoiris Zapatería Especializada no están dirigidos específicamente a menores de
                edad.
              </p>
              <p>
                Cuando sea necesario tratar información personal de un menor, se procurará cumplir con las
                condiciones y garantías establecidas por la legislación colombiana aplicable y priorizar la
                protección de sus derechos e intereses.
              </p>

              <h2>16. Cambios a esta política</h2>
              <p>
                Arcoiris Zapatería Especializada podrá modificar esta Política de Privacidad cuando sea necesario
                para reflejar cambios en sus servicios, tecnologías, procesos de tratamiento de datos o
                requisitos legales.
              </p>
              <p>
                Cuando corresponda, se informará sobre cambios relevantes mediante los canales disponibles.
              </p>
              <p>
                La fecha de actualización indicada al inicio de esta política permitirá identificar la versión
                vigente.
              </p>

              <h2>17. Contacto</h2>
              <p>Para cualquier consulta relacionada con esta Política de Privacidad, el tratamiento de datos
                personales o el ejercicio de los derechos de los titulares, puede comunicarse con:</p>
              <p><strong>Arcoiris Zapatería Especializada</strong></p>
              <p><strong>WhatsApp:</strong> +57 311 630 1609</p>
              <p><strong>Correo electrónico:</strong> danielllano_87@hotmail.com</p>
              <p><strong>Dirección:</strong> Laureles: Av. 33 # 82-14, Medellín, Colombia - Poblado: Cra. 42 # 9-6, Medellín, Colombia</p>

              <hr />

              <p><strong>Fecha de entrada en vigencia:</strong> 27 de agosto de 2026</p>
              <p><strong>Última actualización:</strong> 27 de agosto de 2026</p>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
