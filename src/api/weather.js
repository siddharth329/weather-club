import axios from 'axios';

const BASE_URL = 'https://weather-club-backend.herokuapp.com/api/v1';

const api = axios.create({
	baseURL: BASE_URL
});

export const getSearchSuggestions = async (term) => {
	return api.get('/suggestion', {
		params: {
			q: term,
			aqi: 'no'
		}
	});
};

export const getSearchCityData = async (...arr) => {
	return api.get('/searchdata', {
		params: {
			q: `${arr.join(',')}`,
			aqi: 'no'
		}
	});
};

export const getCityForecast = async (days, aqi, alerts) => {
	return api.get('/forecast', {
		params: {
			days,
			aqi: aqi ? 'yes' : 'no',
			alerts: alerts ? 'yes' : 'no'
		}
	});
};
