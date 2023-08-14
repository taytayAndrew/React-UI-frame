import React, { useState } from "react"
import ShowDemoCode from "../component/showDemoCode"

interface Props {
    exampleNum:number
}
export const DialogExampleDemo:React.FC<Props> = (props) =>{
    const [codeVisible, setCodeVisible] = useState(false);
    const [hovered, setHovered] = useState(false);
    const code =  require(`!!raw-loader!./dialogExample${props.exampleNum}`)
 return (
        <>
            <ShowDemoCode codeVisible={codeVisible} hovered={hovered} 
            setCodeVisible={setCodeVisible} setHovered={setHovered} code={code.default}/>
        </>
            
    )
    }

    export default DialogExampleDemo