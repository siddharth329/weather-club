import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUnits } from '../../store/settings/settings.selectors';
// import { removeCity } from '../../store/cities/cities.actions';

import { ReactComponent as LocationPin } from '../../assets/location-pin.svg';
import { ReactComponent as Wind } from '../../assets/wind.svg';
import { ReactComponent as Humidity } from '../../assets/humidity.svg';
import { ReactComponent as CloudCover } from '../../assets/cloud-cover.svg';
import { ReactComponent as RemoveBtn } from '../../assets/minus.svg';

import svgSelector from '../../utils/iconSelector';

import './main-widget.styles.scss';

const getTemperature = (units, current) => {
	return (
		<div className="main-widget__details">
			{units.tempUnit === 'C' ? current.temp_c : current.temp_f}&deg;{' '}
			<span>{units.tempUnit === 'C' ? 'C' : 'F'}</span>
			<p>{current.condition.text}</p>
		</div>
	);
};

const getWindSpeed = (units, current) => {
	return (
		<div className="main-widget__wind">
			<Wind />
			<span>
				{units.windSpeedUnit === 'KPH' ? (
					`${current.wind_kph} km/h`
				) : (
					`${current.wind_mph} m/h`
				)}
			</span>
		</div>
	);
};

function MainWidget({ cityData, units, removeButton, removeCity }) {
	return (
		<div className="main-widget">
			<LocationPin className="main-widget__location-pin" />
			<h4 className="main-widget__location">
				{cityData.location.name}
				{' , '} &nbsp;
				<span>{cityData.location.region}</span>
			</h4>
			<div className="main-widget__condition-img">
				{svgSelector(cityData)}
			</div>
			{getTemperature(units, cityData.current)}
			{getWindSpeed(units, cityData.current)}
			<div className="main-widget__humidity">
				<Humidity />
				<span>{cityData.current.humidity} %</span>
			</div>
			<div className="main-widget__cloud-cover">
				<CloudCover />
				<span>{cityData.current.cloud} %</span>
			</div>

			{removeButton && (
				<RemoveBtn
					className="main-widget__remove-btn"
					onClick={() => removeCity(cityData.city)}
				/>
			)}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	units: selectUnits
});

// const mapDispatchToProps = (dispatch) => ({
// 	removeCity: (cityToRemove) => dispatch(removeCity(cityToRemove))
// });

export default connect(mapStateToProps)(MainWidget);
