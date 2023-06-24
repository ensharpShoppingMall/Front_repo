import React from "react";
import DrawHeader from "../components/Header.js";
import DrawSignUpBox from "../components/signUpBox.js";
import Footer from "../components/footer.js";

function SignUp() {
  return (
    <div className="signUp">
      <DrawHeader></DrawHeader>
      <DrawSignUpBox></DrawSignUpBox>
      <Footer></Footer>
    </div>
  );
}

export default SignUp;
