import  React from "react"
import './importIcons'
import './icon.scss';
import classesAdd from "./helper/classAdd";

interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string
}
const Icon:React.FunctionComponent<IconProps> =
    ({
        className ,
        name,
        ...restProps
    }) => {
    return (
            <svg className={classesAdd(`yu-icon`,className)}
            {...restProps}
            >
                <use xlinkHref={`#${name}`}></use>
                
            </svg>

        )
}
export default Icon

//<use :xlink:href=`#i-${name}`/>
//请改成这样
//<use :xlink:href="`#i-${name}`"/>