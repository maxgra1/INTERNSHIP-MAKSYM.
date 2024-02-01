///<reference types = "Cypress"/>
beforeEach(() => {
  cy.viewport(1920, 1080)
});

describe('New Lecture Visible', () => {
    iit('New Lecture dialog window is not opened if incorrect element clicked', () => {
      cy.Log12();
      cy.wait(2000);
      // Клік на невірний елемент, який не має відкривати вікно лекції
      cy.get('#incorrect-element').click();
      // Перевірка, що вікно лекції не відкрите
      cy.get('#start-session-step-1 > .welcome-text > h3').should('not.exist');
  });
})
