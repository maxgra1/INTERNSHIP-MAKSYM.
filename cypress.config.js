const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nn6obm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
