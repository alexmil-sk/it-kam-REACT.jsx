import React from 'react';
import classes from './MsgItem.module.css';


const MsgItem = (props) => {
	return (
		<div className={classes.dialog__message + ' ' + classes.active}>
			<img src={props.msgAvatar} alt="Avatar" />
			<p>{props.msg}</p>
		</div>
	);
};

export default MsgItem;