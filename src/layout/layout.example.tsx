import React from "react"
import { Layout } from "./layout"
import { Header } from "./header"
import { Content } from "./content"
import { Footer } from "./footer"
import { Aside } from "./aside"
import './layout.scss'
import './layout.example.scss'

export const layoutExample:React.FC = () =>{
 return (
    <div> 
        <div >
            <h1>第一个例子</h1>
            <Layout className='' style={{height:'350px',width:'500px'}}>
                <Header className="x">header</Header>
                <Content className="y">content</Content>
                <Footer className="x">footer</Footer>
            </Layout>
        </div>
        <div >
            <h1>第二个例子</h1>
            <Layout className='' style={{height:'350px',width:'500px'}}>
                <Header className="x">header</Header>
                <Layout>
                <Content className="y">content</Content>
                <Aside className="z">aside</Aside>
                </Layout>
                <Footer className="x">footer</Footer>
            </Layout>
        </div>
        <div >
            <h1>第三个例子</h1>
            <Layout className='' style={{height:'350px',width:'500px'}}>
                <Header className="x">header</Header>
                <Layout>
                <Content className="y">content</Content>
                <Aside className="z">aside</Aside>
                </Layout>
                <Footer className="x">footer</Footer>
            </Layout>
        </div>
        <div >
            <h1>第四个例子</h1>
            <Layout className='' style={{height:'350px',width:'500px'}}>
            <Aside className="z" >aside</Aside>
                <Layout>
                <Header className="x">header</Header>
                <Content className="y">content</Content>
                <Footer className="x">footer</Footer>
                </Layout>
            </Layout>
        </div>
    </div>)
}