//*__КОМПОНЕНТА - ЭТО ФУНКЦИЯ, ВОЗВРАЩАЮЩАЯ РАЗМЕТКУ JSX
//*__КОМПОНЕНТУ ВЫЗЫВАЕТ REACT С ПАРАМЕТРАМИ (PROPS)
//*__КОМПОНЕНТА - ЭТО ТЭГ
//*__КОМПОНЕНТА В ВИДЕ ТЭГА ИСПОЛЬЗУЕТСЯ ПОЛЬЗОВАТЕЛЕМ

import React from 'react';//*__импорт JSX из React
import './App.css';
import Header from './components/01_Header/Header';
import Navbar from './components/02_Navbar/Navbar';
import Profile from './components/03_Profile/Profile';
import Dialogs from './components/05_Dialogs/Dialogs';
import Footer from './components/04_Footer/Footer';
import News from './components/06_News/News';
import Music from './components/07_Music/Music';
import { Route } from 'react-router-dom';


function App(props) {
	let DialogsComponent = () =>
		<Dialogs
			// usersObj={props.state.dialogsPage.usersObj}
			// usersMsg={props.state.dialogsPage.usersMsg}
			// newMsgText={props.state.dialogsPage.newMsgText}
			store={props.store}
		/>; //,__Вариант замены render={()=>{}}, на component={DialogsComponent}
	return (
			<div className="app-wrapper">
				<Header />
				<Navbar usersObj={props.state.dialogsPage.usersObj}/>
				<div className="app-wrapper__content">
					{/* <Route exact path="/profile" component={ Profile }/>
					<Route path="/dialogs" component={Dialogs} /> */}
					<Route
						exact path="/profile"
					render={() =>
						<Profile
							myPostsData={props.state.profilePage.myPostsData}
							newValueText={props.state.profilePage.newValueText}
							// addPost={props.addPost}
							// updateNewPostText={props.updateNewPostText}
							dispatch={props.store.dispatch}
						/>}
					/>
					<Route path="/dialogs" component= {DialogsComponent} />
					<Route exact path="/news" component={News} />
					<Route exact path="/music" component={Music} />
				</div>
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




