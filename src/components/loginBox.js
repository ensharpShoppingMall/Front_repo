import React, { useState } from "react";
import "@popperjs/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/loginBox.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DrawLoginBox() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function navigateToFindId() {
    navigate("/find_id");
  }

  function navigateToFindPw() {
    navigate("/find_pw");
  }

  function navigateToSignUp() {
    navigate("/join");
  }

  async function getLoginData() {
    try {
      const response = await axios.get(
        "http://3.39.11.11:8080/member/api/login",
        {
          params: {
            member_id: id,
            password: password,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="loginBox">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <label for="floatingInput">ID</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label for="floatingPassword">Password</label>
      </div>
      <div className="signInOrUp">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={getLoginData}
        >
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
