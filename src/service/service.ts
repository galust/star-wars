import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from '../constants/constants';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 60000,
});

const service = async ({
    url = API_URL,
    endpoint = '',
    params = {},
    data = {},
    method = 'GET',
    headers = {},
}) => {
    const config: AxiosRequestConfig = {
        method,
        params,
        data,
        headers,
        url: `${url}${endpoint}`,
    };

    config.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
    };

    return axiosInstance(config);
};

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        return Promise.reject(error);
    },
);

export default service;
