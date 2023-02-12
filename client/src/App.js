//Import React
import React from "react";
import {Routes, Route} from "react-router-dom";

//Import components
import Header from "./components/Header";
import Home from "./components/Home";
import ListProjects from "./components/Projects";
import ListProject from "./components/Project";
import UnknownPage from "./components/Unknown";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<ListProjects />}/>
        <Route path='/projects/:id' element={<ListProject />}/>
        <Route path='*' element={<UnknownPage />}/>
      </Routes>
    </div>
  )
}

export default App;