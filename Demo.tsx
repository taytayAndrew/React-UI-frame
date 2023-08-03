import React, { useState } from "react"
import { Highlight, themes } from "prism-react-renderer"
import './example.scss'

interface Props{
   code:string
}
export const Demo:React.FC<Props>= (props) =>{
  const [codeVisible, setCodeVisible] = useState(false);
  const code = (
    <div>
        <Highlight
            theme={themes.shadesOfPurple}
            code={props.code}
            language="tsx"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style} className={className}>
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
    </div>
    
  );
  return (
    <div>
      <div className="example">
        {props.children}
      </div>
      <div>
        <button onClick={() => setCodeVisible(!codeVisible)}>查看代码</button>
        {codeVisible && code}
      </div>
    </div>
  );
};

export default Demo;