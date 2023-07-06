import React, {memo, useEffect, useRef, useState} from 'react'
import { CSSTransition } from 'react-transition-group'
import './AnimationEffect.scss'

interface IProps {
    children: React.ReactNode;
}
export const AnimationEffect = memo(( {children}:IProps) => {
    const [showMessage, setShowMessage] = useState(false)
    const nodeRef = useRef(null)

    useEffect(() => {
        setShowMessage(true)
    }, [])

    return (
        <CSSTransition in={showMessage} nodeRef={nodeRef} timeout={10} classNames="alert" unmountOnExit>
            <div ref={nodeRef} >
                {children}
            </div>
        </CSSTransition>
    )
})
AnimationEffect.displayName = 'AnimationEffect';
