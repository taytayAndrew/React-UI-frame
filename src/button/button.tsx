import React, { useState } from "react"
import { scpoeClass } from "../type/classes"
import './button.scss'
import cs from "classnames" 
import './button-wave.scss'
import Icon from "../icon"

interface Props{
    type?:string
    content:string
    iconposition?:'left'|'right'
    hasIcon?:boolean;
    iconName?:string 
    changeloading?:boolean
    ghost?:boolean

}

export const Button:React.FC<Props>= (props) =>{
    const sc = scpoeClass('yu-button')
    const [hasClick , setClick] = useState(true)
    const [clickChange,setClickChange] = useState(true)
    function wait(time:any){
        return new Promise(resolve => setTimeout(resolve, time));
      }
    const onClick = async () =>{
        if(props.changeloading){
            setClickChange(!clickChange)
        }
        
        if(hasClick){
            setClick(false)
            await wait(100);
            setClick(true)
        }
        
    }
 return (

    <button onClick={onClick}  className={cs(sc(props.type),'yu-button',
    hasClick ? 'wave-animation-animating' :'' ,
    props.ghost ? 'ghost':''
    
    )}>

        {props.hasIcon 
        ?
        props.iconposition === 'right' 
        ?
        <>
        <div  style={{paddingLeft:'5px'}}>
            {props.content}
        </div>
        <div className="loadingIcon">
            {
                props.type === 'loading'
                ?
                clickChange ?
                <Icon className="loading" name={props.iconName as string} />
                :
                <Icon name="buy" style={{color:'white'}}/>
                :
                <Icon name={props.iconName as string} />
            }
        </div>     
        </>        
        :
        <>
        <div className="loadingIcon" onClick={() => setClick(!hasClick)}>
            {
                 props.type === 'loading'
                 ?
                clickChange ?
                <Icon className="loading" name={props.iconName as string} />
                :
                <Icon name="buy" />
                :
                <Icon name={props.iconName as string} />
     
            }
        </div>
        <div onClick={onClick} style={{paddingLeft:'5px'}}>
            {props.content}
        </div>
        </>
        :
        <div>
        {props.content}
        </div>
        }
    </button>

   
    )
}

export default Button
 