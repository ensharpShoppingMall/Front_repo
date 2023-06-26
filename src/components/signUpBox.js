import React, { useState } from "react";
import "@popperjs/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/signUpBox.css";
import axios from "axios";

function DrawSignUpBox() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState({
    address1: "",
    address2: "",
  });

  async function postSignUpData() {
    try {
      const response = await axios.post(
        "http://3.39.11.11:8080/member/api/join",
        {
          member_id: id,
          password: password,
          name: name,
          zipcode: zipCode,
          address: address,
          phonenumber: phoneNumber,
          email: email,
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="signUpBox">
      <form className="row g-3">
        <div className="col-12" id="idBox">
          <label for="inputId" className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            PASSWORD
          </label>
          <input
            type="password"
            className="form-control"
            id="inputAddress"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            PASSWORD CHECK
          </label>
          <input
            type="password"
            className="form-control"
            id="inputAddress"
          ></input>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            EMAIL
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            NAME
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            PHONE NUMBER
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          ></input>
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            value={address.address1}
            onChange={(e) =>
              setAddress({ ...address, address1: e.target.value })
            }
          ></input>
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            value={address.address2}
            onChange={(e) =>
              setAddress({ ...address, address2: e.target.value })
            }
          ></input>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            ></input>
            <label className="form-check-label" htmlFor="gridCheck">
              이용약관에 동의하십니까?
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            ></input>
            <label className="form-check-label" htmlFor="gridCheck">
              개인정보 수집 및 이용에 동의하십니까?
            </label>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={postSignUpData}
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default DrawSignUpBox;
