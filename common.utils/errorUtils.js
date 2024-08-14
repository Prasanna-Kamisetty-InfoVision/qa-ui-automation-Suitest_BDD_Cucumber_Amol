/*******************************************************************
 *  Script Suitest Smoke Test Suite
 *  Description : This file will help storing common utility functions
 *  Created by : Offshore Team QE practice`
 *  Created on: 01 Aug 2024
 *  Last Updated on: 05 Aug 2024
 *  Updated By : Smruti pattanayak
 *******************************************************************/
const suitest = require("suitest-js-api"); 
 
async function handleError(error,testName) {
    console.error(`Error in test "${testName}":`, error);
    await suitest.closeApp();
    process.exit(1);
}
 
module.exports = {
    handleError,
};