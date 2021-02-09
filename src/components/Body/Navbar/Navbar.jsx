import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.scss'

const Navbar = React.memo(() => {
	return (
		<div className={style.navbar}>
			<div className={style.navbar__list}>
				<div className={style.navbar__item}>
					<NavLink to='/News' activeClassName={style.active} className={style.navbar__label}>News</NavLink>
				</div>
				<div className={style.navbar__item}>
					<NavLink to='/Messenger' activeClassName={style.active} className={style.navbar__label}>Messenger</NavLink>
				</div>
				<div className={style.navbar__item}>
					<NavLink to='/Friends' activeClassName={style.active} className={style.navbar__label}>friends</NavLink>
				</div>
				<div className={style.navbar__item}>
					<NavLink to='/Profile' activeClassName={style.active} className={style.navbar__label}>profile</NavLink>
				</div>
			</div>
		</div>
	)
}
)
export default Navbar;
