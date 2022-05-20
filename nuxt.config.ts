import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({});
module.exports = {
  build: {
    vendor: ["bootstrap"],
  },
  // include bootstrap css
  css: ["bootstrap/dist/css/bootstrap.css"],
};
