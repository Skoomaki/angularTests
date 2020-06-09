const indexPageCheck = function() {
    this.locators = {
      serverURLInput: by.id('server-input-url'),
      getButton: by.id('get-button'),
      serverResponseMessage: by.css('#response-0'),
      incorrectServerResponseMessage: by.css('#response-0')
    };
    this.enterAndSelectElements = {
      enterServerAddress: async address => {
        await browser.findElement(this.locators.serverURLInput).sendKeys(address);
      },
      getURL: async url => await browser.get(url),
      clickGetButton: async () => {
        await browser.findElement(this.locators.getButton).click();
      }
    };
    this.checkServerResponse = {
      waitForElement: async () =>
        await browser.wait(
          browser.ExpectedConditions.presenceOf($('#response-0')),
          5000,
          'Element #response-0 taking too long to appear in the DOM'
        ),
      checkResponseFromServer: async () => {
        return browser.findElement(this.locators.serverResponseMessage).getText();
      },
      checkErrorResponseFromServer: async () => {
        return browser
          .findElement(this.locators.incorrectServerResponseMessage)
          .getText();
      }
    };
  };
  
  module.exports = indexPageCheck;