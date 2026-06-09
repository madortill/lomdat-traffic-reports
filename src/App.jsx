// import React from "react";
// import { useState } from "react";
// import "./css/App.css";
// import video from "../src/assets/Untitled-1_2.mp4";

// function App() {
//   return (
//     <>
//       <div className="app">
//         <video
//           src={video}
//           className="video-bg"
//           autoPlay
//           muted
//           // loop
//           playsInline
//         />
//       </div>
//     </>
//   );
// }

// export default App;


import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileBlocker from "./components/MobileBlocker/MobileBlocker";
import OpeningPage from "./pages/OpeningPage/OpeningPage";
// import LearningPage from "./pages/LearningPage/LearningPage";
// import LearningPage2 from "./pages/LearningPage2/LearningPage2";
// import EndPage from "./pages/EndPage/EndPage";
import "./css/App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkScreen() {
      setIsMobile(window.innerWidth < 900);
    }
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile) {
    return <MobileBlocker />;
  }

  return (
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        {/* <Route
          path="/learning"
          element={
            <LearningPage progress={ch1Progress} setProgress={setCh1Progress} />
          }
        /> */}
        {/* <Route
          path="/learning2"
          element={
            <LearningPage2
              progress={ch2Progress}
              setProgress={setCh2Progress}
              ch1Max={ch1Progress.maxVisited}
            />
          }
        /> */}
        {/* <Route path="/end" element={<EndPage />} /> */}
        {/* <Route path="*" element={<OpeningPage />} /> */}
      </Routes>
  );
}

export default App;
