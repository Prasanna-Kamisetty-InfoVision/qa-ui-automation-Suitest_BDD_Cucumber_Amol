# # /*******************************************************************
# # *  Script : Suitest Smoke Test Suite
# # *  Description : Input Switching feature file( From physical to Virtual )
# # *  Created by : Offshore Team QE practice
# # *  Created on: 12 Aug 2024
# # *  Last Updated on: 12 Aug 2024
# # *  Created By : Pronoy Bose
# # *******************************************************************/
# @e2e @smoke
# Feature: Verify Input Switching across all inputs shown from top to bottom

#   Background:
#     Given The TV is in Vizio Home Screen
#     # Then Set "Input at Power On" as "Last Used TV Input" and Set "Power Mode" as "Quick Start" under system from settings

#   Scenario Outline: Switch through each Inputs available on the TV as per Test Case :- C21319622

#     Examples:
#       | starting_input | Input      |
#       | HDMI 1         | WatchFree  |
#       | HDMI 2         | Antenna    |
#       | HDMI 3         | AirPlay    |
#       | HDMi 4         | Vizio Home |
#       | Vizio Home     | HDMI 1     |
#       | WatchFree      | HDMI 2     |
#       | Antenna        | HDMI 3     |
#       | AirPlay        | HDMI 4     |
      
#   Scenario: Validate all inputs are functional sequentially
#     Given The TV is in Vizio Home Screen

#     When Home Page Verified

#     Then Verify Vizio Home from Side Input Menu

#     Then Switch To HDMI 1

#     Then Switch To watchfree Plus and Verfiy WF+

#     Then Switch To HDMI 2

#     Then Switch To AntennaInput

#     Then Switch To HDMI 3

#     Then Switch To AirPlay

#     Then Switch To HDMI 4

#     Then Switch Back to Vizio Home
    