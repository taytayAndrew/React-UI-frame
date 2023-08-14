import React, { useState } from "react";
import { DialogExample1 } from "./dialogExample1";
import { DialogExample2 } from "./dialogExample2";
import { DialogExample3 } from "./dialogExample3";
import { DialogExample4 } from "./dialogExample4";
import { DialogExampleDemo } from './dialogExampleDemo'

export default function () {
    const [x, setX] = useState(false)
    const [y, setY] = useState(false)

    //由于函数延迟执行性 onClick中执行的是close函数 也就是onClick等于modal的返回值
    return (
        <div >
            <div>
                <h1 style={{ marginBottom: '20px' }}>Dialog 对话框</h1>
                <h4 style={{ marginBottom: '50px' }}>在保留当前页面状态的情况下，告知用户并承载相关操作。</h4>
            </div>

            <div style={{ marginBottom: '50px', position: 'relative', zIndex: '10' }}>
                <div style={{ paddingBottom: '30px' }}>
                    <h2>不可点击灰幕消失的通知栏</h2></div>
                <div style={{ width: '800px', height: '100px', border: '#ebebeb solid 1px', display: 'flex', alignItems: 'center', paddingLeft: '30px' }}>
                    <DialogExample1 setX={setX} x={x} />
                </div>
                <div className="iconBox" style={{ width: '800px' }}>
                    < DialogExampleDemo exampleNum={1} />
                </div>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <div style={{ paddingBottom: '30px' }}>
                    <h2>点击灰幕消失的通知栏</h2>
                </div>
                <div style={{ width: '800px', height: '100px', border: '#ebebeb solid 1px', display: 'flex', alignItems: 'center', paddingLeft: '30px' }}>
                    <DialogExample2 setY={setY} y={y} />
                </div>
                <div className="iconBox" style={{ width: '800px' }}>
                    < DialogExampleDemo exampleNum={2} />
                </div>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <div style={{ paddingBottom: '30px' }}>
                    <h2>警告栏以及确认栏</h2>
                </div>
                <div style={{ width: '800px', height: '100px', border: '#ebebeb solid 1px', display: 'flex', alignItems: 'center', paddingLeft: '30px' }}>
                    <DialogExample3 />
                </div>
                <div className="iconBox" style={{ width: '800px' }}>
                    < DialogExampleDemo exampleNum={3} />
                </div>
            </div>

            <div style={{ paddingBottom: '50px' }}>
                <div style={{ paddingBottom: '30px' }}>
                    <h2>模板栏</h2>
                </div>
                <div style={{ width: '800px', height: '100px', border: '#ebebeb solid 1px', display: 'flex', alignItems: 'center', paddingLeft: '30px' }}>
                    <DialogExample4 />
                </div>
                <div className="iconBox" style={{ width: '800px' }}>
                    < DialogExampleDemo exampleNum={4} />
                </div>
            </div>

        </div>
    )
}