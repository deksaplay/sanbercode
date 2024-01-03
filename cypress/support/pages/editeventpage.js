const locator = require('../locators/editeventpage_locator')

class editeventpage {
    async clickEditButton() {
        cy.xpath(locator.elements.editevent_button)
            .click()
    }

    async inputRegency(regency) {
        cy.xpath(locator.elements.regency_input)
            .select(regency)
            .should('contain', regency)
    }

    async inputEventTitle(title) {
        cy.xpath(locator.elements.title_input)
            .clear()
            .type(title, { force: true })
            .should('have.value', title)
    }

    async inputVenue(venue) {
        cy.xpath(locator.elements.venue_input)
            .clear()
            .type(venue)
            .should('have.value', venue)
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

    async inputDate(date) {
        cy.xpath(locator.elements.date_input)
            .clear()
            .type(date)
            .should('have.value', date)
    }

    async inputTime(time) {
        cy.xpath(locator.elements.time_input)
            .type(time)
            .should('have.value', time)
    }

    async inputVideo(vid) {
        cy.xpath(locator.elements.video_input)
            .clear()
            .type(vid)
            .should('have.value', vid)
    }

    async inputLocation(loc) {
        cy.xpath(locator.elements.location_input)
            .clear()
            .type(loc)
            .should('have.value', loc)
    }

    async clearEventTitle() {
        cy.xpath(locator.elements.title_input)
            .clear()
            .should('have.value', '')
    }

    async clearVenue() {
        cy.xpath(locator.elements.venue_input)
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

    async clearDate() {
        cy.xpath(locator.elements.date_input)
            .clear()
    }

    async clearTime() {
        cy.xpath(locator.elements.time_input)
            .clear()
            .should('have.value', '')
    }

    async clearVideo() {
        cy.xpath(locator.elements.video_input)
            .clear()
            .should('have.value', '')
    }

    async clearLocation() {
        cy.xpath(locator.elements.location_input)
            .clear()
            .should('have.value', '')
    }

    async save() {
        cy.xpath(locator.elements.save_button)
            .click()
    }

    async cancel() {
        cy.xpath(locator.elements.cancel_button)
            .click()
    }

    async verify_success() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Event Data Updated.')
    }

    async verify_empty_eventtitle() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Nama event Harus diisi')
    }

    async verify_empty_venue() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Nama tempat Harus diisi')
    }

    async verify_empty_description() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Deskripsi acara Harus diisi')
    }

    async verify_empty_address() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'alamat Harus diisi')
    }

    async verify_empty_date() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Tanggal Harus diisi')
    }

    async verify_empty_time() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Jam Harus diisi')
    }

    async verify_empty_video() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'video youtube url Harus diisi')
    }

    async verify_empty_location() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'maps location Harus diisi')
    }

    async verify_cancel() {
        cy.xpath(locator.elements.edit_modal)
            .should('not.be.visible')
    }

}

module.exports = new editeventpage()