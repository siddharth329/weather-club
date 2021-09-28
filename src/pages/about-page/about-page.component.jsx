import React from 'react';

import './about-page.styles.scss';

function AboutPage() {
	return (
		<div className="about-page">
			<h2 className="about-page__title">About</h2>
			<img
				className="about-page__image"
				src="https://weather-club-backend.herokuapp.com/images/about-user.jpg"
				alt="User"
			/>
			<p className="about-page__details">
				This Web App is made by Siddharth Agrawal, Computer Engineering Student.
			</p>
			<p className="about-page__tech-stack">
				This application is build using React, Redux for Frontend and NodeJS as Backend.
			</p>
		</div>
	);
}

export default AboutPage;
