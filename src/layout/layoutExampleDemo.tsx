import React, { useState } from "react"
import ShowDemoCode from "../component/showDemoCode"

interface Props {
    exampleNum:number
}
export const LayoutExampleDemo:React.FC<Props> = (props) =>{
    const [codeVisible, setCodeVisible] = useState(false);
    const [hovered, setHovered] = useState(false);
    const code =  require(`!!raw-loader!./layoutExample${props.exampleNum}`)
 return (
        <>
            <ShowDemoCode codeVisible={codeVisible} hovered={hovered} 
            setCodeVisible={setCodeVisible} setHovered={setHovered} code={code.default}/>
        </>
            
    )
    }