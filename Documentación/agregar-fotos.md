# Cómo agregar fotos de reparaciones

Este es el flujo para que el administrador (o quien reciba fotos del taller) las publique en la web **sin tocar el código**.

## Dónde viven las fotos

- Archivos: `public/content/`
- Catálogo: `public/data/services.json`

La galería, el «Antes y después», el carrusel, las tarjetas de servicios y las páginas `/servicios/...` leen esos dos sitios. Si una foto no está en el JSON, no aparece.

## Cómo agregar una foto a un servicio que ya existe

1. Copia los archivos a `public/content/`.
   - Usa nombres claros: `cambio-de-cierre-antes.jpg` y `cambio-de-cierre-despues.jpg`.
   - El par debe ser **dos archivos distintos**. Si `antes` y `despues` apuntan al mismo archivo, esa foto no entra en las comparaciones.
2. Abre `public/data/services.json`.
3. Busca el objeto cuyo `"servicio"` coincida (por ejemplo `"cambio de cierre"`).
4. Dentro de `"imagenes"` agrega un objeto:

```json
{
  "antes": "cambio-de-cierre-antes.jpg",
  "despues": "cambio-de-cierre-despues.jpg"
}
```

5. Guarda el archivo. En desarrollo recarga la página; en producción vuelve a generar el sitio (`npm run build`) y publica la carpeta `out/`.

## Cómo crear un servicio nuevo

Agrega un objeto al arreglo de `services.json`:

```json
{
  "servicio": "cambio de asa de morral",
  "description": "Fabricamos o adaptamos una asa nueva considerando espesor, color, ancho, largo y sistema de fijación.",
  "imagenes": [
    {
      "antes": "asa-morral-antes.jpg",
      "despues": "asa-morral-despues.jpg"
    }
  ]
}
```

La categoría (Bolsos, Remontas y suelas, Lavandería, etc.) se asigna sola a partir del nombre del servicio. Si el nombre incluye «bolso» o «morral» irá a Bolsos; si incluye «teñido» y «tela» o «jean», a Teñido de tela.

## Cómo aparece cada foto en la web

| Superficie | Qué usa |
|---|---|
| Galería (`/#galeria`) | La foto **después** de cada servicio |
| Antes y después (`/#antes-despues`) | El primer par distinto de cada servicio |
| Carrusel 3D | Las 12 primeras fotos de la galería |
| Tarjetas de `/#servicios` | Todos los pares del servicio |
| Páginas `/servicios/...` | Hasta 4 casos de la categoría de esa página |

## Buenas prácticas

- Fotos reales del taller. Nada de bancos de imágenes.
- El **antes** a la izquierda, el **después** a la derecha, mismo encuadre si es posible.
- Si solo tienes el resultado, pon el mismo archivo en `antes` y `despues`: se verá en la galería, pero no en las comparaciones.
- No renombres archivos que ya están publicados: rompes enlaces de Google Imágenes y del sitemap.

Si una reparación nueva no encaja en las categorías actuales, avisa al desarrollador para ajustar `repairCategory()` en `lib/repair-catalog.ts`.
