describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})


/*describe('Logout', () => {
  it('successfully', () => {
    cy.login()
    cy.logout()

    cy.get("[data-qa-selector='login_field']").should('be.visible')
    cy.get('.class').should('contain', 'GitLab Community Edition')

  })
})*/
