# Amresh Baskar - Portfolio

A premium, modern SaaS-style personal portfolio website for **Amresh Baskar**, Founder @ Pearl Cloud Solutions. Built to showcase expertise in Full-Stack Development, SaaS products, Cloud Solutions (AWS), and Business Automation.

## 🚀 Tech Stack

*   **Framework:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom Design System)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** Inline SVGs (Lucide-inspired)

## 🎨 Features & Architecture

*   **Dark Mode SaaS Aesthetic:** Designed with a "Git Blue" theme, sleek dark backgrounds, and subtle glow effects.
*   **Component-Driven Architecture:** Clean separation of concerns inside `src/features/portfolio/` and `src/components/`.
*   **ScrollSpy Navigation:** Sticky header that automatically highlights the active section during scroll.
*   **Responsive Grid Systems:** CSS Grid layouts optimized for Mobile, Tablet, and Desktop views.
*   **Framer Motion Integration:** Staggered fade-ins, viewport-triggered animations, and smooth accordion transitions.

## 📁 Project Structure

```text
src/
├── assets/          # Static images, logos, and favicons
├── components/      # Reusable UI components (Buttons, Cards, Layouts)
├── features/
│   └── portfolio/   # Main portfolio sections (Hero, About, Projects, etc.)
├── index.css        # Global styles, Tailwind directives, and CSS variables
└── main.tsx         # React application entry point
```

## 🛠️ Local Development

To run this project locally on your machine:

1. **Clone the repository** (if applicable)
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Navigate to `http://localhost:5173` (or the port Vite provides) to view the application.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```
This will compile the TypeScript, minify the CSS/JS, and output the static files into the `dist` directory.

## 📄 License

This project is proprietary and created specifically for Amresh Baskar's personal and professional use.
