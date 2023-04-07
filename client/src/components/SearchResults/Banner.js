import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'capstone-ds-rn/dist/components/Button';
import Typography from 'capstone-ds-rn/dist/components/Typography';

const Banner = (props) => {
	return (
		<div className='bg-midnight-900 flex justify-between rounded-[32px] p-4'>
			<Typography variant='heading-3' className='text-white self-center pl-4'>
				Join Shuddle World and get exclusive discounts
			</Typography>
			<Button>Learn More</Button>
		</div>
	);
};
Banner.defaultProps = { brand: 'world' };

Banner.propTypes = {
	brand: PropTypes.string
};

export default Banner;
