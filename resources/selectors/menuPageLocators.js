/*******************************************************************
*  Script : Suitest Smoke Test Suite
*  Description : This Script contains all the Xpath for Menu Items Level Wise.
*  Created by : Offshore Team QE practice
*  Created on: 11 July 2024
*  Last Updated on: 12 July 2024
*  Created By : Pronoy Bose
*******************************************************************/
 
/**
*  -------------------------------------    NOTE     --------------------------------------------/
*   Xpaths Declared are not dependent upon Chipset Type Until Menu_Order/UI Elements changes/different
*       Please dont -------------     ALTER / CHANGE / MODIFY / DELETE     existing Xpaths---------/
*       Please Do ------------------------   ADD XPaths ----------------------as per need---------/
*  ----------------------------------------------------------------------------------------------/
*/
 
module.exports = {
    // Home Elements
    trendingNow: { xpath: '*//Container/RowReverse/Column/Column/Column/Column[1]/Container[./Text[text()="Trending Now"]]' },
 
    // Menu Items Level 1
    pictureMode: { xpath: '*//Container/Gradient/Rectangle[1]/Row[1]/Column[./Text[text()="Picture Mode"]]'},
    allSettings: { xpath: '*//Container/Gradient/Row[2]/Rectangle[1][./Text[text()="All Settings"]]' },
    allSettings_Focused: { xpath: '*//Container/Gradient/Row[2]/Rectangle[1][./Text[text()="All Settings"]][@focused="true"]' },
 
    // Menu Items Level 2
    bluetoothHeadphones: { xpath: '*//Container/Row/Column/Column/Column/Row[1][./Text[text()="Bluetooth Headphones"]]' },
    bluetoothHeadphones_Focused: { xpath: '*//Container/Row/Column/Column/Column/Row[1][./Text[text()="Bluetooth Headphones"]][@focused="true"]' },
    system: { xpath: '*//Container/Row/Column/Column/Column/Row[7][./Text[text()="System"]]' },
    system_focused: { xpath: '*//Container/Row/Column/Column/Column/Row[7][./Text[text()="System"]][@focused="true"]' },
    AdminAndPrivacy: { xpath: '*//Container/Row/Column/Column/Column/Row[8][./Text[text()="Admin & Privacy"]]' },
    AdminAndPrivacy_Focused: { xpath: '*//Container/Row/Column/Column/Column/Row[8][./Text[text()="Admin & Privacy"]][@focused="true"]' },
    userManual: { xpath: '*//Container/Row/Column/Column/Column/Row[9][./Text[text()="User Manual"]]' },
    userManual_Focused: { xpath: '*//Container/Row/Column/Column/Column/Row[9][./Text[text()="User Manual"]][@focused="true"]' },
 
    // Menu Items Level 3
    inputAtPowerOn: { xpath: '*//Container/Row/Column/Column/Column/Row[7][./Text[text()="Input at Power On"]]' },
    inputAtPowerOn_Focused: { xpath: '*//Container/Row/Column/Column/Column/Row[7][./Text[text()="Input at Power On"]][@focused="true"]' },
    powerMode: { xpath: '*//Container/Row/Column/Column/Column/Row[8][./Text[text()="Power Mode"]]' },
    powerMode_Focused: { xpath: '*//Container/Row/Column/Column/Column/Row[8][./Text[text()="Power Mode"]][@focused="true"]' },
    tvInformation: { xpath: '*//Container/Row/Column/Column/Column/Row[2][./Text[text()="TV Information"]]' },
    tvInformation_Focused: { xpath: '*//Container/Row/Column/Column/Column/Row[2][./Text[text()="TV Information"]][@focused="true"]' },
 
    // Menu Items Level 4
    vizioHomeInputSelected: { xpath: '*//Container/Row/Column/Column/Column/Row[1][./Text[text()="VIZIO Home"]]' },
    vizioHomeInputSelected_Focused: { xpath: '*//Container/Row/Column/Column/Column/Row[1][./Text[text()="VIZIO Home"]][@focused="true"]' },
    lastUsedTVInputSelected: { xpath: '*//Container/Row/Column/Column/Column/Row[2][./Text[text()="Last Used TV Input"]]' },
    lastUsedTVInputSelected_Focused: { xpath: '*//Container/Row/Column/Column/Column/Row[2][./Text[text()="Last Used TV Input"]][@focused="true"]' },
    ecoMode: { xpath: '*//Container/Row/Column/Column/Column/Row[1][./Text[text()="Eco Mode"]]' },
    ecoMode_focused: { xpath: '*//Container/Row/Column/Column/Column/Row[1][./Text[text()="Eco Mode"]][@focused="true"]' },
    quickStart: { xpath: '*//Container/Row/Column/Column/Column/Row[2][./Text[text()="Quick Start"]]' },
    quickStart_focused: { xpath: '*//Container/Row/Column/Column/Column/Row[2][./Text[text()="Quick Start"]][@focused="true"]' },
 
    // Common Selector for HDMI InPuts
    NSCircle: { xpath: '*//Container/Column/Row/Row/Column[./Text[text()="No signal available. Returning to VIZIO Home."]]' },
    returnToHome: { xpath: '*//Container/Column/Row/Row/Row/Container[1]/FocusOutline[./Text[text()="Return to Home"]]' },
    Cancel: { xpath: '*//Container/Column/Row/Row/Row/Container[2]/FocusOutline[./Text[text()="Cancel"]]' },
 
    //Input Selectors
    VizioHome: { xpath: '*//Row[./Text[text()="VIZIO Home"]]' },
    VizioHome_focused: { xpath: '*//Row[./Text[text()="VIZIO Home"]][@focused="true"]' },
    WatchFreePlus: { xpath: '*//Row[./Text[text()="WatchFree+"]]' },
    WatchFreePlus_focused: { xpath: '*//Row[./Text[text()="WatchFree+"]][@focused="true"]' },
    WatchFreePlus_Recent: { xpath: '*//Container[./Text[text()="RECENT"]]' },
    HDMI_1: { xpath: '*//Row[./Text[text()="HDMI 1"]]' },
    HDMI_1_focused: { xpath: '*//Row[./Text[text()="HDMI 1"]][@focused="true"]' },
    noSignalTextHdmi1: { xpath: '//SceneRoot[./Row[1]/Column[.//Text[text()="No Signal - HDMI-1"]][.//Text[text()="Check if the source device is connected and powered on."]][.//Text[text()="Or press the INPUT button to select the input for the source device."]]]' },
    HDMI_2: { xpath: '*//Row[./Text[text()="HDMI 2"]]' },
    HDMI_2_focused: { xpath: '*//Row[./Text[text()="HDMI 2"]][@focused="true"]' },
    noSignalTextHdmi2: { xpath: '//SceneRoot[./Row[1]/Column[.//Text[text()="No Signal - HDMI-2"]][.//Text[text()="Check if the source device is connected and powered on."]][.//Text[text()="Or press the INPUT button to select the input for the source device."]]]' },
    HDMI_3: { xpath: '*//Row[./Text[text()="HDMI 3"]]' },
    HDMI_3_focused: { xpath: '*//Row[./Text[text()="HDMI 3"]][@focused="true"]' },
    noSignalTextHdmi3: { xpath: '//SceneRoot[./Row[1]/Column[.//Text[text()="No Signal - HDMI-3"]][.//Text[text()="Check if the source device is connected and powered on."]][.//Text[text()="Or press the INPUT button to select the input for the source device."]]]' },
    HDMI_4: { xpath: '*//Row[./Text[text()="HDMI 4"]]' },
    HDMI_4_focused: { xpath: '*//Row[./Text[text()="HDMI 4"]][@focused="true"]' },
    noSignalTextHdmi4: { xpath: '//SceneRoot[./Row[1]/Column[.//Text[text()="No Signal - HDMI-4"]][.//Text[text()="Check if the source device is connected and powered on."]][.//Text[text()="Or press the INPUT button to select the input for the source device."]]]' },
    Antenna: { xpath: '*//Row[./Text[text()="Antenna"]]' },
    Antenna_focused: { xpath: '*//Row[./Text[text()="Antenna"]][@focused="true"]' },
    AntennaButton_FindChannels: { xpath: '*//Container/Column/Container/Column/Row/Rectangle[2]/Rectangle[./Text[text()="Find Channels"]]' },
    NoSignalAntenna: { xpath: '*//Container/Column/Container/Column/[.//Text[text()="Add Your Antenna and Broadcast Channels to WatchFree+"]]' },
    Airplay: { xpath: '*//Row[./Text[text()="AirPlay"]]' },
    Airplay_focused: { xpath: '*//Row[./Text[text()="AirPlay"]][@focused="true"]' },
    USB: { xpath: '*//Row[./Text[text()="USB"]]' },
    USB_focused: { xpath: '*//Row[./Text[text()="USB"]][@focused="true"]' },
 
};