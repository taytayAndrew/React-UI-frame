import React, { useState } from "react"
import '../../example.scss'
import HighlightCode from '../component/HighLight'
import Icon from "../icon";


interface Props{
   code:string
}
export const Demo:React.FC<Props>= (props) =>{
  const [codeVisible, setCodeVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
    <div className="iconBox">
      <div className="example">
        {props.children}
       </div>
        <div onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)} className="showDemo" onClick={() => setCodeVisible(!codeVisible)}>
          {codeVisible ?
          <div className="iconShowIcon">
            {hovered && (codeVisible ? "隐藏文本" : "显示文本")}
            <Icon name="pointup" style={{width:'20px'}}/>
            </div>
            :
            <div className="iconShowIcon">
            {hovered && (codeVisible ? "隐藏文本" : "显示文本")}
            <Icon name="point" style={{width:'20px'}}/>
            </div>
          }
          
      </div>
              {codeVisible ?
              <HighlightCode code={props.code} className='showCode'/>
              :
              <HighlightCode code={props.code} className='iconCode'/>

              }  
     </div>
     <script>

     </script>
     
    </>
    

  );
};

export default Demo;


