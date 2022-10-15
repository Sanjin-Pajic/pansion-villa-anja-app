import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import BookTable from "./components/BookTable/BookTable";
import Introduction from "./components/Introduction/Introduction";
import Rooms from "./components/Rooms/Rooms";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import VideoContent from "./components/VideoContent/VideoContent";

function App() {
  return (
  <div className="App">
    <Home/>
    <BookTable/>
    <Introduction/>
    <Rooms/>
    <Services/>
    <Gallery/>
    <VideoContent url = "https://www.youtube.com/watch?v=vhwYVhLjr2E&ab_channel=Citiesin4K"/>
    <Footer/>
  </div>
  )
}

export default App;
