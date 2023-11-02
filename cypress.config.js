const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWwidth: 1950,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  video: true,
  watchForFileChanges: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
