module.exports = {
    elements: {
        profile_title: '//*[contains(text(), "Profil Saya")]',
        profile_picture: '//*[contains(@class, "avatar-md profile-user-wid mb-4")]',
        personal_info: '//*[contains(text(), "Informasi Personal")]',
        edit_photo_button: '//button[contains(text(), "Ubah Foto")]',
        edit_password_button: '//button[contains(text(), "Ubah kata sandi")]',
        edit_personal_info_button: '//*[@id="layout-wrapper"]/div[2]/div/div/div[3]/div/div/div/div[1]/div[2]/a/button',
        upload_photo: '//input[@id="photo"]',
        photo_submit_button: '//button[@id="submitNewPhoto"]',
        new_password_input: '//*[@id="password"]',
        new_password_confirmation_input: '//*[@id="repassword"]',
        new_password_submit_button: '//button[@id="submitNewPassword"]',
        cancel_button: '//button[contains(text(), "Keluar")]',
        toast_message: '//*[contains(@class, "toast-message")]'
    }
}
