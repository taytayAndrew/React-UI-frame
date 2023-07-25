import React from "react";
import './dialog.scss'
import Icon from "../icon";

interface Props {
    visible:boolean
}
function scpoeClass(prefix:string) {
   return function addYu(name?:string) {
    return [prefix,name].filter(Boolean).join('-')
 }
}
 
 const Dialog:React.FunctionComponent<Props>=(props)=> {
    const sc = scpoeClass('yu-dialog')
    return(
        props.visible 
        ?
        <>
       
        <div className={sc('mask')}></div>
        <div className={sc()}>
        <div className={sc('close')}>
                <Icon  name='close' />
            </div>
            <header className={sc('header')}>
                提示
            </header>
            <main className={sc('main')}>
            {props.children}
            </main>
            <footer className={sc('footer')}>
               <button>确认</button>
               <button>取消</button>
            </footer>

        </div>
           
  

        </>
       
        :
        null
    )
}

export default Dialog