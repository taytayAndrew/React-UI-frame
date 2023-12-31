import React from 'react';
import createRoot from 'react-dom';
import {HashRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import dialogExample from './src/dialog/dialogExample'
import {layoutExample} from './src/layout/layout.example'
import { Aside } from './src/layout/aside';
import { Layout } from './src/layout/layout';
import { Content } from './src/layout/content';
import { Footer } from './src/layout/footer';
import './example.scss'
import IconDemo from './src/icons/Icondemo';


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
              <NavLink to="/icon" >Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className='site-main'>
            <Routes>
            <Route path='/dialog' Component={dialogExample} />
            <Route path='/layout' Component={layoutExample} />
            <Route path='/icon' Component={IconDemo} />

            </Routes>
        </Content>
      </Layout>
      <Footer className='site-footer'>
      ©2023 Copyright fihsy
        </Footer>
    </div>
  </Router>
  , document.querySelector('#root'));