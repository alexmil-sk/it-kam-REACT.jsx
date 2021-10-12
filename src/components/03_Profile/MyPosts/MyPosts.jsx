import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextCreator } from '../../redux/profile-reducer';


function MyPosts(props) {
	console.log(props.dispatch);
	//,----прокинул данные__Вариант_2
	let myPostsElems = (props.myPostsData).map(post => <Post userName={post.userName} age={post.age} message={post.msg} likesCount={post.likesCount} dislikesCount={post.dislikesCount} />);

	let newPostElem = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let updateNewPostText = () => {
		let newText = newPostElem.current.value;
		props.dispatch(updateNewPostTextCreator(newText));
	}
	
	return (
		<div className={classes.profile__userPost}>
			<h3>My Posts</h3>
			<div className={classes.profile__userPost_new}>
				<textarea onChange={updateNewPostText} placeholder={props.placeholder} ref={newPostElem} value={props.newValueText}></textarea>
				<button onClick={addPost}>Add post</button>
			</div>{myPostsElems}</div>
	);
}



export default MyPosts;