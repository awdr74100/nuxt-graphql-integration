// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  typescript: {
    shim: false,
  },
  imports: {
    dirs: ["stores"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
    [
      "nuxt-graphql-client",
      {
        clients: {
          default: {
            host: "http://localhost:3000/api/graphql",
            schema: "./server/schema.graphql",
          },
        },
      },
    ],
  ],
});
