describe('Form Input', () => {
  it('Visit the app', () => {
    cy.visit('/')
    cy.focused().should('have.class', 'new-todo')
  })

  it.only('Accepts input', () => {
    cy.visit('/')
    cy
      .get('.new-todo')
      .type('New Todo')
      .should('have.value', 'New Todo')
  })
})