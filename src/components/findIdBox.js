import React, { useState } from "react";
import "@popperjs/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/findId.css";

function DrawFindId() {
  const [selectedOption, setSelectedOption] = useState("email");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="findIdBox">
      <label for="formGroupExampleInput" class="form-label">
        FIND ID
      </label>
      <fieldset>
        <label>
          <input
            type="radio"
            value="email"
            checked={selectedOption === "email"}
            onChange={handleOptionChange}
          />
          <span>이메일</span>
        </label>
        <label>
          <input
            type="radio"
            value="phoneNumber"
            checked={selectedOption === "phoneNumber"}
            onChange={handleOptionChange}
          />
          <span>핸드폰 번호</span>
        </label>
      </fieldset>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Input your name"
        ></input>
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          E-MAIL
        </label>
        <input
          type="email"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Input your E-mail"
        ></input>
      </div>
      <button type="button" class="btn btn-outline-secondary">
        CONFIRM
      </button>
    </div>
  );
}

export default DrawFindId;
