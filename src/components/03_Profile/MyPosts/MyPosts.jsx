import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

function MyPosts() {
	return (
		<div className={classes.profile__userPost}>
			<h3>My Posts</h3>
			<div className={classes.profile__userPost_new}>
				<textarea placeholder="Текст нового сообщения пользователя"></textarea>
				<button>Add post</button>
			</div>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
}

export default MyPosts;