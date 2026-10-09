import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const base = "servicios/SERVICIOS/Catalogo-Digital";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        // Cada demo migrada a React se agrega aquí con una línea más.
        floreria: resolve(
          import.meta.dirname, 
          `${base}/Floreria/index.html`),
        pasteleria: resolve(
          import.meta.dirname, 
          `${base}/Pasteleria/index.html`),
        encinar: resolve(
          import.meta.dirname,
          `${base}/Decoracion-Mobiliario/index.html`,
        ),
      },
    },
  },
});