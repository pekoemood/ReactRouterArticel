import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 shadow-sm flex justify-between">
			<Link to="/" className="btn btn-ghost text-xl">
				daisyUI
			</Link>
			<div className="flex space-x-4 ">
				<Link to="/" className="btn btn-ghost text-xl">
					home
				</Link>
				<Link to="/about" className="btn btn-ghost text-xl">
					about
				</Link>
				<Link to="/content" className="btn btn-ghost text-xl">
					content
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
