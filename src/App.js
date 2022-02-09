import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './views/user/register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
