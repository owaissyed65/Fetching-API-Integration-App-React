import { Route,Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import State from "./Context/State";
const App=()=> {
  
  return (
    <div>  
    <State>
      <Navbar/>
       <Routes>
        <Route path="/" element={<News />} ></Route>
      </Routes>
    </State>
    </div>
  );
}
export default App;
