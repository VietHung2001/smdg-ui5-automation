// webapp/test/helper/mainActions.js
module.exports = {
  press: async (selector) => {
    const control = await browser.asControl(selector);
    await control.press();
  },

  enterText: async (selector, text) => {
    const control = await browser.asControl(selector);
    await control.enterText(text);
  },

  getText: async (selector) => {
    const control = await browser.asControl(selector);
    return await control.getText();
  },

  // Add more actions as needed
};