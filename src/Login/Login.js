import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState({ username: "" });
  const [password, setPassword] = useState({ password: "" });
  function nameChange(event) {
    setUserName({ username: event.target.value });
  }
  function passwordChange(event) {
    setPassword({ password: event.target.value });
  }
  function onsubmit() {
    if (userName.username !== "" && password.password !== "") {
      localStorage.setItem("userName", userName.username);
      localStorage.setItem("password", password.password);
      history.push("/result");
    }
  }
  return (
    <div className="login">
      <div className="card">
        <div className="card-header">
          <h1>Login page</h1>
        </div>
        <div className="card-body">
          <form>
            <label htmlFor="user_name" className="mt-3">
              Username
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Username"
              onChange={nameChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="mb-2"
              placeholder="Password"
              onChange={passwordChange}
            />
            <button type="button" className="mb-3" onClick={onsubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
