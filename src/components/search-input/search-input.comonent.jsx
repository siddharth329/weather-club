import React from 'react';
import { DebounceInput } from 'react-debounce-input';

import './search-input.styles.scss';

const SearchInput = ({
	handleChange,
	minLength,
	debounceTimeout,
	label,
	...otherProps
}) => (
	<div className="search-input">
		<DebounceInput
			className="search-input__input"
			onChange={handleChange}
			{...otherProps}
			id={''.toLowerCase().split(' ')[0] || null}
			minLength={minLength}
			debounceTimeout={debounceTimeout}
			autoComplete="off"
			placeholder="Enter Location"
			autoFocus
		/>
		{label ? (
			<label htmlFor={label.toLowerCase().split(' ')[0]}>
				{label}
			</label>
		) : null}
	</div>
);

export default SearchInput;
