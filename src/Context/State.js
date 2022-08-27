import React,{useState} from 'react'
import Context from './Context'
const State = (props) => {
    const [name1, setname1] = useState("Hello");
    
  return (
    <Context.Provider value={{name1,setname1}}>
        {props.children}
    </Context.Provider>
  )
}

export default State
