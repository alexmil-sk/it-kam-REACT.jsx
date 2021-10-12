const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => { //,__ЗДЕСЬ STATE ЯВЛЯЕТСЯ PROFILEPAGE
	switch (action.type) {
		case ADD_POST:
			let myNewPost = {
				id: 5,
				userName: 'Александр',
				age: 36,
				msg: state.newValueText,
				likesCount: 1,
				dislikesCount: 5
			};
			state.myPostsData.push(myNewPost);
			state.newValueText = '';
				return state;
		case UPDATE_NEW_POST_TEXT: //, {type: 'UPDATE-NEW-POST-TEXT', newText: 'новый текст сообщения' и т.п. }
			state.newValueText = action.newText;
			return state;
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({
	type: ADD_POST
});

export const updateNewPostTextCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
});

export default profileReducer;