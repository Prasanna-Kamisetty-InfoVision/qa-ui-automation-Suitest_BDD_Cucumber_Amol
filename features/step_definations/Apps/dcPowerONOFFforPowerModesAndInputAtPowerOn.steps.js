// /******************************************************************************
//    * Testrail Link : https://vizio.testrail.io/index.php?/cases/view/21319600
//    * Test Case ID : C21319600
//    * TC : DC Power OFF/ON on top of native apps with 'Input at Power On' set as 'Last Used TV Input' & 'Power Mode' set as 'Quick Start'
//    * Updated By : Karishma Kulkarni
//    ******************************************************************************/
 
// const { Given, When, Then, AfterAll } = require('cucumber');
// const suitest = require("suitest-js-api");
// const { assert, VRC } = suitest;
// const HomePage = require("../../pageModels/homePage/homePage.page.js");
// const MenuPreConditions = require("../../preConditions/menuPrecondition/menuPreconditions.page.js");
// const helpers = require("../../../common.utils/index.js");
// // const {NewtokenId, NewtokenPassword } = require('../../resources/config.json');


// // Note : 
// // for all the steps from feature file generates abstract methods implemented
// // below reference example

// // Given("Open suitest session", async function () {
// // await suitest.openSession({ tokenId : "d9ZzqNgAGj" , tokenPassword :"732c50597d5f202976363a91db7fd8ec5212aaec50fc211501f72154e0e48779"});
// // });
 

// Then("I launch the Netflix app", async function () {
//   HomePage.launchNetflix();
//   //helpers.waitFor10Sec();
// });
 
// Then("I perform playback on any content from list on Netflix",async function () {
//      HomePage.playContentOnNetflix();
//   });
  
// When("I perform DC Power OFF on the TV", async function () {
//   helpers.pressPowerOff();
//   console.log("DC Powered OFF Successfully............!!!!!");
// });

// Then("I wait for 30 seconds", async function () {
//   helpers.waitFor30Sec();
// });
 
// When("I perform DC Power ON on the TV", async function () {
//   helpers.pressPowerOn();
//   console.log("DC Powered ON Successfully............!!!!!");
// });
 
// Then("The TV should power ON successfully",async function () {
//     HomePage.verifyHomePageOpened();
//   }
 
// );
// When("I launch the YouTube app", async function () {
//    HomePage.launchYouTube();
// });
 
// Then("I perform playback on any content from list on YouTube",async function () {
//      HomePage.playContentOnYouTube();
//   });
 
// Then("The TV should display the Vizio Home screen without any issues",async function () {
//     HomePage.verifyHomePageOpened();
//   });

// // Then("Terminate the flow",async function () {
// //    suitest.closeSession();
// //   console.log("After Scenario passed : Session is terminated from suiest devive ");
// //   });