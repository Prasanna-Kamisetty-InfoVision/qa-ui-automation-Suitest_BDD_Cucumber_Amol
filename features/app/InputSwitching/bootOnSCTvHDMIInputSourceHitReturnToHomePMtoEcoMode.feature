#  @e2e @smoke
# Feature:Smoke test
#  BootOnSCTV on top of inactive HDMI Input Source & hit 'Return to Home' option during timer display while 'Input at Power On' is set to 'VIZIO Home'&'Power Mode' is set to Eco Mode

#   Scenario:boot On SCTv HDMI Input Source Hit Return To Home PM To Eco Mode
   
#     Given Ensure 'Input at Power On' is set to 'VIZIO Home' and 'Power Mode' is set to Eco Mode in Menu > All Settings >> System
#     When I am on Vizio Home page
#     Then Click on Input menu
#     Then I click on the HDMI-1
#     Then It should switch to selected HDMI-1 input and display message.
#     Then Wait for 30 secs and should display countdown timer for 30 secs to bottom left of screen and should display message
#     Then Hit the Return to Home
#     Then It should redirect back to VIZIO Home screen successfully without any issues

