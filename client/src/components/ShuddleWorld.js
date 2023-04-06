import React, { useEffect } from 'react';
import { Navbar, NavbarLink } from 'capstone-ds-rn/dist/components/Navbar';
import { Footer } from 'capstone-ds-rn/dist/components/Footer';
import { Divider } from 'capstone-ds-rn/dist/components/Divider';
import heroImg from '../assets/media/world/hero-world.png';
import { Card } from 'capstone-ds-rn/dist/components/Card';
import Typography from 'capstone-ds-rn/dist/components/Typography';
import Search from 'capstone-ds-rn/dist/components/Search';

import CardMedia1 from '../assets/media/world/CardMedia-1.png';
import CardMedia2 from '../assets/media/world/CardMedia-2.png';
import CardMedia3 from '../assets/media/world/CardMedia-3.png';
import CardMedia4 from '../assets/media/world/CardMedia-4.png';
import CardMedia5 from '../assets/media/world/CardMedia-5.png';

import CardMedia11 from '../assets/media/world/CardMedia-11.png';
import CardMedia12 from '../assets/media/world/CardMedia-12.png';
import CardMedia13 from '../assets/media/world/CardMedia-13.png';
import CardMedia14 from '../assets/media/world/CardMedia-14.png';
import CardMedia15 from '../assets/media/world/CardMedia-15.png';
import CardMedia16 from '../assets/media/world/CardMedia-16.png';

import CardMedia6 from '../assets/media/world/CardMedia.png';
import cardImg7 from '../assets/media/world/world-1.svg';

const ShuddleWorld = () => {
	useEffect(() => {
		document.title = 'Shuddle World';
	}, []);
	return (
		<div>
			<Navbar brand='world' isProd>
				<NavbarLink>Companies</NavbarLink>
				<NavbarLink>About us</NavbarLink>
				<NavbarLink>Careers</NavbarLink>
				<NavbarLink>Corporate</NavbarLink>
			</Navbar>
			<main className='bg-midnight-1000'>
				<section id='hero' className='relative flex justify-center'>
					<img src={heroImg} alt='shuddle world' className='object-cover' />
					<div class='absolute bottom-8 container'>
						<Typography variant='heading-3' className='text-white'>
							Move around in-planet on our network of transports
						</Typography>
						<div className='flex pb-4'>
							<Typography variant='heading-1' className='text-white text-left'>
								<span className='text-marina-600'>Explore</span> the universe{' '}
								<br />
								on your own terms
							</Typography>
						</div>
						<Search brand='world' />
					</div>
				</section>
				<section id='member stories' className='pt-[120px] flex justify-center'>
					<div className='container flex justify-center'>
						<div className='flex flex-col gap-2 items-center'>
							<div id='section-header' className=' flex flex-col gap-2'>
								<Typography
									variant='heading-2'
									className='text-marina-600 px-2'>
									Member Stories
								</Typography>
								<div
									id='divider'
									className='h-1 w-full bg-amethyst-400 rounded-full'></div>
							</div>
							<div className='pt-2'>
								<Typography
									variant='heading-3'
									className='text-white text-center'>
									We've created a special section dedicated to showcasing the
									incredible journeys of our members.
									<br /> Their stories are a testament to the power of
									curiosity, courage, and human connection.
									<br /> We hope that their experiences will inspire you to
									embark on your own journey, <br />
									and to discover the infinite possibilities that lie ahead.
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
				<Divider brand='world' direction='left' />
				<section id='member stories' className='pt-[120px] flex justify-center'>
					<div className='container flex justify-center'>
						<div className='flex flex-col gap-2 items-center'>
							<div id='section-header' className=' flex flex-col gap-2'>
								<Typography
									variant='heading-2'
									className='text-marina-600 px-2'>
									Earn Parsecs and Travel Further!
								</Typography>
								<div
									id='divider'
									className='h-1 w-full bg-amethyst-400 rounded-full'></div>
							</div>
							<div className='pt-2'>
								<Typography
									variant='heading-3'
									className='text-white text-center'>
									As a Shuddle World Member, you'll earn Parsecs every time you
									book a trip with us. The more you travel, the more Parsecs
									you'll accumulate, which can be redeemed for exciting rewards
									like free upgrades, exclusive experiences, and even
									<br />
									interplanetary travel discounts. <br />
									<br />
									Check out some of the most popular destinations!
								</Typography>
							</div>
							<div id='carousel' className='flex gap-4 py-4'>
								<Card
									size='md'
									title='Intergalactic Mining Trip'
									description='Discover precious resources on a thrilling mining expedition!'
									imgSrc={CardMedia16}
								/>
								<Card
									size='md'
									title='Alien Petting Encounter'
									description='Get up close and personal with extraterrestrial life!'
									imgSrc={CardMedia11}
								/>

								<Card
									size='md'
									title='Mars Exploration Tour'
									description='mbark on a journey to explore the red planet!'
									imgSrc={CardMedia12}
								/>

								<Card
									size='md'
									title='Rocket Racing'
									description='Experience the thrill of high-speed rocket racing!'
									imgSrc={CardMedia13}
								/>

								<Card
									size='md'
									title='Free Floating'
									description='Experience weightlessness in space on our free-floating tour!'
									imgSrc={CardMedia14}
								/>

								<Card
									size='md'
									title='Intergalactic Music Festivals'
									description='Join the biggest parties across the universe!'
									imgSrc={CardMedia15}
								/>
							</div>
						</div>
					</div>
				</section>
				<Divider brand='world' direction='right' />
				<section id='happy-travels' className='flex justify-center pt-32'>
					<div className='container overflow-visible py-40'>
						<Card
							imgSrc={cardImg7}
							imgClass='object-cover overflow-visible'
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
			<Footer brand='world' />
		</div>
	);
};

export default ShuddleWorld;
