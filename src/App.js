import './App.css';
import {MainView} from "./Views/MainView";
import {UserView} from "./Views/UserView";
import {CreateUserView} from "./Views/CreateUserView";
import {UpdateUserView} from "./Views/UpdateUserView";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {NotFoundView} from "./Views/NotFoundView";

function App() {
	return (
		<>
			<Header/>
			<Routes>
				<Route path="/" element={<MainView/>}/>
				<Route path="/user/:id" element={<UserView/>}/>
				<Route path="/create-new-user" element={<CreateUserView/>}/>
				<Route path="/user/update/:id" element={<UpdateUserView/>}/>
				<Route path="/*" element={<NotFoundView/>}/>
			</Routes>
		</>
	)
}

export default App;
