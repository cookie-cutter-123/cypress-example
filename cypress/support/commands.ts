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

Cypress.Commands.add(
  'hasLength',
  { prevSubject: 'element' },
  (subject: JQuery<Element>, length: number) => {
    cy.wrap(subject).should('have.length', length);
  },
);

Cypress.Commands.add(
  'hasText',
  { prevSubject: 'element' },
  (subject: JQuery<Element>, text: string) => {
    cy.wrap(subject).should('have.text', text);
  },
);

Cypress.Commands.add(
  'typeAndConfirm',
  { prevSubject: 'element' },
  (subject: JQuery<Element>, text: string) => {
    cy.wrap(subject).type(`${text}{enter}`);
  },
);
