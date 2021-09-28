import React from 'react';

import { ReactComponent as CloudyDay1 } from '../assets/static/cloudy-day-1.svg';
import { ReactComponent as CloudyDay2 } from '../assets/static/cloudy-day-2.svg';
import { ReactComponent as CloudyDay3 } from '../assets/static/cloudy-day-3.svg';

import { ReactComponent as CloudyNight1 } from '../assets/static/cloudy-night-1.svg';
import { ReactComponent as CloudyNight2 } from '../assets/static/cloudy-night-2.svg';
import { ReactComponent as CloudyNight3 } from '../assets/static/cloudy-night-3.svg';

// import { ReactComponent as Cloudy } from '../assets/static/cloudy.svg';
import { ReactComponent as Day } from '../assets/static/day.svg';
import { ReactComponent as Night } from '../assets/static/night.svg';
import { ReactComponent as Thunder } from '../assets/static/thunder.svg';
import { ReactComponent as Fog } from '../assets/static/fog.svg';

// import { ReactComponent as Rainy1 } from '../assets/static/rainy-1.svg';
import { ReactComponent as Rainy2 } from '../assets/static/rainy-2.svg';
// import { ReactComponent as Rainy3 } from '../assets/static/rainy-3.svg';
import { ReactComponent as Rainy4 } from '../assets/static/rainy-4.svg';
import { ReactComponent as Rainy5 } from '../assets/static/rainy-5.svg';
import { ReactComponent as Rainy6 } from '../assets/static/rainy-6.svg';
import { ReactComponent as Rainy7 } from '../assets/static/rainy-7.svg';

// import { ReactComponent as Snowy1 } from '../assets/static/snowy-1.svg';
import { ReactComponent as Snowy2 } from '../assets/static/snowy-2.svg';
import { ReactComponent as Snowy3 } from '../assets/static/snowy-3.svg';
import { ReactComponent as Snowy4 } from '../assets/static/snowy-4.svg';
import { ReactComponent as Snowy5 } from '../assets/static/snowy-5.svg';
import { ReactComponent as Snowy6 } from '../assets/static/snowy-6.svg';

const SvgSelector = ({ current }) => {
	switch (current.condition.code) {
		case 1000: {
			if (current.is_day)
				return <Day />; // Sunny
			else return <Night />; // Clear
		}

		case 1003: {
			// Partly Cloudy
			if (current.is_day) return <CloudyDay1 />;
			else return <CloudyNight1 />;
		}

		case 1006: {
			// Cloudy
			if (current.is_day)
				return <CloudyDay2 />; // Sunny
			else return <CloudyNight2 />; // Clear
		}

		case 1009: {
			// Overcast
			if (current.is_day) return <CloudyDay3 />;
			else return <CloudyNight3 />;
		}

		// FOG
		case 1135: // Fog
		case 1030: // Mist
		case 1147: // Freezing fog
		case 1153: // Light drizzle
			return <Fog />;

		// LIGHT RAIN
		case 1063: // Patchy rain possible
		case 1150: // Patchy light drizzle
		case 1180: // Patchy light rain
		case 1183: // Light rain
		case 1198: // Light Freezing rain
		case 1240: {
			// Light rain shower
			if (current.is_day) return <Rainy2 />;
			else return <Rainy4 />;
		}

		// MODERATE RAIN
		case 1168: // Freezing drizzle
		case 1186: // Moderate rain at times
		case 1189: // Moderate rain
		case 1201: {
			// Moderate or heavy freezing rain
			if (current.is_day) return <Rainy4 />;
			else return <Rainy5 />;
		}

		// HEAVY RAIN
		case 1171: // Heavy freezing drizzle
		case 1192: // Heavy rain at times
		case 1195: // Heavy Rain
		case 1243: // Moderate or heavy rain shower
		case 1246: {
			// Torrential rain shower
			if (current.is_day) return <Rainy6 />;
			else return <Rainy7 />;
		}

		// LIGHT SNOW
		case 1066: //Patchy snow possible
		case 1069: //patchy sleet possible
		case 1072: // Patchy freezy drizzle possible
		case 1204: // Light sleet
		case 1210: // patchy light snow
		case 1213: // light snow
		case 1249: // Light snow showers
		case 1255: {
			// Light showers of ice pallets
			if (current.is_day) return <Snowy2 />;
			else return <Snowy4 />;
		} //24

		// MODERATE SNOW
		case 1114: // Blowing snow
		case 1207: // moderate or heavy sleet
		case 1216: // patchy moderate snow
		case 1219: // Moderate snow
		case 1237: {
			// Ice pallets
			if (current.is_day) return <Snowy3 />;
			else return <Snowy5 />;
		}

		// HEAVY SNOW
		case 1117: // Blizzard
		case 1222: // Patchy heavy snow
		case 1225: // Heavy snow
		case 1252: // Moderate or heavy heavy snow showers
		case 1258: // Moderate or heavy showers of ice pellets
			return <Snowy6 />;

		// THUNDER
		case 1087: // Thundery outbreaks possible
		case 1261: // Patchy light rain with thunder
		case 1282: // Moderate or heavy snow with thunder
		case 1264: // Moderate or heavy rain with thunder
		case 1273: // Patchy light rain with thunder
		case 1276: // Moderate or heavy rain with thunder
		case 1279: // Patchy light snow with thunder
			return <Thunder />;

		default: {
			if (current.is_day) return <Day />;
			else return <Night />;
		}
	}
};

export default SvgSelector;

// import {ReactComponent as CloudDay1} from '../assets/static/cloud-day-1.svg'
// import {ReactComponent as CloudDay2} from '../assets/static/cloud-day-2.svg'
// import {ReactComponent as CloudDay3} from '../assets/static/cloud-day-3.svg'

// import {ReactComponent as CloudNight1} from '../assets/static/cloud-night-1.svg'
// import {ReactComponent as CloudNight2} from '../assets/static/cloud-night-2.svg'
// import {ReactComponent as CloudNight3} from '../assets/static/cloud-night-3.svg'

// import {ReactComponent as Cloudy} from '../assets/static/cloudy.svg'
// import {ReactComponent as Day} from '../assets/static/day.svg'
// import {ReactComponent as Night} from '../assets/static/night.svg'

// import {ReactComponent as Rainy1} from '../assets/static/rainy-1.svg'
// import {ReactComponent as Rainy2} from '../assets/static/rainy-2.svg'
// import {ReactComponent as Rainy3} from '../assets/static/rainy-3.svg'
// import {ReactComponent as Rainy4} from '../assets/static/rainy-4.svg'
// import {ReactComponent as Rainy5} from '../assets/static/rainy-5.svg'
// import {ReactComponent as Rainy6} from '../assets/static/rainy-6.svg'
// import {ReactComponent as Rainy7} from '../assets/static/rainy-7.svg'

// import {ReactComponent as Snowy1} from '../assets/static/snowy-1.svg'
// import {ReactComponent as Snowy2} from '../assets/static/snowy-2.svg'
// import {ReactComponent as Snowy3} from '../assets/static/snowy-3.svg'
// import {ReactComponent as Snowy4} from '../assets/static/snowy-4.svg'
// import {ReactComponent as Snowy5} from '../assets/static/snowy-5.svg'
// import {ReactComponent as Snowy6} from '../assets/static/snowy-6.svg'
// import {ReactComponent as Snowy7} from '../assets/static/snowy-7.svg'
