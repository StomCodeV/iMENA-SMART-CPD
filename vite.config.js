import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
        teacher: resolve(__dirname, 'teacher.html'),
      },
      // This tells Vite to ignore 'three' because it's loaded via the Import Map
      external: ['three'],
    },
  },
});
