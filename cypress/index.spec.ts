import routes from 'utils/routes';

const itemId = '3zBAcuITg3';

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "about" and click it

    cy.get(`a[href*="${routes.item(itemId)}"]`).click();

    // The new url should include "/about"
    cy.url().should('include', '/item');
  });
});
