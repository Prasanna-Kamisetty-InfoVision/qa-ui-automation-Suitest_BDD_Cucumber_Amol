/*******************************************************************
 *  Script Suitest Smoke Test Suite
 *  Description : This file will help storing common utility functions
 *  Created by : Offshore Team QE practice`
 *  Created on: 01 Aug 2024
 *  Last Updated on:  05 Aug 2024
 *  Updated By : Amol Lad
 *******************************************************************/

const suitest = require("suitest-js-api");
const { assert, VRC } = suitest;
//const { TV_ELEMENTS } = require("../constants/GlobalConstant");

module.exports = {
    /**
     *  This method allows to wait for given milliseconds.
     *  Input Parameters:- ms:number, Usage: Ex, wait(100), wait(200)
     *  Created by: Poojashree S
     */
    async wait(ms) {
        await assert.sleep(ms)
    },
    async waitFor500ms() {
        await assert.sleep(500);
    },
    async waitFor1Sec() {
        await assert.sleep(1000);
    },
    async waitFor2Sec() {
        await assert.sleep(2000);
    },
    async waitFor5Sec() {
        await assert.sleep(5000);
    },
    async waitFor10Sec() {
        await assert.sleep(10000);
    },
    async waitFor20Sec() {
        await assert.sleep(20000);
    },
    async waitFor30Sec() {
        await assert.sleep(30000);
    },
    async waitFor1Min() {
        await assert.sleep(60000);
    },
    async waitFor3Min() {
        await assert.sleep(180000);
    },
    async waitFor5Min() {
        await assert.sleep(300000);
    },
    /**
     *  end of wait helping functions
     */
    // To check if TV is in ON-State
    async checkTvIsPoweredOn() {
        console.log("Check if TV is power ON state");
        await assert.press(VRC.SMART).interval(1000);
        await assert.sleep(500);
        const getAppsNInputs = await suitest.element(TV_ELEMENTS.AppAndInput);
        if (getAppsNInputs.text === "APPS & INPUTS") {
            console.log("TV is in power ON state");
        } else {
            console.log("TV is switched off please turn on TV");
        }
        return getAppsNInputs.text === "Apps & Inputs";
    },
};
