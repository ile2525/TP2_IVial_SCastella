import { defineConfig } from 'vite';

export default defineConfig({
    base: "/TP2_IVial_SCastella/",
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: "index.html",
                pageProduit: "pageProduit.html"
            }
        }
    }
});
