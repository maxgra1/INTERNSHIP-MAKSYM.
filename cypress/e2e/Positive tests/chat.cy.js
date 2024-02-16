///<reference types = "Cypress"/>


describe('System functionality tests', () => {
  beforeEach(() => {
    // Log in to the system with credentials
    cy.viewport(1920, 1080);
    cy.Log12();
    cy.wait(2000);
    cy.get('a[href="dashboard/session-private.php"]').contains('My Workspace').click();
    cy.get('#btn-enter-session-preview').contains('Join Session').click();
  });

  it('Join session after logging in', () => {
    cy.get('#share-rec-chat > :nth-child(8)').should('be.visible').click();
  });

  it.only('Chat functionality tests', () => {
    cy.get('#open-chat').click();
    cy.get('.chat-div').should('be.visible');
    cy.get('.chat-div > .dashboard-headline > .times-x').click();
    
    cy.get('#convert-media-annotation').click();
    //file manager should be visible
    cy.get('#open-media-menu')
    //file manager should be visible
    cy.get('#open-chat').click();
    
    
    cy.get('.emojionearea-editor').type('Hello, World!');
    cy.get('#btn-chat-message').click();
    cy.get('.message').should('contain', 'Hello, World!');

    cy.get('.emojionearea-editor').type('Test!@#$%^123');
    cy.get('#btn-chat-message').click();
    cy.get('.message').should('contain', 'Test!@#$%^123');

    
    cy.get('.emojionearea-button-close').click();
    cy.get('.emojionearea-editor').type('😀');
    cy.get('#btn-chat-message').click();

    // // Click on the language drop-down menuі
    cy.get('#chat-translation-lang').click();
    cy.get('#chat-to-language-list').should('have.length.above', 0);
    cy.get('#chat-to-language-list').select('Azerbaijani (az)');
    cy.get('#chat-to-language-list').select('Chinese (zh)');


    // // Scroll up and down to verify all languages are present
    // cy.get('.language-option').should('have.length.above', 0);
  });
});
