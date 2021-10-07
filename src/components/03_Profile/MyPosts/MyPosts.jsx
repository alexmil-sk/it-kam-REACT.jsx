import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

function MyPosts(props) {
	
	//let myPostsData = props.myPostsData;//,----прокинул данные__Вариант_1

	//,----прокинул данные__Вариант_2
	let myPostsElems = (props.myPostsData).map(post => <Post userName={post.userName} age={post.age} message={post.msg} likesCount={post.likesCount} dislikesCount={post.dislikesCount} />);

	return (
		<div className={classes.profile__userPost}>
			<h3>My Posts</h3>
			<div className={classes.profile__userPost_new}>
				<textarea placeholder={props.placeholder}></textarea>
				<button>Add post</button>
			</div>{myPostsElems}</div>
	);
}

export default MyPosts;