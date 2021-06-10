Feature: Sky News Home page

    Testing some scenarios on the Sky News home page.

    
    Scenario: 1. Verify the browser tab’s title
        Given I am on the sky news home page
        Then the title of the browser tab is correct


    Scenario: 2. Verify the number of categories displayed and their names
        Given I am on the sky news home page
        Then the number of categories and their names are correct


    Scenario: 3. Verify the default focus point is on the Home category
        Given I am on the sky news home page
        Then the default focus point is on the home category

 
    Scenario: 4. Verify that a word in the title text of an article appears once title of the new page loads.
        Given I am on the sky news home page
        And I have selected a word from the title of an article
        When I click on the news article
        Then the selected word must be displayed on the news article page


    Scenario: 5. Verify the default focus point is on the Climate category
        Given I am on the sky news home page
        When I click on the climate tab
        Then the default focus point is on the climate category





