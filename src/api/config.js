import axios from "axios"

const base_url = 'http://localhost:3000'

export const voucherApi = axios.create({
    baseURL: base_url
})