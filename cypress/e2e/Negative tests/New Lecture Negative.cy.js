///<reference types = "Cypress"/>
beforeEach(() => {
  cy.viewport(1920, 1080)
});
describe('Guest Tests', () => {
it('Guest option is chosen without selecting when', () => {
  cy.Log12();
  cy.wait(2000);
  cy.get(':nth-child(4) > .popup-with-zoom-anim').click();
  cy.get(':nth-child(2) > .category-box').click();
  cy.get('#start-session-step-2 > .copy-submit-box').click();
  cy.get('#start-session-step-2 > .notification').should('be.visible')
});
it('Guest option is chosen without selecting time and date', () => {
  cy.Log12();
  cy.wait(2000);
  cy.get(':nth-child(4) > .popup-with-zoom-anim').click();
  cy.get(':nth-child(2) > .category-box').click();
  cy.get(':nth-child(2) > label').click();
  cy.get('#start-session-step-2 > .copy-submit-box').click();
  cy.get('#start-session-step-2 > .notification').should('be.visible')
  cy.pause();
});
it('Guest option is chosen without selecting time', () => {
  cy.Log12();
  cy.wait(2000);
  cy.get(':nth-child(4) > .popup-with-zoom-anim').click();
  cy.get(':nth-child(2) > .category-box').click();
  cy.get(':nth-child(2) > label').click();
  cy.get('.datepicker').type('13.03.2029')
  cy.get('#start-session-step-2 > .copy-submit-box').click();
  cy.get('#start-session-step-2 > .notification').should('be.visible')
});
it('Guest option is chosen without selecting date', () => {
  cy.Log12();
  cy.wait(2000);
  cy.get(':nth-child(4) > .popup-with-zoom-anim').click();
  cy.get(':nth-child(2) > .category-box').click();
  cy.get(':nth-child(2) > label').click();
  cy.get('.clockpicker').type('00:05')
  cy.get('#start-session-step-2 > .copy-submit-box').click();
  cy.get('#start-session-step-2 > .notification').should('be.visible')
});

});
describe('My Connections Tests', () => {
  it('My Connections no option is chosen ', () => {
    cy.Log12();
    cy.wait(2000);
    cy.get(':nth-child(4) > .popup-with-zoom-anim').click();
    cy.get(':nth-child(1) > .category-box').click();
    cy.get('#start-session-step-2 > .copy-submit-box').click();
    cy.get('#start-session-step-2 > .notification').should('be.visible')
  });
  it('My Connections choose only connections', () => {
    cy.Log12();
    cy.wait(2000);
    cy.get(':nth-child(4) > .popup-with-zoom-anim').click();
    cy.get(':nth-child(1) > .category-box').click();
    cy.get('.participant-check').click();
    cy.get('#start-session-step-2 > .copy-submit-box').click();
    cy.get('#start-session-step-2 > .notification').should('be.visible')
    
  });
  it('My Connections choose only when start "Now"', () => {
    cy.Log12();
    cy.wait(2000);
    cy.get(':nth-child(4) > .popup-with-zoom-anim').click();
    cy.get(':nth-child(1) > .category-box').click();
    cy.get('.user-type-radio > :nth-child(1) > label')
    cy.get(':nth-child(2) > label').click();
    cy.get('#start-session-step-2 > .copy-submit-box').click();
    cy.get('#start-session-step-2 > .notification').should('be.visible')
    
  });
  it('My Connections choose only when start "Later"', () => {
    cy.Log12();
    cy.wait(2000);
    cy.get(':nth-child(4) > .popup-with-zoom-anim').click();
    cy.get(':nth-child(1) > .category-box').click();
    cy.get(':nth-child(2) > label').click();
    cy.get('#start-session-step-2 > .copy-submit-box').click();
    cy.get('#start-session-step-2 > .notification').should('be.visible')
    
  });
  it('My Connections try to start without select time', () => {
    cy.Log12();
    cy.wait(2000);
    cy.get(':nth-child(4) > .popup-with-zoom-anim').click();
    cy.get(':nth-child(1) > .category-box').click();
    cy.get('.participant-check').click();
    cy.get(':nth-child(2) > label').click();
    cy.get('#start-session-step-2 > .copy-submit-box').click();
    cy.get('#start-session-step-2 > .notification').should('be.visible')
    
  });
  it('My Connections try to start without Connections Groups', () => {
    cy.Log12();
    cy.wait(2000);
    cy.get(':nth-child(4) > .popup-with-zoom-anim').click();
    cy.get(':nth-child(1) > .category-box').click();
    cy.get('.user-type-radio > :nth-child(1) > label').click();
    cy.get('[data-participant-type-target-selection="connection-groups"]').click();
    cy.get('#start-session-step-2 > .copy-submit-box').click();
    cy.get('#start-session-step-2 > .notification').should('be.visible')
    
  });
  
  });

