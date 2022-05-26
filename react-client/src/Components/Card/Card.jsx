import React from 'react';
import './Card.css';

const Card = ({ source }) => {
	let tagArr = source.tags.split(',');
	console.log(tagArr);
	return (
		<div className='__card'>
			<div className='__card_tags'>
				{tagArr.map((tag) => {
					return <div className='_tag'>{tag}</div>;
				})}
			</div>
			<div className='__card_title'>{source.title}</div>
			<div className='__card_notes'>{source.notes}</div>
		</div>
	);
};

export default Card;
