# @e2e @smoke
# Feature: DC Power OFF/ON
#   DC Power OFF/ON on top of HTML apps with 'Input at Power On' set as 'Last Used TV Input' & 'Power Mode' set as 'Eco Mode'
  
#   # preconditions
#   Background:
#     Given Set "Input at Power On" as "Last Used TV Input" and Set "Power Mode" as "Eco Mode" under system from settings

#   Scenario: Perform DC Power OFF/ON on Disney and Sling App with 'Input at Power On' set as 'Last Used TV Input' & 'Power Mode' set as 'Eco Mode'

#     # Open Vizio Home page and Verify the same
#     Given I am On vizio home page
#     Then Verify the vizio home page opened
#     # Launching Disney and playback any content from list on "Disney"
#     Then I launch the HTML Disney App
#     Then I perform playback on any content from list on Disney app
#     Then I wait for 30 seconds
#     # Dc Power OFF
#     When I perform DC Power OFF on the TV
#     Then I wait for 30 seconds
#     # Dc Power ON
#     When I perform DC Power ON on the TV
#     Then The TV should power ON successfully
#     # launching HTML Sling App and playback any content from list on "Sling"
#     When I launch the HTML Sling App
#     Then I perform playback on any content from list on Sling app
#     # Dc Power OFF
#     When I perform DC Power Off on the TV
#     Then I wait for 30 seconds
#     # Dc Power ON
#     When I perform DC Power ON on the Tv
#     Then The TV should display the Vizio Home screen without any issues