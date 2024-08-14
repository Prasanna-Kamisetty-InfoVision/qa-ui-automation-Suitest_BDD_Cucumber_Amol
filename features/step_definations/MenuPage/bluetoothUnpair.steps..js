// const { Given, When, Then } = require('cucumber');
// const suitest = require("suitest-js-api");
// const helpers = require("../../../common.utils/index.js");
// const navigator = require("../../pageModels/menuNavigator/menuNavigator.page.js");
// const HomePage = require("../../pageModels/homePage/homePage.page.js");
// const BluetoothUnpairPage = require('../../pageModels/bluetoothUnpairingPairing/bluetoothUnpair.page.js');
 
 
// Given('Homescreen opened', async () => {
//     helpers.pressHome();
// });
 
// Then('Click on Menu', async () => {
//     helpers.pressSettings();
//     helpers.waitFor2Sec();
//     console.log("Open TV menu");
// });
// Then('Navigate to All settings option', async () => {
//     navigator.TopMenuNavigation.NavigateToAllSettings();
//     helpers.pressOK();
 
// });
// Then('Navigate to system option on Menu', async () => {
//     navigator.TopMenuNavigation.NavigateToSystem();
//     helpers.pressOK();
// });
// Then('Navigate to Voice Remote option', async () => {
//     BluetoothUnpairPage.navigateToVoiceRemoteInSystem();
//     helpers.pressOK();
//     helpers.waitFor2Sec();
// });
// Then('Navigate to Unpair Remote', async () => {
//     BluetoothUnpairPage.navigateToUnpairRemoteInVoiceRemotePage();
//     helpers.pressOK();
//     helpers.waitFor2Sec();
// });
// Then('Click on UnPair button', async () => {
//     helpers.pressOK();
//     helpers.waitFor2Sec();
// });
// Then('Validate Remote unpaired message on TV', async () => {
//     const onscreentextremotepair = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Pair New Remote");
//     console.log(helpers.getText(onscreentextremotepair));
// });