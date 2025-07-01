import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const handleSearch = (search) => {
    console.log(search);
  };

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} />
      <Outlet />
    </div>
  );
}

export default App;
