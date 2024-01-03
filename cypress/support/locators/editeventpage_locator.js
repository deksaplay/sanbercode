module.exports = {
    elements: {
        editevent_button: '//*[@title="Ubah detail event"]',
        regency_input: '//*[@id="regency"]',
        title_input: '//*[@id="eventName"]',
        venue_input: '//*[@id="vanue"]',
        description_input: '//*[@id="description"]',
        address_input: '//*[@id="address"]',
        date_input: '//*[@id="eventDate"]',
        time_input: '//*[@id="eventTime"]',
        video_input: '//*[@id="videoUrl"]',
        location_input: '//*[@id="locationMap"]',
        save_button: '//*[@id="updateEventDetail"]',
        cancel_button: '//*[@id="modalEditEventDetail"]/div/div/div[3]/button[1]',
        toast_message: '//*[contains(@class, "toast-message")]',
        edit_modal: '//*[@id="modalEditEventDetail"]'
    }
}