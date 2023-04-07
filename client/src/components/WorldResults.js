import { Footer } from 'capstone-ds-rn/dist/components/Footer';
import { Navbar, NavbarLink } from 'capstone-ds-rn/dist/components/Navbar';
import { Card } from 'capstone-ds-rn/dist/components/Card';
import Typography from 'capstone-ds-rn/dist/components/Typography';
import React from 'react';
import { Search } from 'capstone-ds-rn/dist/components/Search';
import Banner from './SearchResults/Banner';
import SearchResult from './SearchResults/SearchResult';
import {
	SearchFilter,
	FilterCategory,
	FilterOption
} from './SearchResults/SearchFilter';

const WorldResults = (props) => {
	return (
		<div>
			<Navbar brand='world' isProd>
				<NavbarLink>Companies</NavbarLink>
				<NavbarLink>About us</NavbarLink>
				<NavbarLink>Careers</NavbarLink>
				<NavbarLink>Corporate</NavbarLink>
			</Navbar>
			<main className='flex justify-center bg-midnight-1000'>
				<div className='container grid grid-cols-5 gap-8'>
					<div className='col-span-1'>
						<Card size='md'></Card>
						<SearchFilter>
							<FilterCategory title='Popular Filters'>
								<FilterOption>Airport shuttle included</FilterOption>
								<FilterOption>Port Miami</FilterOption>
								<FilterOption>Hotel resort</FilterOption>
								<FilterOption>Breakfast included</FilterOption>
							</FilterCategory>
							<FilterCategory title='Popular Filters'>
								<FilterOption>Airport shuttle included</FilterOption>
								<FilterOption>Port Miami</FilterOption>
								<FilterOption>Hotel resort</FilterOption>
								<FilterOption>Breakfast included</FilterOption>
							</FilterCategory>
							<FilterCategory title='Popular Filters'>
								<FilterOption>Airport shuttle included</FilterOption>
								<FilterOption>Port Miami</FilterOption>
								<FilterOption>Hotel resort</FilterOption>
								<FilterOption>Breakfast included</FilterOption>
							</FilterCategory>
							<FilterCategory title='Popular Filters'>
								<FilterOption>Airport shuttle included</FilterOption>
								<FilterOption>Port Miami</FilterOption>
								<FilterOption>Hotel resort</FilterOption>
								<FilterOption>Breakfast included</FilterOption>
							</FilterCategory>
						</SearchFilter>
					</div>
					<div className='col-span-4 flex flex-col gap-8'>
						<Search brand='world' />
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
						<SearchResult type='ride' />
						<SearchResult />
						<SearchResult />
						<SearchResult />
						<SearchResult />
						<SearchResult />
						<SearchResult />
					</div>
				</div>
			</main>

			<Footer brand='world' />
		</div>
	);
};

export default WorldResults;
