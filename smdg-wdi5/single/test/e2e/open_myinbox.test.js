const restoreSession = require('../helper/restoreSession');
const MyRequest = require('../pageobjects/MyRequest');
const MyInbox = require('../pageobjects/MyInbox');
const smdg = require('../helper/mainActions');
const { wdi5 } = require("wdio-ui5-service");
const baseUrl = "https://butterball-dev-simplemdg-web.cfapps.us21.hana.ondemand.com";

describe("Simple steps to open a My Inbox", () => {
    before(async () => await restoreSession(baseUrl));

    it("should navigate to My Inbox", async () => {
        //await browser.pause(10000);
        await browser.waitForUI5();

        await smdg.press(MyInbox.myInbox);
        // navigate tab in in box
      //  await smdg.press(MyInbox.selectOptionGroup);
        await smdg.press(MyInbox.selectOptionIndual);
       // await smdg.press(MyInbox.selectOptionMass);

       // click checkbox hoặc check box của CR muốn approve
       await smdg.press(MyInbox.checkboxbutton);

       // click approve button option trên thanh gồm approve || rework || reject
       await smdg.press(MyInbox.Approvebuttoninbox);
 
       // click confrim button dialog sau khi click button approve trên thanh
       await smdg.press(MyInbox.confrimbuttoninbox);

       // clcik approve button dialog sau khi click confrim button 
       await smdg.press(MyInbox.approvebuttondialog);













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