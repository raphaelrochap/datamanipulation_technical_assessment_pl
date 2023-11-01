import axios from "axios";

export const api = axios.create({
    baseURL: 'https://data-manipulation-6.ozmap.com.br:9994/api/v2/',
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2R1bGUiOiJhcGkiLCJ1c2VyIjoiNWQ5ZjNmYjgyMDAxNDEwMDA2NDdmNzY4IiwiY3JlYXRpb25EYXRlIjoiMjAyMy0xMC0yNFQxOToxNDo0MS4yOTVaIiwiaWF0IjoxNjk4MTc0ODgxfQ.FzITnQbvsg0vXxNGwoC6BF_hJo_XWV9hHdMBD_6zZqc'
    }
})