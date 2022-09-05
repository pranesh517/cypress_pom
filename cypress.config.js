const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // window:confirm;
      // window:alert;
    },
    specPattern: 'cypress/e2e/*.spec.js',
    baseUrl: 'https://rahulshettyacademy.com/AutomationPractice/',
    reporter: 'mochawesome',
  },
});
