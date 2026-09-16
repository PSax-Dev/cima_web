# CIMA Technical Ltd — React Redesign

A fresh component-based redesign of the CIMA Technical Ltd website, inspired by the supplied reference UI rather than the old site's layout.

## Stack
- React + Vite
- React Router
- Framer Motion
- Lucide React
- CSS with responsive breakpoints
- Unsplash imagery
- FormSubmit for native HTML form submission

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Main files
- `src/data/site.js` — company details, navigation, services, statistics and testimonial copy.
- `src/pages/Home.jsx` — home page.
- `src/pages/About.jsx` — about page.
- `src/pages/Services.jsx` — services page.
- `src/pages/Contact.jsx` — contact page.
- `src/components/Appointment.jsx` — reusable enquiry form.
- `src/components/Navbar.jsx` — desktop/mobile navigation.
- `src/styles.css` — complete design system and responsive styling.

## Form email
The forms submit to FormSubmit using the CIMA email address in `src/data/site.js`.

The first submission to a new FormSubmit recipient may require an email confirmation. After that, submissions are forwarded to the configured address. If you prefer another form provider later, only the form `action` needs to be changed.

## Editing
Most business content is centralized in `src/data/site.js`. Replace the Unsplash image URLs there or in the page files if CIMA has approved company photography.

## Design direction
The redesign intentionally avoids screenshots, copied page layouts and the old services/about presentation. It uses:
- dark navy + white + restrained red accent
- oversized editorial typography
- asymmetric grids
- service image mosaics
- stat strips
- animated reveals
- hover image movement
- animated mobile navigation
- reusable CTA/form sections

Images are sourced from Unsplash and are not screenshots of the original CIMA site.
