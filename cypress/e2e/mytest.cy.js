/// <reference types="cypress"/>

describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://www.almosafer.com/ar')
    // cy.visit('https://www.almosafer.com/en')
    const websites=["https://www.almosafer.com/ar","https://www.almosafer.com/en"]
    const randomIndex= Math.floor(Math.random()*websites.length)
    cy.visit(websites[randomIndex])
    cy.get('.cta__saudi').click()
    // cy.get('#uncontrolled-tab-example-tab-hotels > .sc-kOnlKp').click()
    cy.get('#uncontrolled-tab-example-tab-hotels').click()
    if(randomIndex==0){

      cy.get('[data-testid="AutoCompleteInput"]').type("دبي")
      cy.get('[data-testid="AutoCompleteResultItem1"] > .sc-12clos8-5').click()
    }
    else if(randomIndex==1){
      cy.get('[data-testid="AutoCompleteInput"]').type("dubai")
      cy.wait(1000)
      cy.get('[data-testid="AutoCompleteResultItem1"] > .sc-12clos8-5').click()
    }
    

    })
  })
