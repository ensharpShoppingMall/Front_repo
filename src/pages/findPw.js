import React from "react";
import DrawHeader from "../components/Header.js";
import DrawFindPw from "../components/findPwBox.js";
import Footer from "../components/footer.js";

function FindPw() {
  return (
    <div className="findPw">
      <DrawHeader></DrawHeader>
      <DrawFindPw></DrawFindPw>
      <Footer></Footer>
    </div>
  );
}

export default FindPw;
