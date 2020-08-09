const { by, browser } = require("protractor");

const indexPageCheck = function() {
    // define locators on page
    this.locators = {
      nameField: by.model('yourName'),
      learnAngularCheckBox: by.model('todo.done')
    };
    // enter data into fields
    this.enterAndSelectElements = {
      enterName: async name => {
        await browser.findElement(this.locators.nameField).sendKeys(name);
      },
      getURL: async url => await browser.get(url),
      clickLearnAngularJSCheckbox: async clickBox => {
        await (await browser.findElement(this.locators.learnAngularCheckBox)).click(clickBox);
      }
    };
    // verify elements by class
    this.verifyToDo = {
      checkIfAngularLearnedIsTrue: async checkIfTrue => {
        await browser.findElement(this.locators.learnAngularCheckBox)
      }
    }


    // this.checkServerResponse = {
    //   waitForElement: async () =>
    //     await browser.wait(
    //       browser.ExpectedConditions.presenceOf($('#response-0')),
    //       5000,
    //       'Element #response-0 taking too long to appear in the DOM'
    //     ),
    //   checkResponseFromServer: async () => {
    //     return browser.findElement(this.locators.serverResponseMessage).getText();
    //   },
    //   checkErrorResponseFromServer: async () => {
    //     return browser
    //       .findElement(this.locators.incorrectServerResponseMessage)
    //       .getText();
    //   }
    // };
  };
  
  module.exports = indexPageCheck;