import React from "react"
import './button.scss'
import {Button} from './button'
import './button-wave.scss'

export const ButtonExample2:React.FC = () =>{
 return (
    <>
    <Button content="Icon" type="Icon" iconposition='right'  hasIcon={true} iconName="buy"/>
    <Button content="Icon" type="Icon" iconposition='left' hasIcon={true} iconName="buy"/>
    </>

    )
}