declare namespace Cypress {
  interface Chainable {
    /**
     * Asserts that the subject has the desired length.
     * @param length - length of the element.
     * @example cy.get('ul > li').hasLength(3)
     */
    hasLength(length: number): Chainable<JQuery<Element>>;

    /**
     * Asserts that the subject has the desired text.
     * @param text - text of the element.
     * @example cy.get('ul > li').first().hasText('Walk the dog')
     */
    hasText(text: string): Chainable<JQuery<Element>>;

    /**
     * Types text and clicks Enter.
     * @param text - text to be entered.
     */
    typeAndConfirm(text: string): Chainable<JQuery<Element>>;
  }
}
