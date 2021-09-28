import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as HomeSVG } from '../../assets/home.svg';
import { ReactComponent as SearchSVG } from '../../assets/search.svg';
import { ReactComponent as ThunderSVG } from '../../assets/thunder.svg';
import { ReactComponent as SettingSVG } from '../../assets/settings.svg';
import { ReactComponent as UserSVG } from '../../assets/user.svg';

import './navbar.styles.scss';

function Navbar({ history }) {
	return (
		<div className="nav">
			<NavLink
				to="/home"
				className="nav__home"
				activeClassName="nav__active"
			>
				<HomeSVG />
			</NavLink>
			<NavLink
				to="/search"
				className="nav__search"
				activeClassName="nav__active"
			>
				<SearchSVG />
			</NavLink>
			<NavLink
				to="/weather"
				className="nav__weather"
				activeClassName="nav__active"
			>
				<ThunderSVG />
			</NavLink>
			<NavLink
				to="/settings"
				className="nav__settings"
				activeClassName="nav__active"
			>
				<SettingSVG />
			</NavLink>
			<NavLink
				to="/about"
				className="nav__about"
				activeClassName="nav__active"
			>
				<UserSVG />
			</NavLink>
		</div>
	);
}

export default Navbar;
