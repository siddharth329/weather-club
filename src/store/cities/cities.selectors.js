import { createSelector } from 'reselect';

const selectCity = (state) => state.city;

//... Get cityList from the city store
export const selectCityList = createSelector(
	[ selectCity ],
	(city) => city.cityList
);

//... Number of cities selected by user
export const selectCityListCount = createSelector(
	[ selectCityList ],
	(cityList) => cityList.length
);

//... Get Current City data searched by the user
export const selectCurrentCity = createSelector(
	[ selectCity ],
	(city) => city.currentCity
);
