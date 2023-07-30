import React, { useState } from "react";
import Dialog,{alert , confirm,modal} from "./dialog";

export default function (){
    const [x,setX] = useState(false)
    const [y,setY] = useState(false)
    const openModal = () => {
        const close = modal(
            <h1>你好
                <button onClick={() => close()}>close</button>
            </h1>
        )
    }
    //由于函数延迟执行 onClick中执行的是close函数 也就是onClick等于modal的返回值
    return(
        <>
        <div style={{position:'relative',zIndex : '10'}}>
        <h1>example 1</h1>
        <button onClick={() => {setX(!x)}} >button</button>
        <Dialog  visible={x} button={[
            <button style={{backgroundColor: '#0069d9'}} onClick ={() => {setX(false)}}>1</button>,
            <button style={{backgroundColor: '#c82333'}} onClick ={() => {setX(false)}}>1</button>
        ]} onClose = {() => setX(false)}>
            <>
            <strong>hi</strong>
            </>
        </Dialog>
        </div>
        <div>
        <h1>example 2</h1>
        <button onClick={() => {setY(!y)}} >button</button>
        <Dialog  visible={y} button={[
            <button style={{backgroundColor: '#0069d9'}} onClick ={() => {setY(false)}}>1</button>,
            <button style={{backgroundColor: '#c82333'}} onClick ={() => {setY(false)}}>1</button>
        ]} onClose = {() => setY(false)} onClickCloseMask ={true}>
            <>
            <div>hi</div>
            </>
        </Dialog>
        </div>
        <div>
            <h1>example 3</h1>
            <button onClick={() => alert('alert')}>alert</button>
            <button onClick={() => confirm('1',()=>{console.log('1')},()=>{console.log('2')})} >conform</button>
        </div>
        <div>
            <h1>example 4</h1>
            <button onClick={openModal}>modal</button>
           
        </div>
        </>
    )
}