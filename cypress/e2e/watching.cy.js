describe('Testing modal dialog movie', () => {
  beforeEach(() => cy.visit('/'));
  it('Checking modal dialog is hidden', () => {
    cy.get('#ModalDialogMovie').should('not.exist');
  });
  it('Testing modal dialog', () => {
    cy.get('[data-testid=Card] > div', { timeout: 10000 }).should('exist');
    for (let i = 0; i < 16; ++i) {
      cy.get('[data-testid=Card] > div', { timeout: 10000 }).eq(i).click();
      cy.get('[data-testid=modal-dialog-movie]', { timeout: 10000 }).should('exist');
      if (cy.contains(/Video is not available/i).should('not.exist')) {
        break;
      }
      cy.get('[data-testid=modal-dialog-movie]').click();
      cy.get('#ModalDialogMovie').should('not.exist');
    }
    cy.get('[data-testid=modal-dialog-movie] iframe', { timeout: 10000 }).should('exist');
    cy.wait(10000);
    cy.get('[data-testid=modal-dialog-movie] iframe', { timeout: 10000 })
      .its('0.contentDocument')
      .find('html')
      .should('exist');
    cy.get('iframe', { timeout: 10000 })
      .its('0.contentDocument')
      .its('body')
      .then((body) => {
        let video = body.querySelector('video');
        if (video) {
          cy.wrap(video).its('0.paused').should('equal', true);
          cy.wrap(video).click({ force: true });
          cy.wrap(video).its('0.paused').should('equal', false);
          cy.wrap(video).click({ force: true });
          cy.wrap(video).its('0.paused').should('equal', true);
        }
      });
    cy.get('[data-testid=modal-dialog-movie]').click();
    cy.get('[data-testid=modal-dialog-movie]').should('not.exist');
  });
});
