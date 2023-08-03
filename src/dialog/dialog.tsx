import React, { ReactElement, ReactNode } from "react";
import './dialog.scss'
import Icon from "../icon";
import '../index.scss';
import ReactDOM from "react-dom";
import { scpoeClass } from "../type/classes";


interface Props {
    visible:boolean
    button?:Array<ReactElement>
    onClose:React.MouseEventHandler
    onClickCloseMask?:boolean
}

 
 const Dialog:React.FunctionComponent<Props>=(props)=> {
    const sc = scpoeClass('yu-dialog')
    const onClickClose:React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const onClickMask:React.MouseEventHandler = (e) => {
        if(props.onClickCloseMask){
        props.onClose(e)

        }
    }
    const x = props.visible 
    ?
    <>
   
    <div className={sc('mask')} onClick={onClickMask}></div>
    <div className={sc('')}>
    <div className={sc('close')} onClick={onClickClose}>
            <Icon  name='close' />
        </div>
        <header className={sc('header')}>
            提示
        </header>
        <main className={sc('main')}>
        {props.children}
        </main>
        {
            props.button && props.button.length>0 &&
            <footer className={sc('footer')}>
           {props.button&&props.button.map((button,index) => React.cloneElement(
            button,{key:index}
           ))}
        </footer>
        }
    </div>
    </>
    :
    null
    return(
        ReactDOM.createPortal(x,document.body)
    )
}
Dialog.defaultProps = {
    onClickCloseMask:false
}
export const modal = (content: ReactNode,button?:Array<ReactElement>,afterClose?:() => void) => {
    const close =()=> {
        ReactDOM.render(React.cloneElement(component,{visible:false}),div)
        ReactDOM.unmountComponentAtNode(div) //将div从组件上卸载下来
        div.remove //将div删除
    }
    const component = <Dialog 
    visible= {true} 
    onClose ={() =>{
        close();
        afterClose&&afterClose()
    }}
    button={button}
    >
    {content}
    </Dialog>
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component,div)
  return close;
    
}
export const alert = (content: string) => {
    const button = <button onClick={() => close()}>OK</button>
    const close = modal(content,[button])

}
export const confirm = (content:string,yes?:() => void,no?:() => void) => {
    const onYes = () => {
       close()
       yes&&yes()
    }
    const onNo =() =>{
        close()
       no&&no()
    }
    const button=[
        <button style={{backgroundColor: '#0069d9',width:'60px'}} onClick={onYes}>确认</button>,
        <button style={{backgroundColor: '#c82333',width:'60px'}} onClick={onNo}>取消</button>
    ]
    const close = modal(content,[...button])
}


export default Dialog