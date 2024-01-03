const locator = require('../locators/editprofilepage_locator')

class editprofilepage {

    async inputBirthday(birthday) {
        cy.xpath(locator.elements.birthday_input)
            .clear()
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
            .clear()
            .type(address)
            .should('have.value', address)
    }

    async inputInstagram(instagram_id) {
        cy.xpath(locator.elements.instagram_input)
            .clear()
            .type(instagram_id)
            .should('have.value', instagram_id)
    }

    async inputFacebook(facebook) {
        cy.xpath(locator.elements.facebook_input)
            .clear()
            .type(facebook)
            .should('have.value', facebook)
    }

    async inputPhoneNumber(phone_number) {
        cy.xpath(locator.elements.phone_number_input)
            .clear()
            .type(phone_number)
            .should('have.value', phone_number)
    }

    async inputBirthPlace(birthplace) {
        cy.xpath(locator.elements.birthplace_input)
            .clear()
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

    async inputHobby(hobby) {
        cy.xpath(locator.elements.hobby_input)
            .clear()
            .type(hobby)
            .should('have.value', hobby)
    }

    async inputBank(bankname) {
        cy.xpath(locator.elements.bank_input)
            .select(bankname)
            .should('contain', bankname)
    }

    async inputBankAccountNumber(bankacc) {
        cy.xpath(locator.elements.bankacc_input)
            .clear()
            .type(bankacc)
            .should('have.value', bankacc)
    }

    async inputBankAccountName(bankacc_name) {
        cy.xpath(locator.elements.bankaccname_input)
            .clear()
            .type(bankacc_name)
            .should('have.value', bankacc_name)
    }

    async clearBirthday() {
        cy.xpath(locator.elements.birthday_input)
            .clear()
            .should('have.value', '')
    }

    async clearAddress() {
        cy.xpath(locator.elements.address_input)
            .clear()
            .should('have.value', '')
    }

    async clearInstagram() {
        cy.xpath(locator.elements.instagram_input)
            .clear()
            .should('have.value', '')
    }

    async clearFacebook() {
        cy.xpath(locator.elements.facebook_input)
            .clear()
            .should('have.value', '')
    }

    async clearPhoneNumber() {
        cy.xpath(locator.elements.phone_number_input)
            .clear()
            .should('have.value', '')
    }

    async clearBirthPlace() {
        cy.xpath(locator.elements.birthplace_input)
            .clear()
            .should('have.value', '')
    }

    async clearOccupation() {
        cy.xpath(locator.elements.occupation_input)
            .select('Pilih Pekerjaan...')
            .should('contain', 'Pilih Pekerjaan...')
    }

    async clearRegency() {
        cy.xpath(locator.elements.regency_input)
            .click()
            .type('Select Domicile...\n')
            .should('contain', 'Select Domicile...')
    }

    async clearHobby() {
        cy.xpath(locator.elements.hobby_input)
            .clear()
            .should('have.value', '')
    }

    async clearBank() {
        cy.xpath(locator.elements.bank_input)
            .select('Pilih bank...')
            .should('contain', 'Pilih bank...')
    }

    async clearBankAccountNumber() {
        cy.xpath(locator.elements.bankacc_input)
            .clear()
            .should('have.value', '')
    }

    async clearBankAccountName() {
        cy.xpath(locator.elements.bankaccname_input)
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
        cy.xpath(locator.elements.toast_message).should('contain', 'Data profil berhasil diupdate')
    }

    async verify_empty_birthday() {
        cy.xpath(locator.elements.toast_message).should('contain', 'Masukan Tanggal Lahir')
    }

    async verify_empty_address() {
        cy.xpath(locator.elements.toast_message).should('contain', 'Masukan alamat')
    }

    async verify_empty_birth_place() {
        cy.xpath(locator.elements.toast_message).should('contain', 'Masukan tempat lahir')
    }

    async verify_empty_occupation() {
        cy.xpath(locator.elements.toast_message).should('contain', 'Masukan Jenis Pekerjaan')
    }

    async verify_empty_regency() {
        cy.xpath(locator.elements.toast_message).should('contain', 'Masukan Kota/Kabupaten')
    }

    async verify_empty_bank_name() {
        cy.xpath(locator.elements.toast_message).should('contain', 'Masukan Nama Bank')
    }

    async verify_empty_bank_account_number() {
        cy.xpath(locator.elements.toast_message).should('contain', 'Masukan nomor rekening')
    }

    async verify_empty_bank_account_name() {
        cy.xpath(locator.elements.toast_message).should('contain', 'Masukan nama pemilik rekening')
    }

    async verify_invalid_bank_account_number() {
        cy.xpath(locator.elements.toast_message).should('contain', 'Masukan nomor rekening yang valid')
    }
}

module.exports = new editprofilepage()