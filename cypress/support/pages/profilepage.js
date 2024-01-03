const locator = require('../locators/profilepage_locator')

class profilepage {

    async clickEditPersonalInfo() {
        cy.xpath(locator.elements.edit_personal_info_button)
            .click()
    }

    async clickEditPhoto() {
        cy.xpath(locator.elements.edit_photo_button)
            .click()
    }

    async uploadPhoto(photopath, photofile) {
        cy.xpath(locator.elements.upload_photo)
            .attachFile(photopath)
            .should('have.value', 'C:\\fakepath\\' + photofile)
    }

    async submitNewPhoto() {
        cy.xpath(locator.elements.photo_submit_button)
            .click()
    }

    async clickEditPassword() {
        cy.xpath(locator.elements.edit_password_button)
            .click()
    }

    async inputNewPassword(newpassword) {
        cy.xpath(locator.elements.new_password_input)
            .type(newpassword)
            .should('have.value', newpassword)
    }

    async inputNewPasswordConfirmation(newpassword) {
        cy.xpath(locator.elements.new_password_confirmation_input)
            .type(newpassword, { force: true })
            .should('have.value', newpassword)
    }

    async submitNewPassword() {
        cy.xpath(locator.elements.new_password_submit_button)
            .click()
    }

    async verify_profile_title_exists() {
        cy.xpath(locator.elements.profile_title)
            .should('exist')
    }

    async verify_profile_picture_exists() {
        cy.xpath(locator.elements.profile_picture)
            .should('exist')
    }

    async verify_personal_info_exists() {
        cy.xpath(locator.elements.personal_info)
            .should('exist')
    }

    async verify_edit_photo_exists() {
        cy.xpath(locator.elements.edit_photo_button)
            .should('exist')
    }

    async verify_edit_password_exists() {
        cy.xpath(locator.elements.edit_password_button)
            .should('exist')
    }

    async verify_edit_personal_info_exists() {
        cy.xpath(locator.elements.edit_personal_info_button)
            .should('exist')
    }

    async verify_edit_photo_success() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Updated data success.')
    }

    async verify_edit_password_mismatched() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Konfirmasi password tidak sesuai')
    }

    async verify_edit_password_success() {
        cy.xpath(locator.elements.toast_message)
            .should('contain', 'Password has been changed.')
    }

}

module.exports = new profilepage()