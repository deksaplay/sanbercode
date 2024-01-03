const locator = require('../locators/clientpage_locator');
const commands = require('../commands');

class clientpage {
    async clickClientMenu() {
        cy.xpath(locator.elements.clientpage_button)
            .click()
    }

    async clickActiveClientMenu() {
        cy.xpath(locator.elements.active_clientpage_button)
            .click()
    }

    async clickProspectiveClientMenu() {
        cy.xpath(locator.elements.prospective_clientpage_button)
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

    async selectFilter(industry) {
        cy.xpath(locator.elements.industry_filter)
            .select(industry)
            .should('contain', industry)
    }

    async clickCreateClient() {
        cy.xpath(locator.elements.create_client_button)
            .click()
    }

    async clickDetailButton() {
        cy.xpath(locator.elements.client_table_entry).then((element) => {
            if (element.text().trim() == 'Kamu belum memiliki klien, silahkan tambahkan klien baru.') {
                cy.log('No Entries Found.')
            }
            else {
                cy.xpath(locator.elements.client_detail_button)
                    .any()
                    .click()
            }
        })
    }

    async changeClientStatus() {
        cy.xpath(locator.elements.client_status_toggle)
            .click()
    }

    async clickEditClient() {
        cy.xpath(locator.elements.edit_client_button)
            .click()
    }

    async verify_client_page_title_exists() {
        cy.xpath(locator.elements.clientpage_title)
            .should('exist')
    }

    async verify_client_table_exists() {
        cy.xpath(locator.elements.client_table)
            .should('exist')
    }

    async verify_search_results(query) {
        cy.xpath(locator.elements.client_table_entry).each((element) => {
            if (element.text().trim() == 'Kamu belum memiliki klien, silahkan tambahkan klien baru.') {
                cy.log('No Entries Found.')
            }
            else {
                expect(element.text()).to.include(query)
            }
        })
    }

    async verify_filter_results(industry) {
        cy.xpath(locator.elements.client_table_entry).each((element) => {
            if (element.text().trim() == 'Kamu belum memiliki klien, silahkan tambahkan klien baru.') {
                cy.log('No Entries Found.')
            }
            else {
                expect(element.text()).to.include(industry)
            }
        })
    }

    async verify_client_detail_title_exists() {
        cy.xpath(locator.elements.client_detail_title)
            .should('exist')
    }

    async verify_edit_client_button_exists() {
        cy.xpath(locator.elements.edit_client_button)
            .should('exist')
    }

    async verify_client_status_toggle_exists() {
        cy.xpath(locator.elements.client_status_toggle)
            .should('exist')
    }

    async verify_client_status_toggle_checked() {
        cy.xpath(locator.elements.client_status_toggle)
            .should('be.checked')
    }

    async verify_client_status_toggle_unchecked() {
        cy.xpath(locator.elements.client_status_toggle)
            .should('not.be.checked')
    }
}

module.exports = new clientpage()