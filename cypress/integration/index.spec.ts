import routes from 'utils/routes'

const itemId = '3zBAcuITg3'

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/')
    cy.get(`a[href*="${routes.item(itemId)}"]`).click()
    cy.url().should('contain', '/item')
    cy.screenshot('screenshot')
  })
})
