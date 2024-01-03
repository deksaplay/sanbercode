const locator = require('../locators/eventpage_locator')

class eventpage {
    async clickEventMenu() {
        cy.xpath(locator.elements.eventpage_button)
            .click()
    }
    async clickUpcomingEventMenu() {
        cy.xpath(locator.elements.upcoming_eventpage_button)
            .click()
    }

    async clickExpiredEventMenu() {
        cy.xpath(locator.elements.expired_eventpage_button)
            .click()
    }

    async inputSearch(query) {
        cy.xpath(locator.elements.search_input)
            .type(query)
            .should('have.value', query)
    }

    async search() {
        cy.xpath(locator.elements.search_button)
            .click()
    }

    async selectFilter(type) {
        cy.xpath(locator.elements.event_type_filter)
            .select(type)
            .should('contain', type)
    }

    async clickCreateEvent() {
        cy.xpath(locator.elements.create_event_button)
            .click()
    }

    async clickDetailButton() {
        cy.xpath(locator.elements.event_table_entry).then((element) => {
            if (element.text().trim() == 'Kamu belum memiliki event, silahkan tambahkan event baru.') {
                cy.log('No Entries Found.')
            }
            else {
                cy.xpath(locator.elements.event_detail_button)
                    .any()
                    .click()
            }
        })
    }

    async clickGuestsButton() {
        cy.xpath(locator.elements.event_table_entry).then((element) => {
            if (element.text().trim() == 'Kamu belum memiliki event, silahkan tambahkan event baru.') {
                cy.log('No Entries Found.')
            }
            else {
                cy.xpath(locator.elements.event_guests_button)
                    .any()
                    .click()
            }
        })
    }

    async verify_event_page_title_exists() {
        cy.xpath(locator.elements.eventpage_title)
            .should('exist')
    }

    async verify_event_table_exists() {
        cy.xpath(locator.elements.event_table)
            .should('exist')
    }

    async verify_search_results(query) {
        cy.xpath(locator.elements.event_table_entry).each((element) => {
            if (element.text().trim() == 'Kamu belum memiliki event, silahkan tambahkan event baru.') {
                cy.log('No Entries Found.')
            }
            else {
                expect(element.text()).to.include(query)
            }
        })
    }

    async verify_filter_results(type) {
        cy.xpath(locator.elements.event_table_entry).then((element) => {
            if (element.text().trim() == 'Kamu belum memiliki event, silahkan tambahkan event baru.') {
                cy.log('No Entries Found.')
            }
            else {
                cy.xpath(locator.elements.event_detail_button).any().click()
                cy.xpath(locator.elements.event_detail_table).should('contain', type)
            }
        })
    }

    async verify_event_detail_title_exists() {
        cy.xpath(locator.elements.event_detail_title)
            .should('exist')
    }

    async verify_event_detail_table_exists() {
        cy.xpath(locator.elements.event_detail_table)
            .should('exist')
    }

    async verify_event_guests_title_exists() {
        cy.xpath(locator.elements.event_guests_title)
            .should('exist')
    }

    async verify_event_guests_limit_exists() {
        cy.xpath(locator.elements.event_guests_invitation_limit)
            .should('exist')
    }

    async verify_event_guests_total_exists() {
        cy.xpath(locator.elements.event_guests_total)
            .should('exist')
    }

    async verify_event_guests_rsvp_exists() {
        cy.xpath(locator.elements.event_guests_rsvp)
            .should('exist')
    }
}

module.exports = new eventpage()