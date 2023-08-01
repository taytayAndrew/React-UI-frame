interface ClassToggles {
    [T:string]:boolean
}

export function scpoeClass(prefix:string) {
    return (name?:string | ClassToggles,extra?:string | undefined) => 
    Object.
    entries(name instanceof Object ? name : {[name as string]:name}  )
    .filter(kv => kv[1] !== false)
    .map(kv => kv[0])
    .map(name => [prefix,name]
        .filter(Boolean)
        .join('-')
        )
    .concat(extra || [])
    .join(' ')
    
  }
 

 