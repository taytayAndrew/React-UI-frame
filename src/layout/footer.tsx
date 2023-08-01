import React from "react"
import { scpoeClass } from "../type/classes"
import './layout.scss'

const sc = scpoeClass('yu-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {
    
}
export const Footer:React.FC<Props> = (props) =>{
 const {className:extra,...rest} = props
 return (
    <div className={sc('footer',extra)} {...rest}> 
        {props.children}
    </div>
    )
}