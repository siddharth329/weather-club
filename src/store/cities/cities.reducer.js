import CitiesActionTypes from './cities.types';
import { addCityToList, removeCityFromList } from './cities.utils';

const INITIAL_STATE = {
	cityList: [],
	currentCity: {
		id: 2812957,
		name: 'St Giles, Camden, Greater London, United Kingdom',
		region: 'Camden, Greater London',
		country: 'United Kingdom',
		lat: 51.52,
		lon: -0.12,
		url: 'st-giles-camden-greater-london-united-kingdom'
	}
};

const cityReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CitiesActionTypes.ADD_CITY:
			return {
				...state,
				cityList: addCityToList(state.cityList, action.payload)
			};

		case CitiesActionTypes.REMOVE_CITY:
			return {
				...state,
				cityList: removeCityFromList(
					state.cityList,
					action.payload
				)
			};

		case CitiesActionTypes.CLEAR_ALL_CITY:
			return { ...state, cityList: [] };

		case CitiesActionTypes.SET_CURRENT_CITY: {
			return { ...state, currentCity: action.payload };
		}

		case CitiesActionTypes.DELETE_CURRENT_CITY:
			return { ...state, currentCity: null };

		default:
			return state;
	}
};

export default cityReducer;
