import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/pages/Login';

function App() {
  const [setLoggedIn,loggedIn] = useState(false)

  useEffect(() => {
    <Navigate to='/dashboard' />
  }, [loggedIn])
  
  fun

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={
        <Login onLoggedIn={setLoggedIn} />
      } />
      <Route path='/dashboard' element={<Navbar />} />
    </Routes>
  );
}

export default App;
