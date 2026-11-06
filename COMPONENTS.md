# Website UI libraries

The site is a build-free HTML, CSS, and JavaScript project.

- **Bootstrap 5.3.8** supplies locally bundled component styles for buttons, form inputs and selects, alerts, and exercise cards. The page keeps native, accessible HTML controls; Bootstrap JavaScript is not needed. Pawlio-specific overrides live in `style.css`.
- **Lucide 1.8.0** supplies the locally bundled SVG icons. `assets/icons/lucide.svg` contains only the icons used by the site. SVGs use `currentColor` and decorative icons have `aria-hidden`.

Both libraries are bundled locally and their licenses are retained alongside the assets. The selected Bootstrap distribution's SHA-384 checksum is `sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB`.

When changing components, preserve native labels, keyboard support, the selected language, and the exercise data fallback.
