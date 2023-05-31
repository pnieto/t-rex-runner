import { defineConfig } from 'vite';
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";

export default defineConfig({
    base: 't-rex-runner',
    plugins: [
        obfuscatorPlugin({
          matchFile: (path) => {
            return /\.(js|tsx?|cjs|mjs)$/.test(path) 
          },
        }),
    ],
})
