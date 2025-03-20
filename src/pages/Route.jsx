import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./About";
import Content from "./Content";
import ErrorPage from "./ErrorPage";
import Articles, { loader as articlesLoader } from "./Articles";
import Article, { loader as articleLoader } from "./Article";
import Rails, { action as apiAction, loader as apiLoader, deleteAction, editAction } from "./Rails";

const routes = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/articles",
				element: <Articles />,
        loader: articlesLoader,
			},
      {
        path: '/articles/:articleId',
        element: <Article />,
        loader: articleLoader,
      },
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/content",
				element: <Content />,
			},
      {
        path: '/rails',
        element: <Rails />,
        loader: apiLoader,
        action: apiAction,
      },
      {
        path: '/rails/:id/delete',
        action: deleteAction,
      },
      {
        path: '/rails/:id/patch',
        action: editAction,
      },
			{
				path: "*",
				element: <ErrorPage />,
			},
		],
	},
]);

export default routes;
