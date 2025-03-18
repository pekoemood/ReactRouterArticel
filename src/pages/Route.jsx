import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./About";
import Content from "./Content";
import Index from "./Index";
import ErrorPage from "./ErrorPage";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Content />,
        },
        {
          path: '*',
          element: <ErrorPage />
        }
    ]
	},
	
]);

export default routes;
