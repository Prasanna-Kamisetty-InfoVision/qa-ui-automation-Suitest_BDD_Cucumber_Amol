/*******************************************************************
*  Script : Suitest Smoke Test Suite
*  Description : This code will Check for Pre-Conditions
*  Created by : Offshore Team QE practice
*  Created on: 16 July 2024
*  Last Updated on: 24 July 2024
*  Created By : Pronoy Bose
*******************************************************************/
const suitest = require('suitest-js-api');
const { assert, VRC } = suitest;
const helpers = require('../../../common.utils');
const navigator = require('../../pageModels/menuNavigator/menuNavigator.page');

var setLUTVInputandQS = false;
var setLUTVInputandECO = false;
var setVZHomeAndQS = false;
var setVZHomeAndECO = false;

class MenuPreConditions {

// PreConditions --> 1
// set Input At Power On Last Used Tv Input And Power Mode as Quick Start Mode from system menu settings
static async setInputAtPowerOnLastUsedTvInputAndPowerModeasQuickStart() {
    if (!setLUTVInputandQS) {
        console.log("Select Vizio Home from Input At Power ON and Power Mode as Quick Start");

            helpers.pressMenu();
            navigator.TopMenuNavigation.NavigateToAllSettings();
            helpers.pressOK();
            console.log("Navigated to All Settings");

            navigator.TopMenuNavigation.NavigateToSystem();
            helpers.pressOK();
            console.log("Navigated to System");

            const goToInputAtPowerOn = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Input at Power On");
            helpers.pressDOWNUntilElementExists(goToInputAtPowerOn, 10);
            helpers.pressOK();
            console.log("Navigated to Input At Power On");

            const selectLastUsedTVInput = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Last Used TV Input");
            helpers.pressDOWNUntilElementExists(selectLastUsedTVInput, 5);
            helpers.pressOK();
            console.log("Selected Last used Tv input");

            const goToPowerMode = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Power Mode");
            helpers.pressDOWNUntilElementExists(goToPowerMode, 5);
            helpers.pressOK();
            console.log("Navigated to Power Mode");

            const selectQuickStart = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Quick Start");
            helpers.pressDOWNUntilElementExists(selectQuickStart, 5);
            helpers.pressOK();
            console.log("Selected Quick Start");

            setLUTVInputandQS = true;
            console.log("Preconditions set 1");
        }
    }

// PreConditions --> 2
// set Input At Power On Last Used Tv Input And Power Mode as ECO from system menu settings
static async setInputAtPowerOnLastUsedTvInputAndPowerModeasECO() {
    if (!setLUTVInputandECO) {
        console.log("Select Vizio Home from Input At Power ON and Power Mode as Quick Start");

            helpers.pressMenu();
            navigator.TopMenuNavigation.NavigateToAllSettings();
            helpers.pressOK();
            console.log("Navigated to All Settings");

            navigator.TopMenuNavigation.NavigateToSystem();
            helpers.pressOK();
            console.log("Navigated to System");

            const goToInputAtPowerOn = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Input at Power On");
            helpers.pressDOWNUntilElementExists(goToInputAtPowerOn, 10);
            helpers.pressOK();
            console.log("Navigated to Input At Power On");

            const selectLastUsedTVInput = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Last Used TV Input");
            helpers.pressDOWNUntilElementExists(selectLastUsedTVInput, 5);
            helpers.pressOK();
            console.log("Selected Last used Tv input");

            const goToPowerMode = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Power Mode");
            helpers.pressDOWNUntilElementExists(goToPowerMode, 5);
            helpers.pressOK();
            console.log("Navigated to Power Mode");

            const selectEcoMode = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Eco Mode");
            helpers.pressUPUntilElementExists(selectEcoMode, 5);
            helpers.pressOK();
            console.log("Selected Eco Mode");

            setLUTVInputandECO = true;
            console.log("Preconditions set 2");
        }
    }

// PreConditions --> 3
// set Input At Power On As Vizio Home And Power Mode as Quick Start from system menu settings
static async setInputAtPowerOnAsVizioHomeAndPowerModeasQuickStart() {
    if (!setVZHomeAndQS) {
        console.log("Select Vizio Home from Input At Power ON and Power Mode as Quick Start");

            helpers.pressMenu();
            navigator.TopMenuNavigation.NavigateToAllSettings();
            helpers.pressOK();
            console.log("Navigated to All Settings");

            navigator.TopMenuNavigation.NavigateToSystem();
            helpers.pressOK();
            console.log("Navigated to System");

            const goToInputAtPowerOn = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Input at Power On");
            helpers.pressDOWNUntilElementExists(goToInputAtPowerOn, 10);
            helpers.pressOK();
            console.log("Navigated to Input At Power On");

            const selectVizioHome = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("VIZIO Home");
            helpers.pressUPUntilElementExists(selectVizioHome, 5);
            helpers.pressOK();
            console.log("Selected Vizio Home");

            const goToPowerMode = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Power Mode");
            helpers.pressDOWNUntilElementExists(goToPowerMode, 5);
            helpers.pressOK();
            console.log("Navigated to Power Mode");

            const selectQuickStart = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Quick Start");
            helpers.pressDOWNUntilElementExists(selectQuickStart, 5);
            helpers.pressOK();
            console.log("Selected Quick Start");

            setVZHomeAndQS = true;
            console.log("Preconditions set 3");
        }
    }

// PreConditions --> 4
// set Input At Power On As Vizio Home And Power Mode as ECO from system menu settings
static async setInputAtPowerOnAsVizioHomeAndPowerModeasECO() {
    if (!setVZHomeAndECO) {
        console.log("Select Vizio Home from Input At Power ON and Power Mode as ECO Mode");

            helpers.pressMenu();
            navigator.TopMenuNavigation.NavigateToAllSettings();
            helpers.pressOK();
            console.log("Navigated to All Settings");

            navigator.TopMenuNavigation.NavigateToSystem();
            helpers.pressOK();
            console.log("Navigated to System");

            const goToInputAtPowerOn = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Input at Power On");
            helpers.pressDOWNUntilElementExists(goToInputAtPowerOn, 10);
            helpers.pressOK();
            console.log("Navigated to Input At Power On");

            const selectVizioHome = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("VIZIO Home");
            helpers.pressUPUntilElementExists(selectVizioHome, 5);
            helpers.pressOK();
            console.log("Selected Vizio Home");
            
            const goToPowerMode = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Power Mode");
            helpers.pressDOWNUntilElementExists(goToPowerMode, 5);
            helpers.pressOK();
            console.log("Navigated to Power Mode");

            const selectEcoMode = helpers.UiElementSelectorBuilder.mainmenuItemElementByTextFocused("Eco Mode");
            helpers.pressUPUntilElementExists(selectEcoMode, 5);
            helpers.pressOK();
            console.log("Selected Eco Mode");

            setVZHomeAndECO = true;
            console.log("Preconditions set 4");
        }
    }

}
module.exports = MenuPreConditions;
