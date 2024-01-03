const locator = require('../locators/dashboardpage_locator')

class dashboardpage {

    async clickProfile() {
        cy.xpath(locator.elements.profile_button)
            .click()
    }

    async verify_dashboard_title_exists() {
        cy.xpath(locator.elements.dashboard_title)
            .should('exist')
    }

    async verify_client_stats_exist() {
        cy.xpath(locator.elements.client_stats)
            .should('exist')
    }

    async verify_event_stats_exist() {
        cy.xpath(locator.elements.event_stats)
            .should('exist')
    }

    async verify_guest_stats_exist() {
        cy.xpath(locator.elements.guest_stats)
            .should('exist')
    }

    async verify_commission_stats_exist() {
        cy.xpath(locator.elements.commission_stats)
            .should('exist')
    }

    async verify_correct_login(name) {
        cy.xpath(locator.elements.user_fullname)
            .should('contain', name)
    }

}

module.exports = new dashboardpage()