//*__КОМПОНЕНТА - ЭТО ФУНКЦИЯ, ВОЗВРАЩАЮЩАЯ РАЗМЕТКУ JSX
//*__КОМПОНЕНТУ ВЫЗЫВАЕТ REACT
//*__КОМПОНЕНТА - ЭТО ТЭГ
//*__КОМПОНЕНТА В ВИДЕ ТЭГА ИСПОЛЬЗУЕТСЯ ПОЛЬЗОВАТЕЛЕМ

import React from 'react';//*__импорт JSX из React
import './App.css';
import Header from './components/01_Header/Header';
import Navbar from './components/02_Navbar/Navbar';
import Profile from './components/03_Profile/Profile';
import Footer from './components/04_Footer/Footer';


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




