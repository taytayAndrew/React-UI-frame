import React from "react"
import { Content } from "./content"
import { Footer } from "./footer"
import { Header } from "./header"
import { Layout } from "./layout"

export const LayoutExample1:React.FC = () =>{
 return (
            <Layout className='exampleShow'>
                <Header className="headerAndFooter">header</Header>
                <Content className="layoutContent">content</Content>
                <Footer className="headerAndFooter">footer</Footer>
            </Layout>
            )
}