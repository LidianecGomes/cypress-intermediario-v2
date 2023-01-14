describe('Login', () => {
  it('successfully', () => {
    cy.login()

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
