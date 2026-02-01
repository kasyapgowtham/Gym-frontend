import './App.css';
import Register from './pages/Regiser';
import Login from './pages/Login';
import Home from './pages/Home';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/register" element={<Register />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
