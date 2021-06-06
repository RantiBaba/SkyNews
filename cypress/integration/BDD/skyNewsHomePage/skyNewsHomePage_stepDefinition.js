import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import { homePageMethods } from '../../../support/pageObject/homePage.spec'



//  Scenario: 1. Verify the browser tab’s title
Given(`I am on the sky news home page`, function() {

    homePageMethods.navigateToSkyNewsHomePage()
    homePageMethods.iframeAcceptMessage()
})

Then(`the title of the browser tab is correct`, function() {

    homePageMethods.homePageTitleTab()

})


// Scenario: 2. Verify the number of categories displayed and their names

Then(`the number of categories and their names are correct`, function() {
    
    homePageMethods.siteCategories()

})


// Scenario: 3. Verify the default focus point is on the Home category
Then(`the default focus point is on the home category`, function() {

    homePageMethods.focusHomeCategory()

})


// Scenario: 4. Verify that a word in the title text of an article appears once title of the new page loads.

And(`I have selected a word from the title of an article`, function() {


})

When(`I click on the news article`, function() {


})


Then(`the selected word must be displayed on the news article page`, function() {

    homePageMethods.homePageArticleText()

})


// Scenario: 5. Verify the default focus point is on the Climate category
When(`I click on the climate tab`, function() {

    homePageMethods.climateTab()
})

Then(`the default focus point is on the climate category`, function() {

    homePageMethods.focusClimateCategory()

})
