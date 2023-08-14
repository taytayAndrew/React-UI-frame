import React from "react"
import './layout.scss'
import './layout.example.scss'
import { LayoutExample3 } from "./layoutExample3"
import { LayoutExample4 } from "./layoutExample4"
import { LayoutExampleDemo } from "./layoutExampleDemo"
import { LayoutExample1 } from "./layoutExample1"
import { LayoutExample2 } from "./layoutExample2"
import { ButtonTr } from "../button/buttonAPI"


export const layoutExample:React.FC = () =>{


 return (
    <div> 
        <div >
            <h2 className="exampleDetail">基础布局</h2>
            <h3 style={{marginBottom:'10px'}}>使用上中下简易布局</h3>
            <LayoutExample1 />
            <div className="iconBox" style={{width:'500px'}}>
             <LayoutExampleDemo exampleNum={1}/>
            </div>

        </div>
            <div >
            <h2 className="exampleDetail">分栏布局</h2>
            <h3 style={{marginBottom:'10px'}}>内容部分增添侧栏 侧栏靠右</h3>
            <LayoutExample2 />
            <div className="iconBox" style={{width:'500px'}}>
             <LayoutExampleDemo exampleNum={2}/>
            </div>
           
         

        </div>
        <div >
        <h2 className="exampleDetail">分栏布局</h2>
        <h3 style={{marginBottom:'10px'}}>内容部分增添侧栏，侧栏靠左</h3>
         <LayoutExample3 />
            <div className="iconBox" style={{width:'500px'}}>
             <LayoutExampleDemo exampleNum={3}/>
            </div>

        </div>
        <div >
        <h2 className="exampleDetail">左右布局</h2>
        <h3 style={{marginBottom:'10px'}}>侧栏与上下中结构左右布局</h3>
        <LayoutExample4 />
            <div className="iconBox" style={{width:'500px'}}>
             <LayoutExampleDemo exampleNum={4}/>
            </div>
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
                       <ButtonTr dialog="className" info="布局默认样式" 
                       type="'headerAndFooter'|'layoutContent'|aside'|
                       " defaultInfo="————" />
                    </tbody>
            </table>
    </div>)
}