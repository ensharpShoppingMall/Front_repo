import React from "react";
import DrawHeader from "../components/Header.js";
import DrawLoginBox from "../components/loginBox.js";
import Footer from "../components/footer.js";

function Login() {
  return (
    <div className="login">
      <DrawHeader></DrawHeader>
      <DrawLoginBox></DrawLoginBox>
      <Footer></Footer>
    </div>
  );
}

export default Login;
