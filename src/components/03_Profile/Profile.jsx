import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import classes from './Profile.module.css';

function Profile(props) {
	return (
		<div className={classes.profile}>
			<div className={classes.profile__img}></div>
			<h1>Карточка пользователя</h1>
			<ProfileInfo />
			<MyPosts
				myPostsData={props.myPostsData}
				newValueText={props.newValueText}
				// addPost={props.addPost}
				// updateNewPostText={props.updateNewPostText}
				dispatch={props.dispatch}
				placeholder="Текст нового сообщения пользователя" />
		</div>
	);
}

export default Profile;