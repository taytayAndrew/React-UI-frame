import ReactDOM from 'react-dom'
import React from 'react'
import Icon from './icon'

const fn:React.MouseEventHandler = (e) =>{
    console.log(e.target)
}
ReactDOM.render(
    <div>
    <Icon onClick={fn}
     name='qq'
     onMouseEnter={() => console.log('enter')}
     onMouseLeave={() => console.log('leave')}
      />
    </div>,document.body.querySelector('#root'))