import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShuddleRide from './components/ShuddleRide';
import ShuddleVisit from './components/ShuddleVisit';
import ShuddleWorld from './components/ShuddleWorld';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <ShuddleWorld />
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
