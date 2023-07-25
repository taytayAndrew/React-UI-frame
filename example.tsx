import React from 'react';
import createRoot from 'react-dom';
import {HashRouter as Router, Route, Link, Routes} from 'react-router-dom';
import dialogExample from './src/dialog/dialogExample'


createRoot.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          fishy
        </div>

      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
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
          </ul>
        </aside>
        <main>
            <Routes>
            <Route path='/dialog' Component={dialogExample} />

            </Routes>

        </main>

      </div>
    </div>
  </Router>
  , document.querySelector('#root'));