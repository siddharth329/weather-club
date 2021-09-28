import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCurrentCity,
	selectCityList,
	selectCityListCount
} from '../../store/cities/cities.selectors';
import { addCity, removeCity } from '../../store/cities/cities.actions';
import { getSearchCityData } from '../../api/weather';

import Spinner from '../../components/spinner/spinner.component';
import MainWidget from '../../components/main-widget/main-widget.component';

import './weather-page.styles.scss';

class WeatherPage extends Component {
	constructor(props) {
		super(props);

		this.state = { cityData: null, isLoading: true, error: null };
	}

	componentDidMount() {
		const { currentCity } = this.props;
		this.getAPIResponse(currentCity.url);
		// this.getAPIResponse(currentCity.lat, currentCity.lon);
	}

	getAPIResponse = async (lat, lon) => {
		let apiRes;
		try {
			apiRes = await getSearchCityData(lat, lon);
			console.log(apiRes);
			this.setState({
				cityData: apiRes.data.data.doc,
				isLoading: false
			});
		} catch (error) {
			alert(error + '\nPlease try after some time');
			this.setState({ error: error });
		}
	};

	handleAddCity = () => {
		const { currentCity, addCity, history } = this.props;
		addCity(currentCity);
		history.push('/home');
	};
	handleRemoveCity = () => {
		const { currentCity, removeCity } = this.props;
		removeCity(currentCity);
	};

	render() {
		const { cityData, isLoading } = this.state;
		const { currentCity, cityList, cityListCount } = this.props;

		const cityExistsInList = Boolean(cityList.find((city) => city.id === currentCity.id));

		if (isLoading) {
			return <Spinner />;
		} else {
			return (
				<div className={`weather-page ${cityData.current.is_day ? 'day' : 'night'}`}>
					<h2 className="weather-page__title">Weather Club</h2>
					<MainWidget cityData={cityData} />
					{cityExistsInList ? (
						<button className="weather-page__btn" onClick={this.handleRemoveCity}>
							Remove City
						</button>
					) : (
						<button
							className="weather-page__btn"
							onClick={this.handleAddCity}
							disabled={cityListCount >= 5}
						>
							Add City
						</button>
					)}
				</div>
			);
		}
		// return <div>{cityData && cityData.map((d) => <p>{d} </p>)}</div>;
	}
}

const mapStateToProps = createStructuredSelector({
	currentCity: selectCurrentCity,
	cityList: selectCityList,
	cityListCount: selectCityListCount
});

const mapDispatchToProps = (dispatch) => ({
	addCity: (cityToAdd) => dispatch(addCity(cityToAdd)),
	removeCity: (cityToRemove) => dispatch(removeCity(cityToRemove))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
