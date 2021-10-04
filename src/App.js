//*__КОМПОНЕНТА - ЭТО ФУНКЦИЯ, ВОЗВРАЩАЮЩАЯ РАЗМЕТКУ JSX
//*__КОМПОНЕНТА - ЭТО ТЭГ

import React from 'react';//*__импорт JSX из React
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';


function App() {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<Profile />
			<Footer />
		</div>
	);
};

// const App = () => {//, APP - ЭТО ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ - КОМПОНЕНТА
// 	return (
// 		<div className="App">
// 			<ul>
// 				<li>css</li>
// 				<li>html</li>
// 				<li>js</li>
// 				<li>react</li>
// 			</ul>
// 		</div>
// 	);
// }

export default App;




