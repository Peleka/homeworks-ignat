import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes'
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.dropright}>
            <div className={s.dropbtn}/>
            <div className={s.dropright_content}>
                <div className={s.wrapper}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>pre_junior</NavLink>
                    <NavLink to={PATH.JUNIOR} activeClassName={s.active}>junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>junior+</NavLink>
                </div>

            </div>
        </div>
    )
}