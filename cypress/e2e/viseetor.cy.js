const userdata = require('../support/data/userdata');
const general = require('../support/general_actions');
const registerpage = require('../support/pages/registerpage');
const loginpage = require('../support/pages/loginpage');
const dashboardpage = require('../support/pages/dashboardpage');
const profilepage = require('../support/pages/profilepage');
const editprofilepage = require('../support/pages/editprofilepage');
const clientpage = require('../support/pages/clientpage');
const createclientpage = require('../support/pages/createclientpage');
const editclientpage = require('../support/pages/editclientpage');
const eventpage = require('../support/pages/eventpage');
const createeventpage = require('../support/pages/createeventpage');
const editeventpage = require('../support/pages/editeventpage')

describe('User should be able to register', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('No Email', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()

        registerpage.verify_empty_email()
    })

    it('No Name', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()

        registerpage.verify_empty_name()
    })

    it('No Birthday', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()

        registerpage.verify_empty_birthday
    })

    it('No Gender', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()

        registerpage.verify_empty_gender()
    })

    it('No Address', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()

        registerpage.verify_empty_address()
    })

    it('No Phone Number', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()

        registerpage.verify_empty_phone_number()
    })

    it('No Username', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()

        registerpage.verify_empty_username()
    })

    it('No Birth Place', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()

        registerpage.verify_empty_birth_place()
    })

    it('No Occupation', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()

        registerpage.verify_empty_occupation()
    })

    it('No Regency', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()

        registerpage.verify_empty_regency()
    })

    it('No Instagram', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email2)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp2)
        registerpage.inputUsername(userdata.testdata_register.username2)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()
        registerpage.confirm()

        registerpage.verify_success()
    })

    it('No Reference', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email3)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp3)
        registerpage.inputUsername(userdata.testdata_register.username3)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.checkTermsConditions()
        registerpage.submit()
        registerpage.confirm()

        registerpage.verify_success()
    })

    it('Disagree with Terms & Conditions', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.submit()

        registerpage.verify_disagree_terms()
    })

    it('Cancel Confirmation', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()
        cy.wait(1000)
        registerpage.cancel()

        registerpage.verify_cancel()
    })

    // Test case 'Invalid Email Format' is expected to fail.
    it('Invalid Email Format', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail('contohinvalid')
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp4)
        registerpage.inputUsername(userdata.testdata_register.username4)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()
        registerpage.confirm()

        registerpage.verify_invalid_email_format()
    })

    // Test case 'Invalid Phone Number Format' is expected to fail.
    it('Invalid Phone Number Format', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email4)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber('801')
        registerpage.inputUsername(userdata.testdata_register.username5)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()
        registerpage.confirm()

        registerpage.verify_invalid_phone_number_format()
    })

    it('Username with Space', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername('user name')
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()
        registerpage.confirm()

        registerpage.verify_username_space()
    })

    // Test case 'Future Birthdate' is expected to fail.
    it('Future Birthdate', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email5)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday('2030-12-31')
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp5)
        registerpage.inputUsername(userdata.testdata_register.username6)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()
        registerpage.confirm()

        registerpage.verify_future_birthdate()
    })

    it('Valid Data', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail(userdata.testdata_register.email)
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()
        registerpage.confirm()
    })

    it('Existing Email', () => {
        general.visit(userdata.testdata_links.registerpage)

        registerpage.inputEmail('testing@mail.com')
        registerpage.inputName(userdata.testdata_register.name)
        registerpage.inputBirthday(userdata.testdata_register.birthday)
        registerpage.inputGender(userdata.testdata_register.gender)
        registerpage.inputAddress(userdata.testdata_register.address)
        registerpage.inputInstagram(userdata.testdata_register.instagram)
        registerpage.inputPhoneNumber(userdata.testdata_register.whatsapp)
        registerpage.inputUsername(userdata.testdata_register.username)
        registerpage.inputBirthPlace(userdata.testdata_register.birthplace)
        registerpage.inputOccupation(userdata.testdata_register.occupation)
        registerpage.inputRegency(userdata.testdata_register.regency)
        registerpage.inputReference(userdata.testdata_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()
        registerpage.confirm()
    })
})

describe('User should be able to log in', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Valid Data', () => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()

        general.verify_url(userdata.testdata_links.dashboardpage)
        dashboardpage.verify_correct_login(userdata.testdata_login.name)
    })

    it('No Email', () => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()

        loginpage.verify_incorrect_email()
    })

    it('No Password', () => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.submit()

        loginpage.verify_incorrect_password()
    })

    it('Wrong Combination', () => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail('wrong@email.com')
        loginpage.inputPassword('wrongpw')
        loginpage.submit()

        loginpage.verify_wrong_combination()
    })

    it('Non-Registered Email', () => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail('wrong@email.com')
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()

        loginpage.verify_wrong_combination()
    })
})

describe('User should be able to access Dashboard', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()
    })

    it('View Dashboard Elements', () => {
        dashboardpage.verify_dashboard_title_exists()
        dashboardpage.verify_client_stats_exist()
        dashboardpage.verify_event_stats_exist()
        dashboardpage.verify_guest_stats_exist()
        dashboardpage.verify_commission_stats_exist()
    })

    it('Go to Profile', () => {
        dashboardpage.clickProfile()

        general.verify_url(userdata.testdata_links.profilepage)
    })
})

describe('User should be able to access Profile', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()
    })

    after(() => {
        // The following code is used to return the password to the original one for upcoming tests.
        general.visit(userdata.testdata_links.profilepage)

        profilepage.clickEditPassword()
        profilepage.inputNewPassword(userdata.testdata_login.password)
        profilepage.inputNewPasswordConfirmation(userdata.testdata_login.password)
        profilepage.submitNewPassword()
    })

    it('View Profile Page Elements', () => {
        general.visit(userdata.testdata_links.profilepage)

        profilepage.verify_profile_title_exists()
        profilepage.verify_profile_picture_exists()
        profilepage.verify_personal_info_exists()
        profilepage.verify_edit_photo_exists()
        profilepage.verify_edit_password_exists()
        profilepage.verify_edit_personal_info_exists()
    })

    it('Go to Edit Personal Information', () => {
        general.visit(userdata.testdata_links.profilepage)

        profilepage.clickEditPersonalInfo()
    })

    it('Edit Profile Photo', () => {
        general.visit(userdata.testdata_links.profilepage)

        profilepage.clickEditPhoto()
        profilepage.uploadPhoto(userdata.testdata_editprofile.photo, userdata.testdata_editprofile.photo_filename)
        profilepage.submitNewPhoto()

        profilepage.verify_edit_photo_success()
    })

    it('Edit Password with Mismatching Inputs', () => {
        general.visit(userdata.testdata_links.profilepage)

        profilepage.clickEditPassword()
        profilepage.inputNewPassword(userdata.testdata_editprofile.newpassword)
        profilepage.inputNewPasswordConfirmation('abc')
        profilepage.submitNewPassword()

        profilepage.verify_edit_password_mismatched()
    })

    it('Edit Password', () => {
        general.visit(userdata.testdata_links.profilepage)

        profilepage.clickEditPassword()
        profilepage.inputNewPassword(userdata.testdata_editprofile.newpassword)
        profilepage.inputNewPasswordConfirmation(userdata.testdata_editprofile.newpassword)
        profilepage.submitNewPassword()

        profilepage.verify_edit_password_success()

        general.visit(userdata.testdata_links.loginpage)
        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_editprofile.newpassword)
        loginpage.submit()

        dashboardpage.verify_correct_login(userdata.testdata_login.name)
    })
})

describe('User should be able to edit Personal Information', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()

        general.visit(userdata.testdata_links.profilepage)
        profilepage.clickEditPersonalInfo()
    })

    it('Valid Data', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_success()
    })

    it('Empty Birth Place', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.clearBirthPlace()
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_empty_birth_place()
    })

    it('Empty Birthday', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.clearBirthday()
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_empty_birthday()
    })

    it('Empty Address', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.clearAddress()
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_empty_address()
    })

    // Test case 'Empty Regency' is expected to fail.
    it('Empty Regency', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.clearRegency()
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_empty_regency()
    })

    // Test case 'Empty Hobby' is expected to fail.
    it('Empty Hobby', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.clearHobby()
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_success()
    })

    // Test case 'Empty Instagram' is expected to fail.
    it('Empty Instagram', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.clearInstagram()
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_success()
    })

    // Test case 'Empty Facebook' is expected to fail.
    it('Empty Facebook', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.clearFacebook()
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_success()
    })

    // Test case 'Empty Bank Name' is expected to fail.
    it('Empty Bank Name', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.clearBank()
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_empty_bank_name()
    })

    it('Empty Bank Account Number', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.clearBankAccountNumber()
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_empty_bank_account_number()
    })

    it('Empty Bank Account Name', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.clearBankAccountName()
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_empty_bank_account_name()
    })

    // Test case 'Empty Occupation' is expected to fail.
    it('Empty Occupation', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.clearOccupation()
        editprofilepage.submit()

        editprofilepage.verify_empty_occupation()
    })

    it('Invalid Bank Account Number', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber('123')
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.submit()

        editprofilepage.verify_invalid_bank_account_number()
    })

    it('Cancel', () => {
        general.visit(userdata.testdata_links.editprofilepage)

        editprofilepage.inputGender(userdata.testdata_editprofile.gender)
        editprofilepage.inputBirthPlace(userdata.testdata_editprofile.birthplace)
        editprofilepage.inputBirthday(userdata.testdata_editprofile.birthday)
        editprofilepage.inputAddress(userdata.testdata_editprofile.address)
        editprofilepage.inputRegency(userdata.testdata_editprofile.regency)
        editprofilepage.inputHobby(userdata.testdata_editprofile.hobby)
        editprofilepage.inputInstagram(userdata.testdata_editprofile.instagram)
        editprofilepage.inputFacebook(userdata.testdata_editprofile.facebook)
        editprofilepage.inputBank(userdata.testdata_editprofile.bank)
        editprofilepage.inputBankAccountNumber(userdata.testdata_editprofile.bankaccnumber)
        editprofilepage.inputBankAccountName(userdata.testdata_editprofile.bankaccname)
        editprofilepage.inputOccupation(userdata.testdata_editprofile.occupation)
        editprofilepage.cancel()

        general.verify_url(userdata.testdata_links.profilepage)
    })
})

describe('User should be able to access Client page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()
    })

    it('Search in overall Client Page', () => {
        general.visit(userdata.testdata_links.clientpage)

        clientpage.inputSearch(userdata.testdata_client.searchquery)
        clientpage.search()

        clientpage.verify_search_results(userdata.testdata_client.searchquery)
    })

    it('Filter by Industry in overall Client Page', () => {
        general.visit(userdata.testdata_links.clientpage)

        clientpage.selectFilter(userdata.testdata_client.industry)

        clientpage.verify_filter_results(userdata.testdata_client.industry)
    })

    it('Click Create New Client in overall Client Page', () => {
        general.visit(userdata.testdata_links.clientpage)

        clientpage.clickCreateClient()

        general.verify_url(userdata.testdata_links.createclientpage)
    })

    it('Click Client Detail in overall Client Page', () => {
        general.visit(userdata.testdata_links.clientpage)

        clientpage.clickDetailButton()

        clientpage.verify_client_detail_title_exists()
        clientpage.verify_edit_client_button_exists()
        clientpage.verify_client_status_toggle_exists()
    })

    it('Go to Active Client Page', () => {
        clientpage.clickClientMenu()
        clientpage.clickActiveClientMenu()

        general.verify_url(userdata.testdata_links.active_clientpage)
        clientpage.verify_client_page_title_exists()
        clientpage.verify_client_table_exists()
    })

    it('Search in Active Client Page', () => {
        general.visit(userdata.testdata_links.active_clientpage)

        clientpage.inputSearch(userdata.testdata_client.searchquery)
        clientpage.search()

        clientpage.verify_search_results(userdata.testdata_client.searchquery)
    })

    it('Filter by Industry in Active Client Page', () => {
        general.visit(userdata.testdata_links.active_clientpage)

        clientpage.selectFilter(userdata.testdata_client.industry)

        clientpage.verify_filter_results(userdata.testdata_client.industry)
    })

    it('Click Create New Client in Active Client Page', () => {
        general.visit(userdata.testdata_links.active_clientpage)

        clientpage.clickCreateClient()

        general.verify_url(userdata.testdata_links.createclientpage)
    })

    it('Click Client Detail in Active Client Page', () => {
        general.visit(userdata.testdata_links.active_clientpage)

        clientpage.clickDetailButton()

        clientpage.verify_client_detail_title_exists()
        clientpage.verify_edit_client_button_exists()
        clientpage.verify_client_status_toggle_exists()
    })

    it('Change Client Status in Active Client Page', () => {
        general.visit(userdata.testdata_links.active_clientpage)

        clientpage.clickDetailButton()
        clientpage.changeClientStatus()

        clientpage.verify_client_status_toggle_unchecked()
    })

    it('Go to Prospective Client Page', () => {
        clientpage.clickClientMenu()
        clientpage.clickProspectiveClientMenu()

        general.verify_url(userdata.testdata_links.prospective_clientpage)
        clientpage.verify_client_page_title_exists()
        clientpage.verify_client_table_exists()
    })

    it('Search in Prospective Client Page', () => {
        general.visit(userdata.testdata_links.prospective_clientpage)

        clientpage.inputSearch(userdata.testdata_client.searchquery)
        clientpage.search()

        clientpage.verify_search_results(userdata.testdata_client.searchquery)
    })

    it('Filter by Industry in Prospective Client Page', () => {
        general.visit(userdata.testdata_links.prospective_clientpage)

        clientpage.selectFilter(userdata.testdata_client.industry)

        clientpage.verify_filter_results(userdata.testdata_client.industry)
    })

    it('Click Create New Client in Prospective Client Page', () => {
        general.visit(userdata.testdata_links.prospective_clientpage)

        clientpage.clickCreateClient()

        general.verify_url(userdata.testdata_links.createclientpage)
    })

    it('Click Client Detail in Prospective Client Page', () => {
        general.visit(userdata.testdata_links.prospective_clientpage)

        clientpage.clickDetailButton()

        clientpage.verify_client_detail_title_exists()
        clientpage.verify_edit_client_button_exists()
        clientpage.verify_client_status_toggle_exists()
    })

    it('Change Client Status in Prospective Client Page', () => {
        general.visit(userdata.testdata_links.prospective_clientpage)

        clientpage.clickDetailButton()
        clientpage.changeClientStatus()

        clientpage.verify_client_status_toggle_checked()
    })

})

describe('User should be able to create new client', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()
    })

    it('No Industry', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_empty_industry()
    })

    it('No Client Name', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_empty_client_name()
    })

    it('No Description', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_empty_description()
    })

    it('No Address', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_empty_address()
    })

    it('No Regency', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_empty_regency()
    })

    it('No Contact Name', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_empty_contact_name()
    })

    it('No Contact Email', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_empty_email()
    })

    it('No Contact Number', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_empty_contact_number()
    })

    // Test case "No Website" is expected to fail.
    it('No Website', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_success()
    })

    it('No Status', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_empty_status()
    })

    it('No Logo', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.submit()

        createclientpage.verify_success()
    })

    it('Invalid Contact Number', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber('123')
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_invalid_contact_number()
    })

    it('Valid Data', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_success()
    })

    it('Valid Data', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.submit()

        createclientpage.verify_success()
    })

    it('Cancel', () => {
        general.visit(userdata.testdata_links.createclientpage)

        createclientpage.inputIndustry(userdata.testdata_client.industry)
        createclientpage.inputClientName(userdata.testdata_client.clientname)
        createclientpage.inputDescription(userdata.testdata_client.description)
        createclientpage.inputAddress(userdata.testdata_client.address)
        createclientpage.inputRegency(userdata.testdata_client.regency)
        createclientpage.inputContactName(userdata.testdata_client.contactname)
        createclientpage.inputContactEmail(userdata.testdata_client.email)
        createclientpage.inputContactNumber(userdata.testdata_client.contactnumber)
        createclientpage.inputWebsite(userdata.testdata_client.website)
        createclientpage.inputStatus(userdata.testdata_client.status)
        createclientpage.inputLogo(userdata.testdata_client.logo, userdata.testdata_client.logo_filename)
        createclientpage.cancel()

        general.verify_url_partial(userdata.testdata_links.clientpage)
    })

})

describe('User should be able to edit client', () => {
    let detail_link;

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()

        general.visit(userdata.testdata_links.clientpage)

        clientpage.clickDetailButton()

        cy.url().then(url => {
            cy.log(url)
            detail_link = url
        });

        clientpage.clickEditClient()
    })

    it('Empty Industry', () => {
        editclientpage.clearIndustry()
        editclientpage.inputClientName(userdata.testdata_editclient.clientname)
        editclientpage.inputDescription(userdata.testdata_editclient.description)
        editclientpage.inputAddress(userdata.testdata_editclient.address)
        editclientpage.inputRegency(userdata.testdata_editclient.regency)
        editclientpage.inputContactName(userdata.testdata_editclient.contactname)
        editclientpage.inputContactEmail(userdata.testdata_editclient.email)
        editclientpage.inputContactNumber(userdata.testdata_editclient.contactnumber)
        editclientpage.inputWebsite(userdata.testdata_editclient.website)
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.submit()

        editclientpage.verify_empty_industry()
    })

    it('Empty Client Name', () => {
        editclientpage.inputIndustry(userdata.testdata_editclient.industry)
        editclientpage.clearClientName()
        editclientpage.inputDescription(userdata.testdata_editclient.description)
        editclientpage.inputAddress(userdata.testdata_editclient.address)
        editclientpage.inputRegency(userdata.testdata_editclient.regency)
        editclientpage.inputContactName(userdata.testdata_editclient.contactname)
        editclientpage.inputContactEmail(userdata.testdata_editclient.email)
        editclientpage.inputContactNumber(userdata.testdata_editclient.contactnumber)
        editclientpage.inputWebsite(userdata.testdata_editclient.website)
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.submit()

        editclientpage.verify_empty_client_name()
    })

    it('Empty Description', () => {
        editclientpage.inputIndustry(userdata.testdata_editclient.industry)
        editclientpage.inputClientName(userdata.testdata_editclient.clientname)
        editclientpage.clearDescription()
        editclientpage.inputAddress(userdata.testdata_editclient.address)
        editclientpage.inputRegency(userdata.testdata_editclient.regency)
        editclientpage.inputContactName(userdata.testdata_editclient.contactname)
        editclientpage.inputContactEmail(userdata.testdata_editclient.email)
        editclientpage.inputContactNumber(userdata.testdata_editclient.contactnumber)
        editclientpage.inputWebsite(userdata.testdata_editclient.website)
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.submit()

        editclientpage.verify_empty_description()
    })

    it('Empty Address', () => {
        editclientpage.inputIndustry(userdata.testdata_editclient.industry)
        editclientpage.inputClientName(userdata.testdata_editclient.clientname)
        editclientpage.inputDescription(userdata.testdata_editclient.description)
        editclientpage.clearAddress()
        editclientpage.inputRegency(userdata.testdata_editclient.regency)
        editclientpage.inputContactName(userdata.testdata_editclient.contactname)
        editclientpage.inputContactEmail(userdata.testdata_editclient.email)
        editclientpage.inputContactNumber(userdata.testdata_editclient.contactnumber)
        editclientpage.inputWebsite(userdata.testdata_editclient.website)
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.submit()

        editclientpage.verify_empty_address()
    })

    it('Empty Regency', () => {
        editclientpage.inputIndustry(userdata.testdata_editclient.industry)
        editclientpage.inputClientName(userdata.testdata_editclient.clientname)
        editclientpage.inputDescription(userdata.testdata_editclient.description)
        editclientpage.inputAddress(userdata.testdata_editclient.address)
        editclientpage.clearRegency()
        editclientpage.inputContactName(userdata.testdata_editclient.contactname)
        editclientpage.inputContactEmail(userdata.testdata_editclient.email)
        editclientpage.inputContactNumber(userdata.testdata_editclient.contactnumber)
        editclientpage.inputWebsite(userdata.testdata_editclient.website)
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.submit()

        editclientpage.verify_empty_regency()
    })

    it('Empty Contact Name', () => {
        editclientpage.inputIndustry(userdata.testdata_editclient.industry)
        editclientpage.inputClientName(userdata.testdata_editclient.clientname)
        editclientpage.inputDescription(userdata.testdata_editclient.description)
        editclientpage.inputAddress(userdata.testdata_editclient.address)
        editclientpage.inputRegency(userdata.testdata_editclient.regency)
        editclientpage.clearContactName()
        editclientpage.inputContactEmail(userdata.testdata_editclient.email)
        editclientpage.inputContactNumber(userdata.testdata_editclient.contactnumber)
        editclientpage.inputWebsite(userdata.testdata_editclient.website)
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.submit()

        editclientpage.verify_empty_contact_name()
    })

    it('Empty Email', () => {
        editclientpage.inputIndustry(userdata.testdata_editclient.industry)
        editclientpage.inputClientName(userdata.testdata_editclient.clientname)
        editclientpage.inputDescription(userdata.testdata_editclient.description)
        editclientpage.inputAddress(userdata.testdata_editclient.address)
        editclientpage.inputRegency(userdata.testdata_editclient.regency)
        editclientpage.inputContactName(userdata.testdata_editclient.contactname)
        editclientpage.clearContactEmail()
        editclientpage.inputContactNumber(userdata.testdata_editclient.contactnumber)
        editclientpage.inputWebsite(userdata.testdata_editclient.website)
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.submit()

        editclientpage.verify_empty_email()
    })

    it('Empty Contact Number', () => {
        editclientpage.inputIndustry(userdata.testdata_editclient.industry)
        editclientpage.inputClientName(userdata.testdata_editclient.clientname)
        editclientpage.inputDescription(userdata.testdata_editclient.description)
        editclientpage.inputAddress(userdata.testdata_editclient.address)
        editclientpage.inputRegency(userdata.testdata_editclient.regency)
        editclientpage.inputContactName(userdata.testdata_editclient.contactname)
        editclientpage.inputContactEmail(userdata.testdata_editclient.email)
        editclientpage.clearContactNumber()
        editclientpage.inputWebsite(userdata.testdata_editclient.website)
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.submit()

        editclientpage.verify_empty_contact_number()
    })

    // Test case "Empty Website" is expected to fail.
    it('Empty Website', () => {
        editclientpage.inputIndustry(userdata.testdata_editclient.industry)
        editclientpage.inputClientName(userdata.testdata_editclient.clientname)
        editclientpage.inputDescription(userdata.testdata_editclient.description)
        editclientpage.inputAddress(userdata.testdata_editclient.address)
        editclientpage.inputRegency(userdata.testdata_editclient.regency)
        editclientpage.inputContactName(userdata.testdata_editclient.contactname)
        editclientpage.inputContactEmail(userdata.testdata_editclient.email)
        editclientpage.inputContactNumber(userdata.testdata_editclient.contactnumber)
        editclientpage.clearWebsite()
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.submit()

        editclientpage.verify_success()
    })

    it('Invalid Contact Number', () => {
        editclientpage.inputIndustry(userdata.testdata_editclient.industry)
        editclientpage.inputClientName(userdata.testdata_editclient.clientname)
        editclientpage.inputDescription(userdata.testdata_editclient.description)
        editclientpage.inputAddress(userdata.testdata_editclient.address)
        editclientpage.inputRegency(userdata.testdata_editclient.regency)
        editclientpage.inputContactName(userdata.testdata_editclient.contactname)
        editclientpage.inputContactEmail(userdata.testdata_editclient.email)
        editclientpage.inputContactNumber('123')
        editclientpage.inputWebsite(userdata.testdata_editclient.website)
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.submit()

        editclientpage.verify_invalid_contact_number()
    })

    it('Valid Data', () => {
        editclientpage.inputIndustry(userdata.testdata_editclient.industry)
        editclientpage.inputClientName(userdata.testdata_editclient.clientname)
        editclientpage.inputDescription(userdata.testdata_editclient.description)
        editclientpage.inputAddress(userdata.testdata_editclient.address)
        editclientpage.inputRegency(userdata.testdata_editclient.regency)
        editclientpage.inputContactName(userdata.testdata_editclient.contactname)
        editclientpage.inputContactEmail(userdata.testdata_editclient.email)
        editclientpage.inputContactNumber(userdata.testdata_editclient.contactnumber)
        editclientpage.inputWebsite(userdata.testdata_editclient.website)
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.submit()

        editclientpage.verify_success()
    })

    it('Cancel', () => {
        editclientpage.inputIndustry(userdata.testdata_editclient.industry)
        editclientpage.inputClientName(userdata.testdata_editclient.clientname)
        editclientpage.inputDescription(userdata.testdata_editclient.description)
        editclientpage.inputAddress(userdata.testdata_editclient.address)
        editclientpage.inputRegency(userdata.testdata_editclient.regency)
        editclientpage.inputContactName(userdata.testdata_editclient.contactname)
        editclientpage.inputContactEmail(userdata.testdata_editclient.email)
        editclientpage.inputContactNumber(userdata.testdata_editclient.contactnumber)
        editclientpage.inputWebsite(userdata.testdata_editclient.website)
        editclientpage.inputLogo(userdata.testdata_editclient.logo, userdata.testdata_client.logo_filename)
        editclientpage.cancel()

        general.verify_url(detail_link)
    })
})

describe('User should be able to access Event page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()
    })

    it('Go to Upcoming Event Page', () => {
        eventpage.clickEventMenu()
        eventpage.clickUpcomingEventMenu()

        general.verify_url(userdata.testdata_links.upcoming_eventpage)
        eventpage.verify_event_page_title_exists()
        eventpage.verify_event_table_exists()
    })

    it('Search in Upcoming Event Page', () => {
        general.visit(userdata.testdata_links.upcoming_eventpage)

        eventpage.inputSearch(userdata.testdata_event.searchquery)
        eventpage.search()

        eventpage.verify_search_results(userdata.testdata_event.searchquery)
    })

    it('Filter by Event Type in Upcoming Event Page', () => {
        general.visit(userdata.testdata_links.upcoming_eventpage)

        eventpage.selectFilter(userdata.testdata_event.event_type)

        eventpage.verify_filter_results(userdata.testdata_event.event_type)
    })

    it('Click Create New Event in Upcoming Event Page', () => {
        general.visit(userdata.testdata_links.upcoming_eventpage)

        eventpage.clickCreateEvent()

        general.verify_url(userdata.testdata_links.createeventpage)
    })

    it('Click Event Detail in Upcoming Event Page', () => {
        general.visit(userdata.testdata_links.upcoming_eventpage)

        eventpage.clickDetailButton()

        eventpage.verify_event_detail_title_exists()
        eventpage.verify_event_detail_table_exists()
    })

    it('Click Event Guests in Upcoming Event Page', () => {
        general.visit(userdata.testdata_links.upcoming_eventpage)

        eventpage.clickGuestsButton()

        eventpage.verify_event_guests_title_exists()
        eventpage.verify_event_guests_limit_exists()
        eventpage.verify_event_guests_total_exists()
        eventpage.verify_event_guests_rsvp_exists()
    })

    it('Go to Expired Event Page', () => {
        eventpage.clickEventMenu()
        eventpage.clickExpiredEventMenu()

        general.verify_url(userdata.testdata_links.expired_eventpage)
        eventpage.verify_event_page_title_exists()
        eventpage.verify_event_table_exists()
    })

    it('Search in Expired Event Page', () => {
        general.visit(userdata.testdata_links.expired_eventpage)

        eventpage.inputSearch(userdata.testdata_event.searchquery)
        eventpage.search()

        eventpage.verify_search_results(userdata.testdata_event.searchquery)
    })

    it('Filter by Event Type in Expired Event Page', () => {
        general.visit(userdata.testdata_links.expired_eventpage)

        eventpage.selectFilter(userdata.testdata_event.event_type)

        eventpage.verify_filter_results(userdata.testdata_event.event_type)
    })

    it('Click Event Detail in Expired Event Page', () => {
        general.visit(userdata.testdata_links.expired_eventpage)

        eventpage.clickDetailButton()

        eventpage.verify_event_detail_title_exists()
        eventpage.verify_event_detail_table_exists()
    })

    it('Click Event Guests in Expired Event Page', () => {
        general.visit(userdata.testdata_links.expired_eventpage)

        eventpage.clickGuestsButton()

        eventpage.verify_event_guests_title_exists()
        eventpage.verify_event_guests_limit_exists()
        eventpage.verify_event_guests_total_exists()
        eventpage.verify_event_guests_rsvp_exists()
    })

})

describe('User should be able to create new event', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()
    })

    it('No Event Type', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.verify_empty_eventtype()
    })

    it('No Client', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.verify_empty_client()
    })

    it('No Regency', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.next()

        createeventpage.verify_empty_regency()
    })

    it('No Event Title', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.inputVenue(userdata.testdata_event.venue)
        createeventpage.inputDescription(userdata.testdata_event.description)
        createeventpage.inputAddress(userdata.testdata_event.address)
        createeventpage.inputDate(userdata.testdata_event.date)
        createeventpage.inputTime(userdata.testdata_event.time_hour, userdata.testdata_event.time_minute)
        createeventpage.inputVideo(userdata.testdata_event.video)
        createeventpage.inputCeremonyLocation(userdata.testdata_event.ceremony_maps)
        createeventpage.inputReceptionLocation(userdata.testdata_event.reception_maps)
        createeventpage.next()

        createeventpage.verify_empty_eventtitle()
    })

    it('No Venue', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.inputEventTitle(userdata.testdata_event.event_title)
        createeventpage.inputDescription(userdata.testdata_event.description)
        createeventpage.inputAddress(userdata.testdata_event.address)
        createeventpage.inputDate(userdata.testdata_event.date)
        createeventpage.inputTime(userdata.testdata_event.time_hour, userdata.testdata_event.time_minute)
        createeventpage.inputVideo(userdata.testdata_event.video)
        createeventpage.inputCeremonyLocation(userdata.testdata_event.ceremony_maps)
        createeventpage.inputReceptionLocation(userdata.testdata_event.reception_maps)
        createeventpage.next()

        createeventpage.verify_empty_venue()
    })

    it('No Description', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.inputEventTitle(userdata.testdata_event.event_title)
        createeventpage.inputVenue(userdata.testdata_event.venue)
        createeventpage.inputAddress(userdata.testdata_event.address)
        createeventpage.inputDate(userdata.testdata_event.date)
        createeventpage.inputTime(userdata.testdata_event.time_hour, userdata.testdata_event.time_minute)
        createeventpage.inputVideo(userdata.testdata_event.video)
        createeventpage.inputCeremonyLocation(userdata.testdata_event.ceremony_maps)
        createeventpage.inputReceptionLocation(userdata.testdata_event.reception_maps)
        createeventpage.next()

        createeventpage.verify_empty_description()
    })

    it('No Address', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.inputEventTitle(userdata.testdata_event.event_title)
        createeventpage.inputVenue(userdata.testdata_event.venue)
        createeventpage.inputDescription(userdata.testdata_event.description)
        createeventpage.inputDate(userdata.testdata_event.date)
        createeventpage.inputTime(userdata.testdata_event.time_hour, userdata.testdata_event.time_minute)
        createeventpage.inputVideo(userdata.testdata_event.video)
        createeventpage.inputCeremonyLocation(userdata.testdata_event.ceremony_maps)
        createeventpage.inputReceptionLocation(userdata.testdata_event.reception_maps)
        createeventpage.next()

        createeventpage.verify_empty_address()
    })

    it('No Date', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.inputEventTitle(userdata.testdata_event.event_title)
        createeventpage.inputVenue(userdata.testdata_event.venue)
        createeventpage.inputDescription(userdata.testdata_event.description)
        createeventpage.inputAddress(userdata.testdata_event.address)
        createeventpage.inputTime(userdata.testdata_event.time_hour, userdata.testdata_event.time_minute)
        createeventpage.inputVideo(userdata.testdata_event.video)
        createeventpage.inputCeremonyLocation(userdata.testdata_event.ceremony_maps)
        createeventpage.inputReceptionLocation(userdata.testdata_event.reception_maps)
        createeventpage.next()

        createeventpage.verify_empty_date()
    })

    it('No Video', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.inputEventTitle(userdata.testdata_event.event_title)
        createeventpage.inputVenue(userdata.testdata_event.venue)
        createeventpage.inputDescription(userdata.testdata_event.description)
        createeventpage.inputAddress(userdata.testdata_event.address)
        createeventpage.inputDate(userdata.testdata_event.date)
        createeventpage.inputTime(userdata.testdata_event.time_hour, userdata.testdata_event.time_minute)
        createeventpage.inputCeremonyLocation(userdata.testdata_event.ceremony_maps)
        createeventpage.inputReceptionLocation(userdata.testdata_event.reception_maps)
        createeventpage.next()

        createeventpage.verify_empty_video()
    })

    it('No Ceremony Location', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.inputEventTitle(userdata.testdata_event.event_title)
        createeventpage.inputVenue(userdata.testdata_event.venue)
        createeventpage.inputDescription(userdata.testdata_event.description)
        createeventpage.inputAddress(userdata.testdata_event.address)
        createeventpage.inputDate(userdata.testdata_event.date)
        createeventpage.inputTime(userdata.testdata_event.time_hour, userdata.testdata_event.time_minute)
        createeventpage.inputVideo(userdata.testdata_event.video)
        createeventpage.inputReceptionLocation(userdata.testdata_event.reception_maps)
        createeventpage.next()

        createeventpage.verify_empty_ceremony_location()
    })

    it('No Reception Location', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.inputEventTitle(userdata.testdata_event.event_title)
        createeventpage.inputVenue(userdata.testdata_event.venue)
        createeventpage.inputDescription(userdata.testdata_event.description)
        createeventpage.inputAddress(userdata.testdata_event.address)
        createeventpage.inputDate(userdata.testdata_event.date)
        createeventpage.inputTime(userdata.testdata_event.time_hour, userdata.testdata_event.time_minute)
        createeventpage.inputVideo(userdata.testdata_event.video)
        createeventpage.inputCeremonyLocation(userdata.testdata_event.ceremony_maps)
        createeventpage.next()

        createeventpage.verify_empty_reception_location()
    })

    // Test case "No Theme" is expected to fail.
    it('No Theme', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.inputEventTitle(userdata.testdata_event.event_title)
        createeventpage.inputVenue(userdata.testdata_event.venue)
        createeventpage.inputDescription(userdata.testdata_event.description)
        createeventpage.inputAddress(userdata.testdata_event.address)
        createeventpage.inputDate(userdata.testdata_event.date)
        createeventpage.inputTime(userdata.testdata_event.time_hour, userdata.testdata_event.time_minute)
        createeventpage.inputVideo(userdata.testdata_event.video)
        createeventpage.inputCeremonyLocation(userdata.testdata_event.ceremony_maps)
        createeventpage.inputReceptionLocation(userdata.testdata_event.reception_maps)
        createeventpage.next()

        createeventpage.next()

        createeventpage.finish()

        createeventpage.verify_empty_theme()
    })

    it('Valid Data', () => {
        general.visit(userdata.testdata_links.createeventpage)

        createeventpage.inputEventType(userdata.testdata_event.event_type)
        createeventpage.inputClient(userdata.testdata_event.clientname)
        createeventpage.inputRegency(userdata.testdata_event.regency)
        createeventpage.next()

        createeventpage.inputEventTitle(userdata.testdata_event.event_title)
        createeventpage.inputVenue(userdata.testdata_event.venue)
        createeventpage.inputDescription(userdata.testdata_event.description)
        createeventpage.inputAddress(userdata.testdata_event.address)
        createeventpage.inputDate(userdata.testdata_event.date)
        createeventpage.inputTime(userdata.testdata_event.time_hour, userdata.testdata_event.time_minute)
        createeventpage.inputVideo(userdata.testdata_event.video)
        createeventpage.inputCeremonyLocation(userdata.testdata_event.ceremony_maps)
        createeventpage.inputReceptionLocation(userdata.testdata_event.reception_maps)
        createeventpage.next()

        createeventpage.chooseTheme()
        createeventpage.next()

        createeventpage.finish()

        createeventpage.verify_success()
    })
})

describe('User should be able to edit upcoming event', () => {
    let detail_link;

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()

        general.visit(userdata.testdata_links.upcoming_eventpage)

        eventpage.clickDetailButton()
        editeventpage.clickEditButton()
    })

    it('Empty Event Title', () => {
        editeventpage.clearEventTitle()
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_eventtitle()
    })

    it('Empty Description', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.clearDescription()
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_description()
    })

    it('Empty Date', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.clearDate()
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_date()
    })

    it('Empty Time', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.clearTime()
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_time()
    })

    it('Empty Venue', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.clearVenue()
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_venue()
    })

    it('Empty Address', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.clearAddress()
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_address()
    })

    it('Empty Video', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.clearVideo()
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_video()
    })

    it('Empty Location', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.clearLocation()
        editeventpage.save()

        editeventpage.verify_empty_location()
    })

    it('Valid Data', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_success()
    })

    it('Cancel', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.cancel()

        editeventpage.verify_cancel()
    })
})

describe('User should be able to edit expired event', () => {
    let detail_link;

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        general.visit(userdata.testdata_links.loginpage)

        loginpage.inputEmail(userdata.testdata_login.email)
        loginpage.inputPassword(userdata.testdata_login.password)
        loginpage.submit()

        general.visit(userdata.testdata_links.expired_eventpage)

        eventpage.clickDetailButton()
        editeventpage.clickEditButton()
    })

    it('Empty Event Title', () => {
        editeventpage.clearEventTitle()
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_eventtitle()
    })

    it('Empty Description', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.clearDescription()
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_description()
    })

    it('Empty Date', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.clearDate()
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_date()
    })

    it('Empty Time', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.clearTime()
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_time()
    })

    it('Empty Venue', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.clearVenue()
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_venue()
    })

    it('Empty Address', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.clearAddress()
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_address()
    })

    it('Empty Video', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.clearVideo()
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_empty_video()
    })

    it('Empty Location', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.clearLocation()
        editeventpage.save()

        editeventpage.verify_empty_location()
    })

    it('Valid Data', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.save()

        editeventpage.verify_success()
    })

    it('Cancel', () => {
        editeventpage.inputEventTitle(userdata.testdata_editevent.event_title)
        editeventpage.inputDescription(userdata.testdata_editevent.description)
        editeventpage.inputDate(userdata.testdata_editevent.date)
        editeventpage.inputTime(userdata.testdata_editevent.time)
        editeventpage.inputVenue(userdata.testdata_editevent.venue)
        editeventpage.inputAddress(userdata.testdata_editevent.address)
        editeventpage.inputRegency(userdata.testdata_editevent.regency)
        editeventpage.inputVideo(userdata.testdata_editevent.video)
        editeventpage.inputLocation(userdata.testdata_editevent.maps)
        editeventpage.cancel()

        editeventpage.verify_cancel()
    })
})