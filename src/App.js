
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homePage/HomePage';
import { Login } from './pages/login/Login';

function App() {

  return (
    <div className="">
      <Router>
        <Routes>    
          <Route path={"/"} element={<Login />} /> 
          <Route path={"/home"} element={<HomePage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
