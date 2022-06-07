import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { auth } from './features/authUserSlice';
import { HomePage } from './pages/homePage/HomePage';
import { Login } from './pages/login/Login';

function App() {

  //This useEffect is not really necessary, I was just trying to know the expiry date of the token
   const dispatch = useDispatch()
  const [, setIsLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  // check if user is authenticated and get his details and store to global state
  useEffect(() => {
    // Handle user state changes
    const getAuthData = async token => {
      dispatch(auth(token))
      setIsLoggedIn(true)
      if (checkingStatus) setCheckingStatus(false)
    }

    const deleteTokenAndKickUserOut = async () => {
      localStorage.removeItem("11#221#")
      if (checkingStatus) setCheckingStatus(false)
    }

    const token = localStorage.getItem("11#221#")
    if (token) {
      const decoded = jwtDecode(token)
      const expiryDate = new Date(decoded.exp * 1000)
      return new Date() > expiryDate
        ? deleteTokenAndKickUserOut()
        : getAuthData(decoded)
    }
    
    return deleteTokenAndKickUserOut()
  }, [checkingStatus, dispatch])

  const token = localStorage.getItem("11#221#")
  const decoded = jwtDecode(token)
      const expiryDate = new Date(decoded.nbf * 1000)
    console.log("Token expiration", expiryDate)

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
