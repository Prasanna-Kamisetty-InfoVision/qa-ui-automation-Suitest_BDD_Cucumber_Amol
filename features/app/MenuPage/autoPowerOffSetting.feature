# @e2e @smoke
# Feature: DC Power OFF/ON
#   Verify 'Auto Power OFF' setting-C21319645, VZ-610

#   Scenario: Test Auto Power Off and Power On functionality

#     Given Set "Input at Power On" as "Last Used TV Input" and Set "Power Mode" as "Eco Mode" under system from settings
#     Given I am On vizio home page
#     When I click on Input Button
#     Then Navigate to HDMI_1 Input
#     Then Verify HDMI_1 input with No signal page
#     Then I click on back button
#     When I click on Menu button
#     Then Navigate to all settings
#     Then Navigate to system
#     Then Navigate to timers
#     Then Navigate to auto power off
#     Then Set auto power off for 10 min
#     Then TV should auto power off after 10 minutes
#     When I perform DC Power on TV
#     Then the UI should appear properly