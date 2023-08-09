import React from "react"
import './button.scss'
import {Button} from './button'
import './button-wave.scss'

export const ButtonExample3:React.FC = () =>{
 return (
    <>
    <Button content="Disabled" type="disabled"/>
    <Button content="Loading" type="loading" iconposition='left' hasIcon={true} iconName="loading"/>
    <Button content="Click me" type="loading" iconposition='left' hasIcon={true} iconName="loading" changeloading={true} />
    </>

    )
}