import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.scss'

type PropsType = {
	link: string
	label: string
}
const NavbarItem: React.FC<PropsType>= (props) => {
	return (
			<NavLink to={props.link} activeClassName={style.active} className={style.navbar__label}>{props.label}</NavLink>
	)
}

export default NavbarItem;
