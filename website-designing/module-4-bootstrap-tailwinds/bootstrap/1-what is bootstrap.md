# What is Bootstrap?

Bootstrap is a front-end open-source CSS framework for building responsive, mobile-first websites and web applications. It provides a collection of ready-to-use components, layout utilities, typography, forms, buttons, navigation, and JavaScript plugins that speed up development and ensure consistent responsive  design.

## Installation

### 1. CDN (Content Delivery Network)

Use Bootstrap 5.1.3 directly from a CDN without downloading files.

https://getbootstrap.com/docs/5.1/getting-started/introduction/


CSS:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU7B8mZQTF5jrMpt8f0H3S8w5Y7N76L0gW5r7" crossorigin="anonymous">
```

JavaScript (with Popper):
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
```

### 2. NPM

Install Bootstrap via npm:
```bash
npm install bootstrap@5.1.3
```

Then import in your JavaScript or SCSS entry file:
```js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
```

### 3. Download

Download Bootstrap 5.1.3 from the official website or GitHub release page, then include the local CSS and JS files in your project:
```html
<link href="css/bootstrap.min.css" rel="stylesheet">
<script src="js/bootstrap.bundle.min.js"></script>
```

## Advantages of Bootstrap 5.1.3

- Responsive grid system: built-in responsive columns and layout utilities.
- Prebuilt components: ready-made navbars, cards, buttons, modals, alerts, forms, and more.
- Utility classes: quick spacing, display, alignment, text, background, and flex utilities.
- No dependency on jQuery: Bootstrap 5 uses vanilla JavaScript, reducing bundle size and complexity.
- Customizable: Sass source files allow easy theming and variable overrides.
- Browser support: modern browser support with improved performance.
- Accessibility improvements: better ARIA support and keyboard-friendly components.
- Consistent design: uniform styling across browsers and devices.
- Good documentation: comprehensive examples and usage guides for components and utilities.
