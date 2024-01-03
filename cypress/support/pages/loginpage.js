const locator = require('../locators/loginpage_locator')

class loginpage {

    async inputEmail(email) {
        cy.xpath(locator.elements.email_input)
            .type(email)
            .should('have.value', email)
    }

    async inputPassword(pw) {
        cy.xpath(locator.elements.password_input)
            .type(pw)
            .should('have.value', pw)
    }

    async submit() {
        cy.xpath(locator.elements.submit_button)
            .click()
    }

    async verify_incorrect_email() {
        cy.xpath(locator.elements.alert).should('contain', 'Incorrect email!')
    }

    async verify_incorrect_password() {
        cy.xpath(locator.elements.alert).should('contain', 'Incorrect Password!')
    }

    async verify_wrong_combination() {
        cy.xpath(locator.elements.alert).should('contain', 'Wrong Email/Password!')
    }

}

module.exports = new loginpage()