// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Rezervations app",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
        },
      ],
    },
  },

  css: ["./assets/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  pages: true,
});
