import React from "react"
import './icons/fish.svg'


interface IconProps{
    name:string
}
const Icon:React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref="#fish"></use>
            </svg>
        </span>
    )
}
export default Icon