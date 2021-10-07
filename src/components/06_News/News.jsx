import React from 'react';
import classes from './News.module.css';

function News(props) {
	return (
		<div className={classes.news}>
			<h3>Новости социальных сетей</h3>
			<p>{ props.message }</p>
		</div>
	);
}

export default News;