// const { Given,When, Then } = require('cucumber');
// const suitest = require("suitest-js-api");
// const { assert, VRC } = suitest;
// const helpers=require("../../common.utils");
// const Navigator = require("../pageModels/menuNavigator/menuNavigator.page.js");
// const HomePage = require("../pageModels/homePage/homePage.page.js");
// const MenuPreConditions = require("../preConditions/menuPrecondition/menuPreconditions.page.js");


// Given('Homescreen opened', async () => {
// 	helpers.pressHome();
// });

// Then('Click on Menu', async () => {
//             helpers.pressSettings();
//             helpers.waitFor2Sec();
//             console.log("Open TV menu");
// });
// Then('Navigate to All settings option', async () => {    
	                   
//             Navigator.TopMenuNavigation.NavigateToAllSettings();
//             helpers.pressOK();

// });
// Then('Navigate to system option on Menu', async () => {
    
//             Navigator.TopMenuNavigation.NavigateToSystem();
//             helpers.pressOK();
// });
// Then('Navigate to Voice Remote option', async () => {
// 	        const menuItemXpathVoiceRemote =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Voice Remote");
//             console.log("Menu Item XPath:", menuItemXpathVoiceRemote);
//             helpers.pressDOWNUntilElementExists(menuItemXpathVoiceRemote,10)
//             helpers.pressOK();
//             helpers.waitFor2Sec();
// });
// Then('Navigate to Unpair Remote', async () => {
// 	        const menuItemXpathVoiceRemote =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Unpair Remote");
//             console.log("Menu Item XPath:", menuItemXpathVoiceRemote);
//             helpers.pressDOWNUntilElementExists(menuItemXpathVoiceRemote,10)
//             helpers.pressOK();
//             helpers.waitFor2Sec();
// });
// Then('Click on UnPair button', async () => {
//             helpers.pressOK();
//             helpers.waitFor2Sec();
// });
// Then('Validate Remote unpaired message on TV', async () => {
// 	const onscreentextremotepair =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Pair New Remote");
//     console.log(helpers.getText(onscreentextremotepair));
// });