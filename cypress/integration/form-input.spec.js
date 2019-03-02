describe('Form Input', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Accepts input', () => {
    cy
      .get('.new-todo')
      .type('New Todo')
      .should('have.value', 'New Todo')
  })
})