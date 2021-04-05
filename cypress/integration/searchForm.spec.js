describe('Search form', () => {
  const baseUrl = Cypress.env('baseUrl');

  it('Model Plans`のタブがクリックできること', () => {
    cy.visit(baseUrl);

    cy.contains('Model Plans').click();
    cy.location('pathname').should('eq', '/model_plans');
  });

  it('目的地を入力して検索できること', () => {
    cy.visit(baseUrl);

    cy.get('input[name="destination"]').type('博多駅');
    cy.contains('Add Destination').click();
    cy.get('input[name="destination"]').type('小倉駅');
    // cy.location('pathname').should('eq', '/model_plans');
  });
})