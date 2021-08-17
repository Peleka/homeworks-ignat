import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./RequestAPI";

export const Request = () => {
    const [checked, changeCheckbox] = useState<boolean>(false);
    const [res, setRes] = useState<string>("");

    async function request(success: boolean) {
        try {
            let response = await requestAPI.test(success)
            setRes(response.data.errorText)

        } catch (error) {
            setRes( error.response ? error.response.data.errorText : error.message)
        }
    }

    const requestCallback = () => {
        request(checked)
    }

    return (
        <div>
            <SuperButton onClick={requestCallback}>Button</SuperButton>
            <SuperCheckbox checked={checked}
                           onChangeChecked={changeCheckbox}>label</SuperCheckbox>
            <div>{res}</div>
        </div>
    )
}