import React from "react"
import { Content } from "./content"
import { Footer } from "./footer"
import { Header } from "./header"
import { Layout } from "./layout"
import { Aside } from "./aside"

export const LayoutExample3:React.FC = () =>{
 return (
    <Layout className='exampleShow'>
    <Header className="headerAndFooter">header</Header>
    <Layout>
   <Aside className="aside">aside</Aside>
    <Content className="layoutContent">content</Content>

    </Layout>
    <Footer className="headerAndFooter">footer</Footer>
</Layout>
            )
}