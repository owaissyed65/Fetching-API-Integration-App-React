import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Context from "./Context/Context";
import React, { useContext } from "react";
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  const context = useContext(Context);
  const { progress } = context

  return (
    <div>

      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={{ progress: progress }}
      />
      <Routes>
        <Route exact path="/" element={<News />} ></Route>
        <Route exact path="/home" element={<News />} ></Route>
        {/* These routes are for india */}
        <Route exact path="/news/in/sports" element={<News />} ></Route>
        <Route exact path="/news/in/business" element={<News />} ></Route>
        <Route exact path="/news/in/entertainment" element={<News />} ></Route>
        <Route exact path="/news/in/general" element={<News />} ></Route>
        <Route exact path="/news/in/health" element={<News />} ></Route>
        <Route exact path="/news/in/science" element={<News />} ></Route>
        <Route exact path="/news/in/technology" element={<News />} ></Route>
        {/* These routes are for us */}
        <Route exact path="/news/us/sports" element={<News />} ></Route>
        <Route exact path="/news/us/business" element={<News />} ></Route>
        <Route exact path="/news/us/entertainment" element={<News />} ></Route>
        <Route exact path="/news/us/general" element={<News />} ></Route>
        <Route exact path="/news/us/health" element={<News />} ></Route>
        <Route exact path="/news/us/science" element={<News />} ></Route>
        <Route exact path="/news/us/technology" element={<News />} ></Route>
        {/* These routes are for sa */}
        <Route exact path="/news/sa/sports" element={<News />} ></Route>
        <Route exact path="/news/sa/business" element={<News />} ></Route>
        <Route exact path="/news/sa/entertainment" element={<News />} ></Route>
        <Route exact path="/news/sa/general" element={<News />} ></Route>
        <Route exact path="/news/sa/health" element={<News />} ></Route>
        <Route exact path="/news/sa/science" element={<News />} ></Route>
        <Route exact path="/news/sa/technology" element={<News />} ></Route>
        {/* These routes are for jp */}
        <Route exact path="/news/jp/sports" element={<News />} ></Route>
        <Route exact path="/news/jp/business" element={<News />} ></Route>
        <Route exact path="/news/jp/entertainment" element={<News />} ></Route>
        <Route exact path="/news/jp/general" element={<News />} ></Route>
        <Route exact path="/news/jp/health" element={<News />} ></Route>
        <Route exact path="/news/jp/science" element={<News />} ></Route>
        <Route exact path="/news/jp/technology" element={<News />} ></Route>
        {/* These routes are for nz */}
        <Route exact path="/news/nz/sports" element={<News />} ></Route>
        <Route exact path="/news/nz/business" element={<News />} ></Route>
        <Route exact path="/news/nz/entertainment" element={<News />} ></Route>
        <Route exact path="/news/nz/general" element={<News />} ></Route>
        <Route exact path="/news/nz/health" element={<News />} ></Route>
        <Route exact path="/news/nz/science" element={<News />} ></Route>
        <Route exact path="/news/nz/technology" element={<News />} ></Route>
      </Routes>
    </div>
  );
}
export default App;
