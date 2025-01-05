import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import UserDash from "./pages/UserDash/UserDash";
import News from "./pages/News/News";
import Stocks from "./pages/Stocks/Stocks";
import SignUp from "./pages/Sign Up/SignUp";
import React from "react";


// apikey: ctivuchr01qgfbsvlrggctivuchr01qgfbsvlrh0

import { 
  BrowserRouter,
   Routes,
   Route,
   } from "react-router-dom";
import About from "./pages/About/About";

   


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdash" element={<UserDash />} />
        <Route path="/news" element={<News />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
