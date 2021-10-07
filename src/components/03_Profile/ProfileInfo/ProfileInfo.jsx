import React from 'react';
import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
	return (
			<div className={classes.profile__info}>
				<img src="https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png" height="150" alt="logoUser" />
				<p>Описание пользователя</p>
			</div>
	);
}

export default ProfileInfo;