import React from 'react';
import style from './Body.module.scss'
import Post from './Post/Post'

const Body = () => {
    return (
        <div className={style.body}>
					<div className={style.navbar}>
						<div className={style.navbar__list}>
							<div className={style.navbar__item}>

								<div className={style.navbar__label}>News
            </div>
							</div>
							<div className={style.navbar__item}>
								<div className={style.navbar__label}>messenger
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
					<div className={style.content}>
						<Post />
						<Post />
						<Post />
						<Post />
					</div>
				</div>
    )
}

export default Body;
