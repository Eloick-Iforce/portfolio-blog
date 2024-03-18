import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://eloick.fr",
  integrations: [mdx(), sitemap(), tailwind(), image(), icon({
    include: {
      mdi: ["*"],
      logos: ["*"]
    }
  })],
  output: "server",
  adapter: vercel()
});