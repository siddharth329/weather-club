import React from 'react';

import './search-suggestion.styles.scss';

const randomImageUrl = () => {
	const random = Math.floor(Math.random() * 7) + 1;
	return `https://weather-club-backend.herokuapp.com/images/image${random}.jpg`;
};

function SearchSuggestion({ name, region, country, handleClick }) {
	return (
		<div className="search-suggestion" onClick={handleClick}>
			<img src={randomImageUrl()} alt="ShowImage" />
			<div className="search-suggestion__content">
				<h3 className="search-suggestion__title">{name}</h3>
				<div className="search-suggestion__region">{region}</div>
				{', '}
				<div className="search-suggestion__country">{country}</div>
			</div>
		</div>
	);
}

export default SearchSuggestion;

// const colorPrimaryLight = 'rgb(126, 213, 111)';
// const colorPrimaryDark = 'rgb(40, 180, 133)';
// const colorSecondaryLight = 'rgb(255, 185, 0)';
// const colorSecondaryDark = 'rgb(255, 119, 48)';
// const colorTertiaryLight = 'rgb(41, 152, 255)';
// const colorTertiaryDark = 'rgb(86, 67, 250)';

// const styleDecider = (idx) => {
// 	switch (idx) {
// 		case 0:
// 		case 3:
// 		case 6:
// 		case 9:
// 			return {
// 				backgroundImage: `linear-gradient(
// 					to right bottom,
// 					${colorSecondaryLight},
// 					${colorSecondaryDark}
// 				), url(${image1})`
// 			};

// 		case 1:
// 		case 4:
// 		case 7:
// 			return {
// 				backgroundImage: `linear-gradient(
// 					to right bottom,
// 					${colorPrimaryLight},
// 					${colorPrimaryDark}
// 				), url(${image2})`
// 			};

// 		case 2:
// 		case 5:
// 		case 8:
// 			return {
// 				backgroundImage: `linear-gradient(
// 					to right bottom,
// 					${colorTertiaryLight},
// 					${colorTertiaryDark}
// 				), url(${image3})`
// 			};

// 		default:
// 			return {
// 				backgroundImage: `, url(${image1})`
// 			};
// 	}
// };
