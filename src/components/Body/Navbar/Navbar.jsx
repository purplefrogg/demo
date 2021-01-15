import React from 'react';
import style from './Navbar.module.scss'

const Navbar = () => {
	return (
		<div className={style.navbar}>
			<div className={style.navbar__list}>
				<div className={style.navbar__item}>

					<div className={style.navbar__label}>News
            </div>
				</div>
				<div className={style.navbar__item}>
					<div className={style.navbar__label}>messenges
            </div>
				</div>
				<div className={style.navbar__item}>

					<div className={style.navbar__label}>friends
            </div>
				</div>
				<div className={style.navbar__item}>
					<div className={style.navbar__label}>profile
            </div>
				</div>
			</div>
		</div>
	)
}

export default Navbar;
