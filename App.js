import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import './App.css';
 import Fb from "./components/Fb";
import Insta from "./components/Insta";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Express from "./components/Express";

function App() {
  
  
  
  return (
    <div className="App">
      
      
      <BrowserRouter>
      
        <div>
        <section className='app-body'>
          <div className='app-main'>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Fb" element={<Fb/>}/>
                <Route path="/Insta" element={<Insta/>}/>
                
              </Routes>
          </div>
          <div>
            <button onClick={Express}>Get Data</button>
          </div>
        </section>
      </div>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
