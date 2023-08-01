import React, { ReactElement } from "react"
import { scpoeClass } from "../type/classes"
import './layout.scss'
import { Aside } from "./aside"

const sc = scpoeClass('yu-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {
    
}
export const Layout:React.FC<Props> = (props) =>{
 const {className:extra,...rest} = props
 const children = props.children as Array<ReactElement>
 const hasAside = 'length' in children &&
 children.reduce((result,node)=> result || node.type === Aside ,false)
 return (
    <div className={sc({'':true,hasAside},extra)} {...rest}> 
        {props.children}
    </div>
    )
}


