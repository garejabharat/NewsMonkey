// import logo from './logo.svg';
import "./App.css";

import React,{ useState } from "react";

import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => {
  const pageSize = 10;
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0);
  // state = {
  //   progress:0,
  // }
  // const setProgress1=(progress)=>{
  //   setprogress(progress)
  // }

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setprogress}
                apikey={apikey}
                key="general"
                pageSize={pageSize}
                country={"in"}
                category={"general"}
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setprogress}
                apikey={apikey}
                key="business"
                pageSize={pageSize}
                country={"in"}
                category={"business"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setprogress}
                apikey={apikey}
                key="entertainment"
                pageSize={pageSize}
                country={"in"}
                category={"entertainment"}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setprogress}
                apikey={apikey}
                key="health"
                pageSize={pageSize}
                country={"in"}
                category={"health"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setprogress}
                apikey={apikey}
                key="science"
                pageSize={pageSize}
                country={"in"}
                category={"science"}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setprogress}
                apikey={apikey}
                key="sports"
                pageSize={pageSize}
                country={"in"}
                category={"sports"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setprogress}
                apikey={apikey}
                key="technology"
                pageSize={pageSize}
                country={"in"}
                category={"technology"}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setprogress}
                apikey={apikey}
                key="general"
                pageSize={pageSize}
                country={"in"}
                category={"general"}
              />
            }
          />
        </Routes>

        {/* <Comp /> */}
      </Router>
    </>
  );
};

export default App;
