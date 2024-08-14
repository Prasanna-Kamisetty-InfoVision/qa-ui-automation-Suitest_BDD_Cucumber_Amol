# @e2e @smoke
# Feature: DC Power OFF/ON
#   DC Power OFF/ON on top of HTML apps with 'Input at Power On' set as 'Last Used TV Input' & 'Power Mode' set as 'Quick Start Mode'

#   # Pre-Conditions
#   Background:
#     Given Set "Input at Power On" as "Last Used TV Input" and Set "Power Mode" as "Quick Start" under system from settings

#   Scenario: Perform DC Power OFF/ON on Tubi and pluto App with 'Input at Power On' set as 'Last Used TV Input' & 'Power Mode' set as 'Quick Start Mode'

#     # Open Vizio Home page and Verify the same
#     Given I am On vizio home page
#     Then Verify that vizio home page opened
#     # launching Tubi and playback any content from list on "Tubi"**********
#     When I launch the HTML App Tubi and perform playback on any content from list on Tubi app
#     # Dc Power OFF
#     When I perform DC Power OFF on the TV
#     Then I wait for 30 seconds
#     # Dc Power ON
#     When I perform DC Power ON on the TV
#     Then The TV should power ON successfully
#     # launching Pluto and playback any content from list on "Pluto"
#     When I launch the HTML App Pluto and perform playback on any content from list on Pluto app
#     # Dc Power OFF
#     When I perform DC Power Off on the TV
#     Then I wait for 30 seconds
#     # Dc Power ON
#     When I perform DC Power ON on the Tv
#     Then The TV should display the Vizio Home screen without any issues
