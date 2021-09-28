import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCityList,
	selectCityListCount
} from '../../store/cities/cities.selectors';

import MainWidget from '../../components/main-widget/main-widget.component';

import { getSearchCityData } from '../../api/weather';

import './homepage.styles.scss';
import Spinner from '../../components/spinner/spinner.component';
import { removeCity } from '../../store/cities/cities.actions';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = { cityDataList: [], isLoading: true, error: false };
	}

	componentDidMount() {
		const { cityList } = this.props;
		this.getCityDataForList(cityList);
	}

	getCityDataForList = async (cityList) => {
		const cityDataList = await Promise.all(
			cityList.map(async (city) => {
				let apiRes;
				try {
					apiRes = await getSearchCityData(city.url);
				} catch (error) {
					alert(error);
					this.setState({ isLoading: false, error: error });
				}
				return { ...apiRes.data.data.doc, city };
			})
		);
		this.setState({ cityDataList, isLoading: false });
	};

	handleRemoveCity = (cityToRemove) => {
		const { removeCity } = this.props;
		removeCity(cityToRemove);
		this.setState((currentState) => ({
			cityDataList: currentState.cityDataList.filter(
				(cityData) => cityData.city.id !== cityToRemove.id
			)
		}));
	};

	generateComponentForCities = () => {
		let { cityDataList } = this.state;
		let cities = null;

		if (cityDataList.length > 0) {
			cities = cityDataList.map((cityData, idx) => {
				return (
					<MainWidget
						key={idx}
						cityData={cityData}
						removeButton
						removeCity={() =>
							this.handleRemoveCity(cityData.city)}
					/>
				);
			});
		}
		return cities;
	};

	render() {
		const { isLoading } = this.state;
		const { cityListCount } = this.props;
		return (
			<div className="homepage">
				<h2 className="homepage__title">Saved Cities</h2>
				{isLoading ? (
					<Spinner />
				) : (
					<div className="homepage__cities">
						{this.generateComponentForCities()}
					</div>
				)}
				{cityListCount === 0 && (
					<Link to="/search" className="homepage__add-cities">
						Add Cities
					</Link>
				)}
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	cityList: selectCityList,
	cityListCount: selectCityListCount
});

const mapDispatchToProps = (dispatch) => ({
	removeCity: (cityToRemove) => dispatch(removeCity(cityToRemove))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
