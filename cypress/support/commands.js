// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('searchForPosition', (position_name) => {
    cy.get('[placeholder="position"]').type(position_name, {force: true});
    cy.get('button').contains('search').click({force: true});
})
Cypress.Commands.add('locationss', (position_name) => {
    cy.get('[placeholder="location"]').type(position_name, {force: true});
    cy.get('button').contains('search').click({force: true});
})
Cypress.Commands.add('Companyy', (position_name) => {
    cy.get('[placeholder="company"]').type(position_name, {force: true});
    cy.get('button').contains('search').click({force: true});
})
Cypress.Commands.add('Navigation', (button_name,text_name,url) => {
    cy.get(button_name).click();
    cy.get(button_name).contains(text_name).should('be.visible')
    cy.url().should('include',url)
})
Cypress.Commands.add('Selected', (listname,province) => {
    cy.get(listname).select(province).invoke('text').should('contain',province)
})
Cypress.Commands.add('Provincete', (province,city) => {
    cy.get('[name="nastates"]').select(province)
    cy.get('[name="stage2"]').select(city).invoke('text').should('contain',city)
})
Cypress.Commands.add('Ste1', () => {
    cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
    cy.get('[name="nastates"]').select('Alabama')
    cy.get('[name="stage2"]').select('AL-Huntsville')  
    cy.get('[name="stories"]').select('1 + Basement')
    cy.get('[name="squarefeet"]').select('750')
    cy.get('input[name="houseage"]').type('70')
})
Cypress.Commands.add('Log12', () => {
    cy.visit('https://stg.xpertesy.com/ed');
    cy.get('span.activate-button').click();
    cy.get('#emailaddress-start').type('maksgrod03@gmail.com')
    cy.get('#start-form > .button').click();
    cy.get('#password-login').type('Maksgrod20');
    cy.get('#login-form > .button').click();
})
Cypress.Commands.add('Rpass', () => {
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
})

