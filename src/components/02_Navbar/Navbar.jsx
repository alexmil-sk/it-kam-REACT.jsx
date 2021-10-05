import React from 'react';
import classes from './Navbar.module.css';

console.log(classes);

const Navbar = () => {
	return <div className={classes.nav}>
		<div className={classes.nav__item}><a className={classes.nav__item_link, classes.active} href="#">Profile</a></div>
		<div className={classes.nav__item}><a className={`${classes.nav__item_link} ${classes.active}`} href="#">Messages</a></div>
		<div className={classes.nav__item}><a className={classes.nav__item_link} href="#">News</a></div>
		<div className={classes.nav__item}><a className={classes.nav__item_link} href="#">Music</a></div>
		<div className={classes.nav__item}><a className={classes.nav__item_link} href="#">Settings</a></div>
	</div>
};

export default Navbar;