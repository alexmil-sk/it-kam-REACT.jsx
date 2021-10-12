import React from 'react';
import classes from './NavBarUsers.module.css';

const NavBarUsers = (props) => {
	return (
		<div className={classes.navBarUsers}>
			<div className={classes.navBarUsers_item}>
				<img src={props.userAvatar} alt="Avatar" />
				<div>#{props.userId}</div>
				<div>{props.userName}</div>
			</div>
		</div>
	);
};

export default NavBarUsers;