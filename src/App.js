import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import {TopBar} from "./organisms/TopBar/TopBar";
import Contacts from "./Molecules/Contacts/Contacts";
function App() {

  
  return (
    <div className="App">
    

     
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<MainPage />} />          
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contacts />} />         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
