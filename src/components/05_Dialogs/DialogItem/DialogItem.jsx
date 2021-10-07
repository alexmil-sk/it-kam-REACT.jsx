import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
	let path = `/dialogs/${props.userId}`;
	return (
		<div className={classes.dialog__name + ' ' + classes.active}>
			<img alt="Avatar" />
			<NavLink to={path}>{props.userName}</NavLink>
		</div>
	);
}

export default DialogItem;