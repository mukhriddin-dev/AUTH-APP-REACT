import React from "react";
import Home from "../Home/Home";

const Login = ({ ok, login, setPassword, username, setUserName, password }) => {
  return (
    <>
      {login ? (
        <>
        <Home/>
        </>
      ) : (
        <div>
          <div className="row g-3 w-25 mx-auto mt-5">
            <input
              type="text"
              className="form-control plaintext"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="user name"
            />

            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="btn btn-primary mb-3" onClick={() => ok()}>
              LOGIN
            </button>
          </div>
        </div>
      )
      
      }
    </>
  );
};

export default Login;
