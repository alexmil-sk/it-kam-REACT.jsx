import React from 'react';
import classes from './Post.module.css';

function Post(props) {
	return (
		<div className={classes.profile__userPost_old}>
			<img src="https://abc-telegram.ru/image/bitco_novosti.jpg" alt="Avatar Bitcoin" />
			<div className={classes.profile__userPost_old_text}>
				<p>{props.userName} {props.age} {props.message}</p>
				<div className={classes.profile__userPost_old_text_like}>
					<span>Like&nbsp;{props.likesCount}&nbsp;|</span>
					<span>&nbsp;Dislike&nbsp;{props.dislikesCount}</span>
				</div>
			</div>
		</div>
	);
}

export default Post;