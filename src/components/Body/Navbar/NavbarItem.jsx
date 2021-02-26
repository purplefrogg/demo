import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.scss'

const NavbarItem = (props) => {
	return (
			<NavLink to={props.link} activeClassName={style.active} className={style.navbar__label}>{props.label}</NavLink>
		
	)
}

export default NavbarItem;
