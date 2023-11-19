import axios from 'axios';

const axiosMain = axios.create({
  baseURL: process.env.KINOPOISK_MAIN_API,
  headers: {
    'X-API-KEY': process.env.KINOPOISK_MAIN_TOKEN,
  },
});

const axiosSecond_v1 = axios.create({
  baseURL: process.env.KINOPOISK_SECOND_API_v1,
  headers: {
    'X-API-KEY': process.env.KINOPOISK_SECOND_TOKEN,
  },
});

const axiosSecond_v2 = axios.create({
  baseURL: process.env.KINOPOISK_SECOND_API_v2,
  headers: {
    'X-API-KEY': process.env.KINOPOISK_SECOND_TOKEN,
  },
});

export { axiosMain, axiosSecond_v1, axiosSecond_v2 };
