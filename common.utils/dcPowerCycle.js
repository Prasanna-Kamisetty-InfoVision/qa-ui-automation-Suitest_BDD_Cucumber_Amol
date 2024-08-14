/*******************************************************************
 *  Script Suitest Smoke Test Suite
 *  Description : This file will help storing common utility functions
 *  Created by : Offshore Team QE practice`
 *  Created on: 05 Aug 2024
 *  Last Updated on:  07 Aug 2024
 *  Updated By : Amol Lad
 *******************************************************************/

const suitest = require("suitest-js-api");
const { assert, VRC } = suitest;

class PowerCycle {
  static async dcPowerOff() {
    try {
      await assert.press(VRC.POWER); // DC Power OFF TV
      console.log("DC Power OFF 1 ...!!! ");
    } catch {
      console.log("Test failed : Unable to DC Power cycle...!!!");
    }
  }
  static async dcPowerON() {
    try {
      await assert.press(VRC.POWER); // DC Power ON TV
      console.log("DC Power ON 1 ...!!! ");
      await waitFor30Sec(); // time delay for 30 secs
    } catch {
      console.log("Test failed : Unable to DC Power ON 1...!!!");
    }
  }
}
module.exports = PowerCycle;
