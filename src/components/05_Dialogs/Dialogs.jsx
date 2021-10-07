import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import MsgItem from './MsgItem/MsgItem.jsx';


const Dialogs = (props) => {

	// let usersObj = [ //,__BLL_BUSINESS LOGIC LAYER
	// 	{
	// 		id: 1,
	// 		name: 'Вася'
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Петя'
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Коля'
	// 	}
	// ];

	// let usersMsg = [//,__BLL_BUSINESS LOGIC LAYER
	// 	{
	// 		id: 1,
	// 		msg: 'Текст сообщения 1'
	// 	},
	// 	{
	// 		id: 2,
	// 		msg: 'Текст сообщения 2'
	// 	},
	// 	{
	// 		id: 3,
	// 		msg: 'Текст сообщения 3'
	// 	},
	// ];

	let dialogsElems = (props.usersObj).map(user => <DialogItem userName={user.name} userId={user.id} />);

	let msgElems = (props.usersMsg).map(msg => <MsgItem msg={msg.msg} />);

	return (
		<div className={classes.dialogs}>
			<h3>Чаты пользователей</h3>
			<div className={classes.dialogs__grid}>
				<div className={classes.dialogs__names}>{dialogsElems}</div>
				<div className={classes.dialogs__messages}>{msgElems}</div>
			</div>
		</div>
	);
}

export default Dialogs;

