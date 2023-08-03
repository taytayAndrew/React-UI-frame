import React from "react"
import Demo from '../../Demo'
import IconExample2 from "./IconExample2"


const IconDemo =() =>{
 const code =  require('!!raw-loader!./iconExample.tsx')

    return(
        <Demo code={code.default}>
            <IconExample2/>
        </Demo>
    )
}

export default IconDemo