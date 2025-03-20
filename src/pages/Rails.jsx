import { useState } from "react";
import {
	Form,
	redirect,
	useLoaderData,
	useLocation,
	useNavigate,
} from "react-router-dom";

export const loader = async () => {
	const response = await fetch("http://localhost:3000/articles");
	if (response.ok) {
		const data = await response.json();
		return { data };
	}
};

export const action = async ({ request }) => {
	const formData = await request.formData();
	console.log(request);
	console.log(formData);
	const { title, body, name } = Object.fromEntries(formData);
	const data = await fetch("http://localhost:3000/articles", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			article: {
				title,
				body,
				name,
			},
		}),
	});
	return data;
};

export const deleteAction = async ({ params }) => {
	await fetch(`http://localhost:3000/articles/${params.id}`, {
		method: "DELETE",
	});

	return redirect("/rails");
};

export const editAction = async({ request, params }) => {
  const formData = await request.formData();
  const {title, body, name} = Object.fromEntries(formData);
  const data = await fetch(`http://localhost:3000/articles/${params.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      article: {
        title,
        body,
        name,
      }
    })
  });
  return redirect('/rails');
};

const Rails = () => {
	const { data } = useLoaderData();
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<div className="container m-auto mt-8 flex justify-center space-x-4">
				<Form method="post">
					<div>
						<label className="label" htmlFor="title">
							タイトルを追加
						</label>
						<input
							id="title"
							name="title"
							className="input border-2"
							type="text"
						/>
					</div>
					<div>
						<label className="label" htmlFor="body">
							内容
						</label>
						<input
							id="body"
							name="body"
							className="input border-2"
							type="text"
						/>
					</div>
					<div>
						<label className="label" htmlFor="name">
							名前
						</label>
						<input
							id="name"
							name="name"
							className="input border-2"
							type="text"
						/>
					</div>

					<button className="btn mt-4" type="submit">
						追加
					</button>
				</Form>
			</div>
			<div className="flex">
				{data.map((d) => (
					<div key={d.id} className="container m-auto mt-8 text-center">
						<h1 className="text-4xl">{d.title}</h1>
						<h2 className="text-2xl">{d.body}</h2>
						<h2 className="text-2xl">{d.name}</h2>
						<h2 className="text-2xl">{d.id}</h2>
						<h2 className="text-2xl">{d.created_at}</h2>
						<h2 className="text-2xl">{d.updated_at}</h2>
						<Form method="delete" action={`/rails/${d.id}/delete`}>
							<button type="submit" className="btn">
								削除
							</button>
						</Form>
						<button className="btn mt-4" type="button" onClick={() => setIsActive(!isActive)}>
							更新
						</button>
						{isActive && (
							<Form method="patch" action={`/rails/${d.id}/patch`}>
								<div>
									<label className="label" htmlFor="title">
										タイトルを追加
									</label>
									<input
										id="title"
										name="title"
										className="input border-2"
										type="text"
									/>
								</div>
								<div>
									<label className="label" htmlFor="body">
										内容
									</label>
									<input
										id="body"
										name="body"
										className="input border-2"
										type="text"
									/>
								</div>
								<div>
									<label className="label" htmlFor="name">
										名前
									</label>
									<input
										id="name"
										name="name"
										className="input border-2"
										type="text"
									/>
								</div>

								<button className="btn mt-4" type="submit">
									変更
								</button>
							</Form>
						)}
					</div>
				))}
			</div>
		</>
	);
};

export default Rails;
