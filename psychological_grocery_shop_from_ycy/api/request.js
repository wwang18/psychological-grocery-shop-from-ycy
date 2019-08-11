import axios from 'axios';
import { API_ROOT } from '../config';

axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)  
})

const handleStatus = (res) => {
    if (res.status.toString().includes("20")) {
        return Promise.resolve(res.data)
    } else {
        return res.data != null ? Promise.reject(res.data) : Promise.reject(res)
    }
}

const config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
};

const nocacheConfig = () => {
    let config = {};
    config.headers = config.headers || {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    };
   
    return config
};

const authConfig = () => {
    let config = {};
    config.headers = config.headers || { contentType: 'application/json; charset=utf-8'};
    
    return config
};

export default {
    gets(url) {
        url = API_ROOT + url

        return axios
            .get(url, nocacheConfig())
            .then(handleStatus)
    },

    get(url, params) {
        url = API_ROOT + url
        let queryString = []

        if (params) {
            Object.keys(params).forEach(key => params[key] && queryString.push(`${key}=${params[key]}`))
            if (queryString.length > 0) {
                queryString = queryString.join('&')
                url += `?${queryString}`
            }
        }

        return axios
            .get(url, nocacheConfig())
            .then(handleStatus)
    },

    post(url, params) {
        url = API_ROOT + url

        return axios
            .post(url, params, authConfig())
            .then(handleStatus)
    },

    put(url, params) {
        url = API_ROOT + url

        return axios
            .put(url, params, authConfig())
            .then(handleStatus)
    },

    patch(url, params) {
        url = API_ROOT + url;

        return axios.patch(url, params, authConfig()).then(handleStatus);
    },

    delete(url) {
        url = API_ROOT + url

        return axios
            .delete(url, authConfig())
            .then(handleStatus)
    },

    owin(url, params) {
        url = API_ROOT + url

        return axios
            .post(url, params, config)
            .then(handleStatus)
    },

    request(config) {
        return axios.request({
            ...authConfig(),
            ...config,
            url: API_ROOT + config.url
        }).then(handleStatus)
    }
}