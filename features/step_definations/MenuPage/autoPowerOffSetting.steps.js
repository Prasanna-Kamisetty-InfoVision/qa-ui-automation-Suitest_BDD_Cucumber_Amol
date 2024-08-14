// /******************************************************************************
//  * Testrail Link : https://vizio.testrail.io/index.php?/cases/view/21319645
//  * Test Case ID  : C21319645
//  * Discription   : Verify 'Auto Power OFF' setting
//  * Updated By    : Karishma Kulkarni
//  ******************************************************************************/
// const { Given, When, Then } = require("cucumber");
// const HomePage = require("../../pageModels/homePage/homePage.page.js");
// const helpers = require("../../../common.utils/index.js");
// const navigator = require("../../pageModels/menuNavigator/menuNavigator.page.js");
// const suitest = require("suitest-js-api");

// When("I click on Input Button", async () => {
//   helpers.pressInput();
//   helpers.waitFor1Sec();
// });

// Then("Navigate to HDMI_1 Input", async () => {
//   const inputHDMI1 =
//     helpers.UiElementSelectorBuilder.menuItemElementByTextContains("HDMI 1");
//     console.log("XPath for HDMI 1 Input Element: ", inputHDMI1);
//     helpers.pressDOWNUntilElementExists(inputHDMI1, 10);
//     helpers.pressOK();
// });

// Then("Verify HDMI_1 input with No signal page", async () => {
//   const noSignalTextInHDMI1 = helpers.UiElementSelectorBuilder.onScreenItemElementsimpleByText("No Signal");
//   console.log("XPath for Text Element 'No Signal' : ", noSignalTextInHDMI1);
//   helpers.waitFor2Sec();
// });

// Then("I click on back button", async () => {
//   helpers.pressBack();
// });

// When("I click on Menu button", async () => {
//   helpers.pressMenu();
//   helpers.waitFor2Sec();
//   console.log("Open TV menu");
// });

// Then("Navigate to all settings", async () => {
//   navigator.TopMenuNavigation.NavigateToAllSettings();
//   helpers.pressOK();
// });

// Then("Navigate to system", async () => {
//   navigator.TopMenuNavigation.NavigateToSystem();
//   helpers.pressOK();
// });

// Then("Navigate to timers", async () => {
//   const menuItemXpathTimers = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Timers");
//   console.log("Menu Item XPath:", menuItemXpathTimers);
//   helpers.pressDOWNUntilElementExists(menuItemXpathTimers, 16);
//   helpers.pressOK();
//   helpers.waitFor2Sec();
// });

// Then("Navigate to auto power off", async () => {
//   const menuItemXpathAutoPowerOff = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused(
//       "Auto Power Off"
//     );
//   console.log("Menu Item XPath:", menuItemXpathAutoPowerOff);
//   helpers.pressDOWNUntilElementExists(menuItemXpathAutoPowerOff, 3);
//   helpers.pressOK();
//   helpers.waitFor2Sec();
// });

// Then("Set auto power off for 10 min", async () => {
//   const menuItemXpathAutoPowerOffFor10min = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused(
//       "10 minutes"
//     );
//   console.log("Menu Item XPath:", menuItemXpathAutoPowerOffFor10min);
//   helpers.pressUPUntilElementExists(menuItemXpathAutoPowerOffFor10min, 3);
//   helpers.pressOK();
//   helpers.waitFor2Sec();
// });

// Then("TV should auto power off after 10 minutes", async () => {
//   helpers.waitFor5Min();
//   helpers.waitFor5Min();
//   console.log("wait for 10 minutes to auto power off tv");
// });

// When("I perform DC Power on TV", async () => {
//   helpers.waitFor5Sec();
//   helpers.pressPowerOn();
// });

// Then("the UI should appear properly", async () => {
//   const noSignalTextInHDMI1 = helpers.UiElementSelectorBuilder.onScreenItemElementsimpleByText("No Signal");
//   console.log("XPath for Text Element 'No Signal' : ", noSignalTextInHDMI1);
// });
