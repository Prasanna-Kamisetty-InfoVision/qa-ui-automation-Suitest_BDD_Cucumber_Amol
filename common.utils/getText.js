/*******************************************************************
 *  Script Suitest Smoke Test Suite
 *  Description : This file will help storing common utility functions
 *  Created by : Offshore Team QE practice`
 *  Created on: 01 Aug 2024
 *  Last Updated on: 05 Aug 2024
 *  Updated By : Smruti pattanayak
 *******************************************************************/

const suitest = require("suitest-js-api");
 
 
async function getText(Selector){
    try
    {
        console.info(Selector);
        const elementProperties = await suitest.element(Selector).timeout(3000);
        console.info(elementProperties);
        console.info('Now on:' , elementProperties[PROP.TEXT_CONTENT]);  
        let elementtext= elementProperties[PROP.TEXT_CONTENT];
        return elementtext;  

    } catch(error){
       
    }
}
 
module.exports ={
     getText,
}