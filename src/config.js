const config = {
    apihost: import.meta.env.VITE_APP_API_HOST,
    site_title: import.meta.env.VITE_APP_SITE_TITLE,
    global_ongkir: import.meta.env.VITE_APP_GLOBAL_ONGKIR,
    owner: import.meta.env.VITE_APP_OWNER,
    contact : import.meta.env.VITE_APP_CONTACT,
    billing: {
        account_no: import.meta.env.VITE_APP_BILLING_NO,
        bank : import.meta.env.VITE_APP_BILLING_BANK
    }
}

export {
    config
}