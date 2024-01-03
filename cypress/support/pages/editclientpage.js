const locator = require('../locators/editclientpage_locator');

class editclientpage {
    async inputIndustry(industry) {
        cy.xpath(locator.elements.industry_input)
            .click()
            .type(industry + '\n')
            .should('contain', industry)
    }

    async inputClientName(name) {
        cy.xpath(locator.elements.clientname_input)
            .clear()
            .type(name)
            .should('have.value', name)
    }

    async inputDescription(desc) {
        cy.xpath(locator.elements.description_input)
            .clear()
            .type(desc)
            .should('have.value', desc)
    }

    async inputAddress(address) {
        cy.xpath(locator.elements.address_input)
            .clear()
            .type(address)
            .should('have.value', address)
    }

    async inputRegency(regency) {
        cy.xpath(locator.elements.regency_input)
            .click()
            .type(regency + '\n')
            .should('contain', regency)
    }

    async inputContactName(name) {
        cy.xpath(locator.elements.contactname_input)
            .clear()
            .type(name)
            .should('have.value', name)
    }

    async inputContactEmail(email) {
        cy.xpath(locator.elements.email_input)
            .clear()
            .type(email)
            .should('have.value', email)
    }

    async inputContactNumber(number) {
        cy.xpath(locator.elements.contactnumber_input)
            .clear()
            .type(number)
            .should('have.value', number)
    }

    async inputWebsite(url) {
        cy.xpath(locator.elements.website_input)
            .clear()
            .type(url)
            .should('have.value', url)
    }

    async inputLogo(logopath, logofile) {
        cy.xpath(locator.elements.logo_input)
            .attachFile(logopath)
            .should('have.value', 'C:\\fakepath\\' + logofile)
    }

    async clearIndustry() {
        cy.xpath(locator.elements.industry_input)
            .click()
            .type('Pilih sektor industri...\n')
            .should('contain', 'Pilih sektor industri...')
    }

    async clearClientName() {
        cy.xpath(locator.elements.clientname_input)
            .clear()
            .should('have.value', '')
    }

    async clearDescription() {
        cy.xpath(locator.elements.description_input)
            .clear()
            .should('have.value', '')
    }

    async clearAddress() {
        cy.xpath(locator.elements.address_input)
            .clear()
            .should('have.value', '')
    }

    async clearRegency() {
        cy.xpath(locator.elements.regency_input)
            .click()
            .type('Pilih Kota/Kab...\n')
            .should('contain', 'Pilih Kota/Kab...')
    }

    async clearContactName() {
        cy.xpath(locator.elements.contactname_input)
            .clear()
            .should('have.value', '')
    }

    async clearContactEmail() {
        cy.xpath(locator.elements.email_input)
            .clear()
            .should('have.value', '')
    }

    async clearContactNumber() {
        cy.xpath(locator.elements.contactnumber_input)
            .clear()
            .should('have.value', '')
    }

    async clearWebsite() {
        cy.xpath(locator.elements.website_input)
            .clear()
            .should('have.value', '')
    }

    async submit() {
        cy.xpath(locator.elements.submit_button)
            .click()
    }

    async cancel() {
        cy.xpath(locator.elements.cancel_button)
            .click()
    }

    async verify_success() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Data already updated successfully')
    }

    async verify_empty_industry() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'invalid input syntax for type integer: "Pilih sektor industri..."')
    }

    async verify_empty_client_name() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Berikan nama klien')
    }

    async verify_empty_description() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Berikan deskripsi klien')
    }

    async verify_empty_address() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Berikan alamat klien')
    }

    async verify_empty_regency() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'invalid input syntax for type integer: "Pilih Kota/Kab..."')
    }

    async verify_empty_contact_name() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Berikan nama kontak')
    }

    async verify_empty_email() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Berikan email kontak')
    }

    async verify_empty_contact_number() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Berikan nomor kontak')
    }

    async verify_empty_status() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Pilih status klien')
    }

    async verify_invalid_contact_number() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Berikan nomor kontak yang valid')
    }
}

module.exports = new editclientpage()