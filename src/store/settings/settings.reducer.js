import SettingsActionTypes from './settings.types';

const INITIAL_STATE = {
	tempUnit: 'C',
	windSpeedUnit: 'KPH',
	pressureUnit: 'IN'
};

const settingReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SettingsActionTypes.TEMPERATURE_UNIT_TO_F:
			return { ...state, tempUnit: 'F' };
		case SettingsActionTypes.TEMPERATURE_UNIT_TO_C:
			return { ...state, tempUnit: 'C' };
		case SettingsActionTypes.WIND_SPEED_TO_KPH:
			return { ...state, windSpeedUnit: 'KPH' };
		case SettingsActionTypes.WIND_SPEED_TO_MPH:
			return { ...state, windSpeedUnit: 'MPH' };
		case SettingsActionTypes.PRESSURE_IN_IN:
			return { ...state, pressureUnit: 'IN' };
		case SettingsActionTypes.PRESSURE_IN_MB:
			return { ...state, pressureUnit: 'MB' };

		default:
			return state;
	}
};

export default settingReducer;
