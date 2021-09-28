import React from 'react';

import './setting-widget.styles.scss';

function SettingWidget({ name, options, handleClick, currentUnit }) {
	return (
		<div className="setting-widget">
			<div className="setting-widget__name">{name}</div>
			<div
				onClick={handleClick.option1}
				className={`setting-widget__option1 ${currentUnit ===
					options.option1 && 'selected'}`}
			>
				<div className="setting-widget__wrapper">
					{options.option1}
				</div>
			</div>
			<div
				className={`setting-widget__option2 ${currentUnit ===
					options.option2 && 'selected'}`}
				onClick={handleClick.option2}
			>
				<div className="setting-widget__wrapper">
					{options.option2}
				</div>
			</div>
		</div>
	);
}

export default SettingWidget;
