import React from "react"
import { modal } from "./dialog"


export const DialogExample4:React.FC = () =>{
    const openModal = () => {
        const close = modal(
            <h1>你好
                <button onClick={() => close()}>close</button>
            </h1>
        )
    }

 return (
    <>
        <button onClick={openModal}>点击</button>
        
    </>)
}