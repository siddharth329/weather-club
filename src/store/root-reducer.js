import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cityReducer from './cities/cities.reducer';
import settingReducer from './settings/settings.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'city', 'setting' ]
};

const rootReducer = combineReducers({
	city: cityReducer,
	setting: settingReducer
});

export default persistReducer(persistConfig, rootReducer);
