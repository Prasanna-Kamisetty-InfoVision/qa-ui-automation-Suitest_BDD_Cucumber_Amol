const helpers = require('../../../common.utils');
 
class BluetoothUnpairPage {
 
    //Navigate to Voice Remote option in System Menu
    static async navigateToVoiceRemoteInSystem() {
        const menuItemXpathVoiceRemote =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Voice Remote");
        console.log("Menu Item XPath:", menuItemXpathVoiceRemote);
        helpers.pressDOWNUntilElementExists(menuItemXpathVoiceRemote,10)
        // helpers.pressOK();
        // helpers.waitFor2Sec();
    }
 
    //Navigate to Unapir Remote in Voice Remote Menu
    static async navigateToUnpairRemoteInVoiceRemotePage(){
        const menuItemXpathVoiceRemote =  helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Unpair Remote");
            console.log("Menu Item XPath:", menuItemXpathVoiceRemote);
            helpers.pressDOWNUntilElementExists(menuItemXpathVoiceRemote,10)
            // helpers.pressOK();
            // helpers.waitFor2Sec();
    }
}
module.exports= BluetoothUnpairPage;