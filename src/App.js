import React, { Component, Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Spinner from './components/spinner/spinner.component';

import './App.styles.scss';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const SearchPage = lazy(() => import('./pages/search-page/search-page.component'));
const WeatherPage = lazy(() => import('./pages/weather-page/weather-page.component'));
const SettingsPage = lazy(() => import('./pages/settings-page/settings-page.component'));
const AboutPage = lazy(() => import('./pages/about-page/about-page.component'));

class App extends Component {
	render() {
		return (
			<div>
				<div className="warning">
					We are not available in desktop sizes. <br /> This app is currently available
					only in mobile sizes.
				</div>
				<div className="safe">
					<Navbar />
					<Switch>
						<Suspense fallback={<Spinner />}>
							<Route exact path="/home" component={HomePage} />
							<Route exact path="/search" component={SearchPage} />
							<Route exact path="/weather" component={WeatherPage} />
							<Route exact path="/settings" component={SettingsPage} />
							<Route exact path="/about" component={AboutPage} />
							<Redirect to="/weather" />
						</Suspense>
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
