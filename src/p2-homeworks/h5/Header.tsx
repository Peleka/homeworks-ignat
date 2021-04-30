import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes'
import s from './Header.module.css'

type HeaderType = {
    onChange: () => void
    collapsed: boolean
}

export const Header = (props: HeaderType) => {
    return (
        <div className={s.wrapper}>
            <button onClick={props.onChange}>ClickMe</button>
            {!props.collapsed && <MenuLinks/>}
        </div>
    )
}

function MenuLinks() {
    return (
        <div className={s.wrapper}>
            <div className={s.item}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>pre_junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR} activeClassName={s.active}>junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>junior +</NavLink>
            </div>
        </div>
    )
}
