import React from 'react'
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affairPriority: string
    affairID: number
    affair: string
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affairID)
    }

    return (
        <div className={s.affair}>
            <div>{props.affair}</div>
            <div>[{props.affairPriority}]</div>


            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
