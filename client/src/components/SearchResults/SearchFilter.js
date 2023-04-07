import React from 'react';
import Typography from 'capstone-ds-rn/dist/components/Typography';
import PropTypes from 'prop-types';

const SearchFilter = (props) => {
	return (
		<div className='flex flex-col text-left gap-8'>
			<Typography variant='heading-3' className='text-white'>
				Filter By
			</Typography>
			<div className='flex flex-col gap-x-8'>{props.children}</div>
		</div>
	);
};

const FilterCategory = (props) => {
	return (
		<div className='flex flex-col text-left gap-4 mb-8'>
			<Typography variant='subtitle-1' className='text-white'>
				{props.title}
			</Typography>
			<div className='flex flex-col gap-2'>{props.children}</div>
		</div>
	);
};

FilterCategory.propTypes = {
	title: PropTypes.string
};

const FilterOption = (props) => {
	return (
		<div className='flex gap-2 '>
			<input type='checkbox' id='filter' value={props.children}></input>
			<Typography className='text-marina-600'>{props.children}</Typography>
		</div>
	);
};

export { SearchFilter, FilterCategory, FilterOption };
