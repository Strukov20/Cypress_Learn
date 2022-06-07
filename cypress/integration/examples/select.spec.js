describe('select box', () => {
    it('should load site with select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#preferred-interface').should('be.visible')
    });

    it('should select an option from select box', () => {
        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value', 'Both')

        cy.get('#preferred-interface').select('JavaScript API')
        cy.get('#preferred-interface').should('have.value', 'JavaScript API')
    });
})