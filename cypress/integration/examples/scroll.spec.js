describe('scroll on the page', () => {
    it('should scroll down and top on the page', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.wait(1000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(1000)
        cy.get('header').scrollIntoView()
    });
})