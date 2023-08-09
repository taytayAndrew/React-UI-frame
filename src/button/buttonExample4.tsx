import React from "react"
import './button.scss'
import {Button} from './button'
import './button-wave.scss'

export const ButtonExample4:React.FC = () =>{
 return (
    <>
    <Button content="Normal" type="normal" ghost={true}/>
    <Button content="Primary" type="primary" ghost={true}/>
    <Button content="Dashed" type="dashed" ghost={true}/>
    <Button content="Danger" type="danger" ghost={true}/>
    </>

    )
}