import { createSelector } from 'reselect';

const setting = (state) => state.setting;

export const selectTempUnit = createSelector(
	[ setting ],
	(setting) => setting.tempUnit
);

export const selectWindSpeedUnit = createSelector(
	[ setting ],
	(setting) => setting.windSpeedUnit
);

export const selectPressureUnit = createSelector(
	[ setting ],
	(setting) => setting.pressureUnit
);

export const selectUnits = createSelector([ setting ], (setting) => {
	return {
		tempUnit: setting.tempUnit,
		pressureUnit: setting.pressureUnit,
		windSpeedUnit: setting.windSpeedUnit
	};
});
