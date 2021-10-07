import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
	return <div className={classes.nav}>
		<div className={classes.nav__item}>
			<NavLink className={`${classes.nav__item_link}`} activeClassName={classes.active} to="/profile">Profile</NavLink>
		</div>
		<div className={classes.nav__item}>
			<NavLink className={`${classes.nav__item_link}`} activeClassName={classes.active} to="/dialogs">Messages</NavLink>
		</div>
		<div className={classes.nav__item}>
			<NavLink className={classes.nav__item_link} activeClassName={classes.active} to="/news">News</NavLink>
			</div>
		<div className={classes.nav__item}>
			<NavLink className={classes.nav__item_link} activeClassName={classes.active} to="/music">Music</NavLink>
			</div>
		<div className={classes.nav__item}>
			<NavLink className={classes.nav__item_link} activeClassName={classes.active} to="/settings">Settings</NavLink>
		</div>
	</div>
};

export default Navbar;