describe('Testing theme switcher', () => {
  beforeEach(() => cy.visit('/'));
  it('Check switcher theme', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('#SwitcherTheme').should('exist');
    cy.get('#SwitcherTheme input[type=checkbox]').should('exist');
    cy.get('#SwitcherTheme input[type=checkbox]').should('not.be.checked');
  });
  it('Clicking switcher theme', () => {
    cy.get('#SwitcherTheme').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)');
    cy.get('#SwitcherTheme input[type=checkbox]').should('be.checked');
  });
});
