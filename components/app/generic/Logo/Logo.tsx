import React from "react";
import './Logo.scss'
import Image from "next/image";
import {nanoid} from "nanoid";

export const Logo = () => {

    return (
        <a href='/' className='btn btn-ghost no-animation logo'>
            <Image priority={true}  width={200} height={200} src={ '/GETBANKI.png'} alt={'get'}/>
        </a>
    )
}
