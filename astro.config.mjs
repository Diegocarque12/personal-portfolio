import { defineConfig } from "astro/config";

// import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // output: "server",
  // adapter: vercel({
  //   webAnalytics: { enabled: true },
  // }),
});
