import "./App.css";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Success from "./pages/success";
import MainRoom from "./pages/mainroom";
import Error from "./pages/error/error_reg";
import { Routes, Route, HashRouter } from "react-router-dom";

const App = (): JSX.Element => {
	return (
		<HashRouter>
			<div className="App">
				<Routes>
					<Route path="/*" element={<Login />} />
					<Route path="/room" element={<MainRoom />} />
					<Route path="/reg" element={<Registration />} />
					<Route path="/excelent" element={<Success />} />
					<Route path="/error" element={<Error />} />
				</Routes>
			</div>
		</HashRouter>
	);
};

export default App;
