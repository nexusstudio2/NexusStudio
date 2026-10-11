import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const catalogo = "servicios/SERVICIOS/Catalogo-Digital";
const tarjeta = "servicios/SERVICIOS/Tarjeta-Digital";
const menu = "servicios/SERVICIOS/Menu-QR";

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
      },
    },
  },
});