import React from 'react';
import style from './Navbar.module.scss';
import NavbarItem from './NavbarItem'
const Navbar = React.memo(() => {
	return (
		<div className={style.navbar}>
			<div className={style.navbar__list}>
				<NavbarItem label={'News'} link={'/News'} />
				<NavbarItem label={'Messenger'} link={'/Messenger'} />
				<NavbarItem label={'Friends'} link={'/Friends'} />
				<NavbarItem label={'Profile'} link={'/Profile'} />
			</div>
		</div>
	)
}
)
export default Navbar;
