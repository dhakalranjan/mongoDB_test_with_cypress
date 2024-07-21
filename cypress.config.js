const { defineConfig } = require("cypress");
const {configurePlugin} = require("cypress-mongodb")

module.exports = defineConfig({
  env: {
    mongodb: {
        uri: 'mongodb://localhost:27017',
        database: 'bookStore',
        collection: 'authors'
    }
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configurePlugin(on);
    },
  },
});
