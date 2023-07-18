"use client"
import React, {ChangeEventHandler} from "react";
import './CustomInput.scss'

interface IProps {
    value?: string | number
    onChange?: ChangeEventHandler<HTMLInputElement>
    type?: string
    title: string
    minRange?: number
    maxRange?: number

}

export const CustomInput = ({value, onChange, type, title, maxRange, minRange,}: IProps) => {


    return (

        <label id={title} className="label form-control w-full max-w-md">
            <span className="label-text text-left w-full mb-2">{title}</span>
            <input
                id={title}
                min={minRange}
                max={maxRange}
                value={value} onChange={onChange} type={type ? type : 'text'}
                placeholder={title}
                className={`input  w-full max-w-md custom-input`}/>
        </label>

    )
}

