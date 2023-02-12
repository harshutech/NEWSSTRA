import React, {useState} from "react";
import Navbar from "./components/navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const  App =()=>{

  const [progress, setProgress] = useState(0)

  const pageSize = 6;
  const apikey="1d8cb581d65946348993fa6beabffd5e";
 

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          color='#f11946'
          progress={progress}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress}
                 apiKey={apikey} 
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgress} apiKey={apikey} 
                  key="buisness"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgress} apiKey={apikey} 
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/general"
              element={
                <News setProgress={setProgress} apiKey={apikey} 
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgress} apiKey={apikey} 
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgress} apiKey={apikey} 
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News setProgress={setProgress} apiKey={apikey} 
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgress} apiKey={apikey} 
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }


export default App;