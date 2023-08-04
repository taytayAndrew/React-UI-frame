import React from "react"
import Icon from "../icon"
import '../icon.scss'

export const IconExample:React.FC = () =>{
 return (
    <div className="IconExample">
        <Icon className="iconFish"  name='fish'></Icon>
        <Icon className="iconQq"  name='qq'></Icon>

    </div>)
}
export default IconExample