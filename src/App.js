import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './views/admin/login';
import Register from './views/user/register';
import Register2 from './views/user/register2';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
