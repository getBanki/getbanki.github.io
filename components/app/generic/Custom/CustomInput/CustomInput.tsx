"use client"
import React, {ChangeEventHandler, FC, memo} from "react";
import {nanoid} from "nanoid";


interface IProps {
    value?: string | number
    onChange?: ChangeEventHandler<HTMLInputElement>
    type?: string
    title: string
    minRange?: number
    maxRange?: number

}

export const CustomInput: FC<IProps> = (
    {
        value,
        onChange,
        type,
        title,
        maxRange,
        minRange,
    }
) => {


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
                className={`${!type ? 'input input-bordered' : 'py-4'} w-full max-w-md`}/>
        </div>
    )
}

