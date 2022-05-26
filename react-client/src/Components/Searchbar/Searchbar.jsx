import React from 'react';
import './Searchbar.css';
const Searchbar = ({ search, data, onChangeHandler, name }) => {
	return (
		<div className='__search_bar'>
			<div className='__search_bar_input'>
				<input type='text' onChange={onChangeHandler} value={search} name={name} />
			</div>
			<div className='__search_icon'></div>
		</div>
	);
};

export default Searchbar;
