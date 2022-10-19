import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AcceuilScreen from "./Screens/AcceuilScreen";
import FavorisScreen from "./Screens/FavorisScreen";
import LoginScreen from "./Screens/LoginScreen";
import PanierScreen from "./Screens/PanierScreen";




function App() {



  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AcceuilScreen/>} />
          <Route path="/login" element={< LoginScreen/>} />
          <Route path="/panier" element={<PanierScreen />} />
          <Route path="/fav" element={<FavorisScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;