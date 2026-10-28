import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const catalogo = "servicios/SERVICIOS/Catalogo-Digital";
const tarjeta = "servicios/SERVICIOS/Tarjeta-Digital";
const menu = "servicios/SERVICIOS/Menu-QR";
const landing = "servicios/SERVICIOS/Landing-Page";
const web = "demos";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        // Cada demo migrada a React se agrega aquí con una línea más.
        floreria: resolve(import.meta.dirname, `${catalogo}/Floreria/index.html`),
        pasteleria: resolve(import.meta.dirname, `${catalogo}/Pasteleria/index.html`),
        encinar: resolve(
          import.meta.dirname,
          `${catalogo}/Decoracion-Mobiliario/index.html`,
        ),
        fotografo: resolve(
          import.meta.dirname,
          `${tarjeta}/Fotografo-Bodas/index.html`,
        ),
        maquillista: resolve(
          import.meta.dirname,
          `${tarjeta}/Maquillista-Beauty/index.html`,
        ),
        planner: resolve(
          import.meta.dirname,
          `${tarjeta}/Wedding-Planner/index.html`,
        ),
        restaurante: resolve(
          import.meta.dirname,
          `${menu}/Restaurante/index.html`,
        ),
        cafe: resolve(import.meta.dirname, `${menu}/Cafe-Raiz/index.html`),
        bar: resolve(import.meta.dirname, `${menu}/Bar-Cantina/index.html`),
        barberia: resolve(import.meta.dirname, `${landing}/Barberia/index.html`),
        gimnasio: resolve(import.meta.dirname, `${landing}/Gimnasio/index.html`),
        dental: resolve(
          import.meta.dirname,
          `${landing}/Clinica-Dental/index.html`,
        ),
        webBarberia: resolve(import.meta.dirname, `${web}/barberia/index.html`),
        webGimnasio: resolve(import.meta.dirname, `${web}/gimnasio/index.html`),
        webDentista: resolve(import.meta.dirname, `${web}/dentista/index.html`),
      },
    },
  },
});