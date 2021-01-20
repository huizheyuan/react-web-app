import axios from 'axios';

const axiosIns = axios.create({
    baseURL: 'http://localhost:2020/'
})

axiosIns.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token');
    if (token) {
        let newConfig = {...config};
        newConfig.headers.Authorization = `Bearer ${token}`;
        return newConfig;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axiosIns.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosIns;