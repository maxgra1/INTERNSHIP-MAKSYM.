///<reference types = "Cypress"/>
describe('Contact Us Negative', () => {
    const baseUrl = 'https://xpertesy.com/contact-us';
    it('Url should contain', () => {
        cy.url('https://xpertesy.com/contact-us').should('include', '/contact-us');
    });
    it('Contact Us should be visible', () => {
        cy.get('#contactUs').contains('Contact Us');
        cy.get('.headline').should('be.visible');
        cy.get('.input-with-icon-left > #name').should('be.visible');
        cy.get('.input-with-icon-left > #email').should('be.visible');
        cy.get('#contactform > :nth-child(2) > #subject').should('be.visible');
        cy.get('#contactform > :nth-child(2) > #subject').should('be.visible');
        cy.get('#contactform > #submit').should('be.visible');
        cy.get('.col-lg-8').should('be.visible');
        //all object should be visible
      });
    it('Fill All fields', () => {
        cy.get('.input-with-icon-left > #email').type('johndoe@example.com');
        cy.get('.input-with-icon-left > #name').type('Testname') 
        cy.get('#contactform > :nth-child(2) > #subject').type('Test Subject'); 
        cy.get('#contactform > :nth-child(2) > #subject').type('Hi'); 
        cy.get('#contactform > :nth-child(3) > #message').type('Test Message'); 
        cy.get('#contactform > #submit').click();
    });
    it('receive submit message', () => {
        cy.get('.input-with-icon-left > #email').type('johndoe@example.com');
        cy.get('.input-with-icon-left > #name').type('Testname') 
        cy.get('#contactform > :nth-child(2) > #subject').type('Test Subject'); 
        cy.get('#contactform > :nth-child(2) > #subject').type('Hi'); 
        cy.get('#contactform > :nth-child(3) > #message').type('Test Message'); 
        cy.get('#contactform > #submit').click();
        cy.get('#contactform > .closeable > p').should('be.visible');
    });
  it('Lower Contact Us should be visible', () => {
        cy.get('.col-xl-4 > h3').contains('Contact Us');
        cy.get(':nth-child(2) > a > span').contains('Contact Us');
        cy.get('#contactform-footer > .row > :nth-child(1) > div > #name').should('be.visible');
        cy.get('#contactform-footer > .row > :nth-child(2) > div > #email').should('be.visible');
        cy.get('#contactform-footer > :nth-child(2) > #subject').should('be.visible');
        cy.get('#contactform-footer > :nth-child(3) > #message').should('be.visible');
        cy.get('#contactform-footer > #submit').should('be.visible');
        //all object should be visible
      });

      it('bottom menu', () => {
        cy.get('#contactform-footer > .row > :nth-child(1) > div > #name').type('Testname');
        cy.get('#contactform-footer > .row > :nth-child(2) > div > #email').type('johndoe@example.com');
        cy.get('#contactform-footer > :nth-child(2) > #subject').type('1test');
        cy.get('#contactform-footer > :nth-child(3) > #message').type('1Test');
        cy.get('#contactform-footer > #submit').click();
        cy.get('#contactform-footer > .closeable > p').should('be.visible');

      });
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit('https://xpertesy.com/contact-us');
    });
  });