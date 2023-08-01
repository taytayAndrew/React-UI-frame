import React from "react"
import { scpoeClass } from "../type/classes"
import './layout.scss'

const sc = scpoeClass('yu-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {
    
}
export const Content:React.FC<Props> = (props) =>{
 const {className:extra,...rest} = props
 return (
    <div className={sc('content',extra)} {...rest}> 
        {props.children}
    </div>
    )
}