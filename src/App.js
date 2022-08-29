import './App.css';
import 'antd/dist/antd.min.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
