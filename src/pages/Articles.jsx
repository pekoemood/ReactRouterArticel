import { useLoaderData, useNavigate } from "react-router-dom";

export const loader = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const articles = await response.json();
	return { articles };
};

const Articles = () => {
	const navigate = useNavigate();
	const handleClick = (articleId) => navigate(`/articles/${articleId}`);
	const { articles } = useLoaderData();

	return (
		<>
			<div className="container mx-auto mt-8">
				<div className="grid grid-cols-4 gap-4">
					{articles.map((article) => (
						<div key={article.id} className="w-full">
							<div className="card w-96 bg-base-100 card-xl shadow-sm ">
								<div className="card-body">
									<h2 className="card-title line-clamp-1">{article.title}</h2>
									<p className="line-clamp-2">{article.body}</p>
									<div className="justify-end card-actions">
										<button
											onClick={() => handleClick(article.id)}
											type="button"
											className="btn btn-primary"
										>
											詳細
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Articles;
