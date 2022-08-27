import React,{useContext} from 'react'
import Context from '../Context/Context'
const Home = () => {
    const context = useContext(Context);
    const {name1,setname1} = context;
setTimeout(() => {
    setname1("Bolo") 
}, 2000);
  return (
    <div>
      {name1}
    </div>
  )
}

export default Home
