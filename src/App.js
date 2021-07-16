import { from } from 'array-flatten';
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GolobalStyle from './golobalStyle';

function App() {
	return (
		<>
			<Router>
				<GolobalStyle />
				<Navbar />
			</Router>
		</>
	);
}

export default App;
