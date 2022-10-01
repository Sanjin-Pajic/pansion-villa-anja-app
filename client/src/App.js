import "./App.css";
import Home from "./components/Home/Home";
import BookTable from "./components/BookTable/BookTable";
import Introduction from "./components/Introduction/Introduction";
import Rooms from "./components/Rooms/Rooms";
import Services from "./components/Services/Services";
import {useEffect} from "react";

function App() {
  return (
  <div className="App">
    <Home/>
    <BookTable/>
    <Introduction/>
    <Rooms/>
    <Services/>
    <Introduction/> {/*for testing purposes*/}
  </div>
  )
}

export default App;
