const { Given, Then, When } = require("cucumber");
const suitest = require("suitest-js-api");
const helpers = require("../../../common.utils/index.js");
const selector = require('../../../resources/selectors/menuPageLocators.js');
const MenuPreConditions = require("../../preConditions/menuPrecondition/menuPreconditions.page.js");


Given("Ensure 'Input at Power On' is set to 'VIZIO Home' and 'Power Mode' is set to Quick Start in Menu > All Settings >> System", async () => {
 
         /** 
         Title: BootOnSCTV on top of inactive HDMI Input Source & hit 'Cancel'  option during timer display while  'Input at Power On' is set to 'VIZIO Home' & 'Power Mode' is set to ‘Quick Start’
         * Pre-Condtions : TCs ID:C21319654, VZ-618 
         * 1. Ensure 'Input at Power On' is set to 'VIZIO Home' in Menu > All Settings > System
           2. Ensure 'Power Mode' is set to ‘Quick Start’ in Menu > All Settings > System
         */

      MenuPreConditions.setInputAtPowerOnAsVizioHomeAndPowerModeasQuickStart();
  
});

When("I am on Vizio Home page", async () => {
  //// calling HomePage
  helpers.pressHome();
});
Then("Click on Input menu", async () => {
   //Press on Input source
  helpers.pressInput();
  helpers.waitFor5Sec();
});
Then("I click on the HDMI-1", async () => {

  // Press HDMI-1 Focused
  const inputHDMI1 = helpers.UiElementSelectorBuilder.menuItemElementByTextContains("HDMI 1");
  console.log("XPath for HDMI 1 Input Element: ", inputHDMI1);
  helpers.pressDOWNUntilElementExists(inputHDMI1, 10);
  helpers.pressOK();
});
Then("It should switch to selected HDMI-1 input and display message.",async () => {
    
  // check for display message as 'No Signal HDMI-{Port number} Check if the source device is connected and powered on. Or press the INPUT button to select the input for the source device.'
    
    helpers.verifyElementExists(selector.noSignalTextHdmi1,15000);
    helpers.waitFor5Sec();

  });
  
Then("Wait for 30 secs and should display countdown timer for 30 secs to bottom left of screen and should display message",async () => {

  //Step_2 : Wait for 30 secs

  //Result: It should display countdown timer for 30 secs to bottom left of screen and should display message 
//"No signal available. Returning to SmartCast Home"
//with action buttons: "Cancel" & "Return to Home".

    helpers.waitFor30Sec();

    helpers.verifyElementExists(selector.NSCircle,1000);
    helpers.waitFor1Sec();
  
    helpers.verifyElementExists(selector.returnToHome,1000);
    helpers.waitFor1Sec();
  
    helpers.verifyElementExists(selector.Cancel,1000);
    helpers.waitFor2Sec();
}
);

Then("Hit the Cancel", async () => {
   // click on the Return to Home
    const menuItemXpathReturnToHome1 = helpers.UiElementSelectorBuilder.onScreenItemElementsClickByText("Cancel");

    console.log("Menu Item XPath:", menuItemXpathReturnToHome1);
    
    //helpers.pressLEFTUntilElementExists(menuItemXpathReturnToHome1,3);
    helpers.pressOK();


});
Then('It should remain on same input source for ex: HDMI 1 with same notification message', async() =>{
  
  //Result : It should redirect back to Smart Cast Home screen without any issues

  helpers.verifyElementExists(selector.noSignalTextHdmi1,15000);
  helpers.waitFor5Sec();
  


});
