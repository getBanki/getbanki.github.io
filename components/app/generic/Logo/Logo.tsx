import React from "react";
import './Logo.scss'
import Image from "next/image";
import {nanoid} from "nanoid";

export const Logo = () => {

    return (
        <a href='/' className='btn btn-ghost logo'>
            {/*<div className='logo-figure'>*/}
            {/*    <div className='logo-figure-item'/>*/}
            {/*    <div className='logo-figure-item'/>*/}
            {/*    <div className='logo-figure-item'/>*/}
            {/*</div>*/}
            {/*<div className='logo-text-fin'>*/}
            {/*    Get*/}
            {/*</div>*/}
            {/*<div className='logo-text-list'>*/}
            {/*    Banki*/}
            {/*</div>*/}
            <Image key={nanoid()} width={200} height={200} src={ '/GETBANKI.png'} alt={'get'}/>
        </a>
    )
}
