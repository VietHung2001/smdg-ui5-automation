const { wdi5 } = require("wdio-ui5-service");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const baseUrl = "https://butterball-dev-simplemdg-web.cfapps.us21.hana.ondemand.com";

describe("Login and Session Handling", () => {
    it("login smdg", async () => {
        await browser.url(baseUrl);
        await $("#j_username").setValue("P003748");
        const continueButton = await browser.$("//div[contains(text(), 'Continue')]");
        await continueButton.waitForDisplayed({ timeout: 10000 });
        await continueButton.click();

        await $("#j_password").setValue("UDpnqdTUg0u6WuGQLXnwsfH2ZlvbXumt");
        await continueButton.waitForDisplayed({ timeout: 10000 });
        await continueButton.click();

        const applicationLink = await browser.$("//a[text()='Application']");
        await applicationLink.waitForDisplayed({ timeout: 10000 });
        await applicationLink.click();
    });

    it("save cookie and token only to json", async () => {
        const cookies = await browser.getCookies();
        const cookieHeader = cookies.map(c => `${c.name}=${c.value}`).join(";");
        const csrfResponse = await axios.get(baseUrl, {
            headers: {
                "X-CSRF-Token": "Fetch",
                "Cookie": cookieHeader
            },
            withCredentials: true
        });
        const xsrfToken = csrfResponse.headers["x-csrf-token"];
        const sessionData = {
            Cookie: cookieHeader,
            "x-csrf-token": xsrfToken
        };

        const filePath = path.resolve(__dirname, "seesion_token.json");
        fs.writeFileSync(filePath, JSON.stringify(sessionData, null, 2));
        console.log("Cookies & token saved to seesion_token.json");
    });

    it("should save all the cookies to session.json", async () => {
        const cookies = await browser.getCookies();
        const filePath = path.resolve(__dirname, "session.json");
        fs.writeFileSync(filePath, JSON.stringify(cookies, null, 2));
        console.log("Cookies & token saved to session.json");
        await browser.debug();
    });



});