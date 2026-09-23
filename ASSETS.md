# Inventario de recursos gráficos

Fecha de descarga: 23 de septiembre de 2026.

## Logotipo

| Archivo | Origen | Estado |
|---|---|---|
| `assets/img/logo.png` | Archivo proporcionado por el usuario (`Imagen de Codex 23 sept 2026, 01_20_07 p.m..png`), coincide con el logo publicado en Booksy e Instagram | Propio confirmado — sin redibujar ni deformar |
| `assets/img/logo-transparent.png` | Misma imagen anterior con el fondo blanco convertido a transparente (umbral de color, sin redibujar el trazo) para integrarse sobre fondos claros en cabecera/pie | Propio confirmado — derivado técnico del original |
| `assets/img/logo-mark.png` | Recorte del monograma "sl" de la misma imagen, también con fondo transparente, usado como icono de marca junto al nombre en texto real (HTML) en la cabecera | Propio confirmado — derivado técnico del original |

## Foto del local

| Archivo | Origen | Estado |
|---|---|---|
| `assets/img/portada.png` | Proporcionada por el usuario el 23/09/2026; según indica, la rescató del perfil de Google (Google Business) del negocio | Propio confirmado — foto real del interior del estudio (dos puestos de trabajo, espejos, cartel de pared con el monograma "sl"). **Aún no incorporada al sitio**: se reserva para `estudio.html`, ya que muestra el espacio pero no trabajos de uñas, por lo que no encajaba como imagen de portada/hero según el criterio de que el hero muestre el producto (manicuras) |

## Fotografías de trabajos (portfolio)

Todas proceden del CDN público de fotos de Booksy (`d375139ucebi94.cloudfront.net`), vinculado al perfil verificado del negocio (`booksy.com/.../23381_sindyleonnailsdesign_...`). Se conservan sin marca de agua porque Booksy no la aplica a estas fotos; no se ha eliminado ninguna atribución. Guardadas en `assets/img/portfolio/` a partir de la miniatura pública `size=640x0` del propio Booksy.

| Archivo | Descripción visual (verificada al abrir la imagen) | Categoría usada en la web | Estado |
|---|---|---|---|
| `nail-01.jpg` | Foto de portada del perfil (logotipo, no es un trabajo) | — (no se usa en galería) | Propio confirmado |
| `nail-02.jpg` | Francesa blanca con flor dorada 3D y pedrería, mano morena | Francesa, floral, línea dorada | Propio confirmado |
| `nail-03.jpg` | Uñas almendradas nude con lunares y flores negras sobre blanco | Color y diseño | Propio confirmado |
| `nail-05.jpg` | Francesa animal print (leopardo) sobre base nude, mano con tatuajes finos | Color y diseño | Propio confirmado |
| `nail-06.jpg` | Uñas rosa pastel con mariposas pintadas a mano | Color y diseño | Propio confirmado |
| `nail-07.jpg` | Base nude natural con pedrería multicolor dispersa | Color y diseño | Propio confirmado |
| `nail-09.jpg` | Francesa blanca fina con margaritas 3D, mano sobre vaquero | Francesa, floral | Propio confirmado |
| `nail-10.jpg` | Uñas cuadradas lila y nude con lunares blancos/lila | Color y diseño | Propio confirmado |
| `nail-12.jpg` | Francesa con contorno dorado y flores blancas 3D | Francesa, floral, línea dorada | Propio confirmado |
| `nail-15.jpg` | Base verde salvia con line-art dorado (soles, líneas geométricas) | Línea dorada | Propio confirmado |
| `nail-17.jpg` | Francesa fina con lunares azules y arándanos pintados | Francesa | Propio confirmado |
| `nail-20.jpg` | Diseño temático (telarañas, estrellas) en rojo, negro y azul | Color y diseño | Propio confirmado |
| `nail-22.jpg` | Base rosa clara con estrellas foil rosa metalizado | Color y diseño | Propio confirmado |
| `nail-25.jpg` | Diseño muy elaborado multicolor (rombos, lunares, carita) | Color y diseño | Propio confirmado |
| `nail-28.jpg` | Francesa verde menta con contorno dorado y margaritas | Francesa, floral, línea dorada | Propio confirmado |
| `nail-04.jpg` | Animal print con acento burdeos y estrellas de perla, fondo gris neutro | Color y diseño · cabecera de "Servicios" | Propio confirmado |
| `nail-13.jpg` | Animal print marrón oscuro con charm plateado en forma de estrella | Color y diseño | Propio confirmado |
| `nail-21.jpg` | Francesa azul pastel con flores blancas 3D y anillo dorado | Francesa, floral · cabecera de "Contacto" | Propio confirmado |
| `nail-27.jpg` | Francesa azul eléctrico con lunares y flor dorada 3D | Francesa, floral, línea dorada | Propio confirmado |
| `nail-08.jpg` | Manos recibiendo manicura francesa sobre superficie clara tipo mesa de trabajo | Cabecera de "El estudio" | Propio confirmado |
| `nail-14.jpg` | Uñas lila con acento floral en la uña anular | Color y diseño · cabecera de grupo "Semipermanente" en Servicios | Propio confirmado |
| `nail-16.jpg` | Uñas lila claro con lunares negros y mariposa en línea | Color y diseño | Propio confirmado |
| `nail-19.jpg` | Francesa marina con lunares azules y estrellas de mar | Francesa · cabecera de grupo "Manicura y pedicura" en Servicios | Propio confirmado |
| `nail-23.jpg` | Base burdeos con flores pintadas a mano y pedrería dorada | Color y diseño | Propio confirmado |
| `nail-26.jpg` | Diseño marino muy elaborado con flores 3D, conchas y pedrería dorada | Floral, color · cabecera de grupo "Decoración" en Servicios y del bloque "Color y diseño" en Diseños | Propio confirmado |
| `nail-30.jpg` | Francesa azul pastel con margaritas pintadas a mano | Francesa, floral | Propio confirmado |
| `nail-24.jpg` | Diseño muy colorido con estrellas, rombos y pedrería sobre varios tonos pastel | Tira de galería en el inicio | Propio confirmado |
| `nail-11.jpg`, `nail-18.jpg` | Muestran el rostro de la clienta además de las uñas | Excluidas deliberadamente por privacidad de las clientas, aunque son fotos públicas del propio negocio | No usadas |
| `nail-29.jpg` | Descargada del mismo álbum público pero no revisada individualmente | No usada | Pendiente de revisión antes de publicar |

### Portada (inicio) — ampliación

La portada (`index.html`) se amplió a partir del feedback de que resultaba demasiado escueta para ser la primera pantalla que ve una visitante. Se añadió, siempre con material propio (ninguna imagen de banco):

- Una foto "polaroid" acento en el hero (`nail-15.jpg`), rotada, solo visible en escritorio.
- Una franja de cifras reales (valoración, reseñas, seguidoras de Instagram, tamaño del equipo — todas verificadas en RESEARCH.md).
- Una sección "Quiénes somos" con foto (`nail-08.jpg`) y texto ampliado, incluida la frase real de la biografía de Instagram como cita destacada.
- Una tira de 6 fotos del portfolio (`nail-02`, `nail-26`, `nail-05`, `nail-23`, `nail-24`, `nail-28`) que enlaza a la galería completa.
- Tres reseñas reales citadas literalmente de Booksy, con nombre de la clienta, servicio y persona del equipo mencionada (Teri/Milena, Nayara Suárez/Milena, Idaira/Sheila) — mismos datos ya documentados en `RESEARCH.md`.
- Un CTA final a pantalla completa con foto (`nail-21.jpg`) antes del pie.

### Cabeceras de sección (banners)

Para dar a cada apartado (Diseños, Servicios, El estudio, Contacto) una imagen de cabecera propia y relevante, se reutilizan cuatro fotos ya verificadas del portfolio (mismos archivos, copiados con nombre descriptivo, sin editar el contenido):

| Archivo | Foto de origen | Apartado |
|---|---|---|
| `banner-disenos.jpg` | `nail-15.jpg` | Diseños |
| `banner-servicios.jpg` | `nail-04.jpg` | Servicios |
| `banner-estudio.jpg` | `nail-08.jpg` | El estudio |
| `banner-contacto.jpg` | `nail-21.jpg` | Contacto |

No hizo falta recurrir a fotografía de stock para estas cabeceras: el volumen de material propio en Booksy fue suficiente.

## Fotografías de stock

No se ha usado ninguna fotografía de stock: el volumen de material propio disponible en Booksy fue suficiente para construir la galería y el hero.

## Pendiente de autorización

Antes de llevar esta demo a producción, Sindy debe confirmar que autoriza el uso de estas fotografías de Booksy (son su propio contenido, pero conviene su visto bueno explícito) y, si lo desea, sustituirlas por exportaciones en mayor resolución desde su cuenta.
