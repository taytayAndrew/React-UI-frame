import React from "react"
import Dialog from "./dialog"
interface Props {
    setY:(arg0: boolean) => void
    y:boolean
    layoutContent?:string
}
export const DialogExample2:React.FC<Props> = (props) =>{
    const {setY , y ,layoutContent='some information'} = props
 return (
    <>
       <button onClick={() => {setY(!y)}} >点击</button>
        <Dialog  visible={y} button={[
            <button style={{backgroundColor: '#0069d9',width:'60px'}} onClick ={() => {setY(false)}}>确定</button>,
            <button style={{backgroundColor: '#c82333',width:'60px'}} onClick ={() => {setY(false)}}>取消</button>
        ]} onClose = {() => setY(false)} onClickCloseMask ={true}>
            <div>{layoutContent}</div>
        </Dialog>
    </>)
}