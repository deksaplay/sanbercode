const locator = require('../locators/createeventpage_locator')
const { elements } = require('../locators/registerpage_locator')

class createeventpage {
    async inputEventType(type) {
        cy.xpath(locator.elements.eventtype_input)
            .click()
            .type(type + '\n')
            .should('contain', type)
    }

    async inputClient(client) {
        cy.xpath(locator.elements.client_input)
            .click()
            .type(client + '\n')
            .should('contain', client)
    }

    async inputRegency(regency) {
        cy.xpath(locator.elements.regency_input)
            .click()
            .type(regency + '\n')
            .should('contain', regency)
    }

    async inputEventTitle(title) {
        cy.xpath(locator.elements.title_input)
            .type(title)
            .should('have.value', title)
    }

    async inputVenue(venue) {
        cy.xpath(locator.elements.venue_input)
            .type(venue)
            .should('have.value', venue)
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

    async inputDate(date) {
        cy.xpath(locator.elements.date_input)
            .type(date)
            .should('have.value', date)
    }

    async inputTime(time_hour, time_minute) {
        cy.xpath(locator.elements.time_input)
            .click()
        cy.xpath(locator.elements.time_hour_input)
            .type(time_hour)
        cy.xpath(locator.elements.time_minute_input)
            .type(time_minute)
    }

    async inputVideo(vid) {
        cy.xpath(locator.elements.video_input)
            .type(vid)
            .should('have.value', vid)
    }

    async inputCeremonyLocation(loc) {
        cy.xpath(locator.elements.ceremony_location_input)
            .type(loc)
            .should('have.value', loc)
    }

    async inputReceptionLocation(loc) {
        cy.xpath(locator.elements.reception_location_input)
            .type(loc)
            .should('have.value', loc)
    }

    async chooseTheme() {
        cy.xpath(locator.elements.theme_list)
            .any()
            .click()
    }

    async next() {
        cy.xpath(locator.elements.next_button)
            .click()
    }

    async finish() {
        cy.xpath(locator.elements.finish_button)
            .click()
    }

    async verify_success() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Create data event success.')
    }

    async verify_empty_eventtype() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Silahkan pilih Tipe Event')
    }

    async verify_empty_client() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Silahkan pilih Nama Klien')
    }

    async verify_empty_regency() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Silahkan pilih Lokasi Acara')
    }

    async verify_empty_eventtitle() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Silahkan isi Judul Event')
    }

    async verify_empty_venue() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Silahkan isi Venue Event')
    }

    async verify_empty_description() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Silahkan isi deskripsi Event')
    }

    async verify_empty_address() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Silahkan isi alamat lokasi')
    }

    async verify_empty_date() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Silahkan isi tanggal Event')
    }

    async verify_empty_video() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Silahkan isi url youtube video')
    }

    async verify_empty_ceremony_location() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Silahkan isi google maps lokasi ceremony')
    }

    async verify_empty_reception_location() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Silahkan isi google maps lokasi resepsi')
    }

    async verify_empty_theme() {
        cy.xpath(locator.elements.toast_message)
            .should('exist')
    }
}

module.exports = new createeventpage()