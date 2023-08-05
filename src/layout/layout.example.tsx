import React from "react"
import './layout.scss'
import './layout.example.scss'
import { LayoutExample1 } from "./layoutExample1"
import { LayoutExample3 } from "./layoutExample3"

import { LayoutExample2 } from "./layoutExample2"
import { LayoutExample4 } from "./layoutExample4"
export const layoutExample:React.FC = () =>{
 return (
    <div> 
        <div >
            <h2 className="exampleDetail">基础布局</h2>
            <h3 style={{marginBottom:'10px'}}>使用上中下简易布局</h3>
            <LayoutExample1 />
        </div>
        <div >
        <h2 className="exampleDetail">分栏布局</h2>
        <h3 style={{marginBottom:'10px'}}>内容部分增添侧栏 侧栏靠右</h3>
         <LayoutExample2 />

        </div>
        <div >
        <h2 className="exampleDetail">分栏布局</h2>
        <h3 style={{marginBottom:'10px'}}>内容部分增添侧栏，侧栏靠左</h3>
        <LayoutExample3 />

        </div>
        <div >
        <h2 className="exampleDetail">左右布局</h2>
        <h3 style={{marginBottom:'10px'}}>侧栏与上下中结构左右布局</h3>
        <LayoutExample4 />

        </div>
    </div>)
}