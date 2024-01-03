const locator = require('../locators/createclientpage_locator');

class createclientpage {
    async inputIndustry(industry) {
        cy.xpath(locator.elements.industry_input)
            .click()
            .type(industry + '\n')
            .should('contain', industry)
    }

    async inputClientName(name) {
        cy.xpath(locator.elements.clientname_input)
            .type(name)
            .should('have.value', name)
    }

    async inputDescription(desc) {
        cy.xpath(locator.elements.description_input)
            .type(desc)
            .should('have.value', desc)
    }

    async inputAddress(address) {
        cy.xpath(locator.elements.address_input)
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
            .type(name)
            .should('have.value', name)
    }

    async inputContactEmail(email) {
        cy.xpath(locator.elements.email_input)
            .type(email)
            .should('have.value', email)
    }

    async inputContactNumber(number) {
        cy.xpath(locator.elements.contactnumber_input)
            .type(number)
            .should('have.value', number)
    }

    async inputWebsite(url) {
        cy.xpath(locator.elements.website_input)
            .type(url)
            .should('have.value', url)
    }

    async inputStatus(status) {
        cy.xpath(locator.elements.status_dropdown)
            .click()

        cy.xpath(locator.elements.status_input)
            .type(status + '\n')

        cy.xpath(locator.elements.status_dropdown)
            .should('contain', status)
    }

    async inputLogo(logopath, logofile) {
        cy.xpath(locator.elements.logo_input)
            .attachFile(logopath)
            .should('have.value', 'C:\\fakepath\\' + logofile)
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
            .should('contain', 'Data added successfully')
    }

    async verify_empty_industry() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Pilih sektor industri')
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
            .should('contain', 'Pilih wilayah / daerah')
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
            .should('contain', 'Berikan nomor kontak yang valid minimal 8 karakter maksimal 12 karakter')
    }
}

module.exports = new createclientpage()