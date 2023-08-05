import React from "react"
import { Content } from "./content"
import { Footer } from "./footer"
import { Header } from "./header"
import { Layout } from "./layout"

export const LayoutExample1:React.FC = () =>{
 return (
            <Layout className='exampleShow'>
                <Header className="x">header</Header>
                <Content className="y">content</Content>
                <Footer className="x">footer</Footer>
            </Layout>
            )
}