const UPDATE_USER_MSG = 'UPDATE-USER-MSG';
const SEND_USER_MSG = 'SEND-USER-MSG';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => { //,__ЗДЕСЬ STATE ЯВЛЯЕТСЯ DIALOGSPAGE
	switch (action.type) {
		case UPDATE_USER_MSG:
			state.newMsgText = action.newMsgText;
			return state;
		case SEND_USER_MSG:
			let userNewMsg = state.newMsgText;
			state.newMsgText = '';
			state.usersMsg.push({
				id: 4,
				avatar: 'https://storage.googleapis.com/grunex/d2/avatars/150x150/83720.jpg',
				msg: userNewMsg,
			});
			return state;
		default:
			return state;
	}
}

export const updateMsgCreator = (userMsg) => ({
	type: UPDATE_USER_MSG,
	newMsgText: userMsg
});

export const sendUserMsg = () => ({
	type: SEND_USER_MSG,
});

export default dialogsReducer;