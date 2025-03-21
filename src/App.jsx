import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navibar";

const App = () => {
	return (
		<>
				<Navbar />
				<Outlet />
				<Footer />
		</>
	);
};

export default App;
