[Read in English](README.md) | Español

# Noble Motors

Sitio web con diseño responsivo para presentar vehículos de lujo, servicios automotrices e información de compra y renta.

Desarrollado como parte del programa de Desarrollo Front-End de EBAC para practicar HTML semántico, estilos responsivos con Sass, interacciones con JavaScript y control de versiones.

**Sitio publicado:** [Noble Motors](https://noblemotors.netlify.app/)

## Funcionalidades

- Página de inicio con vehículos destacados, especificaciones, precios e información de disponibilidad.
- Catálogo de vehículos en una página independiente con tablas comparativas.
- Video promocional y audio con controles de reproducción.
- Formulario de cotización con campos obligatorios y validación del navegador.
- Panel de navegación que se abre y cierra desde la página de inicio.
- Carrito en la página de inicio que permite agregar vehículos y eliminar artículos.
- Contador del carrito que se actualiza cuando cambian sus artículos.
- Cierre de los paneles de navegación y carrito mediante la tecla Escape.
- Diseño responsivo y estilos que se adaptan al esquema de color preferido del navegador.

## Tecnologías

- **HTML5:** estructura semántica, formularios, tablas y contenido multimedia.
- **CSS3:** distribución de las páginas, estilos responsivos y presentación visual.
- **Sass (SCSS):** estilos fuente que se compilan a CSS.
- **JavaScript:** paneles de navegación, interacciones del carrito y contador de artículos.
- **Git y GitHub:** control de versiones y administración del repositorio.
- **VS Code y Live Sass Compiler:** edición y compilación de estilos SCSS.

## Cómo ejecutar el proyecto

### Requisitos

- Un navegador web.
- Git instalado para clonar el repositorio.

### Instalación y uso

1. Clona el repositorio y abre su carpeta:

```bash
git clone https://github.com/Y4E1-png/EBAC-Practica-Git.git
cd EBAC-Practica-Git
```

2. Abre `index.html` en el navegador.

3. Utiliza los enlaces de navegación para explorar la página de inicio y el catálogo de vehículos.

El CSS compilado ya está incluido en el repositorio, por lo que no es necesario instalar dependencias ni compilar los estilos para visualizar el sitio.

Mantén juntas las carpetas del proyecto para conservar las rutas relativas de los estilos, scripts, imágenes y archivos multimedia.

## Ejemplo de uso

La interfaz del sitio está en español.

1. Explora los vehículos destacados en la página de inicio.
2. Presiona **AGREGAR AL CARRITO** en la tarjeta de un vehículo.
3. Abre el carrito mediante su icono en el encabezado.
4. Elimina un artículo con su botón de eliminación y observa cómo se actualiza el contador.
5. Presiona **Escape** para cerrar el panel del carrito o de navegación.
6. Presiona **Ver Catalogo** para explorar el catálogo completo de vehículos.
7. Presiona **Solicitar cotización** para regresar al formulario de cotización.

El formulario incluye información de contacto, tipo de operación, modelo de vehículo, presupuesto y preferencias de contacto.

## Modificación de los estilos

Los estilos fuente se encuentran en `sass/styles.scss`. Ambas páginas HTML cargan el archivo compilado `css/styles.css`.

Para trabajar con los estilos SCSS:

1. Abre la carpeta del proyecto en VS Code.
2. Instala la extensión **Live Sass Compiler** si todavía no está disponible.
3. Abre `sass/styles.scss`.
4. Presiona **Watch Sass** en la barra de estado.
5. Modifica y guarda el archivo SCSS.
6. Recarga el navegador para visualizar los estilos actualizados.

La configuración de `.vscode/settings.json` guarda el CSS compilado en la carpeta `css`.

## Alcance actual

- La información de los vehículos, sus precios y disponibilidad se define directamente en el HTML.
- El carrito incluye artículos de demostración. Los cambios en su contenido se restablecen al recargar la página de inicio.
- El formulario de cotización demuestra la interfaz y la validación del navegador. No está conectado a un backend ni a un servicio de correo electrónico.
- El botón **Buy** es un control de demostración; no están implementados el proceso de compra ni el procesamiento de pagos.

## Estructura del proyecto

```text
EBAC-Practica-Git/
├── .vscode/
│   └── settings.json  Configuración de Live Sass Compiler
├── JS/
│   └── functions.js   Interacciones de navegación y carrito
├── assets/            Archivos de video y audio
├── css/
│   └── styles.css     Estilos compilados
├── img/               Imágenes de vehículos, logos e iconos
├── sass/
│   └── styles.scss    Estilos fuente
├── catalogo.html      Catálogo de vehículos
├── index.html         Página de inicio
└── README.md          Documentación del proyecto
```

## Autor

Desarrollado por **Yael Aguilar** como parte del programa de Desarrollo Front-End de EBAC.

[Perfil de GitHub](https://github.com/Y4E1-png)
