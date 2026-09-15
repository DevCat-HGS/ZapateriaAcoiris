# Registro de cambios — Web Arcoiris Zapatería Especializada

Documento de trazabilidad entre los cambios aplicados al proyecto y los requisitos
solicitados por Daniel Llano en `requerimientos.md` (líneas 783-795), más la
optimización SEO pedida posteriormente.

Todo el trabajo está contenido en el commit `cc3f94f` y en los cambios de limpieza
posteriores descritos en el bloque E.

---

## 1. Resumen de trazabilidad

| # | Requisito solicitado | Estado | Dónde se resolvió |
|---|---|---|---|
| 1 | Logo de Arcoiris que salga en el buscador | Implementado | `app/layout.tsx` (iconos), `lib/seo.ts` (logo en datos estructurados) |
| 2 | Guion de cómo empezó Arcoiris y empresa familiar | Estructura lista, **faltan datos reales** | `lib/site.ts` (`companyStory`), `components/our-story.tsx` |
| 3 | Quitar por completo las fotos de bancos de datos | Implementado | Eliminada `public/images/` y `components/auto-showcase.tsx` |
| 4 | Misión y visión | Implementado | `lib/site.ts` (`mission`, `vision`), `components/our-story.tsx` |
| 5 | Política de tratamiento de datos personales | Implementado | `app/privacy/page.tsx` |
| 6 | Política de garantía | Implementado | `app/garantia/page.tsx` |
| 7 | Política de teñido de artículos y sus riesgos | Implementado | `app/tenido-riesgos/page.tsx` |
| 8 | Añadir los 6 casos (jeans, cuero, taloneras, aseo, bolsos, lavandería) | Implementado | `lib/site.ts` (`articleNeeds`), `components/problem.tsx` |
| 9 | Al hacer clic, mostrar las soluciones de cada caso | Implementado | `components/problem.tsx` |
| 10 | Esas tarjetas tenían todas la misma foto | Corregido | `lib/site.ts` (pares antes/después distintos) |
| 11 | Al hacer clic, la explicación y reparaciones del Word | Implementado | `lib/site.ts` (`description` + `solutions`) |
| 12 | Incluir imágenes reales de las enviadas | Implementado | `lib/repair-catalog.ts` desde `public/data/services.json` |
| 13 | Enlazar la página de Instagram con la web | Enlazado, **sin feed embebido** | `components/site-header.tsx`, `components/site-footer.tsx`, `lib/seo.ts` |
| 14 | Excelente SEO para aparecer primero | Implementado en la parte técnica | `lib/seo.ts`, `app/layout.tsx`, `app/sitemap.ts`, breadcrumbs |

---

## 2. Bloque A — Contenido pedido por el cliente

### `lib/site.ts` — los 6 casos de "¿Qué necesita tu artículo?"

**Qué se hizo:** se definió el arreglo `articleNeeds` con los seis casos exactos que
pidió Daniel: *Jeans desteñidos*, *Cuero que quieres cambiar de color*, *Taloneras
dañadas*, *Aseo para calzado*, *Bolsos dañados* y *Zapatos sucios (lavandería)*. Cada
caso tiene su propia `description`, una lista de `solutions` y un `context` de WhatsApp
para que el mensaje prellenado corresponda al problema del cliente.

**Por qué:** el requisito 8 pedía añadir esos casos concretos y el 9 y el 11 pedían que
al hacer clic aparecieran la explicación y las reparaciones posibles.

### `lib/site.ts` — historia, misión y visión

**Qué se hizo:** se agregaron `companyStory` (título, tres párrafos narrativos y cuatro
hitos), `mission` y `vision`, que se renderizan en `components/our-story.tsx` junto con
una nota sobre el carácter familiar del negocio.

**Por qué:** requisitos 2 y 4.

**Advertencia:** el archivo tiene un `// TODO` explícito en esa sección. El relato es
correcto en tono y estructura, pero está escrito de forma genérica porque no se
recibieron el nombre del fundador, el año exacto de fundación ni los hitos reales. Los
hitos aparecen como "Inicios / Crecimiento / Consolidación / Hoy" en lugar de años.

### `components/site-header.tsx` — Instagram

**Qué se hizo:** se añadió el icono y enlace a Instagram en la barra superior (visible
desde tablet) y una entrada con el `@handle` dentro del menú móvil. El pie de página ya
tenía el enlace desde antes.

**Por qué:** requisito 13.

---

## 3. Bloque B — Imágenes reales y orden antes/después

### `lib/repair-catalog.ts` (archivo nuevo)

**Qué se hizo:** módulo central que lee `public/data/services.json` y construye la
información visual del sitio. Incluye:

- `contentImagePath()`: resuelve el nombre de archivo del JSON a la ruta `/content/…`.
- `capitalizeServiceTitle()`: normaliza el nombre del servicio para mostrarlo como título.
- `repairCategory()`: clasifica cada servicio en una de las categorías de la galería
  (Bolsos, Lavandería, Teñido de tela, Teñido de cuero, Remontas y suelas, Cuellos y
  plantillas, Tacones y tapas, Capelladas y piezas).
- `hasBeforeAfterPair()`: detecta si un par de imágenes es realmente un antes/después
  o si el JSON repite el mismo archivo en ambos campos.
- `buildBeforeAfterCases()` y `buildGalleryItems()`: generan las listas que consumen las
  secciones del sitio, priorizando siempre pares con antes/después real.

**Por qué:** requisito 12 y el pedido de que las imágenes tuvieran su descripción y su
orden antes → después. Antes de este cambio, las listas de la galería y de "Antes y
después" estaban escritas a mano en `lib/site.ts`, con títulos y descripciones inventados
que no siempre correspondían a la foto. Ahora todo sale de una única fuente de verdad y
no puede desincronizarse.

### `lib/site.ts` — sustitución de datos escritos a mano

**Qué se hizo:** se eliminaron los arreglos `beforeAfterCases` (20 casos) y `galleryItems`
(30 ítems) escritos manualmente, reemplazándolos por `buildBeforeAfterCases()` y
`buildGalleryItems()`. Se corrigieron los nombres de `galleryCategories` para que
coincidan con las categorías que produce `repairCategory()` (por ejemplo, "Cuellos y
taloneras" pasó a "Cuellos y plantillas" y "Teñido de ropa" a "Teñido de tela"); con los
nombres antiguos algunos filtros de la galería quedaban vacíos.

Además, en `articleNeeds` se reemplazaron las cinco fotos que estaban duplicadas —el
mismo archivo en `before` y en `after`— por pares reales: `94`, `16`, `24`, `40` y las
demás variantes antes/después.

**Por qué:** requisitos 10 y 12. Daniel señaló textualmente que "todas estas tienen la
misma foto y se ve muy de banco de fotos".

### `public/data/services.json`

**Qué se hizo:** se eliminó una entrada de imagen que repetía el mismo archivo
(`IMG-20260908-WA0371.jpg`) en `antes` y en `despues`.

**Por qué:** ese par no aportaba comparación y ensuciaba el catálogo generado.

### `components/problem.tsx` — la comparación como imagen principal

**Qué se hizo:** la tarjeta de cada caso pasó de mostrar una foto estática del "antes"
a mostrar el `ComparisonSlider` interactivo como imagen principal. La descripción del
JSON y la lista de soluciones quedaron dentro del área desplegable que se abre al hacer
clic.

**Por qué:** petición explícita de reestructuración: la comparación antes/después debía
ser la imagen principal de la tarjeta y, al abrirla, mostrarse la descripción normal.

### `components/comparison-slider.tsx`

**Qué se hizo:** se añadió la prop `className` para poder integrar el comparador dentro
de una tarjeta sin bordes ni sombra propios, y más adelante la prop `priority`
(ver bloque D).

**Por qué:** sin `className` el comparador imponía su propio borde redondeado y rompía
el diseño de la tarjeta.

### `components/before-after.tsx`

**Qué se hizo:** la sección ahora muestra `beforeAfterCases.slice(0, 12)` en lugar de la
lista completa.

**Por qué:** al generarse automáticamente desde el JSON, la lista pasó de 20 a más de 60
casos. Esa sección usa un bloque de ancho completo por caso, así que mostrarlos todos
convertía la página en un scroll interminable.

### `components/hero-visual.tsx` y `components/pickup-delivery.tsx`

**Qué se hizo:** se reemplazaron `/images/hero.png` y `/images/delivery.png` por
fotografías reales de trabajos (`/content/17-despues.jpg` y `/content/49-despues.jpg`),
con textos alternativos que describen el trabajo real.

**Por qué:** requisito 3.

### `app/page.tsx`

**Qué se hizo:** se añadió la sección `<BeforeAfter />` a la página principal.

**Por qué:** la sección existía como componente pero no estaba montada en la home, así
que las comparaciones antes/después no se veían. También se agregaron los enlaces
"Antes y después" y "Galería" en `footerExtraLinks`.

---

## 4. Bloque C — Optimización SEO

### `lib/seo.ts` (archivo nuevo)

**Qué se hizo:** módulo único que concentra la configuración SEO y genera los datos
estructurados:

- `siteUrl`, `siteName`, `defaultTitle`, `defaultDescription`, `primaryKeywords` y
  `servedCities` (los 8 municipios del Área Metropolitana que ya figuran en las FAQ).
- `localBusinessSchema()`: ficha `ShoeStore` con nombre, logo, cuatro fotos reales de
  trabajos, teléfono, rango de precios, dirección, enlace a Google Maps, horarios,
  redes sociales, temas que domina el taller, las ciudades atendidas, las **dos sedes
  como `department`** con su propia dirección y mapa, y el catálogo de los **62
  servicios reales** leídos de `services.json`.
- `websiteSchema()`: ficha `WebSite` en español de Colombia vinculada al negocio.
- `faqSchema()`: las preguntas frecuentes como `FAQPage`.
- `breadcrumbSchema()`: generador de miga de pan para las páginas internas.

**Por qué:** requisito 14. Antes, el schema estaba escrito a mano dentro de
`app/page.tsx`, era mínimo (sin dirección, sin horarios completos, sin sedes) y el
dominio estaba repetido en seis archivos distintos. El bloque `FAQPage` es lo que permite
que Google despliegue las preguntas directamente en los resultados, y `LocalBusiness`
con dirección y horarios es la señal principal para búsquedas locales.

**Decisión deliberada:** no se añadió `aggregateRating` ni schema de reseñas. Pinta
estrellas en los resultados, pero Google penaliza las valoraciones que no están
respaldadas por reseñas verificables y el proyecto no tiene esa fuente de datos.

### `components/json-ld.tsx` (archivo nuevo)

**Qué se hizo:** componente que serializa uno o varios objetos de schema en una etiqueta
`<script type="application/ld+json">`.

**Por qué:** evita repetir el `dangerouslySetInnerHTML` en cada página.

### `app/layout.tsx`

**Qué se hizo:**

- Plantilla de títulos `%s | Arcoiris Zapatería Especializada`, para que cada página
  herede la marca sin repetirla a mano.
- Descripción y palabras clave importadas de `lib/seo.ts`.
- `alternates.languages` con `es-CO` y `x-default`.
- Iconos apuntando a los favicon reales (`favicon.ico`, 48x48 y 512x512) y `apple-icon`.
- Imagen de Open Graph y Twitter cambiada del logo a una **foto real de trabajo
  terminado**, porque es la miniatura que aparece al compartir el enlace por WhatsApp.
- `manifest`, `applicationName`, `category`, `formatDetection`, señales geográficas
  `geo.region: CO-ANT` y `geo.placename: Medellín`.
- Soporte opcional para el token de Google Search Console vía
  `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.

**Por qué:** requisitos 1 y 14. Los iconos declarados son la condición técnica para que
Google muestre el logo junto al resultado de búsqueda.

### `app/page.tsx`

**Qué se hizo:** se sustituyeron los dos bloques de schema escritos a mano por
`<JsonLd data={[localBusinessSchema(), websiteSchema(), faqSchema()]} />`.

### Páginas internas (`oficio`, `garantia`, `privacy`, `tenido-riesgos`)

**Qué se hizo:** los títulos se acortaron para aprovechar la plantilla del layout (ya no
repiten el nombre de la empresa) y se hicieron más descriptivos, por ejemplo "Política de
teñido de cuero y prendas: alcance y riesgos". A cada una se le añadió su
`BreadcrumbList`.

**Por qué:** el breadcrumb es lo que hace que Google muestre "Inicio > Conoce el oficio"
en lugar de la URL cruda.

### `app/sitemap.ts`

**Qué se hizo:** se reordenaron las prioridades (`/oficio` subió de 0.5 a 0.7 por ser la
única página de contenido real), se unificó la fecha de modificación y se añadieron **24
imágenes únicas** de trabajos al sitemap.

**Por qué:** el sitemap de imágenes es lo que permite posicionar en Google Imágenes, una
fuente relevante para un negocio cuyo argumento de venta es visual. Se aplicó
deduplicación porque varios servicios comparten la misma foto y el sitemap repetía URLs.

### `app/robots.ts`

**Qué se hizo:** se añadió la directiva `host` y se pasó a importar el dominio de
`lib/seo.ts`.

### `app/manifest.ts` (archivo nuevo)

**Qué se hizo:** manifest web con nombre, descripción, colores de marca, idioma `es-CO`
e iconos, incluido uno `maskable`.

**Por qué:** mejora la experiencia en móvil y es una señal de calidad que evalúan las
auditorías tipo Lighthouse.

### `components/hero.tsx` — el H1

**Qué se hizo:** el `<h1>` conserva el eslogan de marca "Damos nueva vida a tus
favoritos" y ahora incluye, debajo y en menor tamaño, la frase que la gente realmente
busca: "Reparación y restauración de calzado, tenis, bolsos y artículos de cuero en
Medellín".

**Por qué:** el H1 es una de las señales más fuertes de la página y antes no contenía
ninguna palabra clave ni la ciudad. Se mantuvo la frase de marca para no perder identidad.

### `components/gallery.tsx` y `components/problem.tsx` — textos alternativos

**Qué se hizo:** los `alt` pasaron de ser solo el título a incluir el servicio, la
categoría y la ciudad. Por ejemplo: "Cambio de capellada — Capelladas y piezas realizado
en Arcoiris Zapatería Especializada, Medellín".

**Por qué:** es el texto que Google usa para entender e indexar cada imagen, y también lo
que leen los lectores de pantalla.

### `.env.example` (archivo nuevo)

**Qué se hizo:** documenta `NEXT_PUBLIC_SITE_URL` y
`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.

**Por qué:** el dominio se usa en canonical, Open Graph, sitemap y robots. Si se despliega
con el valor equivocado, todas esas señales apuntan a un sitio que no existe.

---

## 5. Bloque D — Correcciones técnicas

Estos cambios no venían en la lista de requisitos, pero sin ellos el proyecto no
compilaba ni se podía revisar en el navegador.

### `scripts/patch-next-codeframe.cjs` (archivo nuevo) y `package.json`

**Problema:** en este equipo, el binario nativo `@next/swc-win32-x64-msvc` no carga
("is not a valid Win32 application"), así que Next recurre a las bindings WASM. Esa ruta
rechaza `color: true` al formatear errores y exige el enum `CodeFrameColorMode`. El
resultado era que **cualquier error de compilación se convertía en un
`unhandledRejection` y la página devolvía HTTP 500**, ocultando el error real.

**Solución:** un script que reescribe `code-frame.js` (versiones CJS y ESM) de
`node_modules/next` para no pasar el booleano y para devolver `undefined` si el formateo
falla. Se conectó a los scripts `dev`, `build` y `postinstall` de `package.json`, de modo
que se reaplique después de cada `npm install`.

### `package.json` — Turbopack

**Problema:** `next build` fallaba con "Turbopack is not supported on this platform".

**Solución:** `dev` y `build` ahora usan `--webpack`.

### `components/hero-visual.tsx` — error de hidratación

**Problema:** el estado `videoAvailable` empezaba en `true`, por lo que el servidor
renderizaba el `<video>` y el cliente podía renderizar la imagen, generando una
discrepancia de hidratación.

**Solución:** el estado pasó a llamarse `showVideo` y arranca en `false`. Servidor y
cliente coinciden siempre en la imagen y el vídeo se activa después, en un efecto, solo
si el usuario no pidió reducir el movimiento.

### `components/comparison-slider.tsx` y `components/problem.tsx` — LCP

**Qué se hizo:** se añadió la prop `priority`, aplicada únicamente a la primera tarjeta
(`i === 0`).

**Por qué:** Next avisaba de que una imagen sobre el pliegue se estaba cargando de forma
diferida, lo que empeora el Largest Contentful Paint, una de las Core Web Vitals que
Google usa como factor de posicionamiento.

---

## 6. Bloque E — Limpieza de fotos de banco

Auditando el requisito 3 se detectó que, aunque **ninguna foto de banco se mostraba ya en
el sitio**, los archivos seguían en el repositorio y se publicaban en cada despliegue.

**Qué se eliminó:**

- `public/images/` completa: 19 archivos, 23,6 MB (`hero.png`, `delivery.png`,
  `gallery-1..6.png`, `service-*.png`, `ba-*-before/after.png`). Ninguno estaba
  referenciado por el código.
- `components/auto-showcase.tsx`: componente que no se montaba en ninguna página y que
  era la última referencia a las imágenes `ba-*`.
- La interfaz `Service` y el arreglo `services` de `lib/site.ts` (11 entradas que
  apuntaban a `/images/service-*.png`). Quedaron sin uso cuando `components/services.tsx`
  pasó a leer `services.json` y cuando el schema dejó de leerlos.

**Resultado:** el export de producción bajó de unos 74 MB a 50,4 MB y no queda ninguna
referencia a `/images/` en el código.

---

## 7. Inventario de archivos

**Nuevos:** `lib/repair-catalog.ts`, `lib/seo.ts`, `components/json-ld.tsx`,
`app/manifest.ts`, `scripts/patch-next-codeframe.cjs`, `.env.example`,
`Documentación/cambios-realizados.md`.

**Modificados:** `app/layout.tsx`, `app/page.tsx`, `app/sitemap.ts`, `app/robots.ts`,
`app/oficio/page.tsx`, `app/garantia/page.tsx`, `app/privacy/page.tsx`,
`app/tenido-riesgos/page.tsx`, `components/problem.tsx`,
`components/comparison-slider.tsx`, `components/before-after.tsx`,
`components/gallery.tsx`, `components/hero.tsx`, `components/hero-visual.tsx`,
`components/pickup-delivery.tsx`, `components/site-header.tsx`, `lib/site.ts`,
`public/data/services.json`, `package.json`.

**Eliminados:** `public/images/` (19 archivos), `components/auto-showcase.tsx`.

---

## 8. Verificaciones realizadas

- `npm run build` completa correctamente y exporta 9 rutas estáticas.
- Las 5 páginas responden HTTP 200, igual que `sitemap.xml`, `robots.txt` y
  `manifest.webmanifest`.
- El `sitemap.xml` exportado es XML válido: 5 URLs y 24 imágenes sin duplicados.
- El JSON-LD de la home es JSON válido y contiene los 3 bloques esperados
  (`ShoeStore`, `WebSite`, `FAQPage`), con 62 servicios y 5 preguntas frecuentes.
- Las 4 páginas internas contienen su `BreadcrumbList` con la ruta "Inicio > …".
- La home tiene exactamente un `<h1>` y el canonical correcto.
- Sin errores de linter y sin errores en el servidor de desarrollo.

Nota: el aviso de hidratación que aparece al inspeccionar con el navegador integrado de
Cursor lo provoca la propia herramienta, que inyecta atributos `data-cursor-ref` en el
DOM. No es un problema de la aplicación.

---

## 9. Pendientes que dependen del cliente

1. **Historia real de la empresa.** Hacen falta año de fundación, nombre del fundador y
   los hitos con sus fechas para reemplazar el `TODO` de `companyStory`.
2. **Verificar el usuario de Instagram y Facebook.** El código usa
   `@arcoiris_zapateria` y `facebook.com/arcoiriszapateriamedellin`. Si no son los
   perfiles reales, hay que corregirlos en `lib/site.ts`: alimentan los enlaces del
   encabezado, el pie y el campo `sameAs` de los datos estructurados.
3. **Dominio definitivo.** Hoy se asume `https://arcoiriszapateria.com`. Debe fijarse en
   `NEXT_PUBLIC_SITE_URL`.
4. **Perfil de Empresa en Google** con las dos sedes: es el factor más importante para
   búsquedas locales y no se puede resolver desde el código.
5. **Google Search Console:** verificar el dominio y enviar el sitemap.
6. **Cabeceras de seguridad.** Las de `next.config.mjs` no se aplican con
   `output: "export"`; Next lo advierte en cada build. Deben configurarse en el hosting.
7. **Feed de Instagram embebido**, si lo que se quería con el requisito 13 era mostrar
   las publicaciones dentro de la web y no solo enlazar al perfil.
