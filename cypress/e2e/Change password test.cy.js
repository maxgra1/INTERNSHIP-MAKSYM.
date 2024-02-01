///<reference types = "Cypress"/>
describe('Contact Us Negative', () => {
  const baseUrl = 'https://stg.xpertesy.com/ed';
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
  it('Generate Password', () => {
    const generatePassword = (length) => {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    };
    const Pass = generatePassword(8);
    cy.log('Generate paswword:', Pass);
  });
  it('Url should contain', () => {
    const generatePassword = (length) => {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    };
    const Pass = generatePassword(8);
    cy.log('Generate paswword:', Pass);
    cy.Rpass();
    cy.Log12();
    cy.wait(2000)
    cy.visit('https://stg.xpertesy.com/dashboard/settings/');
    cy.get(':nth-child(1) > .input-with-icon-left > .with-border').type('Maksgrod20')
    cy.get(':nth-child(2) > .input-with-icon-left > .with-border').type(Pass);
    cy.get(':nth-child(3) > .input-with-icon-left > .with-border').type(Pass);
    cy.get('.align-items-end').click();
    cy.get('#changepass-notification').should('be.visible')
    cy.get(':nth-child(1) > .input-with-icon-left > .with-border').type(Pass)
    cy.get(':nth-child(2) > .input-with-icon-left > .with-border').type('Maksgrod20');
    cy.get(':nth-child(3) > .input-with-icon-left > .with-border').type('Maksgrod20');
    cy.get('.align-items-end').click();
    cy.get('#changepass-notification').should('be.visible')
  });

  // it('Contact Us should be visible', () => {

  //   });

});