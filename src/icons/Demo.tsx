import React, { useState } from "react"
import '../../example.scss'
import ShowDemoCode from "../component/showDemoCode";


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
       <ShowDemoCode codeVisible={codeVisible} hovered={hovered} 
       setCodeVisible={setCodeVisible} setHovered={setHovered} code={props.code}/>
     </div>
     <script>

     </script>
     
    </>
    

  );
};

export default Demo;


