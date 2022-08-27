import Home from "./Components/Home";
import State from "./Context/State";
const App=()=> {
  
  return (
    <State>
    <Home/>
    </State>
  );
}
export default App;
