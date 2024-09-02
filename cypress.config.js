const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.lambdatest.com/selenium-playground",
    defaultCommandTimeout: 50000,
    viewportHeight: 900,
    viewportWidth: 1680,
    chromeWebSecurity: false,
    includeShadowDom: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
