import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCurrentCity } from '../../store/cities/cities.actions';

import { getSearchSuggestions } from '../../api/weather';

import SearchBar from '../../components/search-bar/search-bar.component';
import SearchSuggestion from '../../components/search-suggestion/search-suggestion.component';
import Spinner from '../../components/spinner/spinner.component';

import './search-page.styles.scss';

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sugs: [],
			isLoading: false,
			error: null
		};
	}

	handleDisplaySuggestions = async (value) => {
		if (value.length > 2) {
			this.setState({ isLoading: true });
			try {
				const apiRes = await getSearchSuggestions(value);
				this.setState({
					sugs: apiRes.data.data.doc,
					isLoading: false
				});
			} catch (error) {
				alert(error);
				this.setState({ error: error });
			}
		} else {
			this.setState({ sugs: [], isLoading: false });
		}
	};

	generateComponentForSuggestion = () => {
		const { sugs } = this.state;
		const { history, setCurrentCity } = this.props;
		let suggestions = null;
		if (sugs.length) {
			suggestions = sugs.map((sug, idx) => (
				<SearchSuggestion
					handleClick={() => {
						setCurrentCity(sug);
						history.push(`/weather`);
					}}
					key={sug.id}
					{...sug}
				/>
			));
		}
		return suggestions;
	};

	render() {
		return (
			<div className="search-page">
				<h2 className="search-page__title">Search City</h2>
				<SearchBar
					handleDisplaySuggestions={
						this.handleDisplaySuggestions
					}
				/>
				{this.state.isLoading ? (
					<Spinner />
				) : (
					<div className="search-page__suggestions">
						{this.generateComponentForSuggestion()}
					</div>
				)}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentCity: (city) => dispatch(setCurrentCity(city))
});

export default connect(null, mapDispatchToProps)(SearchPage);
