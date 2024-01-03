module.exports = {
    elements: {
        clientpage_button: '//*[@key="t-client"]',
        active_clientpage_button: '//*[@key="t-client-active"]',
        prospective_clientpage_button: '//*[@id="side-menu"]/li[7]/ul/li[2]/a',
        clientpage_title: '//*[contains(text(), "Perusahaan Klien")]',
        search_input: '//*[@id="searchValue"]',
        search_button: '//*[contains(text(), "Cari")]',
        industry_filter: '//*[@id="selectIndustry"]',
        create_client_button: '//*[contains(text(), "Buat Klien Baru")]',
        client_table: '//*[@id="layout-wrapper"]/div[2]/div/div/div[2]/div/div/div/div[2]/table',
        client_table_entry: '//*[@id="layout-wrapper"]/div[2]/div/div/div[2]/div/div/div/div[2]/table/tbody/tr',
        client_detail_button: '//*[@id="layout-wrapper"]/div[2]/div/div/div[2]/div/div/div/div[2]/table/tbody/tr/td[7]/a/button',
        client_detail_title: '//*[contains(text(), "Detail Perusahaan")]',
        edit_client_button: '//*[contains(text(), "Ubah")]',
        client_status_toggle: '//*[@id="changeStatus"]'
    }
}