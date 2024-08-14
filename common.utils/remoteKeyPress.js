/*******************************************************************
 *  Script Suitest Smoke Test Suite
 *  Description : This file will help storing common utility functions
 *  Created by : Offshore Team QE practice`
 *  Created on: 01 Aug 2024
 *  Last Updated on: 05 Aug 2024
 *  Updated By : Smruti pattanayak
 *******************************************************************/

const suitest = require("suitest-js-api");
const {assert, VRC } = suitest;
 
async function pressButton(button) {
  await suitest.press(VRC[button]);
}
 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 
const keyPressFunctions = {
  // Use 'await' when calling this function
  pressEnter: async (times = 1, delayTime = 1000) => {
    for (let i = 0; i < times; i++) {
    delay(delayTime / 2);
     pressButton("ENTER"),
     delay(delayTime);
    }
  },

  // Use 'await' when calling this function
  pressOK: async (times = 1, delayTime = 1000) => {
    for (let i = 0; i < times; i++) {
    delay(delayTime / 2);
    pressButton("OK"),
    delay(delayTime);
  }
},

  // Use 'await' when calling this function
  pressUp: async (times = 1, delayTime = 1000) => {
    for (let i = 0; i < times; i++) {
    delay(delayTime / 2);
    pressButton("UP");
    delay(delayTime);
    }
  },

  // Use 'await' when calling this function
  pressDown: async (times = 1, delayTime = 1000) => {
    for (let i = 0; i < times; i++) {
       delay(delayTime / 1);
       pressButton("DOWN");
       delay(delayTime);
    }
  },

  // Use 'await' when calling this function
  pressLeft: async (times = 1, delayTime = 1000) => {
    for (let i = 0; i < times; i++) {
       delay(delayTime / 1);
       pressButton("LEFT");
       delay(delayTime);
    }
  },

  // Use 'await' when calling this function
  pressRight: async (times = 1, delayTime = 1000) => {
    for (let i = 0; i < times; i++) {
       delay(delayTime / 1);
       pressButton("RIGHT");
       delay(delayTime);
    }
  },
  verifyElementExists : async (selector,timeout = 2000) => {
    await assert.element(selector).exists().timeout(timeout);
  },
 
  pressDOWNUntilElementExists: async (Selector, repeat = 1) => {
    await assert.press(VRC.DOWN).until(suitest.element(Selector).exists()).repeat(repeat).interval(2000);
  },
  pressUPUntilElementExists: async (Selector, repeat = 1) => {
    await assert.press(VRC.UP).until(suitest.element(Selector).exists()).repeat(repeat).interval(2000);
  },
  pressLEFTUntilElementExists: async (Selector, repeat = 1) => {
    await assert.press(VRC.LEFT).until(suitest.element(Selector).exists()).repeat(repeat).interval(2000);
  },
  pressRIGHTUntilElementExists: async (Selector, repeat = 1) => {
    await assert.press(VRC.RIGHT).until(suitest.element(Selector).exists()).repeat(repeat).interval(2000);
  },
  
  pressBack: async () => await pressButton("BACK"),
  pressRed: async () => await pressButton("RED"),
  pressGreen: async () => await pressButton("GREEN"),
  pressYellow: async () => await pressButton("YELLOW"),
  pressBlue: async () => await pressButton("BLUE"),
  pressNum: async (num) => await pressButton(`NUM_${num}`),
  pressNext: async () => await pressButton("NEXT"),
  pressPrevious: async () => await pressButton("PREVIOUS"),
  pressFastForward: async () => await pressButton("FAST_FWD"),
  pressRewind: async () => await pressButton("REWIND"),
  pressStop: async () => await pressButton("STOP"),
  pressPlay: async () => await pressButton("PLAY"),
  pressPause: async () => await pressButton("PAUSE"),
  pressPlayPause: async () => await pressButton("PLAY_PAUSE"),
  pressRecord: async () => await pressButton("RECORD"),
  pressVolumeUp: async (times = 1, delayTime = 1000) => {
    for (let i = 0; i < times; i++) {
      await pressButton("VOL_UP");
      await delay(delayTime);
    }
  },
  pressVolumeDown: async (times = 1, delayTime = 1000) => {
    for (let i = 0; i < times; i++) {
      await pressButton("VOL_DOWN");
      await delay(delayTime);
    }
  },
  pressMute: async () => await pressButton("MUTE"),
  pressTeletext: async () => await pressButton("TELETEXT"),
  pressMenu: async () => await pressButton("MENU"),
  pressInput: async () => await pressButton("SOURCE"),
  pressHome: async () => await pressButton("SMART"),
  pressGuide: async () => await pressButton("GUIDE"),
  pressExit: async () => await pressButton("EXIT"),
  pressPowerOff: async () => await pressButton("POWER"),
  pressPowerOn: async () => await pressButton("POWER"),
  pressChannelUp: async (times = 1, delayTime = 1000) => {
    for (let i = 0; i < times; i++) {
      await delay(delayTime / 1);
      await pressButton("CH_UP");
      await delay(delayTime);
    }
  },
  pressChannelDown: async (times = 1, delayTime = 1000) => {
    for (let i = 0; i < times; i++) {
      await delay(delayTime / 1);
      await pressButton("CH_DOWN");
      await delay(delayTime);
    }
  },
  pressInfo: async () => await pressButton("INFO"),
  pressNetflix: async () => await pressButton("SPECIAL_NETFLIX"),
  pressYouTube: async () => await pressButton("SPECIAL_YOUTUBE"),
 
};
 
module.exports = keyPressFunctions;
 