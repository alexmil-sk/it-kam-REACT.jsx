import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

function Profile() {
	return (
		<div className={classes.profile}>
			<div className={classes.profile__img}></div>
			<h1>Карточка пользователя</h1>
			<div className={classes.profile__userCard}>
				<img src="https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png" height="150" alt="logoUser" />
				<p>Описание пользователя</p>
			</div>
			<MyPosts />
		</div>
	);
}

export default Profile;