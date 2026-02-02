import './App.css';
import Register from './pages/Regiser';
import Login from './pages/Login';
import Home from './pages/Home';
import  Muscle from './pages/MusclePlan';
import Fat from './pages/FatPlan';
import Accordions from './pages/Accordion.jsx';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path='/Accordion' element={<Accordions/>}/>
          <Route path="/register" element={<Register />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/muscle' element={<Muscle/>}/>
          <Route path='/fat' element={<Fat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
