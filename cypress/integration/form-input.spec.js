describe('Form Input', () => {
  beforeEach(() => {
    cy.seedAndVisit([])
  })

  it('Accepts input', () => {
    cy
      .get('.new-todo')
      .type('New Todo')
      .should('have.value', 'New Todo')
  })
})