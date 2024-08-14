/*******************************************************************
*  Script : Suitest Smoke Test Suite
*  Description : framework description
*  Created by : Offshore Team QE practice
*  Created on: 08 Aug 2024
*  Last Updated on: 13 Aug 2024
*  Created By : Amol Lad
*******************************************************************/

# Folders Structure :

qa-ui-automation(--route folder)
|
├── common.utils/(--common method implementation)
│
├── features/(--Test cases with Ghirkin keywords)
│   ├── app/
│   │   └── FileName.feature
|   |
│   ├── step_definations/(--steps mapping for each step of feature file)
│   │   └── FileName.steps.js
|   |
│   ├── pageModels/(--reusable methods implementation for respective pages)
│   │   └── FileName.page.js
|   |  
│   └──preConditions/(--reusable methods implementation for respective pages of feature file)
|       └── FileName.page.js
│   
├── resources/
|   ├── selectors/
|   ├── config/
|   └── testData/
│
├── node_modules/
│
├── NamingConventions
|
├── package.json
|
├── README_BDD_Cucumber.md
|
└── ScenarioJIRA

# Folder Structure and Description :

# Feature File : 
A Feature file is written in Gherkin language and contains high-level descriptions of the behavior of an application.
It specifies the scenarios that describe how the application should behave in various situations considering user perspective.

# Step defination File : 
Each step of feature file is mapped into seperate step in the step definition file and respective functions are called based upon functionality of the step definition

# PageModel File : 
This file contains all common reusable functions implention

# Background : 
All the required prerequisite/Preconditions for Test Cases will be stored under background keyword.

# Examples : 
If the application need to be check with different set of data, examples keyword can be used for parameterized test cases

# Resources:
This file contains data needed for testing eg. locators, testData 

# NamingConventions :
This file contains Abbrivations or short forms for different words for better readability 

# ScenarioJIRA : 
This file contains information about the scenario eg. scenario, TestCaseIDs, JiraId's and QA names for respective scenarios

# CommonUtils :  
This file contains common reusable functions those are common inside the framework


# Execution and reporting :

1. To Execute single testcase
    npx cucumber-js feature/file_name
2. To Run multiple testcases
    npm run start
3. To Execute using tags
    npx cucumber-js --tags="smoke"
4. To change the profile
    npx cucumber-js --profile profile_name 


