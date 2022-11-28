import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Profile from "./routes/Profile";
import Favorite from "./routes/Favorite";
import Detail from './routes/Detail';

export default function App(){
    return(
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
          <Route path="/detail/:idDrink" element={<Detail/>}/>
        </Routes>

      </div>
    )
}

