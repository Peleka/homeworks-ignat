import React from "react";
import loading from './preloader.svg'
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div>
            <img src={loading} alt={"preloader" }  className={s.preloader}/>
        </div>
    )
}