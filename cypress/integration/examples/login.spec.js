describe('working with inputs', () => {

    it('should override the current time', () => {
        const date = new Date(2020, 3, 10).getTime();
        cy.clock(date)
        cy.log(date)
    });

    it('open website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('h3').should('contains.text', 'Log in to ZeroBank')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage('some item', { log: true })
        cy.title().should('include', 'Zero - Log in')
    });

    it('should fill login', () => {
        cy.get('#user_login').as('login_field')
        cy.get('@login_field').clear()
        cy.get('@login_field').type('Some login value', { delay: 70 })
    });
    
    it('should fill password', () => {
        cy.get('#user_password').as('password_field')
        cy.get('@password_field').clear()
        cy.get('@password_field').type('Some password value', { delay: 70 })
    });

    it('should mark checkbox', () => {
        cy.get('input[type="checkbox"]')
            .click()

    });
    
    it('should submit login form', () => {
        cy.get('input[name="submit"]')
            .click()
    });

    it('should see error message', () => {
        cy.get('div.alert-error')
            .should('be.visible')
            .and('contains.text', 'Login and/or password are wrong.')
    });
    
})