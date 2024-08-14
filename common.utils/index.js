/*******************************************************************
 *  Script Suitest Smoke Test Suite
 *  Description : This file will help storing common utility functions
 *  Created by : Offshore Team QE practice`
 *  Created on: 01 Aug 2024
 *  Last Updated on: 05 Aug 2024
 *  Updated By : Smruti pattanayak
 *******************************************************************/

const keyPressFunctions = require('../common.utils/remoteKeyPress');
const errorUtils = require('../common.utils/errorUtils');
const timeDelays = require('../common.utils/timeDelays');
const getText = require('../common.utils/getText');
const getXpath = require('../common.utils/xpathBuilder');
 
module.exports = {
    ...keyPressFunctions,
    ...errorUtils,
    ...timeDelays,
    ...getText,
    ...getXpath,
 
};