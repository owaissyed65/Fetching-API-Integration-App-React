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
        <Route exact path="/" element={<News />} ></Route>
        <Route exact path="/home" element={<News />} ></Route>
        <Route exact path="/news/in" element={<News/>} ></Route>
        <Route exact path="/news/us" element={<News/>} ></Route>
        <Route exact path="/news/sa" element={<News/>} ></Route>
        <Route exact path="/news/jp" element={<News/>} ></Route>
      </Routes>
    </State>
    </div>
  );
}
export default App;
