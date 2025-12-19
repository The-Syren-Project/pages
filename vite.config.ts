import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteConfigAliases } from '@syren-dev-tech/confetti/config';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react()],
    resolve: {
        alias: {
            ...viteConfigAliases()
        }
    },
    server: {
        port: 3000
    }
});
