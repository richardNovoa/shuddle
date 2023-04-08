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

const VisitResults = (props) => {
	useEffect(() => {
		document.title = 'Shuddle Visit: Search Results';
	}, []);
	return (
		<div>
			<Navbar brand='visit' isProd>
				<NavbarLink>Companies</NavbarLink>
				<NavbarLink>About us</NavbarLink>
				<NavbarLink>Careers</NavbarLink>
				<NavbarLink>Corporate</NavbarLink>
			</Navbar>
			<main className='flex justify-center bg-marina-1000 pt-10'>
				<div className='container grid grid-cols-5 gap-8'>
					<div className='col-span-1'>
						<Card
							size='md'
							imgSrc={cardImage}
							hasContent={false}
							imgClass='w-full h-auto'></Card>
						<div className='pt-pt-10 pl-4 pr-0 pb-4 bg-marina-1100 rounded-[16px] mt-8'>
							<SearchFilter>
								<FilterCategory title='Popular Filters'>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Airport shuttle included
									</FilterOption>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Free Wifi
									</FilterOption>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Pet Friendly
									</FilterOption>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Breakfast included
									</FilterOption>
								</FilterCategory>
								<FilterCategory title='Guest Rating'>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Any
									</FilterOption>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Wonderful 9+
									</FilterOption>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Very good 8+t
									</FilterOption>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Good 7+
									</FilterOption>
								</FilterCategory>
								<FilterCategory title='Payment Type'>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Fully Refundable
									</FilterOption>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Reserve now, pay later
									</FilterOption>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Hotel resort
									</FilterOption>
								</FilterCategory>
								<FilterCategory title='Amenities'>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Pool
									</FilterOption>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Space view
									</FilterOption>
									<FilterOption filterOptionClassName='text-apricot-500'>
										Sun view
									</FilterOption>
									<FilterOption filterOptionClassName='text-apricot-500'>
										No view
									</FilterOption>
								</FilterCategory>
							</SearchFilter>
						</div>
					</div>
					<div className='col-span-3 flex flex-col gap-4 overflow-visible pb-20 justify-start'>
						<div className='flex gap-8 overflow-visible'>
							<div className='flex gap-0 rounded-[32px] overflow-hidden w-4/5'>
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
						<div className='flex justify-between'>
							<Typography variant='subtitle-1' className='text-white'>
								Search Results: 32
							</Typography>
							<Typography variant='subtitle-1' className='text-white'>
								Sort by: Recommended{' '}
								<i className='fas fa-chevron-down pl-2'></i>
							</Typography>
						</div>
						<Banner />
						<SearchResult
							title='Arrakis Unguided Hiking Adventure'
							subtitle='Breakfast Included'
							status='Possibility of Sandworms'
							price='3,000'
							imgSrc='https://plus.unsplash.com/premium_photo-1677038264064-2dedc3e9a9f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80'
						/>
						<SearchResult
							title='Origae-6 EDM Festival'
							subtitle='Pet Friendly'
							status='Available'
							price='13,000'
							imgSrc='https://www.avpgalaxy.net/wordpress/wp-content/uploads/2014/06/the_derelict_by_tetheredcomic-d4tkbru.jpg'
						/>
						<SearchResult
							title='Space Station Adventure'
							subtitle='Free Wifi'
							status='Available'
							price='8,000'
							rating='9.0'
							imgSrc='https://theartsdesk.com/sites/default/files/styles/mast_image_landscape/public/mastimages/2001%20no.%201.jpg?itok=8voP9SgR'
						/>
						<SearchResult
							title='Space Road Trip Package'
							subtitle=''
							status=''
							price='11,000'
							rating='9.0'
							imgSrc='https://i.pinimg.com/originals/07/a1/cf/07a1cf0cf0ca2cddadb6554ba54c738f.jpg'
						/>
						<SearchResult
							title='Water Planet Fishing Expedition'
							subtitle='Excellent Amenities'
							status=''
							price='19,000'
							rating='7.0'
							imgSrc='https://compote.slate.com/images/638a4957-d336-4c41-803b-d715a98b0e26.jpg'
						/>
						<SearchResult
							title='Watch the Fireworks from Alderaan'
							subtitle='Great Seats'
							status=''
							price='14,000'
							rating='8.0'
							imgSrc='https://wallpaperset.com/w/full/6/5/d/51787.jpg'
						/>
					</div>
				</div>
			</main>

			<Footer brand='visit' />
		</div>
	);
};

export default VisitResults;
