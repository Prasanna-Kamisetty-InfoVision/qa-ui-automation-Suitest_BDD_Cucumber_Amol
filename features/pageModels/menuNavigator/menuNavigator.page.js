const suitest = require("suitest-js-api");
const { assert, VRC } = suitest;
const { Given,When, Then } = require('cucumber');
const helpers=require('../../../common.utils');



const TopMenuNavigation = {
    NavigateToAllSettings: function() {
        const menuoptionAllSettings = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("All Settings")
        console.log("Xapth from selector bilder to step def:",menuoptionAllSettings);
        // console.log("Xapth:",AllSettingssystem);
        helpers.pressDOWNUntilElementExists(menuoptionAllSettings,10);           
        //helpers.pressOK();
    },
    NavigateToGaming: function() {
        const menuoptionGaming = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Gaming");
        console.log("Xapth from selector bilder to step def:",menuoptionGaming);        
        helpers.pressDOWNUntilElementExists(menuoptionGaming,10);           
       // helpers.pressOK();
    },
    NavigateToBTHeadphone: function() {
        const menuoptionBTHeadphone =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Bluetooth Headphones");
        console.log("Menu Item XPath:", menuoptionBTHeadphone);
        helpers.pressDOWNUntilElementExists(menuoptionBTHeadphone,10)
        //helpers.pressOK();
        helpers.waitFor2Sec();
    },
    NavigateToPicture: function() {
        const menuoptionPicture =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("System");
        console.log("Menu Item XPath:", menuoptionPicture);
        helpers.pressDOWNUntilElementExists(menuoptionPicture,10)
        //helpers.pressOK();
        helpers.waitFor2Sec();
    },
    NavigateToAudio: function() {
        const menuoptionAudio =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Audio");
        console.log("Menu Item XPath:", menuoptionAudio);
        helpers.pressDOWNUntilElementExists(menuoptionAudio,10)
        //helpers.pressOK();
        helpers.waitFor2Sec();
    },
    NavigateToNetwork: function() {
        const menuoptionNetwork =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Network");
        console.log("Menu Item XPath:", menuoptionNetwork);
        helpers.pressDOWNUntilElementExists(menuoptionNetwork,10)
        //helpers.pressOK();
        helpers.waitFor2Sec();
    },
    NavigateToAccessibilty: function() {
        const menuoptionAccessibilty =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Accessibilty");
        console.log("Menu Item XPath:", menuoptionAccessibilty);
        helpers.pressDOWNUntilElementExists(menuoptionAccessibilty,10)
        //helpers.pressOK();
        helpers.waitFor2Sec();
    },
    NavigateToSystem: function() {
        const menuoptionSystem =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("System");
        console.log("Menu Item XPath:", menuoptionSystem);
        helpers.pressDOWNUntilElementExists(menuoptionSystem,10)
        //helpers.pressOK();
        helpers.waitFor2Sec();
    },
    NavigateToAdminandPrivacy: function() {
        const menuoptionAdminandPrivacy =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Admin & Privacy");
        console.log("Menu Item XPath:", menuoptionAdminandPrivacy);
        helpers.pressDOWNUntilElementExists(menuoptionAdminandPrivacy,10)
        //helpers.pressOK();
        helpers.waitFor2Sec();
    }
};

module.exports = {
    TopMenuNavigation
  };