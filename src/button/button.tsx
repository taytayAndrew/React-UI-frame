import React, { useState } from "react"
import { scpoeClass } from "../type/classes"
import './button.scss'
import cs from "classnames" 
import './button-wave.scss'
import Icon from "../icon"

interface Props{
    type:string
    content:string
    iconposition?:'left'|'right'
    hasIcon?:boolean;
    iconName?:string 
}

export const Button:React.FC<Props>= (props) =>{
    const sc = scpoeClass('yu-button')
    const [hasClick , setClick] = useState(true)
    function wait(time:any){
        return new Promise(resolve => setTimeout(resolve, time));
      }
    const onClick = async () =>{
        if(hasClick){
            setClick(false)
            await wait(100);
            setClick(true)
        }

    }
 return (

    <button onClick={onClick} className={cs(sc(props.type),'yu-button',hasClick ? 'wave-animation-animating' :'' )}>
       <div style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
        {props.hasIcon 
        ?
        
        props.iconposition === 'right' 
        ?
        <>
        <div style={{flexGrow:'1'}}>
            {props.content}
        </div>
        <Icon name={props.iconName as string} />
        </>
        
       
        
        :
        <>
         <Icon name={props.iconName as string} />
        <div style={{padding:'5px'}}>
            {props.content}
        </div>
        </>
        :
        <div>
        {props.content}
        </div>
    
        }
        </div>
    </button>

   
    )
}

export default Button
 