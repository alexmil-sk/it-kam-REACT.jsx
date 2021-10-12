import './index.css';
import store from './components/redux/redux-store.js';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let reRenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter >
			<React.StrictMode>
				<App
					state={state}
				// addPost={store.addPost.bind(store)}
				//updateNewPostText={store.updateNewPostText.bind(store)}
					//dispatch={store.dispatch.bind(store)}
					store={store}
				/>
			</React.StrictMode>
		</BrowserRouter>, document.getElementById('root')
	);
}


reRenderEntireTree(store.getState());
store.subscribe(() => {
	let state = store.getState();
	reRenderEntireTree(state);
});


//,__Мой пробный экземпляр Арр
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
