import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {Preloader} from "./Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch

    const state = useSelector<AppStoreType, AppStoreType>(state => state)
    const dispatch = useDispatch()

    const loading = state.loading.isLoading;

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <Preloader/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;