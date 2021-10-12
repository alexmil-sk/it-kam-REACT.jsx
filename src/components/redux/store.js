
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			myPostsData: [{
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
			],
			newValueText: '@gmail.com',
		},
		dialogsPage: {
			usersObj: [{
					id: 1,
					avatar: 'https://storage.googleapis.com/grunex/disk_1/avatars/150x150/30517.jpg',
					name: 'Вася'
				},
				{
					id: 2,
					avatar: 'https://mylotheaveragesniper.com/forums/uploads/monthly_2019_03/1140055302_1536502057_stsmall215x235-pad210x230f8f8f8.lite-1u1.thumb.jpg.d4636a58ad6791eee7cf5880b72f0b65.jpg',
					name: 'Петя'
				},
				{
					id: 3,
					avatar: 'https://storage.googleapis.com/grunex/d2/avatars/150x150/83720.jpg',
					name: 'Коля'
				}
			],
			usersMsg: [{
					id: 1,
					avatar: 'https://storage.googleapis.com/grunex/disk_1/avatars/150x150/30517.jpg',
					msg: 'Текст сообщения 1'
				},
				{
					id: 2,
					avatar: 'https://mylotheaveragesniper.com/forums/uploads/monthly_2019_03/1140055302_1536502057_stsmall215x235-pad210x230f8f8f8.lite-1u1.thumb.jpg.d4636a58ad6791eee7cf5880b72f0b65.jpg',
					msg: 'Текст сообщения 2'
				},
				{
					id: 3,
					avatar: 'https://storage.googleapis.com/grunex/d2/avatars/150x150/83720.jpg',
					msg: 'Текст сообщения 3'
				},
			],
			newMsgText: ''
		},
		sidebarPage: {

		},
	},
	getState() {
		return this._state;
	},
	_reRenderEntireTree() {
		console.log('State was changed');
	},
	subscribe(observer) {
		this._reRenderEntireTree = observer;
	},
	//,=============================================================================
	// addPost() {
	// 	let myNewPost = {
	// 		id: 5,
	// 		userName: 'Александр',
	// 		age: 36,
	// 		msg: this._state.profilePage.newValueText,
	// 		likesCount: 1,
	// 		dislikesCount: 5
	// 	};
	// 	this._state.profilePage.myPostsData.push(myNewPost);
	// 	this._state.profilePage.newValueText = '';
	// 	this._reRenderEntireTree(this._state);
	// },
	// updateNewPostText (newText) {
	// 	this._state.profilePage.newValueText = newText;
	// 	this._reRenderEntireTree(this._state);
	// },
	//,===============================================================================
	//?__ACTION - ЭТО ОБЪЕКТ, У КОТОРОГО ЕСТЬ СВОЙСТВО TYPE И ПРОЧИЕ СВОЙСТВА.
	dispatch(action) { //, {type: 'ADD-POST', msg: 'текст сообщения' и т.п. }
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

		
		this._reRenderEntireTree(this._state);
	},
	//?__REDUCER - ЭТО ЧИСТАЯ ФУНКЦИЯ, КОТОРАЯ ПРИНИМАЕТ STATE (СВОЮ НЕОБХОДИМУЮ ЧАСТЬ) И ACTION, ЕСЛИ НУЖНО ПРИМЕНЯЕТ ACTION К НУЖНОМУ STATE И ВОЗВРАЩАЕТ НОВЫЙ STATE, ЛИБО ВОЗВРАЩАЕТ НЕИЗМЕНЕННЫЙ STATE(СВОЮ НЕОБХОДИМУЮ ЧАСТЬ), ЕСЛИ ACTION НЕ ПОДОШЕЛ
} 

export default store;

Window.store = store;
