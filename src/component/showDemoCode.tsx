import React from "react"
import Icon from "../icon"
import HighlightCode from '../component/HighLight'
interface Props{
    setHovered:React.Dispatch<React.SetStateAction<boolean>>
    hovered:boolean
    codeVisible:boolean
    setCodeVisible:React.Dispatch<React.SetStateAction<boolean>>
    code:string
}
export const ShowDemoCode:React.FC<Props> = (props) =>{
 return (
    <>
    <div onMouseEnter={() => props.setHovered(true)}
    onMouseLeave={() => props.setHovered(false)} className="showDemo" onClick={() => props.setCodeVisible(!props.codeVisible)}>
    {props.codeVisible ?
    <div className="iconShowIcon">
      {props.hovered && (props.codeVisible ? "隐藏文本" : "显示文本")}
      <Icon name="pointup" style={{width:'20px'}}/>
      </div>
      :
      <div className="iconShowIcon">
      {props.hovered && (props.codeVisible ? "隐藏文本" : "显示文本")}
      <Icon name="point" style={{width:'20px'}}/>
      </div>
    }
    
</div>
        {props.codeVisible ?
        <HighlightCode code={props.code} className='showCode'/>
        :
        <HighlightCode code={props.code} className='iconCode'/>

        }  
    </>

    )
}

export default ShowDemoCode