describe('Logout', () => {
    beforeEach(() => {
      cy.login()
      cy.visit('/')
    })
  
    it('successfully', () => {
      cy.logout()
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
      cy.get("[data-qa-selector='login_field']").should('be.visible')
      cy.contains('GitLab Community Edition').should('be.visible')
    })
  })
  