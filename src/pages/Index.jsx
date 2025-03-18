const Index = () => {
	return (
		<div className="container mx-auto mt-8">
			<div className="card w-96 bg-base-100 card-xl shadow-sm">
				<div className="card-body">
					<h2 className="card-title">Xlarge Card</h2>
					<p>
						A card component has a figure, a body part, and inside body there
						are title and actions parts
					</p>
					<div className="justify-end card-actions">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
