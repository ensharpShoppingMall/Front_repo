import React from "react";
import ReactPlayer from "react-player";
import DrawHeader from "../components/Header.js";
import Footer from "../components/footer.js";

function Main() {
  return (
    <div className="total">
      <DrawHeader></DrawHeader>
      <ReactPlayer
        url={
          "https://player.vimeo.com/video/836807338?loop=1&background=1&app_id=122963"
        }
        width="100vw"
        height="100vh"
        loop={true}
        playing={true}
        muted={true}
        controls={false}
      />
      <Footer></Footer>
    </div>
  );
}

export default Main;
