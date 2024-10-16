import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import {
	Account,
	Home,
	Train
} from "./views";

const router = createBrowserRouter([{
	id: "app",
	// errorElement: <Error code={0} />,
	element: <>
			<div className='brightnessOverlay'></div>
			<Outlet />
	</>,
	children: [
		{
			id: "home",
			path: "/",
			element: <Home />
		},
		{
			id: "account",
			path: "/account",
			element: <Account />
		},
		{
			id: "train",
			path: "/train",
			element: <Train />
		}
	]
}]);

export default function App() {
	return <RouterProvider router={router} />;
}
