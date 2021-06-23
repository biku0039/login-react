import React from "react";
import "./Result.css";
function Result() {
  const username = localStorage.getItem("userName");
  const pass = localStorage.getItem("password");

  return (
    <div className="result">
      <div className="card">
        <div className="card-header">
          <h2>Result page</h2>
        </div>
        <div className="card-body">
          <table>
            <thead>
              <tr>
                <th>User Name</th>
                <td>{username}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Password</th>
                <td>{pass}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Result;
