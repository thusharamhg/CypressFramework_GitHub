
//Thush - Try to capture the vedio on fail, but not work

/*
Cypress.Commands.add('captureVideoOnFail', () => {
    if (Cypress.config('video') && Cypress.spec.specName !== undefined) {
      const testName = Cypress.mocha.getRunner().suite.ctx.currentTest.fullTitle();
      const videoPath = `cypress/videos/${Cypress.spec.specName}/${testName}.mp4`;
      const videoUrl = `videos/${Cypress.spec.specName}/${testName}.mp4`;
  
      if (Cypress.browser.isHeadless) {
        cy.task('startVideoRecording', { videoPath });
      } else {
        cy.log(`Recording video: ${videoUrl}`);
      }
  
      afterEach(function () {
        if (this.currentTest.state === 'failed' && Cypress.browser.isHeadless) {
          cy.task('stopVideoRecording');
        }
      });
    }
  });
  */

  