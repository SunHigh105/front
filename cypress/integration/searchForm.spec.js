describe('Search form', () => {
  const baseUrl = Cypress.env('baseUrl');

  it('Model Plans`のタブがクリックできること', () => {
    cy.visit(baseUrl);

    cy.contains('Model Plans').click();
    cy.location('pathname').should('eq', '/model_plans');
  });
})