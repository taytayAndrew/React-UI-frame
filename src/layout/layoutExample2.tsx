import React from "react"
import { Content } from "./content"
import { Footer } from "./footer"
import { Header } from "./header"
import { Layout } from "./layout"
import { Aside } from "./aside"

export const LayoutExample2:React.FC = () =>{
 return (
    <Layout className='exampleShow'>
    <Header className="x">header</Header>
    <Layout>
    <Content className="y">content</Content>
    <Aside className="z">aside</Aside>
    </Layout>
    <Footer className="x">footer</Footer>
</Layout>
            )
}