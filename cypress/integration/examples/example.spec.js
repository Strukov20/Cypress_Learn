describe('My first test block', () => {
    it('should load correct URL', () => {
        cy.visit('https://example.com')
    })

    it('should check correct URL', () => {
        cy.url().should('include', 'example.com')
    })

    it('should wait 3 seconds', () => {
        cy.wait(1500)
    })

    // it('should pause execution', () => {
    //     cy.pause()
    // })

    it('should check element on the page', () => {
        cy.get('h1').should('be.visible')
    });
})

describe.only('Browser Actions', () => {
    it('should be load book website', () => {
        cy.visit('https://books.toscrape.com/index.html', {timeout: 10000})
        cy.url().should('include', 'index.html')
        cy.log('Website Loaded!');
    })

    it('should click on travel category', () => {
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1')
            .contains('Travel')
    })

    it('should display correct number of books', () => {
        cy.get('.product_pod')
            .its('length')
            .should('eq', 11)
    })

    it('should click on poetry category', () => {
        cy.get('a')
            .contains('Poetry')
            .click()
    });

    it('should click on Olio book detail', () => {
        cy.get('h3')
            .find('a')
            .contains('Olio')
            .click()
    });

    it('should check symbol of price - £ ', () => {
        cy.get('div.product_main')
            .find('p.price_color')
            .contains('£')
    });

    it('should display correct price', () => {
        cy.get('div.product_main')
            .find('p.price_color')
            .should('contains.text', '£23.88')
    })
})