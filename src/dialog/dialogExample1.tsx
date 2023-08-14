import React from "react"
import Dialog from "./dialog"
interface Props {
    setX:(arg0: boolean) => void
    x:boolean
    layoutContent?:string
}
export const DialogExample1:React.FC<Props> = (props) =>{
    const {setX , x ,layoutContent='some information'} = props
 return (
    <>
        <button onClick={() => {setX(!x)}} >点击</button>
        <Dialog  visible={x} button={[
           <button style={{backgroundColor: '#0069d9', width:'60px'}} onClick ={() => {setX(false)}}>确定</button>,
            <button style={{backgroundColor: '#c82333',width:'60px'}} onClick ={() => {setX(false)}}>取消</button>
        ]} onClose = {() => setX(false)}>
            <div>{layoutContent}</div>
        </Dialog>
    </>)
}