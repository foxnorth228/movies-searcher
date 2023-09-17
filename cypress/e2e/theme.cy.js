describe('Testing theme switcher', () => {
  beforeEach(() => cy.visit('/'));
  it('Check switcher theme', () => {
    cy.get('body').should('have.class', 'light-theme');
    cy.get('#switcher-theme').should('exist');
    cy.get('#switcher-theme input[type=checkbox]').should('exist');
    cy.get('#switcher-theme input[type=checkbox]').should('not.be.checked');
  });
  it('Clicking switcher theme', () => {
    cy.get('#switcher-theme').click();
    cy.get('body').should('have.class', 'dark-theme');
    cy.get('#switcher-theme input[type=checkbox]').should('be.checked');
  });
});
