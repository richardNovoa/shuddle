import { Footer } from 'capstone-ds-rn/dist/components/Footer';
import { Navbar, NavbarLink } from 'capstone-ds-rn/dist/components/Navbar';
import { Card } from 'capstone-ds-rn/dist/components/Card';
import Typography from 'capstone-ds-rn/dist/components/Typography';
import React, { useEffect } from 'react';
import { Banner } from 'capstone-ds-rn/dist/components/Banner';
import { SearchResult } from 'capstone-ds-rn/dist/components/SearchResult';
import {
	SearchFilter,
	FilterCategory,
	FilterOption
} from 'capstone-ds-rn/dist/components/SearchFilter';
import cardImage from '../assets/media/world/CardMedia-17.png';
import { Button } from 'capstone-ds-rn/dist/components/Button';
import { FormInput } from 'capstone-ds-rn/dist/components/FormInput';
import Map from './Map';

const WorldResults = (props) => {
	useEffect(() => {
		document.title = 'Shuddle Ride: Search Results';
	}, []);
	return (
		<div>
			<Navbar brand='ride' isProd>
				<NavbarLink>Companies</NavbarLink>
				<NavbarLink>About us</NavbarLink>
				<NavbarLink>Careers</NavbarLink>
				<NavbarLink>Corporate</NavbarLink>
			</Navbar>
			<main className='bg-apricot-1100 flex flex-col items-center'>
				<div className='container flex justify-center pt-20 gap-8'>
					<div className='flex gap-0 rounded-[32px] overflow-hidden w-3/5'>
						<FormInput
							placeholder='Earth'
							iconClass='fas fa-plane-departure'
							className='w-auto overflow-hidden'
							value='Earth'
						/>
						<FormInput
							placeholder='Anywhere'
							iconClass='fas fa-plane-arrival'
							className='w-auto overflow-hidden'
							value='Anywhere'
						/>
						<FormInput
							placeholder='2 Passengers'
							iconClass='fas fa-walking pt-1'
							className='w-auto overflow-hidden'
							value='2 Passengers'
						/>
						<FormInput
							placeholder='April 21'
							iconClass='fas fa-calendar'
							className='w-auto overflow-hidden'
							value='April 21'
						/>
					</div>
					<div className='flex justify-end'>
						<Button>Search</Button>
					</div>
				</div>
				<div className='grid grid-cols-5 gap-8 py-16' id='map'>
					<div className='col-span-2 flex flex-col gap-4 h-[692px] overflow-y-scroll'>
						<div className='flex justify-between'>
							<Typography variant='label' className='text-white'>
								Fewest Transfers
							</Typography>
							<Typography variant='body' className='text-apricot-600'>
								Fewest Transfers
							</Typography>
							<Typography variant='body' className='text-apricot-600'>
								Fewest Transfers
							</Typography>
						</div>
						<SearchResult
							type='ride'
							title='M42'
							time='12'
							distance='120'
							subtitle='Fastest Route'
							status='Possibility of Sandworms'
						/>
						<SearchResult
							type='ride'
							title='M42'
							time='12'
							distance='120'
							subtitle='Fastest Route'
							status='Possibility of Sandworms'
						/>
						<SearchResult
							type='ride'
							title='M42'
							time='12'
							distance='120'
							subtitle='Fastest Route'
							status='Possibility of Sandworms'
						/>
						<SearchResult
							type='ride'
							title='M42'
							time='12'
							distance='120'
							subtitle='Fastest Route'
							status='Possibility of Sandworms'
						/>
						<SearchResult
							type='ride'
							title='M42'
							time='12'
							distance='120'
							subtitle='Fastest Route'
							status='Possibility of Sandworms'
						/>
						<SearchResult
							type='ride'
							title='M42'
							time='12'
							distance='120'
							subtitle='Fastest Route'
							status='Possibility of Sandworms'
						/>
					</div>
					<div className='col-span-3 relative'>
						<div className='absolute z-50 top-4 left-4 right-4'>
							<Banner />
						</div>
						<Map />
					</div>
				</div>
			</main>
			<Footer brand='ride' />
		</div>
	);
};

export default WorldResults;
