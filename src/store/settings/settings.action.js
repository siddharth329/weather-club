import SettingsActionTypes from './settings.types';

export const setTempUnitToF = () => ({
	type: SettingsActionTypes.TEMPERATURE_UNIT_TO_F
});

export const setTempUnitToC = () => ({
	type: SettingsActionTypes.TEMPERATURE_UNIT_TO_C
});

export const setPresUnitToIn = () => ({
	type: SettingsActionTypes.PRESSURE_IN_IN
});
export const setPresUnitToMb = () => ({
	type: SettingsActionTypes.PRESSURE_IN_MB
});

export const setWindSpeedUnitToKPH = () => ({
	type: SettingsActionTypes.WIND_SPEED_TO_KPH
});

export const setWindSpeedUnitToMPH = () => ({
	type: SettingsActionTypes.WIND_SPEED_TO_MPH
});
