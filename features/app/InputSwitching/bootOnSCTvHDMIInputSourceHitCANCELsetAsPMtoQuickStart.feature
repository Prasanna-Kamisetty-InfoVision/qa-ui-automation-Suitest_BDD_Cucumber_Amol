 # /*******************************************************************
# *  Script : Suitest Smoke Test Suite
# *  Description : Input Switching feature file
# *  Created by : Offshore Team QE practice
# *  Created on: 13 Aug 2024
# *  Last Updated on: 13 Aug 2024
# *  Created By : Prasanna Kamisetty
# *******************************************************************/

 @e2e @smoke
Feature:Smoke test
 BootOnSCTV on top of inactive HDMI Input Source & hit 'Cancel' option during timer display while 'Input at Power On' is set to 'VIZIO Home'&'Power Mode' is set to Quick Start

  Scenario:boot On SCTv HDMI Input Source Hit Cancel PM To Quick Start
   
    Given Ensure 'Input at Power On' is set to 'VIZIO Home' and 'Power Mode' is set to Quick Start in Menu > All Settings >> System
    When I am on Vizio Home page
    Then Click on Input menu
    Then I click on the HDMI-1
    Then It should switch to selected HDMI-1 input and display message.
    Then Wait for 30 secs and should display countdown timer for 30 secs to bottom left of screen and should display message
    Then Hit the Cancel
    Then It should remain on same input source for ex: HDMI 1 with same notification message 

