import { createHashRouter, RouterProvider } from 'react-router-dom';
import ShuddleRide from './components/ShuddleRide';
import ShuddleVisit from './components/ShuddleVisit';
import ShuddleWorld from './components/ShuddleWorld';
import WorldResults from './components/WorldResults';

const router = createHashRouter(
	[
		{
			path: '/',
			element: <ShuddleWorld />
		},
		{
			path: '/worldresults',
			element: <WorldResults />
		},
		{
			path: '/visit',
			element: <ShuddleVisit />
		},
		{
			path: '/ride',
			element: <ShuddleRide />
		}
	],
	{ basename: '/' }
);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
