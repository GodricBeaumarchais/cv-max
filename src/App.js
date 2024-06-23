import './App.css';
import Home from './component/Home';
import Scantrad from './portfolio/Scantrad';
import {Routes, Route} from "react-router-dom"





function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Scantrad' element={<Scantrad/>} />
      </Routes>
      
    </div>
  );
}

export default App;

