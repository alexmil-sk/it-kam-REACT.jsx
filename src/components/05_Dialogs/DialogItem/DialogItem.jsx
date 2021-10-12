import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
	let path = `/dialogs/${props.userId}`;
	return (
		<div className={classes.dialog__name + ' ' + classes.active}>
			<img src={props.userAvatar} alt="Avatar"/>
			<NavLink to={path}>
				<div>#{props.userId}</div>
				<div>{props.userName}</div>
			</NavLink>
		</div>
	);
}

export default DialogItem;