import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const catalogo = "servicios/SERVICIOS/Catalogo-Digital";
const tarjeta = "servicios/SERVICIOS/Tarjeta-Digital";

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
      },
    },
  },
});