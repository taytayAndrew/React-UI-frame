import React from "react"
import { Highlight, themes } from "prism-react-renderer"

interface Props {
    code:string
    className?:string
}
export const HightlightCode:React.FC <Props>= (props) =>{
 return (
    <div>
        <Highlight
            theme={themes.vsDark}
            code={props.code}
            language="tsx"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre style={{width:'100%',borderRadius:'10px',fontSize:'15px',fontWeight:'normal',
              fontFamily:'"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",  Arial, sans-serif;',
              ...style}} className={props.className}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
    </div>)
}

export default HightlightCode