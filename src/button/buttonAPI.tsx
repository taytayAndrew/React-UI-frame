import React from "react"
interface Props {
    dialog:string
    info:string
    type:string
    defaultInfo:string
}
export const ButtonTr:React.FC<Props> = (props) =>{
    const {dialog,info,type,defaultInfo} = props;
 return (
    <tr>
    <td>{dialog}</td>
    <td className="des"> {info}</td>
    <td className="type">{type}</td>
    <td>{defaultInfo}</td>
</tr>)
}