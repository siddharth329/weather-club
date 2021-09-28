import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
	setTempUnitToC,
	setTempUnitToF,
	setPresUnitToIn,
	setPresUnitToMb,
	setWindSpeedUnitToKPH,
	setWindSpeedUnitToMPH
} from '../../store/settings/settings.action';
import { selectUnits } from '../../store/settings/settings.selectors';

import SettingWidget from '../../components/setting-widget/setting-widget.component';

import './settings-page.styles.scss';
import { createStructuredSelector } from 'reselect';

export class SettingsPage extends Component {
	handleClickTemp = (unit) => {
		const { setTempUnitToC, setTempUnitToF } = this.props;
		if (unit === 'C') setTempUnitToC();
		else setTempUnitToF();
	};

	handleClickWindSpeed = (unit) => {
		const {
			setWindSpeedUnitToKPH,
			setWindSpeedUnitToMPH
		} = this.props;
		if (unit === 'KPH') setWindSpeedUnitToKPH();
		else setWindSpeedUnitToMPH();
	};

	handleClickPressure = (unit) => {
		const { setPresUnitToMb, setPresUnitToIn } = this.props;
		if (unit === 'MB') setPresUnitToMb();
		else setPresUnitToIn();
	};

	render() {
		const { units } = this.props;
		return (
			<div className="settings-page">
				<h2 className="settings-page__title">Settings</h2>
				<SettingWidget
					name="Temperature Unit (&deg;C / &deg; F)"
					options={{ option1: 'C', option2: 'F' }}
					currentUnit={units.tempUnit}
					handleClick={{
						option1: () => this.handleClickTemp('C'),
						option2: () => this.handleClickTemp('F')
					}}
				/>
				<SettingWidget
					name="Wind speed Unit (KPH / MPH)"
					options={{ option1: 'KPH', option2: 'MPH' }}
					currentUnit={units.windSpeedUnit}
					handleClick={{
						option1: () => this.handleClickWindSpeed('KPH'),
						option2: () => this.handleClickWindSpeed('MPH')
					}}
				/>
				<SettingWidget
					name="Pressure Unit (MB / IN)"
					options={{ option1: 'MB', option2: 'IN' }}
					currentUnit={units.pressureUnit}
					handleClick={{
						option1: () => this.handleClickPressure('MB'),
						option2: () => this.handleClickPressure('IN')
					}}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	units: selectUnits
});

const mapDispatchTopProps = (dispatch) => ({
	setTempUnitToC: () => dispatch(setTempUnitToC()),
	setTempUnitToF: () => dispatch(setTempUnitToF()),
	setWindSpeedUnitToKPH: () => dispatch(setWindSpeedUnitToKPH()),
	setWindSpeedUnitToMPH: () => dispatch(setWindSpeedUnitToMPH()),
	setPresUnitToMb: () => dispatch(setPresUnitToMb()),
	setPresUnitToIn: () => dispatch(setPresUnitToIn())
});

export default connect(mapStateToProps, mapDispatchTopProps)(SettingsPage);
