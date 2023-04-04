import React, { useEffect } from 'react';
import { Navbar, NavbarLink } from 'capstone-ds-rn/dist/components/Navbar';
import { Footer } from 'capstone-ds-rn/dist/components/Footer';
import { Divider } from 'capstone-ds-rn/dist/components/Divider';
import hero from '../assets/media/ride/hero-ride.svg';

const ShuddleRide = () => {
	useEffect(() => {
		document.title = 'Shuddle Ride';
	}, []);
	return (
		<div>
			<Navbar brand='ride'>
				<NavbarLink>Companies</NavbarLink>
				<NavbarLink>About us</NavbarLink>
				<NavbarLink>Careers</NavbarLink>
				<NavbarLink>Corporate</NavbarLink>
			</Navbar>
			<main className='bg-apricot-1100'>
				<section id='hero'>
					<img src={hero} alt='hero' />
				</section>
				<Divider direction='down' />
				<Divider direction='up' />
			</main>
			<Footer brand='ride' />
		</div>
	);
};

export default ShuddleRide;
