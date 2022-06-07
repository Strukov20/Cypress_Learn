class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}



describe('Abstraction with Classes', () => {
    it('should scroll down and top on the page', () => {
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(2000)
        HomePage.scrollToTop()
        HomePage.wait(2700)
    });
});