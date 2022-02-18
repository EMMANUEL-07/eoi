import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from './views/admin/login';
import Overview from './views/admin/overview';
import Settings from './views/admin/settings';
import Register from './views/user/register';
import PrivateRoute from "./utils/PrivateRoute";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const contextData = useContext(AuthContext) 

  console.log(contextData)

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/overview' element={<Overview />} />
          {/* 
          <Route path="/overview" element={!contextData?.user ? <Login /> : <Overview />} />
          <Route path="/settings" element={!contextData?.user ? <Login /> : <Settings />} /> */}
          {/* <PrivateRoute path="/overview" element={<Overview />} />
          <PrivateRoute path="/settings" element={<Settings />} /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
