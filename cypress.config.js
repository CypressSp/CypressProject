const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on,config){
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://automationexercise.com/",
    // baseUrl: "https://practice.expandtesting.com
    chromeWebSecurity: false,
    watchForFileChanges: false,
    pageLoadTimeout: 600000,
    failOnStatusCode: false,
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
      on('task',{downloadFile})
      // implement node event listeners here;
    }
  }
});
