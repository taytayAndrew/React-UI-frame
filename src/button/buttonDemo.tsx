import React from "react"
import './button.scss'
import './button-wave.scss'
import { scpoeClass } from "../type/classes"
import { ButtonExampleCode } from "./buttonExampleDemo"
import { ButtonExample1 } from "./buttonExample1"
import { ButtonExample3 } from "./buttonExample2"
import { ButtonExample2 } from "./buttonExample3"
import { ButtonExample4 } from "./buttonExample4"

export const ButtonExample:React.FC = () =>{
    const sc = scpoeClass('yu-button')
 return (
    <div>
        <div className={sc('buttonHead')}> 
            <h1>何时使用</h1>
            <h4>响应用户点击行为，触发相应业务逻辑。</h4>
        </div>
    <div className="buttonMain">
        <h1 className="buttonMainHead">代码示例</h1>
        <div className="buttonMainContent">
                <div className="buttonExample">
                    <ButtonExample1 />
                </div>
                <div className="contentInfo" >
                    
                    <h4 >按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。</h4>
                </div>
                <div className="iconBox" >
                        <ButtonExampleCode exampleNum={1}/>
                    </div>
            </div>
            <div className="buttonMainContent">
                <div className="buttonExample">
                    <ButtonExample2 />
                </div>
                <div className="contentInfo" >
                    <h4 >设置按钮的禁用和加载中状态。</h4>
                </div>
                <div className="iconBox" >
                        <ButtonExampleCode exampleNum={2}/>
                    </div>
            </div>
            <div className="buttonMainContent">
                <div className="buttonExample">
                    <ButtonExample3 />
                </div>
                <div className="contentInfo" >
                    <h4 >设置内嵌 Icon 图标和位置</h4>
                </div>
                <div className="iconBox" >
                        <ButtonExampleCode exampleNum={3}/>
                    </div>
            </div>
            <div className="buttonMainContent">
                <div className="buttonExample" style={{backgroundColor:'#bec8c8'}}>
                    <ButtonExample4 />
                </div>
                <div className="contentInfo" >
                    <h4 >幽灵按钮常用在有色背景上。</h4>
                </div>
                <div className="iconBox" >
                    <ButtonExampleCode exampleNum={4}/>
                    </div>
                </div>
                <table className="api-table">
            <tbody>
                <tr>
                    <th>1</th>
                    <th className="des">1</th>
                    <th className="type">1</th>
                    <th>1</th>


                </tr>
            </tbody>
        </table>
            </div>
       
    </div>

    
    
    )
}