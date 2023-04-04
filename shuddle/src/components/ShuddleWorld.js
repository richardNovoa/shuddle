import React, { useEffect } from 'react';
import { Navbar, NavbarLink } from 'capstone-ds-rn/dist/components/Navbar';
import { Footer } from 'capstone-ds-rn/dist/components/Footer';
import { Divider } from 'capstone-ds-rn/dist/components/Divider';
import hero from '../assets/media/world/hero-world.svg';
import card1 from '../assets/media/world/world-1.svg';
import { Card } from 'capstone-ds-rn/dist/components/Card';

const ShuddleWorld = () => {
	useEffect(() => {
		document.title = 'Shuddle World';
	}, []);
	return (
		<div>
			<Navbar brand='world'>
				<NavbarLink>Companies</NavbarLink>
				<NavbarLink>About us</NavbarLink>
				<NavbarLink>Careers</NavbarLink>
				<NavbarLink>Corporate</NavbarLink>
			</Navbar>
			<main className='bg-midnight-1000'>
				<section id='hero'>
					<img src={hero} alt='hero' />
				</section>
				<div className='flex justify-center'>
					<Card brand='world' size='lg' src={card1} imgContain></Card>
				</div>

				<Divider direction='down' />
				<Divider direction='up' />
			</main>
			<Footer brand='world' />
		</div>
	);
};

export default ShuddleWorld;
