describe('Screenshots', () => {
    it('full page screenshot', () => {
        cy.visit('https://google.com')
        cy.screenshot({ capture: 'fullPage' })
    });

    it('single element screenshot', () => {
        cy.get('.lnXdpd').screenshot()

        cy.get('input[title="Пошук"]').screenshot()
    });
})