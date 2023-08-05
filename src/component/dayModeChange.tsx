import React from "react"
import { useState } from "react"
import Icon from "../icon"


export const DayModeChange:React.FC = () =>{
    const [isDay , setDay] = useState(true)
 return (
    <div onClick={() => setDay(!isDay)} style={{width:'100%',height:'100%'}}>
        {
             isDay ?
        <Icon name='day' className='daymode' />
        :
        <Icon name='night' className='daymode' />
     
        }
           
      
    </div>
    
    )
}
export default DayModeChange