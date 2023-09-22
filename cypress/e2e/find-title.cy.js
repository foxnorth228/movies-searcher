describe('Testing find title system', () => {
  beforeEach(() => cy.visit('/'));
  it('First loading', () => {
    cy.get('#search').should('exist');
    cy.get('[data-testid=Card-fallback]').should('exist');
    cy.get('[data-testid=Card]', { timeout: 10000 }).should('exist');
    cy.get('[data-testid=Card]').should('have.length', '16');
  });
  it('Searching movies', () => {
    cy.get('#search').type('ty');
    cy.get('#search').trigger('keyup', { key: 'Enter', code: 'Enter', charCode: 13 });
    cy.get('[data-testid=Card-fallback]').should('exist');
    cy.get('[data-testid=Card]', { timeout: 10000 }).should('exist');
    cy.get('#search').clear();
    cy.contains(/ty/i);
  });
  it('Checking alternative text', () => {
    cy.get('#search').type('tytytytytytytytyttty');
    cy.get('[data-testid=Searcher-label]').click();
    cy.contains(/There are no movies suitable for your needs/i, { timeout: 10000 });
  })
});
