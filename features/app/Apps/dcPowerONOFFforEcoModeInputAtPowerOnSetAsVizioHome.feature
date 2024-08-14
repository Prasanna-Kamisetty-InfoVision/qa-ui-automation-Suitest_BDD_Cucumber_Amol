# @e2e @smoke
# Feature: DC Power OFF/ON
#   DC Power OFF/ON on top of native apps with 'Input at Power On' set as 'Vizio Home' & 'Power Mode' set as 'Eco Mode'
  
#   # Pre-Conditions 
#   Background:
#     Given Set "Input at Power On" as "Vizio Home" and Set "Power Mode" as "Eco Mode" under system from settings

#   Scenario: Perform DC Power OFF/ON on Netflix and YouTube App with 'Input at Power On' set as 'Vizio Home' & 'Power Mode' set as 'Eco Mode'

#     # Open Vizio Home page and Verify the same
#     Given I am On vizio home page
#     Then Verify the vizio home page opened
#     # Launching Netflix and playback any content from list on "Netflix"
#     Then I Launch the Netflix app
#     Then I perform playback on any content from list on Netflix
#     Then I wait for 30 seconds
#     # Dc Power OFF
#     When I perform DC Power OFF on the TV
#     Then I wait for 30 seconds
#     # Dc Power ON
#     When I perform DC Power ON on the TV
#     Then The TV should power ON successfully
#     # launching YouTube and playback any content from list on "YouTube"
#     When I launch the YouTube app
#     Then I perform playback on any content from list on YouTube
#     Then I wait for 30 seconds
#     # Dc Power OFF
#     When I perform DC Power Off on the TV
#     Then I wait for 30 seconds
#     # Dc Power ON
#     When I perform DC Power ON on the Tv
#     Then The TV should display the Vizio Home screen without any issues