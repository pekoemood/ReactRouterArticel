import { useLoaderData, useNavigate} from "react-router-dom";

export const loader = async ({params}) => {
	console.log(params);
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.articleId}`);
	const article = await response.json();
	return { article }
}

const Article = () => {

	const navigate = useNavigate();
	const { article } = useLoaderData();
	return (
		<div className="container mx-auto mt-8">
			<div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
				<div className="p-8">
					<h2 className="text-3xl font-bold mb-4">{article.title}</h2>
					<p className="text-gray-700 mb-6">
						{article.body}
					</p>
					<div className="flex justify-between items-center">
						<span className="text-gray-500">{article.id}</span>
						<span className="text-gray-500">{article.userId}</span>
					</div>
					<div className="mt-8 flex justify-end">
						<button onClick={() => navigate('/articles')} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							関連記事
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
