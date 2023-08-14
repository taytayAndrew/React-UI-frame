import React from "react"
import {alert,confirm} from "./dialog";
export const DialogExample3:React.FC = () =>{

 return (
    <>
                   
            <button onClick={() => alert('alert')}>点击</button>
            <button onClick={() => confirm('1',()=>{console.log('1')},()=>{console.log('2')})} >点击</button>
        
    </>)
}