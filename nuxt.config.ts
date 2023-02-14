// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vue-final-modal/style.css'],
    app: {
        head: {
          link: [
            { rel: "preconnect", href: "https://fonts.gstatic.com/" },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Arimo&family=Bebas+Neue&family=Comfortaa:wght@300&display=swap' },
          ]
        }
      }
})