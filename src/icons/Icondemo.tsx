import React from "react"
import Demo from './Demo'
import IconExample2 from "./IconExample2"
import './IconDemo.scss'
import { ButtonTr } from "../button/buttonAPI"

export const IconDemo:React.FC =() =>{
 const code =  require('!!raw-loader!./iconExample.tsx')

    return(
        <>
        <div className="iconInfo">
        <h1>Icon图标</h1>
        <h4>提供使用显示图标</h4>  
         <Demo code={code.default}>
            <IconExample2/>
        </Demo>
        </div>
        <table className="api-table">
                <thead>
                    <tr>
                        <th>参数</th>
                        <th className="des">说明</th>
                        <th className="type">类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                    <tbody>
                       <ButtonTr dialog="name" info="Icon的name" 
                       type="——————" defaultInfo="——————" />
                       
                    </tbody>
            </table>
        </>

        
       
    )
}

export default IconDemo