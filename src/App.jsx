import React from "react";
import { useState } from "react";
import "./css/App.css";
import video from "../src/assets/Untitled-1_2.mp4";

function App() {
  return (
    <>
      <div className="app">
        <video
          src={video}
          className="video-bg"
          autoPlay
          muted
          // loop
          playsInline
        />
      </div>
    </>
  );
}

export default App;
