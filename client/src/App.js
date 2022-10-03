import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import BookTable from "./components/BookTable/BookTable";
import Introduction from "./components/Introduction/Introduction";
import Rooms from "./components/Rooms/Rooms";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <div className="App">
    <Home/>
    <BookTable/>
    <Introduction/>
    <Rooms/>
    <Services/>
    <Gallery/>
    <Introduction/> {
      //testing purposes only
    }
    <Footer/>
  </div>
  )
}

export default App;
