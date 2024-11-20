import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://api.shope.com.bd/api/v1/public',
    headers: {
        'Content-Type': 'application/json',
    },
});
