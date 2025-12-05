# 🦖 INGEN STORE - E-commerce Front-End

> Proyecto de maquetación web para una tienda temática de Jurassic Park, desarrollado como parte del curso "Desarrollo de Aplicaciones Front-End Trainee V2.0" (Sence).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## 📖 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una interfaz de usuario (Front-End) para un e-commerce ficticio llamado **INGEN STORE**. El objetivo principal fue crear una experiencia de usuario inmersiva, aplicando conceptos de diseño moderno, maquetación responsive y buenas prácticas de código.

El sitio comenzó con una base estructural estándar y evolucionó a través de iteraciones de diseño hasta lograr una identidad visual única inspirada en la franquicia *Jurassic Park*, con un enfoque industrial y moderno.

[Vista Principal del Home](assets/screenshot-home.png)

## 🚀 Características Principales

*   **Diseño Temático:** Paleta de colores personalizada (Jurassic Red, Industrial Grey, Deep Green) y tipografías de impacto (`Anton` y `Inter`).
*   **Navegación Intuitiva:** Barra de navegación `sticky` (fija) con fondo sólido para mejorar la legibilidad al hacer scroll.
*   **Hero Section Imponente:** Banner principal de alto impacto visual (Full Height) con texturas y tipografía con sombras.
*   **Catálogo de Productos:** Tarjetas de producto diseñadas con Flexbox, alineación estratégica de precios y botones de llamada a la acción (CTA).
*   **Ficha de Producto (PDP):** Página de detalle (`producto.html`) con:
    *   Galería de imágenes funcional controlada por miniaturas (Bootstrap Carousel + JS).
    *   Selectores de talla y color visuales.
    *   Migas de pan (Breadcrumbs) para la navegación.

## 🛠️ Tecnologías y Herramientas

*   **HTML5 Semántico:** Uso correcto de etiquetas (`nav`, `header`, `main`, `article`, `footer`) para una mejor estructura y SEO.
*   **CSS3 & BEM:** Estilos personalizados utilizando la metodología **BEM** (Bloque, Elemento, Modificador) para un código escalable y mantenible.
*   **Bootstrap 5.3.8:** Framework base para el sistema de rejillas (Grid), componentes (Navbar, Carousel, Buttons) y utilidades de espaciado/flexbox.
*   **JavaScript (Vanilla):** Lógica ligera para la sincronización de las miniaturas en la galería de productos.
*   **Google Fonts & Bootstrap Icons:** Recursos externos para tipografía e iconografía.

## 📂 Estructura del Proyecto

```text
INGEN-STORE/
├── assets/             # Imágenes (zapatillas, dinos, logos)
├── css/
│   └── styles.css      # Hoja de estilos principal
├── index.html          # Página de Inicio (Landing)
├── producto.html       # Página de Detalle de Producto
└── README.md           # Documentación del proyecto