# # @e2e @smoke
# Feature: TV Power Mode and Input Configuration from Settings
#   Smoke test only detects if application build is launchable and it makes sense to continue running other tests on it.

#   Scenario: Pre Conditons for Power Modes To ECO, Quick Start And Input At Power On To Last Used TV, Vizio Home
    
#     Given DUT is Vizio Home Screen

#     When On Home Page Verified

#     Given Set "Input at Power On" as "Last Used TV Input" and Set "Power Mode" as "Quick Start" under system from settings
    
#     Given Set "Input at Power On" as "Last Used TV Input" and Set "Power Mode" as "Eco Mode" under system from settings
    
#     Given Set "Input at Power On" as "Vizio Home" and Set "Power Mode" as "Quick Start" under system from settings
    
#     Given Set "Input at Power On" as "Vizio Home" and Set "Power Mode" as "Eco Mode" under system from settings
