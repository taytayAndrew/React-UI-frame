import React from 'react';
import createRoot from 'react-dom';
import {HashRouter as Router, Route, Link, Routes} from 'react-router-dom';
import dialogExample from './src/dialog/dialogExample'
import {layoutExample} from './src/layout/layout.example'
import { Aside } from './src/layout/aside';
import { Layout } from './src/layout/layout';
import { Content } from './src/layout/content';
import { Footer } from './src/layout/footer';
import './example.scss'


createRoot.render(
  <Router>
    <div>
      <header className='site-header'>
        <div className='logo' >
          <img style={{width:'80px',height:'70px'}} src={require('./src/img/logo2.png').default} alt="" />
          
        </div>

      </header>
      <Layout>
        <Aside className='site-aside'>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon" >Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">对话框</Link>
            </li>
            <li>
              <Link to="/layout">布局</Link>
            </li>
            <li>
              <Link to="/dialog">对话框</Link>
            </li>
            <li>
              <Link to="/layout">布局</Link>
            </li>
          </ul>
        </Aside>
        <Content>
            <Routes>
            <Route path='/dialog' Component={dialogExample} />
            <Route path='/layout' Component={layoutExample} />

            </Routes>
        </Content>
      </Layout>
      <Footer className='site-footer'>
      ©2023 Copyright fihsy
        </Footer>
    </div>
  </Router>
  , document.querySelector('#root'));