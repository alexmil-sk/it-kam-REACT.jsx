import React from 'react';
import classes from './MsgItem.module.css';


const MsgItem = (props) => {
	return (
		<div className={classes.dialog__message + ' ' + classes.active}>
			<p>{props.msg}</p>
		</div>

	);
};

export default MsgItem;