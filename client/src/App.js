import "./App.css";
import Home from "./components/Home/Home";
import BookTable from "./components/BookTable/BookTable";
import Introduction from "./components/Introduction/Introduction";
import Rooms from "./components/Rooms/Rooms";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    alert("WARNING: Responsive design not yet implemented.")
  }, []);
  return (
  <div className="App">
    <Home/>
    <BookTable/>
    <Introduction/>
    <Rooms/>
  </div>
  )
}

export default App;
