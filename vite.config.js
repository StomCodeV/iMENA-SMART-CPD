import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // This tells Vite to ignore 'three' because it's loaded via the Import Map
      external: ['three']
    }
  }
});
