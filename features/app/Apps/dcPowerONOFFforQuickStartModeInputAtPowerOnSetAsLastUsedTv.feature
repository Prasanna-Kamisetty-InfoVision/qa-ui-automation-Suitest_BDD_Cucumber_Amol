# @e2e @smoke
# Feature: DC Power OFF/ON
#   DC Power OFF/ON on top of native apps with 'Input at Power On' set as 'Last Used TV Input' & 'Power Mode' set as 'Quick Start'
#   # Note:
#   # Test Cases from Test rail will be converted into BDD format feature file
#   # It contains high-level descriptions of the behavior of an application.
#   # It specifies the scenarios that describe how the application should behave in various situations considering user perspective.
#   # Background : All the required prerequisite/Preconditions for Test Cases will be under background keyword.
#   # Examples : If the application need to be check with different set of data, examples can be used for parameterized test cases
  
#   # Pre-Conditions 
#   Background:
#     Given Set "Input at Power On" as "Last Used TV Input" and Set "Power Mode" as "Quick Start" under system from settings

#   Scenario: Perform DC Power OFF/ON on Netflix and YouTube App with 'Input at Power On' set as 'Last Used TV Input' & 'Power Mode' set as 'Quick Start'
  
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
#     Then I wait 30 seconds for YouTube playback
#     # Dc Power OFF
#     When I perform DC Power Off on the TV
#     Then I wait for 30 sec
#     # Dc Power ON
#     When I perform DC Power ON on the Tv
#     Then The TV should display the Vizio Home screen without any issues