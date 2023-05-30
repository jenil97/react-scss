import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import { Data } from "./Data";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Section slides={Data}/>} />
      </Routes>
    </>
  );
};

export default App;
