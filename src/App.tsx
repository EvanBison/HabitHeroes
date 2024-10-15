import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import {
	Account,
	Home
} from "./views";

const router = createBrowserRouter([{
	id: "app",
	// errorElement: <Error code={0} />,
	element: <>
			<div className='brightnessOverlay'></div>
			<div id="hueOverlay" className='hueOverlay'></div>
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
		}
	]
}]);

export default function App() {
	return <RouterProvider router={router} />;
}
