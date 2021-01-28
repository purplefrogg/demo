import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss'

const Header = (props) => {
        return (
        <div className={style.header}>
        <div className={style.header__logo}>
            <img src="https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/2295592/7db885da26204a358ef0068310b6da3e/1.png?token-time=2145916800&token-hash=0mK1H_AvY9axo7l0XUtd_rkagRLxY4OhCd-5Pd3xZGg%3D" alt=""/>

        </div>
		<div className={style.header__menu}>
            <div className={style.header__item}>
                <NavLink to='/Users' activeClassName={style.active}
                  className={style.link}>Users</NavLink>
            </div>
            <div className={style.header__item}>
                {props.isAuth ? props.login:
                <NavLink to='/Login' activeClassName={style.active}
                  className={style.link}>Login</NavLink>
                }
            </div>
            </div>
      </div>
    )
}

export default Header;
