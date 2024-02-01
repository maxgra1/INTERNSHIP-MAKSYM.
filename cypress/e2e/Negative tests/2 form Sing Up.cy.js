///<reference types = "Cypress"/>
describe('Sing Up negative Tests', () => {
  const baseUrl = 'https://stg.xpertesy.com/ed/';

  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://stg.xpertesy.com/ed/');
  });

  
  it('should show error fill form', () => {
    cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    cy.get('#emailaddress-start').type('11@example.com');
    cy.get('#start-form > .button').click();
    cy.get('#register-account-form > .margin-top-10').click();
  
   // cy.get('#error-message').should('contain', 'Password is too weak');
  });
  it('should show error for short password', () => {
    cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    cy.get('#emailaddress-start').type('11@example.com');
    cy.get('#start-form > .button').click();
    cy.get('#firstname-register').type('Name');
    cy.get('#password-register').type('1234567');
    cy.get('#lastname-register').type('Last Name');
    cy.get('#password-repeat-register').type('1234567')
    cy.get('#register-account-form > .margin-top-10').click();
   cy.get('#register-notification > p').should('contain', 'Invalid Password! 8 - 20 characters expected');
  });
  it('Invaid password with space, should show error for wrong password', () => {
    cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    cy.get('#emailaddress-start').type('11@example.com');
    cy.get('#start-form > .button').click();
    cy.get('#firstname-register').type('Name');
    cy.get('#password-register').type('1234 567');
    cy.get('#lastname-register').type('Last Name');
    cy.get('#password-repeat-register').type('1234 567')
    cy.get('#register-account-form > .margin-top-10').click();
    cy.get('#register-notification > p').should('be.visible');
  });
  it('should show error for different password', () => {
    cy.get('a[href="#sign-in-dialog"]').eq(0).click();
    cy.get('#emailaddress-start').type('11@example.com');
    cy.get('#start-form > .button').click();
    cy.get('#firstname-register').type('Name');
    cy.get('#password-register').type('Invalid22');
    cy.get('#lastname-register').type('Last Name');
    cy.get('#password-repeat-register').type('Invalid23')
    cy.get('#register-account-form > .margin-top-10').click();
    cy.get('#register-notification > p').should('contain', 'Passwords do not match!');
  });
  
  
  cy.pause
});
