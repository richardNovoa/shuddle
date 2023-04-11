import React, { useEffect } from 'react';
import { Navbar, NavbarLink } from 'capstone-ds-rn/dist/components/Navbar';
import heroImg from '../assets/media/ride/hero-ride.png';
import Typography from 'capstone-ds-rn/dist/components/Typography';
import Search from 'capstone-ds-rn/dist/components/Search';
import { Card } from 'capstone-ds-rn/dist/components/Card';
import { Divider } from 'capstone-ds-rn/dist/components/Divider';
import cardImg7 from '../assets/media/world/world-1.svg';
import { Footer } from 'capstone-ds-rn/dist/components/Footer';

import CardMedia1 from '../assets/media/ride/CardMedia-1.png';
import CardMedia2 from '../assets/media/ride/CardMedia-2.png';
import CardMedia3 from '../assets/media/ride/CardMedia-3.png';
import CardMedia4 from '../assets/media/ride/CardMedia-4.png';
import CardMedia5 from '../assets/media/ride/CardMedia-5.png';
import CardMedia6 from '../assets/media/ride/CardMedia.png';

const ShuddleRide = () => {
	useEffect(() => {
		document.title = 'Shuddle Ride';
	}, []);
	return (
		<div>
			<Navbar brand='ride' isProd>
				<NavbarLink href='#'>Schedules</NavbarLink>
				<NavbarLink href='#'>Maps</NavbarLink>
				<NavbarLink href='#'>Fares & Tolls</NavbarLink>
			</Navbar>
			<main className='bg-apricot-1100'>
				<section id='hero' className='relative flex justify-center'>
					<img src={heroImg} alt='shuddle ride' className='object-cover' />
					<div className='absolute bottom-8 container'>
						<Typography variant='heading-3' className='text-white'>
							Move around in-planet on our network of transports
						</Typography>
						<div className='flex pb-4'>
							<Typography variant='heading-1' className='text-white text-left'>
								Planetary surface
								<span className='text-marina-600'> mobility</span>
							</Typography>
						</div>
						<Search brand='ride' searchHref='#/rideresults' />
					</div>
				</section>
				<section className='relative text-center py-20 bg-calloutRide bg-cover'>
					<div id='section-header' className='flex flex-col gap-2'>
						<Typography variant='heading-2' className='text-marina-600 px-2'>
							Explore Planets Faster
						</Typography>
						<div
							id='divider'
							className='h-1 bg-amethyst-400 rounded-full w-1/3 self-center'></div>
					</div>
					<div className='pt-2'>
						<Typography variant='heading-3' className='text-white text-center'>
							Why travel hundred of parsecs across the galaxy only to have to
							turn back!
							<br /> Shuddle Ride provides you with the fastest network of
							surface transports <br />
							Spend more time enjoying and less time travelling
						</Typography>
					</div>
				</section>
				<section
					id='discover-planets'
					className='pt-[120px] flex justify-center'>
					<div className='container flex justify-center'>
						<div className='flex flex-col gap-2 items-center'>
							<div id='section-header' className=' flex flex-col gap-2'>
								<Typography
									variant='heading-2'
									className='text-marina-600 px-2'>
									More Rides in More Places
								</Typography>
								<div
									id='divider'
									className='h-1 w-full bg-amethyst-400 rounded-full'></div>
							</div>
							<div className='pt-2'>
								<Typography
									variant='heading-3'
									className='text-white text-center'>
									Check out planets we have just added to the network <br />
									<br />
									and start planning your next planetary surface adventure
									today.
								</Typography>
							</div>
							<div id='carousel' className='flex gap-4 py-10'>
								<Card
									size='md'
									title='Alderan System'
									description=''
									imgSrc={CardMedia6}
								/>
								<Card
									size='md'
									title='Romulan Empire'
									description=''
									imgSrc={CardMedia1}
								/>
								<Card
									size='md'
									title='Krypton System'
									description=''
									imgSrc={CardMedia2}
								/>
								<Card
									size='md'
									title='Arrakis System'
									description=''
									imgSrc={CardMedia3}
								/>
								<Card
									size='md'
									title='Omicron Persei 8'
									description=''
									imgSrc={CardMedia4}
								/>
								<Card
									size='md'
									title='Terran System'
									description=''
									imgSrc={CardMedia5}
								/>
							</div>
						</div>
					</div>
				</section>
				<div className='-mt-24'>
					<Divider brand='ride' />
				</div>

				<section id='happy-travels' className='flex justify-center pt-32'>
					<div className='container overflow-visible pt-40'>
						<Card
							imgSrc={cardImg7}
							imgClass='object-contain overflow-visible -m-40'
							title='Happy Travels with Shuddle!'
							description={`Join a community of adventurers, dreamers, and explorers at Shuddle, where we believe in living life to the fullest.
							Let us be a part of your unforgettable travel experience and connect with like-minded individuals who share your passion for adventure.`}
							hasCta
							ctaLabel='Join Today'
							ctaHref='/#'
						/>
					</div>
				</section>
			</main>
			<Footer brand='ride' />
		</div>
	);
};

export default ShuddleRide;
