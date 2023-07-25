"use client"
import React, {MouseEventHandler} from "react";
import {nanoid} from "nanoid";
import './CustomDropdown.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faSortDown} from "@fortawesome/free-solid-svg-icons";

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

export const CustomDropdown = ({name, items, title, onChange}: IProps) => {


    return (
        <div className='custom-dropdown w-full max-w-md'>
            <label className="label">
                <span className="label-text">{name} </span>
            </label>
            <div className="dropdown w-full">
                <label tabIndex={0}
                       className="btn w-full btn-outline custom-dropdown__btn">{title.length === 0 ? <div>
                    Выберите пункт <FontAwesomeIcon
                    icon={faSortDown}
                    width={50}
                    style={{marginRight: '0'}}

                />
                </div> : title}</label>
                <ul tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full max-h-96 overflow-auto z-50 block">
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
