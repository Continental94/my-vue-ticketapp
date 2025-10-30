import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  // FIX: This forces the final build output to use a relative path './'
  // which resolves the blank screen/missing asset issue on Netlify/Vercel.
  base: './', 
  plugins: [vue()],
});