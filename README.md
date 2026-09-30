English | [Leer en español](README.es.md)

# Noble Motors

A responsive website for presenting luxury vehicles, automotive services, and purchase or rental information.

Developed as part of the Front-End Development program at EBAC to practice semantic HTML, responsive styling with Sass, JavaScript interactions, and version control.

**Live demo:** [Noble Motors](https://noblemotors.netlify.app/)

## Features

- Homepage with featured vehicles, specifications, prices, and availability information.
- A separate vehicle catalog with comparison tables.
- Promotional video and audio with playback controls.
- A quotation form with required fields and browser validation.
- A navigation panel that opens and closes from the homepage.
- A homepage shopping cart that allows adding vehicles and removing items.
- A cart counter that updates when items change.
- Keyboard support for closing the navigation and cart panels with Escape.
- Responsive layouts and styles that adapt to the browser's preferred color scheme.

## Technologies

- **HTML5:** semantic structure, forms, tables, and multimedia.
- **CSS3:** page layout, responsive styling, and visual presentation.
- **Sass (SCSS):** source styles compiled into CSS.
- **JavaScript:** navigation panels, cart interactions, and item counters.
- **Git and GitHub:** version control and repository management.
- **VS Code and Live Sass Compiler:** editing and compiling SCSS styles.

## Getting started

### Requirements

- A web browser.
- Git installed to clone the repository.

### Installation and usage

1. Clone the repository and open its folder:

```bash
git clone https://github.com/Y4E1-png/EBAC-Practica-Git.git
cd EBAC-Practica-Git
```

2. Open `index.html` in your browser.

3. Use the navigation links to explore the homepage and vehicle catalog.

The compiled CSS is already included in the repository, so no dependency installation or compilation is required to view the website.

Keep the project folders together so that the relative paths to styles, scripts, images, and multimedia remain valid.

## Usage example

The website interface is in Spanish.

1. Browse the featured vehicles on the homepage.
2. Click **AGREGAR AL CARRITO** on a vehicle card.
3. Open the cart using the cart icon in the header.
4. Remove an item using its delete button and observe the updated counter.
5. Press **Escape** to close the cart or navigation panel.
6. Click **Ver Catalogo** to explore the full vehicle catalog.
7. Click **Solicitar cotización** to return to the quotation form.

The quotation form includes contact information, operation type, vehicle model, budget, and preferred contact options.

## Editing the styles

The source styles are located in `sass/styles.scss`. Both HTML pages load the compiled file `css/styles.css`.

To work with the SCSS styles:

1. Open the project folder in VS Code.
2. Install the **Live Sass Compiler** extension if it is not already available.
3. Open `sass/styles.scss`.
4. Click **Watch Sass** in the status bar.
5. Edit and save the SCSS file.
6. Reload the browser to view the updated styles.

The configuration in `.vscode/settings.json` saves the compiled CSS in the `css` folder.

## Current scope

- Vehicle information, prices, and availability are defined directly in the HTML.
- The cart includes demonstration items. Changes to its contents reset when the homepage is reloaded.
- The quotation form demonstrates the interface and browser validation. It is not connected to a backend or email service.
- The **Buy** button is a demonstration control; checkout and payment processing are not implemented.

## Project structure

```text
EBAC-Practica-Git/
├── .vscode/
│   └── settings.json  Live Sass Compiler configuration
├── JS/
│   └── functions.js   Navigation and cart interactions
├── assets/            Video and audio files
├── css/
│   └── styles.css     Compiled styles
├── img/               Vehicle images, logos, and icons
├── sass/
│   └── styles.scss    Source styles
├── catalogo.html      Vehicle catalog
├── index.html         Homepage
└── README.md          Project documentation
```

## Author

Developed by **Yael Aguilar** as part of the Front-End Development program at EBAC.

[GitHub profile](https://github.com/Y4E1-png)
