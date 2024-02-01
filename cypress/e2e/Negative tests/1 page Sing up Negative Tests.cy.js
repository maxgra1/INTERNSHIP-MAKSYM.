///<reference types = "Cypress"/>
describe('Sing Up negative Tests', () => {
    const baseUrl = 'https://stg.xpertesy.com/ed/';
  
    beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit('https://stg.xpertesy.com/ed/');
    });
  
    it('Sing up', () => {
      cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    });
    it('should show error for invalid email format', () => {
      cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    
      cy.get('#emailaddress-start').type('invalidEmailFormat');
      cy.get('#start-form > .button').click();
    
      //we receive error message
    });
    it('should show error for empty email field', () => {
      cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    
      cy.get('#emailaddress-start').type('invalidEmailFormat');
      cy.get('#emailaddress-start').clear(); // clear
      cy.get('#start-form > .button').click();
    
      //cy.get('.error-message').should('contain', ' Please fill out this field');
    });
    it('should show error for already registered email', () => {
      cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    
      cy.get('#emailaddress-start').type('maksgrod54@gmail.com');
      cy.get('#start-form > .button').click();
    
      cy.get('#login-form').should('be.visible');
    });
    it('should show error for not choosing recommended signup method', () => {
      cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    
      cy.get('#start-form > .button').click();
    
      //we receive error message
    });
    it('should show error for special characters in email', () => {
      cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    
      cy.get('#emailaddress-start').type('11@example.com');
      cy.get('#start-form > .button').click();
    
      //cy.get('.error-message').should('contain', 'Email contains invalid characters');
    });
    it('should show error for weak password', () => {
      cy.get('a[href="#sign-in-dialog"]').eq(0).click();
      cy.get('#emailaddress-start').type('11@example.com');
      cy.get('#start-form > .button').click();
      cy.get('#register-account-form > .margin-top-10')
    
      cy.get('#error-message').should('contain', 'Password is too weak');
    });
    
    
    cy.pause
  });
  