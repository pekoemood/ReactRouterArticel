import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navibar";
import Footer from "./pages/Footer";


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
