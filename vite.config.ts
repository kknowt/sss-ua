import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

function githubPagesSpa() {
  return {
    name: "github-pages-spa",
    closeBundle() {
      const index = resolve("dist", "index.html");
      if (!existsSync(index)) return;
      copyFileSync(index, resolve("dist", "404.html"));
      writeFileSync(resolve("dist", ".nojekyll"), "");
    },
  };
}

export default defineConfig({
  plugins: [react(), githubPagesSpa()],
  base: process.env.NODE_ENV === "production" ? "/sss-ua/" : "/",
});
