const suitest = require("suitest-js-api");
const { assert } = suitest;
const helpers = require("../../../common.utils");
class HomePage {
  static async navigateToHomePage() {
    try {
      helpers.pressHome();
      helpers.waitFor5Sec();
      console.log("I am on Home Page....!!!");
    } catch (error) {
      console.error("Error Unable to navigate to Home Page....!!!", error);
    }
  }
  static async verifyHomePageOpened() {
    try {
      const trendingNowTitle =
        helpers.UiElementSelectorBuilder.onScreenItemElementsimpleByText(
          "Trending Now"
        );
      console.log("XPath for Text Element 'Trending Now' : ", trendingNowTitle);
      helpers.waitFor10Sec();

      console.log("Verified that I am on home page...!!!");
    } catch (error) {
      console.error("Unable to Verify Home Page....!!!", error);
    }
  }
  static async launchNetflix() {
    try {
      //helpers. pressHome();
      /**
       * Go down two times to reach the Disney app and hit OK button
       */
      await helpers.pressDown();
      await helpers.pressDown();
      helpers.waitFor5Sec();

      await helpers.pressEnter();

      console.log("Test passed : Launched Netflix App successfully...!!!");
    } catch (error) {
      console.error("Unable to Launch Netflix App....!!!", error);
    }
  }
  static async playContentOnNetflix() {
    try {
      /**
       * starts playback assuming user is on content page
       */
      helpers.waitFor5Sec();
      await helpers.pressDown();
      await helpers.pressDown();
      helpers.waitFor5Sec();

      await helpers.pressEnter();

      helpers.waitFor30Sec();
      console.log("Played content for 30 second...!!! ");
    } catch {
      console.log("Test failed : Unable to play content on Netflix...!!!");
    }
  }
  static async launchYouTube() {
    try {
      /*
       * Open Home Page
       */
      helpers.pressHome();
      /**
       * Go down to reach the YouTube app assuming user is sign in
       */
      await helpers.pressDown(2);
      helpers.waitFor2Sec();
      await helpers.pressRight(8);
      await helpers.pressEnter();
      helpers.waitFor2Sec();
      console.log("Test passed : Launched YouTube App successfully...!!!");
    } catch (error) {
      console.error("Unable to Launched YouTube App....!!!", error);
    }
  }
  static async playContentOnYouTube() {
    try {
      /**
       * starts playback assuming user is on content page
       */
      helpers.waitFor5Sec();
      await helpers.pressDown();
      await helpers.pressDown();

      await helpers.pressEnter();
      helpers.waitFor30Sec();
      console.log("Played content for 30 second...!!! ");
    } catch {
      console.log("Test failed : Unable to play content on YouTube app...!!!");
    }
  }
  static async launchDisneyApp() {
    try {
      /*
       * Open Home Page
       */
      helpers.pressHome();
      /**
       * Go down to reach the YouTube app assuming user is sign in
       */
      await helpers.pressDown(2);
      helpers.waitFor2Sec();
      await helpers.pressRight(5);
      await helpers.pressEnter();
      helpers.waitFor2Sec();
      console.log("Test passed : Launched DisneyApp successfully...!!!");
    } catch (error) {
      console.error("Unable to Launched YouTube App....!!!", error);
    }
  }

  static async playContentOnDisney() {
    try {
      /**
       * starts playback assuming user is on content page
       */
      helpers.waitFor5Sec();
      await helpers.pressDown();
      await helpers.pressDown();

      await helpers.pressEnter();
      helpers.waitFor30Sec();
      console.log("Played content for 30 second...!!! ");
    } catch {
      console.log(
        "Test failed : Unable to play content on DisneyApp app...!!!"
      );
    }
  }

  static async launchSling() {
    try {
      /*
       * Open Home Page
       */
      helpers.pressHome();
      /**
       * Go down to reach the YouTube app assuming user is sign in
       */
      await helpers.pressDown(2);
      helpers.waitFor2Sec();
      await helpers.pressRight(6);
      await helpers.pressEnter();
      helpers.waitFor2Sec();
      console.log("Test passed : Launched SlingApp successfully...!!!");
    } catch (error) {
      console.error("Unable to Launched SlingApp....!!!", error);
    }
  }

  static async playContentOnSling() {
    try {
      /**
       * starts playback assuming user is on content page
       */
      helpers.waitFor5Sec();
      await helpers.pressDown();
      await helpers.pressDown();

      await helpers.pressEnter();
      helpers.waitFor30Sec();
      console.log("Played content for 30 second...!!! ");
    } catch {
      console.log("Test failed : Unable to play content on SlingApp...!!!");
    }
  }
  static async homeDemo() {
    try {
      await assert.openApp();
      await assert.runTest("468314eb-f7c1-487a-9ab6-ee0ede41ab23");
    } catch (error) {
      console.log(error);
    }
  }
  static async launchHTMLAppTubi() {
    try {
      helpers.pressDown(2);
      helpers.pressRight(6);
      helpers.pressEnter();
      helpers.waitFor30Sec();

      const VerifyingTubiHomePage =
        helpers.UiElementSelectorBuilder.onScreenItemElementsimpleByText(
          "Featured"
        );
      console.log(
        "XPath for Text Element 'Featured' : ",
        VerifyingTubiHomePage
      );

      helpers.pressEnter();

      const PlayTubiApp =
        helpers.UiElementSelectorBuilder.onScreenItemElementsimpleByText(
          "Play"
        );
      console.log("XPath for Text Element 'Play' : ", PlayTubiApp);

      helpers.pressEnter();

      console.log("Test Passed : Launched Tubi Apps successfully...!!!");
    } catch (error) {
      console.error("Unable to Launched Tubi App ....!!!", error);
    }
  }
  static async launchHTMLappPluto() {
    {
      try {
        helpers.pressDown(2);
        helpers.pressRight(17);
        helpers.pressEnter();
        helpers.waitFor30Sec();
        console.log("Test passed : Launched pluto tv App successfully...!!!");
      } catch (error) {
        console.error("Unable to Launched pluto App....!!!", error);
      }
    }
  }
}
module.exports = HomePage;
