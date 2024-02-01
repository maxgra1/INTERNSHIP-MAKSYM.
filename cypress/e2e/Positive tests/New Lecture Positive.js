/<reference types = "Cypress"/>
beforeEach(() => {
  cy.viewport(1920, 1080)
});

describe('New Lecture Visible', () => {
  it('New Lecture dialog window is opened', () => {
    cy.Log12();
    cy.wait(2000)
    cy.get(':nth-child(4) > .popup-with-zoom-anim').click('');
    cy.get('#start-session-step-1 > .welcome-text > h3').should('be.visible')
    
  });
  it('New Lecture dialog window is opened', () => {
    cy.Log12();
    cy.wait(2000)
    cy.get(':nth-child(4) > .popup-with-zoom-anim').click('');
    cy.get('#start-session-step-1 > .row > :nth-child(1) > .category-box').click();
    cy.get('#start-session-step-2 > .welcome-text > h3').should('be.visible')
    cy.get('.mb-0 > .with-border').should('be.visible')
  });
    it('My Connections new dialog window is opened', () => {
      cy.Log12();
      cy.wait(2000)
      cy.get('[data-submenu-title="Manage"] > :nth-child(2) > a').click();
      cy.url().should('include', '/client-list/')
      cy.get('.dashboard-headline > h3').should('be.visible')
  });
  it('Guest option can be chosen And Verify the seesion now is created  ', () => {
    cy.Log12();
    cy.wait(2000)
    cy.get(':nth-child(3) > .popup-with-zoom-anim').click();
    cy.get(':nth-child(2) > .category-box').click();
    cy.get('.mb-0 > .with-border').should('be.visible');
    cy.get('#start-session-step-2 > :nth-child(4)').should('be.visible');
    cy.get('#start-session-step-2 > .welcome-text > h3').should('be.visible');
    cy.get('.user-type-radio > :nth-child(1) > label').click();
    cy.get('#start-session-step-2 > .copy-submit-box').click();
    cy.get('#guestSuccessModal > .mt-5').should('be.visible');
    cy.get('#guestSuccessModal > .close-success').click();
cy.wait(300)
    cy.get('.headline > h3').should('not.contain', '0');
});
it('Guest option can be chosen And Verify the seesion later is created  ', () => {
  cy.Log12();
  cy.wait(2000)
  cy.get(':nth-child(3) > .popup-with-zoom-anim').click();
  cy.get(':nth-child(2) > .category-box').click();
  cy.get('.mb-0 > .with-border').should('be.visible');
  cy.get('#start-session-step-2 > :nth-child(4)').should('be.visible');
  cy.get('#start-session-step-2 > .welcome-text > h3').should('be.visible');
  cy.get('.user-type-radio > :nth-child(2)').click();
  cy.get('.datepicker').should('be.visible');
  cy.get('.clockpicker').should('be.visible');
  cy.get('.datepicker').click();
  cy.get(':nth-child(1) > .datepicker').type('18/06/2026')
  cy.get('.clockpicker').click();
  cy.get('[style="left: 87px; top: 7px;"]').click();
  cy.get('[style="left: 87px; top: 7px; font-size: 120%;"]').click();
  cy.get('#start-session-step-2 > .copy-submit-box').click();
  cy.get('#guestSuccessModal > .mt-5').should('be.visible');
  cy.get('#guestSuccessModal > .close-success').click();
  cy.wait(3000)
  cy.get('.headline > h3').should('not.contain', '0');
});
})
