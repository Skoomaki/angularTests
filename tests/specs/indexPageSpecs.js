const data = require('../data/data.js');
const indexPage = require('../page-elements/indexPageElements.po');

describe('check responses given from HTTP server with incorrect endpoint', function() {
  const indexPageInstance = new indexPage();
  beforeEach(async () => {
    await indexPageInstance.enterAndSelectElements.getURL(data.currentUrl);
  });
  it('confirm error message says cannot fetch', async function() {
    await indexPageInstance.enterAndSelectElements.enterServerAddress(
      data.incorrectserverURLInput
    );
    await indexPageInstance.enterAndSelectElements.clickGetButton();
    await indexPageInstance.checkServerResponse.waitForElement();
    expect(
      await indexPageInstance.checkServerResponse.checkErrorResponseFromServer()
    ).toBe(data.incorrectResponseCheck);
  });
});
