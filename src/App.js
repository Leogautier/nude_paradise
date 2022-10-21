import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import HomeScreen from './screens/HomeScreen';
import ArtistScreen from './screens/ArtistScreen';
import ThemeScreen from './screens/ThemeScreen';
import { BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  

  return (
    <div className="App container container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/artist" element={<ArtistScreen />} />
          <Route path="/theme" element={<ThemeScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
