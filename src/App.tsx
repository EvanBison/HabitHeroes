import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Home } from "./views";

const router = createBrowserRouter([{
	id: "app",
	// errorElement: <Error code={0} />,
	element: <Outlet />,
	children: [
		{
			id: "home",
			path: "/",
			element: <Home />
		}
	]
}]);

export default function App() {
	return <RouterProvider router={router} />;
}
