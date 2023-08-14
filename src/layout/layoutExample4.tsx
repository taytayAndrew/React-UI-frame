import React from "react"
import { Content } from "./content"
import { Footer } from "./footer"
import { Header } from "./header"
import { Layout } from "./layout"
import { Aside } from "./aside"

export const LayoutExample4:React.FC = () =>{
 return (
    <Layout style={{height:'350px',width:'500px'}}>
    <Aside className="aside" >aside</Aside>
        <Layout>
        <Header className="headerAndFooter">header</Header>
        <Content className="layoutContent">content</Content>
        <Footer className="headerAndFooter">footer</Footer>
        </Layout>
    </Layout>
            )
}