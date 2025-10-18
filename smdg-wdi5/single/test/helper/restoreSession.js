const fs = require('fs');
const path = require('path');

/**
 * Restores a saved session using saved cookies
 * @param {string} baseUrl - The base URL test environment
 */
module.exports = async function restoreSession(baseUrl) {
    if (!baseUrl) {
        throw new Error("Missing URL parameter");
    }

    await browser.url(`${baseUrl}/placeholder`);

    const cookiesPath = path.resolve("single/test/e2e/session.json");
    const cookies = JSON.parse(fs.readFileSync(cookiesPath, "utf8"));

    //const cookiesPath = path.resolve(__dirname, "session.json");
    //const cookiesPath = path.resolve(process.cwd(), "session.json");

    await browser.setCookies(cookies);

    await browser.url(`${baseUrl}/main/index.html`);
    const pageTitle = await browser.getTitle();

    if (!pageTitle.includes('SimpleMDG')) {
        throw new Error(`Expected title to contain 'SimpleMDG', but got '${pageTitle}'`);
    }
};

//How to use
//const restoreSession = require('./helpers/restoreSession');

// const baseUrl = "simplemdg.test.com";

// describe("Reuse saved session", () => {
//     before(async () => await restoreSession(baseUrl));
// });