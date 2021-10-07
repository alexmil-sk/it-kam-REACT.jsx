import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let usersObj = [ //,__BLL_BUSINESS LOGIC LAYER
	{
		id: 1,
		name: 'Вася'
	},
	{
		id: 2,
		name: 'Петя'
	},
	{
		id: 3,
		name: 'Коля'
	}
];

let usersMsg = [ //,__BLL_BUSINESS LOGIC LAYER
	{
		id: 1,
		msg: 'Текст сообщения 1'
	},
	{
		id: 2,
		msg: 'Текст сообщения 2'
	},
	{
		id: 3,
		msg: 'Текст сообщения 3'
	},
];

let myPostsData = [ //,__BLL__BUSINESS LOGIC LAYER
	{
		id: 1,
		userName: 'Серега',
		age: 25,
		msg: 'Сообщение пользователя Серега',
		likesCount: 19,
		dislikesCount: 3,
	},
	{
		id: 2,
		userName: 'Миша',
		age: 16,
		msg: 'Сообщение пользователя Миша',
		likesCount: 21,
		dislikesCount: 1,
	},
	{
		id: 3,
		userName: 'Арсений',
		age: 42,
		msg: 'Сообщение пользователя Арсений',
		likesCount: 32,
		dislikesCount: 10,
	},
];


ReactDOM.render(
  <React.StrictMode>
		<App
			myPostsData={myPostsData} //,----прокинул данные в Profile
			usersObj={usersObj} //,----прокинул данные в Dialogs
			usersMsg = {usersMsg} //,----прокинул данные в Dialogs
		/>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('myRoot')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
