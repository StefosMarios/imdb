import axios from 'axios';

const THE_MOVIES_DB_API_KEY = '37e314f0dd02fa641bcf0b6228c8c8c8';
const fixedURL = `https://api.themoviedb.org/3/`;
const fixedParams = `?api_key=${THE_MOVIES_DB_API_KEY}&language=en-US`;

// todo : add catch for empty responses

export const getUpcomingMovies = (page = 1) => axios.get(`${fixedURL}movie/upcoming${fixedParams}&page=${page}`);

export const getRequestToken = () => axios.get(`${fixedURL}authentication/token/new?api_key=${THE_MOVIES_DB_API_KEY}`);
