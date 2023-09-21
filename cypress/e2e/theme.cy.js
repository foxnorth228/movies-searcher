describe('Testing theme switcher', () => {
  beforeEach(() => cy.visit('/'));
  it('Check switcher theme', () => {
    cy.get('body').should('have.class', 'light-theme');
    cy.get('#SwitcherTheme').should('exist');
    cy.get('#SwitcherTheme input[type=checkbox]').should('exist');
    cy.get('#SwitcherTheme input[type=checkbox]').should('not.be.checked');
  });
  it('Clicking switcher theme', () => {
    cy.get('#SwitcherTheme').click();
    cy.get('body').should('have.class', 'dark-theme');
    cy.get('#SwitcherTheme input[type=checkbox]').should('be.checked');
  });
});
