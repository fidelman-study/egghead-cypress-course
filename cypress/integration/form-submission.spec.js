describe('Form submission', () => {
  it('Adds a new todo item', () => {
    const newTodo = 'Buy a new Mac'
    cy.server()
    cy.route({
      method: 'POST',
      url: '/api/todos',
      response: { id: 6, name: newTodo, isComplete: false }
    }).as('save')

    cy.seedAndVisit()
    cy
      .get('.new-todo')
      .type(newTodo)
      .type('{enter}')

    cy.wait('@save')
    cy.get('.todo-list li')
      .should('have.length', 5)
  })

  it('shows an error message for a failed submission', () => {
    const newTodo = 'Buy a new Mac'
    cy.server()
    cy.route({
      method: 'POST',
      url: '/api/todos',
      status: 500,
      response: {}
    }).as('save')

    cy.seedAndVisit()
    cy
      .get('.new-todo')
      .type(newTodo)
      .type('{enter}')
    cy.wait('@save')
    cy.get('.todo-list li')
      .should('have.length', 4)

    cy.get('.error').should('be.visible')
  })
})