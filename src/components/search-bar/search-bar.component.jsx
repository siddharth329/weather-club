import React, { Component } from 'react';

import SearchInput from '../search-input/search-input.comonent';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ''
		};
	}

	handleChange = (event) => {
		const { value, name } = event.target;
		const { handleDisplaySuggestions } = this.props;

		handleDisplaySuggestions(value);

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="search-bar">
				<SearchInput
					type="text"
					name="search"
					value={this.state.searchTerm}
					handleChange={this.handleChange}
					minLength={3}
					debounceTimeout={300}
				/>
			</div>
		);
	}
}

export default SearchBar;
