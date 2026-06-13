import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite"; // Make sure you have installed it: npm install nitro

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Use the 'vite' property to extend the underlying configuration
  vite: {
    plugins: [
      nitro({
        preset: "vercel", // This tells Nitro to build for Vercel
      }),
    ],
  },
});