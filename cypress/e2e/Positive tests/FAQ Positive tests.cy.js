///<reference types = "Cypress"/>
describe('FAQ Positive tests', () => {
    const baseUrl = 'https://xpertesy.com/ed/#faq-section';
    it('FAQ should be visible', () => {
        cy.get(':nth-child(7) > a').click();
        cy.get('#faq > .container > .row > .col-xl-12 > .title-sub-group-home').should('be.visible');
        cy.get(':nth-child(1) > .accordion-header').should('be.visible');
        cy.get(':nth-child(2) > .accordion-header').should('be.visible');
        cy.get(':nth-child(3) > .accordion-header').should('be.visible');
        cy.get(':nth-child(4) > .accordion-header').should('be.visible');
        cy.get(':nth-child(5) > .accordion-header').should('be.visible');
        cy.get(':nth-child(6) > .accordion-header').should('be.visible');
        cy.get(':nth-child(7) > .accordion-header').should('be.visible');
        cy.get(':nth-child(8) > .accordion-header').should('be.visible');
        cy.get(':nth-child(9) > .accordion-header').should('be.visible');
        cy.get(':nth-child(10) > .accordion-header').should('be.visible');
      });
    it('FAQ should be visible', () => {
        cy.get(':nth-child(7) > a').click();
        cy.get('#faq > .container > .row > .col-xl-12 > .title-sub-group-home').should('be.visible');
        cy.get(':nth-child(1) > .accordion-header').click();
        cy.get('.active > .accordion-body > .accordion-body__contents').should('be.visible');
        cy.get(':nth-child(2) > .accordion-header').click();
        cy.get('.active > .accordion-body > .accordion-body__contents').should('be.visible');
        cy.get(':nth-child(3) > .accordion-header').click();
        cy.get('.active > .accordion-body > .accordion-body__contents').should('be.visible');
        cy.get(':nth-child(4) > .accordion-header').click();
        cy.get('.active > .accordion-body > .accordion-body__contents').should('be.visible');
        cy.get(':nth-child(5) > .accordion-header').click();
        cy.get('.active > .accordion-body > .accordion-body__contents').should('be.visible');
        cy.get(':nth-child(6) > .accordion-header').click();
        cy.get('.active > .accordion-body > .accordion-body__contents').should('be.visible');
        cy.get(':nth-child(7) > .accordion-header').click();
        cy.get('.active > .accordion-body > .accordion-body__contents').should('be.visible');
        cy.get(':nth-child(8) > .accordion-header').click();
        cy.get('.active > .accordion-body > .accordion-body__contents').should('be.visible');
        cy.get(':nth-child(9) > .accordion-header').click();
        cy.get('.active > .accordion-body > .accordion-body__contents').should('be.visible');
        cy.get(':nth-child(10) > .accordion-header').click();;
        cy.get('.active > .accordion-body > .accordion-body__contents').should('be.visible');
      });

      it('FAQ should be visible', () => {
        cy.get(':nth-child(7) > a').click();
        cy.get('#faq > .container > .row > .col-xl-12 > .title-sub-group-home').should('be.visible');
        cy.get(':nth-child(1) > .accordion-header').should('be.visible');
        cy.get(':nth-child(2) > .accordion-header').should('be.visible');
        cy.get(':nth-child(3) > .accordion-header').should('be.visible');
        cy.get(':nth-child(4) > .accordion-header').should('be.visible');
        cy.get(':nth-child(5) > .accordion-header').should('be.visible');
        cy.get(':nth-child(6) > .accordion-header').should('be.visible');
        cy.get(':nth-child(7) > .accordion-header').should('be.visible');
        cy.get(':nth-child(8) > .accordion-header').should('be.visible');
        cy.get(':nth-child(9) > .accordion-header').should('be.visible');
        cy.get(':nth-child(10) > .accordion-header').should('be.visible');
      });
      
  
    beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit('https://xpertesy.com/ed/#faq-section');
    });
  
    // it('Sing up', () => {
    //   cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    // });
    // it('should show error for invalid email format', () => {
    //   cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    
    //   cy.get('#emailaddress-start').type('invalidEmailFormat');
    //   cy.get('#start-form > .button').click();
    
    //   //we receive error message
    // });
  });
  