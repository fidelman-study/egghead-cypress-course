describe('List Item Behavior', () => {
  it('Deletes an item', () => {
    cy.server()
    cy.route({
      method: 'DELETE',
      url: '/api/todos/*',
      response: {}
    }).as('delete')

    cy.seedAndVisit()

    cy
      .get('.todo-list li')
      .first()
      .find('.destroy')
      .invoke('show')
      .click()
      // .click({ force: true })

    cy.wait('@delete')

    cy
      .get('.todo-list li')
      .should('have.length', 3)
  })
})