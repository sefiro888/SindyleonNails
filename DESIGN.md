# Concepto de diseño — Sindy León Nails Design

## Idea creativa

Un sitio editorial de varias páginas que funciona como un pequeño "portfolio de estudio": mucho blanco, tipografía serif elegante para los títulos (herencia del logotipo), y la fotografía real de las manos como protagonista absoluta. El trazo de la firma manuscrita del logo ("sl") se convierte en un recurso gráfico recurrente —una línea fina y suelta que aparece como divisor y como detalle de acento—, dando personalidad artística sin caer en decoración gratuita.

Cada uno de los cuatro apartados (Diseños, Servicios, El estudio, Contacto) es ahora una página propia (`disenos.html`, `servicios.html`, `estudio.html`, `contacto.html`), con su propia cabecera fotográfica a pantalla completa, su propio desarrollo de texto e imágenes, y su propia llamada a la acción — en vez de ser tramos de una única página larga. `index.html` queda como portada: hero, banner en movimiento, presentación breve y cuatro tarjetas de acceso ("Explora") que enlazan a cada página.

## Perfil de clienta (inferido de Instagram/Booksy, no inventado)

Mujer de Vecindario y alrededores (Santa Lucía de Tirajana), consulta principalmente desde el móvil, busca diseños elaborados (florales, baby boomer, animal print, líneas doradas) más que un servicio básico, valora el trato cercano y detallista que repiten las reseñas, y reserva por Booksy o WhatsApp en lugar de llamar.

## Paleta — extraída por muestreo de píxeles del logo real y del portfolio

| Token | Hex | Origen |
|---|---|---|
| `--ink` | `#141414` | Negro de la firma manuscrita del logo (muestreado en `#0E0E0E`, suavizado a `#141414` para que no sea un negro puro sobre papel cálido) |
| `--slate` | `#6B7075` | Gris-azulado del wordmark "SINDY LEÓN" (muestreado en `#75797D`, ajustado levemente para contraste AA) |
| `--mist` | `#E4E4E3` | Gris claro del trazo/pincelada del logo (muestreado en `#DADBDC`) |
| `--paper` | `#FBF9F6` | Blanco cálido de fondo (el logo usa blanco puro; se calienta ligeramente para que las fotos de piel no choquen contra un blanco frío) |
| `--gold` | `#AD8563` | Acento cálido, muestreado directamente de las líneas doradas y pedrería que se repiten en múltiples diseños del portfolio (no es un dorado genérico de plantilla) |
| `--white` | `#FFFFFF` | Tarjetas y superficies elevadas |

El gris-azulado del logo se mantiene como color estructural (texto, bordes, iconos); el dorado se reserva como acento puntual (enlaces activos, subrayado de la firma, hover de botones secundarios) porque aparece de forma recurrente en el trabajo real del salón (líneas finas doradas, pedrería, contornos en francesas) y evita el cliché rosa+dorado saturado.

## Tipografía

- **Titulares:** serif editorial con contraste alto, en la línea de la que usa el logotipo ("SINDY LEÓN") — se usa `"Cormorant Garamond"` (Google Fonts) por su parecido y legibilidad en pantalla, con tracking amplio en mayúsculas para los eyebrows.
- **Texto y UI:** sans-serif neutra y muy legible — `"Inter"` (Google Fonts), pesos 400/500/600.
- Alternativas seguras si las fuentes no cargan: `Georgia` (titulares) y `system-ui` (texto).

## Tratamiento fotográfico

- Fotografías del portfolio real de Booksy (mismo negocio, confirmadas), recortadas en formato retrato/cuadrado según la composición original, sin filtros que alteren el color de piel o del esmalte.
- Se evita mezclar con stock: no ha hecho falta, hay suficiente material propio.
- Recorte de galería en mosaico irregular (no todo cuadrado) para dar ritmo editorial; al pulsar, visor ampliado sin recortar.

## Componentes y jerarquía

1. **Barra superior**, presente en las cinco páginas: franja oscura fina con un indicador de "Abierto ahora / Cerrado ahora" (círculo verde con pulso o rojo, primero en la barra para que sea visible sin hacer scroll en móvil), dirección, teléfono y valoración de Booksy — inspirada en la referencia `maviestudio` que el usuario señaló como el estilo de cabecera que prefería. El indicador se recalcula en cada carga con la hora real de Canarias (`Intl.DateTimeFormat` con `timeZone: "Atlantic/Canary"`, no la zona horaria del navegador de quien visita) contra el horario verificado en Booksy; en `contacto.html` se repite en versión grande justo encima de la tabla de horario.
2. **Header** fijo: monograma "sl" (versión del logo con fondo transparente) + nombre en texto real (tipografía serif), no la imagen completa del logo — así se integra con nitidez a cualquier tamaño en vez de verse como una pegatina blanca. La navegación marca con `aria-current="page"` en qué página está la persona.
3. **`index.html` (portada)**: hero de foto completa a sangre (sin recorte orgánico — se probó y se descartó por feedback), con cuatro fotos reales rotando en crossfade: `portada.png` (interior real del estudio) primero, seguida de tres manicuras HD aportadas por el usuario. Velo degradado oscuro (vertical + horizontal) para legibilidad en cualquier foto activa. Texto: etiqueta de ubicación, titular, una línea en cursiva dorada a modo de eslogan (la frase real de la bio de Instagram), párrafo corto, dos CTA y una línea de cifras en texto simple (valoración, equipo, ubicación) — todo en blanco. Debajo: banner en movimiento, presentación ampliada "quiénes somos", cuadrícula "Explora", tira de galería (actualizada con las fotos HD nuevas), reseñas reales y CTA final.
4. **`disenos.html`**: cabecera de página a pantalla completa, cuatro bloques editoriales (foto + texto alternados) que explican cada técnica —francesa/baby boomer, floral 3D, línea dorada, color y diseño—, y debajo la galería completa filtrable con visor ampliado (28 fotos, incluidas las 6 HD nuevas).
5. **`servicios.html`**: cabecera de página, y el catálogo agrupado en cinco bloques editoriales (acrílicas, kapping, semipermanente, manicura y pedicura, decoración), cada uno con su propia foto real y texto de contexto antes de las tarjetas de precio/duración.
6. **`estudio.html`**: cabecera con la foto real del interior (`portada.png`), tarjetas de equipo con una cita real y verificada de una reseña de Booksy por cada persona, tira de fotos adicional del portfolio, tarjetas de comodidades/valoración del local (incluida la cifra de Google, documentada aparte de la de Booksy), una sección de la línea de esmaltes propia, los 5 consejos "antes de tu cita" recuperados de Instagram, la imagen de marca "la terapia y el chisme son gratis", y una sección de enlaces a Instagram (perfil + las dos publicaciones comentadas por el usuario) a modo de "reels destacados" sin incrustar vídeo de terceros.
7. **`contacto.html`**: cabecera de página, tarjetas rápidas (dirección, teléfono, Instagram, Booksy), horario completo, mapa embebido y una sección de tarjeta regalo con el texto real de Instagram y la foto de la tarjeta física.
7. **Barra CTA fija en móvil** (Booksy + WhatsApp) presente en las cinco páginas, sin tapar contenido.

### Imágenes de cabecera por página

No hizo falta recurrir a banco de imágenes: el propio portfolio de Booksy tenía material suficiente y adecuado para cada página, y además para los bloques editoriales internos de Diseños y Servicios.

| Página | Foto de cabecera | Por qué encaja |
|---|---|---|
| Inicio (hero) | Francesa con contorno dorado y flores blancas 3D (`nail-12.jpg`) | Buena luz, encuadre cuadrado con el tercio superior izquierdo prácticamente liso (piel/fondo desenfocado) — permite integrar el titular y los botones sin tapar ni una sola uña; es además la foto más repetida del sitio como imagen de marca |
| Diseños | Base verde salvia con line-art dorado (`nail-15.jpg`) | La pieza más artística del portfolio, resume el nivel de detalle de la galería que presenta |
| Servicios | Animal print con estrellas de perla sobre fondo neutro (`nail-04.jpg`) | Composición despejada que deja espacio de lectura para el título, sin ser un diseño ya mostrado en la galería |
| El estudio | Manos recibiendo una manicura francesa sobre superficie clara (`nail-08.jpg`) | Es la única foto del álbum que muestra el proceso/trato en curso, no solo el resultado — encaja con "cuidado por el detalle" |
| Contacto | Francesa azul pastel con anillo y flores 3D (`nail-21.jpg`) | Tono cercano y cálido, apropiado para el cierre de "te esperamos" |

## Qué hace que el concepto se sienta propio del negocio

La paleta sale literalmente del archivo del logo y de las fotos reales de sus trabajos, no de una plantilla; el copy usa la frase de su propia biografía de Instagram; la galería está organizada según las técnicas que de verdad publican (francesa, baby boomer, floral, animal print, line art dorado); y el horario, precios, equipo y valoración son los datos reales verificados el mismo día, con Booksy como fuente de la verdad para el catálogo completo.
