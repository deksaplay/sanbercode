class general {

    async visit(url) {
        cy.visit(url)
        return cy.url().should('eq', url)
    }

    async verify_url(url) {
        cy.url().should('eq', url)
    }

    async verify_url_partial(url) {
        cy.url().should('contain', url)
    }
}

module.exports = new general()