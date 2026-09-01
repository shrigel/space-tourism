import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/main.scss';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';
import NotFound from './pages/NotFound/NotFound';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'destination', element: <Destination /> },
			{ path: 'crew', element: <Crew /> },
			{ path: 'technology', element: <Technology /> },
			{ path: '*', element: <NotFound /> }
		]
	}
]);

root.render(
	<StrictMode >
		<RouterProvider router={router} />
	</StrictMode >,
);