import React, { useState } from "react";
import "@popperjs/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/signUpBox.css";

function DrawSignUpBox() {
  return (
    <div className="signUpBox">
      <form className="row g-3">
        <div className="col-12" id="idBox">
          <label for="inputId" className="form-label">
            ID
          </label>
          <input type="text" className="form-control" id="inputAddress"></input>
        </div>
        <div class="col-12">
          <label for="inputAddress" className="form-label">
            PASSWORD
          </label>
          <input
            type="password"
            className="form-control"
            id="inputAddress"
          ></input>
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            PASSWORD CHECK
          </label>
          <input type="password" class="form-control" id="inputAddress"></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            EMAIL
          </label>
          <input type="email" class="form-control" id="inputEmail4"></input>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            NAME
          </label>
          <input type="text" class="form-control" id="inputPassword4"></input>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input type="text" class="form-control" id="inputAddress"></input>
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Address 2
          </label>
          <input type="text" class="form-control" id="inputAddress2"></input>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="inputCity"></input>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            State
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Zip
          </label>
          <input type="text" class="form-control" id="inputZip"></input>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="gridCheck"
            ></input>
            <label class="form-check-label" for="gridCheck">
              이용약관에 동의하십니까?
            </label>
          </div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="gridCheck"
            ></input>
            <label class="form-check-label" for="gridCheck">
              개인정보 수집 및 이용에 동의하십니까?
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default DrawSignUpBox;
