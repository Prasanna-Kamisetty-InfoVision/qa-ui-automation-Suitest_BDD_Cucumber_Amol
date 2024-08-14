/*******************************************************************
 *  Script Suitest Smoke Test Suite
 *  Description : This file will help storing common utility functions
 *  Created by : Offshore Team QE practice`
 *  Created on: 01 Aug 2024
 *  Last Updated on: 05 Aug 2024
 *  Updated By : Amol Lad
 *******************************************************************/
const { Before, After, BeforeAll, AfterAll } = require('cucumber');
const suitest = require('suitest-js-api');


BeforeAll(async function (Feature) {
    console.log('Welcome to Suitest Vizio UI_Automation...' + Feature);
    // Global setup code here
});

AfterAll(async function (Scenario) {
    console.log('Closing the suitest session...' + Scenario);
    await suitest.closeSession();
});

