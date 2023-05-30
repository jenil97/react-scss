import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import { Data } from "./Data";
import "./App.scss";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Section slides={Data} />} />
      </Routes>
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
