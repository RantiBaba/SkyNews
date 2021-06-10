# Objective

BDD framework built using Javascript/cypress.io, to test some features within the home page of Sky News website.


# Application under test (AUT)

https://news.sky.com/



# The task

1)	Using the BDD (Given/When/Then) format, write 5 test cases that relate to features of the SkyNews.com homepage, using a full screen desktop view.

A) Verify the browser tab’s title.

B) Verify the number of categories displayed and their names.

C) Verify the default focus point is on the Home category. 

D) Verify that if the user then clicks on ‘Climate’, this becomes the focus.

E) Select a story from the homepage. Verify that a word of your choice in the title text of the article you have just selected appears once title of the new page loads.



2)	In any language of your choice (ideally JavaScript), write the automation code for the 5 test cases from question 1. 



# Running this test on your local machine using cypress test runner

* Download node.js if you haven't done so already (see - https://nodejs.org/en/)
* Download npm as well if you don't have it installed on your local machine (see - https://www.npmjs.com/get-npm)
* Clone the code
* Open terminal window, cd to the project folder and run command 'npm i' to install latest version of the packages bundled with this framework
* Execute '**npm run cy:open**' to start cypress GUI runner (to run in headless mode, use command '**npm run cy:open**')
* Once the cypress test runner is opened, click on the feature file **skyNewsHomePage.feature** to run the test in GUI mode.
* Please note that cypress has been configured in this framework to execute tests with extension '.feature' only.
* If you aren't familiar with executing cypress tests, please see - (https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Run-all-specs)

