import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import {TopBar} from "./organisms/TopBar/TopBar";
import Work from "./Molecules/Work/Work";
function App() {

  
  return (
    <div className="App">
    

     
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<MainPage />} />          
        </Routes>
        <Routes>
          <Route path="/contact" element={<Work />} />         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
