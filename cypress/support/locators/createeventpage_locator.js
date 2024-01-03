module.exports = {
    elements: {
        eventtype_input: '//*[@id="select2-fid_type-container"]',
        client_input: '//*[@id="select2-fid_company-container"]',
        regency_input: '//*[@id="select2-fid_regencies-container"]',
        title_input: '//*[@id="title"]',
        venue_input: '//*[@id="venue_name"]',
        description_input: '//*[@id="description"]',
        address_input: '//*[@id="location_address"]',
        date_input: '//*[@id="event_date"]',
        time_input: '//*[@id="timepicker2"]',
        time_hour_input: '//*[contains(@class, "bootstrap-timepicker-hour")]',
        time_minute_input: '//*[contains(@class, "bootstrap-timepicker-minute")]',
        video_input: '//*[@id="event_video_url"]',
        ceremony_location_input: '//*[@id="maps"]',
        reception_location_input: '//*[@id="location_coordinate_longitude"]',
        theme_list: '//*[@id="fid_template"]/div',
        next_button: '//*[contains(text(), "Next")]',
        finish_button: '//*[@id="vertical-example"]/div[3]/ul/li[3]/a',
        toast_message: '//*[contains(@class, "toast-message")]'
    }
}