const restoreSession = require('../helper/restoreSession');
const MyRequest = require('../pageobjects/MyRequest');
const MyInbox = require('../pageobjects/MyInbox');
const MyActivate = require('../pageobjects/MyActive');
const smdg = require('../helper/mainActions');
const { wdi5 } = require("wdio-ui5-service");
const MyActive = require('../pageobjects/MyActive');
const baseUrl = "https://butterball-dev-simplemdg-web.cfapps.us21.hana.ondemand.com";

describe("Simple steps to open a My Activate", () => {
    before(async () => await restoreSession(baseUrl));

    it("should navigate to My Activate", async () => {
        //await browser.pause(10000);
        await browser.waitForUI5();

        await smdg.press(MyActivate.myActivate);
        await smdg.press(MyActivate.activativeTypeSingle);
        await smdg.press(MyActivate.activativeTypeMass);

        // navigate tab in in box
        // await smdg.press(MyInbox.selectOptionGroup);
        // await smdg.press(MyInbox.selectOptionIndual);
        // await smdg.press(MyInbox.selectOptionMass);
        // await smdg.press(MyRequest.newRequest);

        // await smdg.press(MyRequest.selectObjectType);
        // await smdg.enterText(MyRequest.selectObjectType, "Product");
        // await smdg.press(MyRequest.selectObjectTypeNext);

        // await smdg.enterText(MyRequest.searchTemplateField, "MM01_GROUP1_FERT_ZBIN");
        // await smdg.press(MyRequest.selectTemplateItem("MM01_GROUP1_FERT_ZBIN"));

        // await smdg.enterText(MyRequest.descriptionField, "Test CR HELVIUS");
        // await smdg.enterText(MyRequest.priorityField, "LOW");
        // await smdg.enterText(MyRequest.reasonField, "New Product");
        
        await browser.pause(5000);
        // await smdg.press(MyRequest.groupBy);

        await browser.debug();
    });
});