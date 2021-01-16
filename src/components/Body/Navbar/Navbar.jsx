import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.scss'

const Navbar = () => {
	return (
		<div className={style.navbar}>
			<div className={style.navbar__list}>
				<div className={style.navbar__item}>
					<NavLink to='/News' activeClassName={style.active} className={style.navbar__label}>News</NavLink>
				</div>
				<div className={style.navbar__item}>
					<NavLink to='/Messages' activeClassName={style.active} className={style.navbar__label}>Messages</NavLink>
				</div>
				<div className={style.navbar__item}>
					<NavLink to='/friends' className={style.navbar__label}>friends</NavLink>
				</div>
				<div className={style.navbar__item}>
					<NavLink to='/profile' className={style.navbar__label}>profile</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Navbar;
