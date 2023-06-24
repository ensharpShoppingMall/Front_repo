import React from "react";
import "@popperjs/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/loginBox.css";
import { useNavigate } from "react-router-dom";

function DrawLoginBox() {
  const navigate = useNavigate();

  function navigateToFindId() {
    navigate("/find_id");
  }

  function navigateToFindPw() {
    navigate("/find_pw");
  }

  function navigateToSignUp() {
    navigate("/join");
  }
  return (
    <div className="loginBox">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="ID"
        ></input>
        <label for="floatingInput">ID</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        ></input>
        <label for="floatingPassword">Password</label>
      </div>
      <div className="signInOrUp">
        <button type="button" className="btn btn-outline-secondary">
          LOGIN
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={navigateToSignUp}
        >
          CREATE ACCOUNT
        </button>
      </div>
      <div className="checkInfo">
        <span onClick={navigateToFindId}>FIND ID /</span>
        <span onClick={navigateToFindPw}> FIND PASSWORD</span>
      </div>
    </div>
  );
}

export default DrawLoginBox;
