import React, { useEffect } from 'react';
import { Navbar, NavbarLink } from 'capstone-ds-rn/dist/components/Navbar';
import { Footer } from 'capstone-ds-rn/dist/components/Footer';
import { Divider } from 'capstone-ds-rn/dist/components/Divider';
import heroImg from '../assets/media/visit/hero-visit.png';
import Typography from 'capstone-ds-rn/dist/components/Typography';
import Search from 'capstone-ds-rn/dist/components/Search';
import { Card } from 'capstone-ds-rn/dist/components/Card';

import CardMedia1 from '../assets/media/visit/CardMedia-1.png';
import CardMedia2 from '../assets/media/visit/CardMedia-2.png';
import CardMedia3 from '../assets/media/visit/CardMedia-3.png';
import CardMedia4 from '../assets/media/visit/CardMedia-4.png';
import CardMedia5 from '../assets/media/visit/CardMedia-5.png';
import CardMedia6 from '../assets/media/visit/CardMedia.png';

import SocialImg1 from '../assets/media/visit/Card__Image.png';
import SocialImg2 from '../assets/media/visit/Card__Image-1.png';
import SocialImg3 from '../assets/media/visit/Card__Image-2.png';
import SocialImg4 from '../assets/media/visit/Card__Image-3.png';

import cardImg7 from '../assets/media/world/world-1.svg';

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
				<section id='hero' className='relative flex justify-center'>
					<img src={heroImg} alt='shuddle visit' className='object-cover' />
					<div class='absolute bottom-8 container'>
						<Typography variant='heading-3' className='text-white'>
							Move around in-planet on our network of transports
						</Typography>
						<div className='flex pb-4'>
							<Typography variant='heading-1' className='text-white text-left'>
								More
								<span className='text-marina-600'> shuddles.</span> More places.
							</Typography>
						</div>
						<Search brand='visit' />
					</div>
				</section>
				<section
					id='discover-planets'
					className='pt-[120px] flex justify-center'>
					<div className='container flex justify-center'>
						<div className='flex flex-col gap-2 items-center'>
							<div
								id='section-header'
								className='inline-block flex flex-col gap-2'>
								<Typography
									variant='heading-2'
									className='text-marina-600 px-2'>
									Explore Planets Faster
								</Typography>
								<div
									id='divider'
									className='h-1 w-full bg-amethyst-400 rounded-full'></div>
							</div>
							<div className='pt-2'>
								<Typography
									variant='heading-3'
									className='text-white text-center'>
									Discover new worlds in the blink of an eye with Shuddlers
									network of in-planet transports <br />
									<br />
									Select a destination for more information and start planning
									your next planetary surface adventure today.
								</Typography>
							</div>
							<div id='carousel' className='flex gap-4 py-4'>
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
				<Divider brand='visit' direction='left' />
				<section id='member stories' className='pt-[120px] flex justify-center'>
					<div className='container flex justify-center'>
						<div className='flex flex-col gap-2 items-center'>
							<div
								id='section-header'
								className='inline-block flex flex-col gap-2'>
								<Typography
									variant='heading-2'
									className='text-marina-600 px-2'>
									Insta-Inspiration
								</Typography>
								<div
									id='divider'
									className='h-1 w-full bg-amethyst-400 rounded-full'></div>
							</div>
							<div id='carousel' className='flex gap-6 py-4'>
								<Card
									size='sm'
									variant='surface'
									title='@xelurian'
									description='Thanks for my space style! #shuddlestyle'
									imgSrc={SocialImg1}
								/>
								<Card
									size='sm'
									variant='surface'
									title='@Zorblax'
									description='Thanks for the out-of-this-world advice! #shuddlevacations'
									imgSrc={SocialImg2}
								/>
								<Card
									size='sm'
									variant='surface'
									title='@Lunara'
									description=' The stars were lit AF and the space-grub was outta this world! 🚀🌟 #SpaceVibes'
									imgSrc={SocialImg3}
								/>
								<Card
									size='sm'
									variant='surface'
									title='@Aurorion'
									description='Thanks for showing me the beauty of the cosmos! #shuddleadventure'
									imgSrc={SocialImg4}
								/>
							</div>
						</div>
					</div>
				</section>
				<section id='happy-travels' className='flex justify-center pt-60'>
					<div className='container overflow-visible py-40'>
						<Card
							imgSrc={cardImg7}
							imgClass='object-cover overflow-visible'
							title='Happy Travels with Shuddle!'
							description={`Join a community of adventurers, dreamers, and explorers at Shuddle, where we believe in living life to the fullest.
							Let us be a part of your unforgettable travel experience and connect with like-minded individuals who share your passion for adventure.`}
						/>
					</div>
				</section>
			</main>
			<Footer brand='visit' />
		</div>
	);
};

export default ShuddleVisit;
