import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        // Cada demo migrada a React se agrega aquí con una línea más.
        floreria: resolve(
          __dirname,
          "servicios/SERVICIOS/Catalogo-Digital/Floreria/index.html",
        ),
      },
    },
  },
});