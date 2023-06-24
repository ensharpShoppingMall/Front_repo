import React from "react";
import DrawHeader from "../components/Header.js";
import DrawFindId from "../components/findIdBox.js";
import Footer from "../components/footer.js";

function FindId() {
  return (
    <div className="findId">
      <DrawHeader></DrawHeader>
      <DrawFindId></DrawFindId>
      <Footer></Footer>
    </div>
  );
}

export default FindId;
