import React, { useEffect } from 'react';
import { Navbar, NavbarLink } from 'capstone-ds-rn/dist/components/Navbar';
import { Footer } from 'capstone-ds-rn/dist/components/Footer';
import { Divider } from 'capstone-ds-rn/dist/components/Divider';
import hero from '../assets/media/visit/hero-visit.svg';

const ShuddleVisit = () => {
	useEffect(() => {
		document.title = 'Shuddle Visit';
	}, []);
	return (
		<div>
			<Navbar brand='visit'>
				<NavbarLink>Companies</NavbarLink>
				<NavbarLink>About us</NavbarLink>
				<NavbarLink>Careers</NavbarLink>
				<NavbarLink>Corporate</NavbarLink>
			</Navbar>
			<main className='bg-marina-1100'>
				<section id='hero'>
					<img src={hero} alt='hero' />
				</section>
				<Divider direction='down' />
				<Divider direction='up' />
			</main>
			<Footer brand='visit' />
		</div>
	);
};

export default ShuddleVisit;
