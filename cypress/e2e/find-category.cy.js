describe('Testing find category system', () => {
  beforeEach(() => cy.visit('/'));
  it('First loading', () => {
    cy.get('#search').should('exist');
    cy.get('[data-testid=Card-fallback]').should('exist');
    cy.get('[data-testid=Card', { timeout: 10000 }).should('exist');
  });
  it('Checking selector genre', () => {
    cy.get('[data-testid=SelectorGenre]').should('exist');
    cy.get('[data-testid=SelectorGenre] input[type=radio]').should('have.length', '7');
    cy.get('[data-testid=SelectorGenre] input[type=radio]').eq(0).should('be.checked');
  });
  it('Checking switching genre', () => {
    cy.get('[data-testid=SelectorGenre] div').eq(2).click();
    cy.get('[data-testid=SelectorGenre] input[type=radio]').eq(0).should('not.be.checked');
    cy.get('[data-testid=SelectorGenre] input[type=radio]').eq(2).should('be.checked');
    cy.get('[data-testid=Card-fallback]').should('exist');
    cy.get('[data-testid=Card', { timeout: 10000 }).should('exist');
  });
});
