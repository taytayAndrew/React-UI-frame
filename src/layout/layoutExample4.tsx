import React from "react"
import { Content } from "./content"
import { Footer } from "./footer"
import { Header } from "./header"
import { Layout } from "./layout"
import { Aside } from "./aside"

export const LayoutExample4:React.FC = () =>{
 return (
    <Layout className='' style={{height:'350px',width:'500px'}}>
    <Aside className="z" >aside</Aside>
        <Layout>
        <Header className="x">header</Header>
        <Content className="y">content</Content>
        <Footer className="x">footer</Footer>
        </Layout>
    </Layout>
            )
}