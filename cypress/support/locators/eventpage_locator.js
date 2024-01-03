module.exports = {
    elements: {
        eventpage_button: '//*[@key="t-event"]',
        upcoming_eventpage_button: '//*[@key="t-event-upcoming"]',
        expired_eventpage_button: '//*[@key="t-event-expired"]',
        eventpage_title: '//*[contains(text(), "Daftar Event")]',
        search_input: '//*[@id="searchValue"]',
        search_button: '//*[contains(text(), "Cari")]',
        event_type_filter: '//*[@id="selectEventType"]',
        create_event_button: '//*[@id="layout-wrapper"]/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div/a',
        event_table: '//*[@id="layout-wrapper"]/div[2]/div/div/div[2]/div/div/div/div[2]/table',
        event_table_entry: '//*[@id="layout-wrapper"]/div[2]/div/div/div[2]/div/div/div/div[2]/table/tbody/tr',
        event_detail_button: '//*[contains(@class, "mdi mdi-information font-size-24")]',
        event_detail_title: '//*[contains(text(), "Detail Event")]',
        event_detail_table: '//*[@id="layout-wrapper"]/div[2]/div/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]',
        event_guests_button: '//*[contains(@class, "mdi mdi-account-details font-size-24")]',
        event_guests_title: '//*[contains(text(), "Daftar Tamu")]',
        event_guests_invitation_limit: '//*[contains(text(), "Limit Undangan")]',
        event_guests_total: '//*[contains(text(), "Total Tamu")]',
        event_guests_rsvp: '//*[contains(text(), "Tamu Akan Datang")]'
    }
}