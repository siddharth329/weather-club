import CitiesActionTypes from './cities.types';

export const addCity = (city) => ({
	type: CitiesActionTypes.ADD_CITY,
	payload: city
});

export const removeCity = (city) => ({
	type: CitiesActionTypes.REMOVE_CITY,
	payload: city
});

export const clearCity = () => ({
	type: CitiesActionTypes.CLEAR_ALL_CITY
});

export const setCurrentCity = (city) => ({
	type: CitiesActionTypes.SET_CURRENT_CITY,
	payload: city
});

export const deleteCurrentCity = () => ({
	type: CitiesActionTypes.DELETE_CURRENT_CITY
});
