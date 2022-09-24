import "./App.css";
import Home from "./components/Home/Home";
import BookTable from "./components/BookTable/BookTable";
import Introduction from "./components/Introduction/Introduction"

function App() {
  return (
  <div className="App">
    <Home/>
    <BookTable/>
    <Introduction/>
  </div>
  )
}

export default App;
