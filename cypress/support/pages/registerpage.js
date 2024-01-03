const locator = require('../locators/registerpage_locator')

class registerpage {

    async inputEmail(email) {
        cy.xpath(locator.elements.email_input)
            .type(email)
            .should('have.value', email)
    }

    async inputName(name) {
        cy.xpath(locator.elements.name_input)
            .type(name)
            .should('have.value', name)
    }

    async inputBirthday(birthday) {
        cy.xpath(locator.elements.birthday_input)
            .type(birthday)
            .should('have.value', birthday)
    }

    async inputGender(gender) {
        cy.xpath(locator.elements.gender_input)
            .select(gender)
            .should('have.value', gender)
    }

    async inputAddress(address) {
        cy.xpath(locator.elements.address_input)
            .type(address)
            .should('have.value', address)
    }

    async inputInstagram(instagram_id) {
        cy.xpath(locator.elements.instagram_input)
            .type(instagram_id)
            .should('have.value', instagram_id)
    }

    async inputPhoneNumber(phone_number) {
        cy.xpath(locator.elements.phone_number_input)
            .type(phone_number)
            .should('have.value', phone_number)
    }

    async inputUsername(username) {
        cy.xpath(locator.elements.username_input)
            .type(username)
            .should('have.value', username)
    }

    async inputBirthPlace(birthplace) {
        cy.xpath(locator.elements.birthplace_input)
            .type(birthplace)
            .should('have.value', birthplace)
    }

    async inputOccupation(occupation) {
        cy.xpath(locator.elements.occupation_input)
            .select(occupation)
            .should('contain', occupation)
    }

    async inputRegency(regency) {
        cy.xpath(locator.elements.regency_input)
            .click()
            .type(regency + '\n')
            .should('contain', regency)
    }

    async inputReference(reference) {
        cy.xpath(locator.elements.reference_input)
            .type(reference)
            .should('have.value', reference)
    }

    async checkTermsConditions() {
        cy.xpath(locator.elements.agree_check)
            .click()
            .should('be.checked')
    }

    async submit() {
        cy.xpath(locator.elements.submit_button)
            .click()
    }

    async confirm() {
        cy.xpath(locator.elements.confirm_button)
            .click()
    }

    async cancel() {
        cy.xpath(locator.elements.cancel_button)
            .click()
    }

    async verify_success(name) {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Pendaftaran Kamu berhasil terkirim.')
    }

    async verify_empty_email() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Email tidak boleh kosong!')
    }

    async verify_empty_name() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Nama Lengkap tidak boleh kosong!')
    }

    async verify_empty_birthday() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Tanggal Lahir tidak boleh kosong!')
    }

    async verify_empty_gender() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Jenis Kelamin tidak boleh kosong!')
    }

    async verify_empty_address() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Alamat tidak boleh kosong!')
    }

    async verify_empty_phone_number() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Nomor WhatsApp tidak boleh kosong!')
    }

    async verify_empty_username() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Username tidak boleh kosong!')
    }

    async verify_empty_birth_place() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Tempat Lahir tidak boleh kosong!')
    }

    async verify_empty_occupation() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Jenis Pekerjaan tidak boleh kosong!')
    }

    async verify_empty_regency() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Kota/Kabupaten tidak boleh kosong!')
    }

    async verify_disagree_terms() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Kamu belum menyetujui syarat dan ketentuan!')
    }

    async verify_existing_email() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Email ini sudah terdaftar, silahkan gunakan email lain.')
    }

    async verify_invalid_email_format() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Format email tidak sesuai.')
    }

    async verify_invalid_phone_number_format() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Format nomor WhatsApp tidak sesuai.')
    }

    async verify_username_space() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Username tidak boleh ada spasi.')
    }

    async verify_future_birthdate() {
        cy.xpath(locator.elements.warning_toast)
            .should('contain', 'Tanggal Lahir tidak boleh di masa depan.')
    }

    async verify_cancel(url) {
        cy.xpath(locator.elements.confirmation_modal)
            .should('not.be.visible')
    }
}

module.exports = new registerpage()