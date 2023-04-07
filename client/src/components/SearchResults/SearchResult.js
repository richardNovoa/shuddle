import React from 'react';
import PropTypes from 'prop-types';
import CardMedia1 from '../../assets/media/visit/CardMedia-1.png';
import Typography from 'capstone-ds-rn/dist/components/Typography';

const SearchResult = (props) => {
	if (props.type === 'default') {
		return (
			<div className='flex bg-white rounded-[32px] overflow-hidden'>
				<img
					src={props.imgSrc}
					alt='results'
					className='w-1/3 h-[178px] object-cover'
				/>
				<div className='p-6 flex flex-col justify-between w-2/3'>
					<Typography variant='heading-3' className='w-full'>
						{props.title}
					</Typography>
					<div className='flex justify-between h-full'>
						<div className='flex flex-col justify-between'>
							<Typography variant='body'>{props.subtitle}</Typography>
							<div className=''>
								<Typography variant='body' className='text-marina-900'>
									{props.status}
								</Typography>
								<Typography variant='body'>
									<strong>{props.rating}</strong>/10 Good ({props.reviews}{' '}
									reviews)
								</Typography>
							</div>
						</div>
						<div className=' text-right flex-col flex justify-end'>
							<Typography variant='heading-2'>${props.price}</Typography>
							<Typography variant='body'>includes taxes and fees</Typography>
						</div>
					</div>
				</div>
			</div>
		);
	}
	if (props.type === 'ride') {
		return (
			<div className='bg-white rounded-[32px] flex justify-between px-7 py-4'>
				<div className='h-full flex flex-col gap-2'>
					<div className='flex'>
						<i className='fas fa-train self-center pr-2'></i>
						<Typography variant='heading-3'>{props.title}</Typography>
					</div>
					<Typography>{props.subtitle}</Typography>
					<Typography className='text-red-500'>{props.status}</Typography>
				</div>
				<div className='flex flex-col gap-2 text-right'>
					<Typography variant='heading-3'>{props.time} min</Typography>
					<Typography>{props.distance} miles</Typography>
				</div>
			</div>
		);
	}
};

SearchResult.defaultProps = {
	type: 'default',
	title: 'Ramada by Wyndham Miami Springs/Miami',
	subtitle: 'Breakfast Included',
	status: 'fully refundable',
	rating: '7.5',
	reviews: '3,135',
	price: '9912009',
	time: '95',
	distance: '240',
	imgSrc: CardMedia1
};

SearchResult.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	status: PropTypes.string,
	rating: PropTypes.string,
	reviews: PropTypes.string,
	importantNumber: PropTypes.string,
	type: PropTypes.string,
	imgSrc: PropTypes.string
};

export default SearchResult;
