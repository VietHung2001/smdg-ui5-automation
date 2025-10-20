const restoreSession = require('../helper/restoreSession');
const MyRequest = require('../pageobjects/MyRequest');
const MyInbox = require('../pageobjects/MyInbox');
const smdg = require('../helper/mainActions');
const { wdi5 } = require("wdio-ui5-service");
const baseUrl = "https://butterball-dev-simplemdg-web.cfapps.us21.hana.ondemand.com";

describe("Simple steps to open a Change Request", () => {
    before(async () => await restoreSession(baseUrl));

    it("should navigate to My Request", async () => {
        //await browser.pause(10000);
        await browser.waitForUI5();

        await smdg.press(MyRequest.myRequest);
        await smdg.press(MyRequest.requestTypeSingle);

        /* search template ra và tìm kiếm*/ 
        await smdg.press(MyRequest.searchbarField);
        await smdg.enterText(MyRequest.searchbarField, "CREATE_GROUP2_VERP_ROH");

        await smdg.press(MyRequest.selectOptionType);
        await smdg.press(MyRequest.selectOptionCopy);

        await smdg.enterText(MyRequest.descriptionField, "[H] Submit GROUP 2 VERP -n10");
        await smdg.enterText(MyRequest.priorityField, "HIGH");
        await smdg.enterText(MyRequest.reasonField, "New Product");

        await smdg.press(MyRequest.submitbutton);
        await smdg.press(MyRequest.submitbuttonDialog);
        await smdg.press(MyRequest.okbuttonDialog);

        /*============================================================================================== */
         await browser.pause(18000);
        await browser.waitForUI5();
        // qua trang my in box và chọn tab individual
        await smdg.press(MyInbox.myInbox);
        // await smdg.press(MyInbox.selectOptionIndual);
        // click checkbox đầu tiên hoặc check box của CR cần approve
        await browser.waitForUI5();
        await browser.pause(8000);
        await smdg.press(MyInbox.checkboxbutton);
        // click approve button option trên thanh gồm approve || rework || reject
        await smdg.press(MyInbox.Approvebuttoninbox);
        // click confrim button dialog sau khi click approve trên thanh 
        await smdg.press(MyInbox.confrimbuttoninbox);
        // click approve button dialog sau khi click confrim button 
        await smdg.press(MyInbox.approvebuttondialog);
        /*============================================================================================== */

        await browser.pause(30000);
        // await smdg.press(MyRequest.groupBy);

        await browser.debug();
    });
});