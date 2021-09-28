export const addCityToList = (cityList, cityToAdd) => {
	const existingCity = cityList.find((city) => city.id === cityToAdd.id);

	if (existingCity) {
		return [ ...cityList ];
	}

	return [ ...cityList, cityToAdd ];
};

export const removeCityFromList = (cityList, cityToRemove) => {
	return cityList.filter((city) => city.id !== cityToRemove.id);
};
