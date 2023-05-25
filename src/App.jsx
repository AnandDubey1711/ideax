import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/navbar";
import Details from './components/Details/Details';
import Algorithm from "./components/Algorithm/algorithm";
import Hero from "./components/Hero/hero";
import Footer from "./components/Footer/footer";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Hero />
        <Details/>
        <Algorithm />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
