import axios from 'axios'

export const http = axios.create({
    baseURL:'https://uinames.com/api/?',
    headers:{
        dataType: 'json',
    },
    timeout:1000   
})
