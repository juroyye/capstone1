import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import UserDash from "./pages/UserDash/UserDash";
import News from "./pages/News/News";
import Stocks from "./pages/Stocks/Stocks";
import React from "react";
import ReactDOM from "react-dom/client";

import { 
  BrowserRouter,
   Routes,
   Route,
   } from "react-router-dom";

   


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdash" element={<UserDash />} />
        <Route path="/news" element={<News />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
