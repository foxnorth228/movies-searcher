describe('Testing find category system', () => {
  beforeEach(() => cy.visit('/'));
  it('First loading', () => {
    cy.get('#search').should('exist');
    cy.get('[data-testid=card-fallback]').should('exist');
    cy.get('[data-testid=card', { timeout: 10000 }).should('exist');
  });
  it('Checking selector genre', () => {
    cy.get('[data-testid=selector-genre]').should('exist');
    cy.get('[data-testid=selector-genre] input[type=radio]').should('have.length', '7');
    cy.get('[data-testid=selector-genre] input[type=radio]').eq(0).should('be.checked');
  });
  it('Checking switching genre', () => {
    cy.get('[data-testid=selector-genre] div').eq(2).click();
    cy.get('[data-testid=selector-genre] input[type=radio]').eq(0).should('not.be.checked');
    cy.get('[data-testid=selector-genre] input[type=radio]').eq(2).should('be.checked');
    cy.get('[data-testid=card-fallback]').should('exist');
    cy.get('[data-testid=card', { timeout: 10000 }).should('exist');
  });
});
