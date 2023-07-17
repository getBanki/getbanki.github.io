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
        <div id={title} className="form-control w-full max-w-md">
            <label className="label ">
                <span className="label-text">{title}</span>
            </label>
            <input
                min={minRange}
                max={maxRange}
                value={value} onChange={onChange} type={type ? type : 'text'}
                placeholder={title}
                className={`input  w-full max-w-md custom-input`}/>
        </div>
    )
}

