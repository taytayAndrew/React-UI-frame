import React from "react"
import './button.scss'
import {Button} from './button'
import './button-wave.scss'

export const ButtonExample1:React.FC = () =>{
 return (
    <>
    <Button content="Normal" type="normal"/>
    <Button content="Primary" type="primary"/>
    <Button content="Dashed" type="dashed"/>
    <Button content="Danger" type="danger"/>
    </>

    )
}