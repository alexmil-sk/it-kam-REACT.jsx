import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import MsgItem from './MsgItem/MsgItem.jsx';
import { updateMsgCreator, sendUserMsg } from '../redux/dialogs-reducer';



const Dialogs = (props) => {
	let state = props.store.getState();
	let dialogsElems = (state.dialogsPage.usersObj).map(user => <DialogItem userAvatar={user.avatar} userName={user.name} userId={user.id} />);
	let msgElems = (state.dialogsPage.usersMsg).map(msg => <MsgItem msgAvatar={msg.avatar} msg={msg.msg} />);

	let newMsgText = state.dialogsPage.newMsgText;

	let onSendMessageClick = () => {
		props.store.dispatch(sendUserMsg());
	}
	let onChangeNewMsg = (e) => {
		let userMsg = e.target.value;
		props.store.dispatch(updateMsgCreator(userMsg));
	}

	return (
		<div className={classes.dialogs}>
			<h3>Чаты пользователей</h3>
			<div className={classes.dialogs__grid}>
				<div className={classes.dialogs__names}>{dialogsElems}</div>
				<div className={classes.dialogs__messages}>{msgElems}</div>
			</div>
			<div className={classes.dialogs__newMsg}>
				<textarea
					placeholder="Напишите сообщение"
					value={newMsgText}
					onChange={onChangeNewMsg}
				></textarea>
				<button onClick={onSendMessageClick}>Опубликовать</button>
			</div>
		</div>
	);
}

export default Dialogs;

