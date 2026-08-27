import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './styles/main.scss';

import Home from './components/pages/Home/Home';
import Destination from './components/pages/Destination/Destination';
import Crew from './components/pages/Crew/Crew';
import Technology from './components/pages/Technology/Technology';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <div>404 Not Found</div>
	},
	{
		path: '/destination',
		element: <Destination />
	},
	{
		path: '/crew',
		element: <Crew />
	},
	{
		path: '/technology',
		element: <Technology />
	}
]);

root.render(
	<StrictMode >
		<RouterProvider router={router} />
	</StrictMode >,
);