// import {practiseTest} from '../../../practiseTest.spec'
import 'cypress-iframe'

export class HomePage {

    constructor(articleWord, articlePageLoaded, dataLength) {
        this.articleWord = articleWord
        this.articlePageLoaded = articlePageLoaded
        this.dataLength = dataLength
    }
    
    
    navigateToSkyNewsHomePage() {
        cy.clearCookies()
        cy.visit(Cypress.env('baseUrl'))   
    }

    iframeAcceptMessage(){

        cy.switchToIframe(`[title="SP Consent Message"]`).find(`button[title="Accept"]`).click()
        cy.clearCookies()
    }


    homePageTitleTab() {
        cy.fixture('categories').then(function (data) {
            this.data = data
            cy.title().should(`eq`, this.data.pageTitle)
        })

    }


    siteCategories(){
        cy.fixture('categories').then(function (data) {
            this.data = data
            this.dataLength = this.data.siteCategories.length
            
            cy.get(`ul[class^="sdc-site-header__menu-cell"]`)
            .children()
            .should(`have.length`, this.dataLength)
            .each(($el, index) => {
                
    
                const categoriesText = $el.text().trim()
                expect(categoriesText).to.contain(this.data.siteCategories[index])
               
            })
        })

    }


    focusHomeCategory(){
        cy.get(`a[class="sdc-site-header__menu-item-link"]`)
        .first()
        .should(`have.attr`, `aria-current`, `true`)

    }

    climateTab() {
        cy.contains(`Climate`).click()
    }


    focusClimateCategory(){
        cy.get(`a[href="/climate"]`).first().should(`have.attr`, `aria-current`, `true`)
           
    }


    getArticleWord(){

        cy.get(`span[class="sdc-site-tile__headline-text"]`)
        .eq(6)
        .then( wordInArticle => {

            this.articleWord = wordInArticle.text().split(" ")[5].toLocaleLowerCase()
            

        }).then(() => {
            cy.log(this.articleWord)
        })

    }


    clickOnArticleLink(){
        cy.get(`span[class="sdc-site-tile__headline-text"]`)
        .eq(6)
        .parent()
        .invoke('removeAttr','target')
        .click({force: true})

        cy.url().then((newPageLoaded) => {

            this.articlePageLoaded = newPageLoaded
        }).then(() => {

            cy.log(this.articlePageLoaded)
        })

    }

    validateWordInTitle() {
      
        let urlText = this.articlePageLoaded
        urlText = urlText.toString()
        expect(urlText).to.include(this.articleWord);

        // let urlText = this.articlePageLoaded.split("://")
        // urlText = urlText[1].split("/")
        // let firstIndexRemoved = urlText.shift()
        // let secondIndexRemoved = urlText.shift()

    }

    // homePageArticleText() {
    //     cy.get(`span[class="sdc-site-tile__headline-text"]`)
    //     .eq(10)
    //     .then( story => {

    //         const storyText = story.text().split(" ")[5].toLocaleLowerCase()
    //         cy.log(storyText)
    //         cy.wrap(story).parent().invoke('removeAttr','target').click({force: true})
    //         cy.url().should(`include`, storyText)
    //     })


    // }



}

export const homePageMethods = new HomePage()