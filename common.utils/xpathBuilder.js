/*******************************************************************
 *  Script Suitest Smoke Test Suite
 *  Description : This file will help storing common utility functions
 *  Created by : Offshore Team QE practice`
 *  Created on: 01 Aug 2024
 *  Last Updated on: 05 Aug 2024
 *  Updated By : Smruti pattanayak
 *******************************************************************/

const suitest = require("suitest-js-api");
const {assert,press,VRC,PROP} = suitest;
const {Given, Then} = require('cucumber');
 
const UiElementSelectorBuilder = {

    // Builds an XPath selector for a menu items contains the specified text.
    menuItemElementByText: function(elemntidentifier) {
      let MenuElemnt = {xpath: "*//Row[./Text[contains(text(),"+'"'+elemntidentifier+'"'+")]]"};
      console.log("Selector builder",MenuElemnt); 
      return MenuElemnt;      
    },

    // Builds an XPath selector for a clickable screen element based on its exact text.
    screenElementClickByText: function(elemntidentifier) {
      let MenuElemnt = {xpath: "*//Row[./Text[text()="+'"'+elemntidentifier+'"'+"]]//.."};
      console.log("Selector builder",MenuElemnt); 
      return MenuElemnt;      
    },

    // Builds an XPath selector for a main menu item that is currently focused based on its exact text.
    mainmenuItemElementByTextFocused: function(elemntidentifier) {
      let MenuElemnt = {xpath: "*//Row//*[./Text[text()="+'"'+elemntidentifier+'"'+"]][@focused=\"true\"]"};
      console.log("Selector builder",MenuElemnt); 
      return MenuElemnt;
    },

    // Builds an XPath selector for a menu item that contains the specified text and is currently focused.
    menuItemElementByTextContains: function(elemntidentifier) {
      let MenuElemnt = {xpath: "*//Row[./Text[contains(text(),"+'"'+elemntidentifier+'"'+")]][@focused=\"true\"]"};
      console.log("Selector builder",MenuElemnt); 
      return MenuElemnt;      
    },

    // Builds an XPath selector for an on-screen item based on partial text match.
    onScreenItemElementsimpleByText: function(elemntidentifier) {
      let ScreenElemnt = {xpath:`*//Column[./Text[contains(text(),"${elemntidentifier}")]]`};
      return ScreenElemnt;
    },

    // Builds an XPath selector for a clickable item on the screen based on partial text match.
    //work for clicking on any element that appears in a popup at the bottom of the screen.(Exp: Restart TV & HDMI )
    onScreenItemElementsClickByText: function(elemntidentifier) {
      let ScreenElemnt = {xpath:`*//Row/Container[@focused=\"true\"]//*[./Text[contains(text(),"${elemntidentifier}")]]`};
      return ScreenElemnt;
    },
    // Builds an XPath selector for the top 4 menu items(Apllicable for Picture Mode/Pair Headphones/Closed Caption/Sleep Timer)
    top4MenuItemsByText: function(elemntidentifier) {
      let MenuElemnt = {xpath:`*//Rectangle[@focused=\"true\"]//*[./Text[contains(text(),"${elemntidentifier}")]]`};
      console.log("Selector builder",MenuElemnt); 
      return MenuElemnt;      
    },

    // Builds an XPath selector based on a specific attribute and its value.
    ElementByAttribute: function(elemntattribute, elemntattributevalue) {
      let elementbyattribute = {xpath:`*//*[@${elemntattribute}="${elemntattributevalue}"]`};
      return elementbyattribute;
    },

    // Builds an XPath selector for a screen element based on its exact XPath.
    ElementByXpath: function(elemntXpath) {
      let Elemntbyxpath = {xpath: elemntXpath};
      return Elemntbyxpath;
    },
    selectorforgettext: function(elemntidentifier) {
      let MenuElemntGettext = {xpath: "*//Row[./Text[contains(text(),"+'"'+elemntidentifier+'"'+")]]/*/Text"};
      console.log(MenuElemntGettext);
      return MenuElemntGettext;      
    },
  };
 
  module.exports = {
    UiElementSelectorBuilder
  };
