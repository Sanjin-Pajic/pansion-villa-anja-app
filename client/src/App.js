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
import Quotes from "./components/Quotes/Quotes";
import Posts from "./components/Posts/Posts";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
  <div className="App">
    <Home/>
    <BookTable/>
    <Introduction/>
    <Rooms/>
    <Services/>
    <Gallery/>
    <Quotes/>
    <Posts/>
    <VideoContent url = "https://youtu.be/vhwYVhLjr2E?t=16"/>
    <Newsletter />
    <Footer/>
  </div>
  )
}

export default App;
