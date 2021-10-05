import React from 'react';
import classes from './Post.module.css';

function Post() {
	return (
		<div className={classes.profile__userPost_old}>
			<img src="https://abc-telegram.ru/image/bitco_novosti.jpg" alt="Avatar Bitcoin" />
			<div className={classes.profile__userPost_old_text}>
				<p>Сообщение 1</p>
				<div>
					<span >Like&nbsp;</span>
					<span>Dislike</span>
				</div>
			</div>
		</div>
	);
}

export default Post;