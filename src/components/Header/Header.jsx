import React from 'react';
import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style.header}>
        <div className={style.header__logo}> </div>
		<div className={style.header__menu}></div>
      </div>
    )
}

export default Header;
