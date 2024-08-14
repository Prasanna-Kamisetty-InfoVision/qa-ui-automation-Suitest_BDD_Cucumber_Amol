# # /*******************************************************************
# # *  Script : Suitest Smoke Test Suite
# # *  Description : Input Switching feature file
# # *  Created by : Offshore Team QE practice
# # *  Created on: 09 Aug 2024
# # *  Last Updated on: 09 Aug 2024
# # *  Created By : Pronoy Bose
# # *******************************************************************/
# @e2e @smoke
# Feature: Verify Input Switching across all inputs shown from top to bottom

#   Background:
#     Given The TV is in Vizio Home Screen
#     Given Set "Input at Power On" as "Last Used TV Input" and Set "Power Mode" as "Quick Start" under system from settings

#   Scenario Outline: Switch through each Inputs available on the TV as per Test Case :- C21319622

#     Examples:
#       | starting_input | Input      |
#       | Vizio Home     | WatchFree  |
#       | WatchFree      | HDMI 1     |
#       | HDMI 1         | HDMI 2     |
#       | HDMI 2         | HDMI 3     |
#       | HDMI 3         | HDMI 4     |
#       | HDMI 4         | Antenna    |
#       | Antenna        | AirPlay    |
#       | AirPlay        | Vizio Home |

#   Scenario: Validate all inputs are functional sequentially
#     Given The TV is in Vizio Home Screen

#     When Home Page Verified

#     Then Verify Vizio Home from Side Input Menu

#     Then Switch To watchfree Plus and Verfiy WF+

#     Then Switch To HDMI 1

#     Then Switch To HDMI 2

#     Then Switch To HDMI 3

#     Then Switch To HDMI 4

#     Then Switch To AntennaInput

#     Then Switch To AirPlay
    
#     Then Switch Back to Vizio Home