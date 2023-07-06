"use client"
import React, {FormEventHandler, MouseEventHandler, useState} from "react";
import {nanoid} from "nanoid";
import './CustomDropdown.scss'
import toolboxStateStore from "@/components/app/lib/store/toolbox-state-store";

interface IPosition {
    top: string
    bottom: string
    end: string
    left: string
    right: string
    hover: string
}


interface IProps {
    name: string
    title: any
    items: any
    position?: IPosition
    href?: string
    onClick?: MouseEventHandler<HTMLAnchorElement>
    onChange?: any

}

export const CustomDropdown: React.FC<IProps> = ({
                                                     name,
                                                     items,
                                                     title,
                                                     onClick,
                                                     onChange
                                                 }) => {


    return (
        <div>
            <label className="label">
                <span className="label-text">{name}</span>
            </label>
            <div className="dropdown w-full">
                <label tabIndex={0} className="btn w-full btn-outline ">{title}</label>
                <ul tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        items.map((d: any) => (
                            <li key={nanoid()} onClick={onChange}
                                tabIndex={0}><a id={d} tabIndex={0}>{d}</a></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
