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
        <div >
        <div style={{position:'relative',zIndex : '10', paddingBottom:'50px'}}>
        <div style={{paddingBottom:'30px'}}>
        <h2>不可点击灰幕消失的通知栏</h2></div>
        <button onClick={() => {setX(!x)}} >click here</button>
        <Dialog  visible={x} button={[
           <button style={{backgroundColor: '#0069d9', width:'60px'}} onClick ={() => {setX(false)}}>确定</button>,
            <button style={{backgroundColor: '#c82333',width:'60px'}} onClick ={() => {setX(false)}}>取消</button>
        ]} onClose = {() => setX(false)}>
            <>
                        <div>Some contents...</div>
            </>
        </Dialog>
        </div>
        <div style={{paddingBottom:'50px'}}>
        <div style={{paddingBottom:'30px'}}>
        <h2>点击灰幕消失的通知栏</h2>
        </div>
        <button onClick={() => {setY(!y)}} >click here</button>
        <Dialog  visible={y} button={[
            <button style={{backgroundColor: '#0069d9',width:'60px'}} onClick ={() => {setY(false)}}>确定</button>,
            <button style={{backgroundColor: '#c82333',width:'60px'}} onClick ={() => {setY(false)}}>取消</button>
        ]} onClose = {() => setY(false)} onClickCloseMask ={true}>
            <>
            <div>Some contents...</div>
            </>
        </Dialog>
        </div>
        <div style={{paddingBottom:'50px'}}>
            <div style={{paddingBottom:'30px'}}>
                 <h2>警告栏以及确认栏</h2>
            </div>
           
            <button onClick={() => alert('alert')}>click here</button>
            <button onClick={() => confirm('1',()=>{console.log('1')},()=>{console.log('2')})} >click here</button>
        </div>
        <div style={{paddingBottom:'50px'}}>
        <div style={{paddingBottom:'30px'}}>
            <h2>模板栏</h2>
            </div>
            <button onClick={openModal}>click here</button>
           
        </div>
        </div>
    )
}