import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import PrivateRoute from "./private/PrivateRoute";
import Pricing from "./components/Pricing/Pricing";
import User from "./components/User/User";
import Futures from "./components/Futures/Futures";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  let loginTrue = {
    username: "admin",
    Password: "12345",
    token: "WADEFSGRDHTRNDYFTHRGFDZEFGSSVAAWFDEQAGAEWFDQEDQWFEASGSRFQW",
  };

  const isAuth = () => {
    setLogin(
      loginTrue.username === userName && loginTrue.Password === password
    );
  };

  console.log(userName);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/login"
            element={
              <Login
                ok={isAuth}
                login={login}
                username={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route path="/" element={<PrivateRoute login={login} />}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/user" element={<User />} />
            <Route path="/futures" element={<Futures />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
