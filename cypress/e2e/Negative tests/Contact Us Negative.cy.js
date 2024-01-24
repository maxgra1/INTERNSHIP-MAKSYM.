///<reference types = "Cypress"/>
describe('Contact Us NEgative tests', () => {
    const baseUrl = 'https://stg.xpertesy.com/contact-us';
    it('Contact Us should be visible', () => {
        cy.get('.headline').should('be.visible');
        cy.get('.input-with-icon-left > #name').should('be.visible');
        cy.get('.input-with-icon-left > #email').should('be.visible');
        cy.get('#contactform > :nth-child(2) > #subject').should('be.visible');
        cy.get('#contactform > :nth-child(2) > #subject').should('be.visible');
        cy.get('#contactform > #submit').should('be.visible');
        cy.get('.col-lg-8').should('be.visible');
        //all object should be visible
      });
    it('Contact Us invalid email', () => {
        cy.get('.input-with-icon-left > #name').type('John Doe'); 
        cy.get('.input-with-icon-left > #email').type('invalidemail'); 
        cy.get('#contactform > :nth-child(2) > #subject').type('Test Subject'); 
        cy.get('#contactform > :nth-child(2) > #subject').type('Test Subject Message'); 
        cy.get('#contactform > :nth-child(3) > #message').type('Test Message'); 
        cy.get('#contactform > #submit').click();
        //u should receive error message
      });
    it('Contact Us should display error message on too short message submission', () => {
        cy.get('.input-with-icon-left > #name').type('John Doe'); 
        cy.get('.input-with-icon-left > #email').type('johndoe@example.com'); 
        cy.get('#contactform > :nth-child(2) > #subject').type('Test Subject'); 
        cy.get('#contactform > :nth-child(2) > #subject').type('Hi'); 
        cy.get('#contactform > :nth-child(3) > #message').type(','); 
        cy.get('#contactform > #submit').click();
    });
    it('Contact Us without name', () => {
        cy.get('.input-with-icon-left > #email').type('invalidemail'); 
        cy.get('#contactform > :nth-child(2) > #subject').type('johndoe@example.com'); 
        cy.get('#contactform > :nth-child(2) > #subject').type('Test Subject Message'); 
        cy.get('#contactform > :nth-child(3) > #message').type('Test Message'); 
        cy.get('#contactform > #submit').click();
        //u should receive error message about name
      });
      it('Contact Us without email', () => {
        cy.get('.input-with-icon-left > #name').type('John Doe');
        cy.get('#contactform > :nth-child(2) > #subject').type('Test Subject Message'); 
        cy.get('#contactform > :nth-child(3) > #message').type('Test Message'); 
        cy.get('#contactform > #submit').click();
        //u should receive error message about fill out this field
      });
      
    beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit('https://stg.xpertesy.com/contact-us');
    });
  
  });
  