import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
};

export default App;
