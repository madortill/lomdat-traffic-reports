import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./EndPage.css";
import slidesData from "../../data/slides.json";

import road from "../../assets/road.svg";
import BigCloud from "../../assets/cloud-big.svg";
import BigCloudBtn from "../../assets/cloud-big-btn.svg";
import SmallCloud from "../../assets/cloud-small.svg";
import lightingPole from "../../assets/LightingPole.svg";
import car from "../../assets/car.svg";
import logo from "../../assets/logo.png";
import tillBlackLogo from "../../assets/till_blacklogo.svg";
import bushLeft from "../../assets/bush-left.svg";
import bushRight from "../../assets/bush-right.svg";
import gader from "../../assets/gader.svg";
import aboutIcon from "../../assets/aboutIcon.svg";
import mapal from "../../assets/keshet.svg";
import StartOverBtn from "../../assets/startover-btn.svg";
import BackToStudyBtn from "../../assets/back-to-study-btn.svg";

function EndPage() {
  const navigate = useNavigate();
  const [inTopics, setInTopics] = useState(false);
  const [driveMode, setDriveMode] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const popupRef = useRef(null);

  const [closing, setClosing] = useState(false);

  const toggleAbout = () => {
    if (aboutOpen) {
      setClosing(true);
      setTimeout(() => {
        setAboutOpen(false);
        setClosing(false);
      }, 300); // זמן אנימציה
    } else {
      setAboutOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const resetLearningSession = () => {
  //   const keysToRemove = [
  //     "learning_current_slide_index",
  //     "learning_completed_slides",
  //     "learning_max_visited_slide",
  //   ];

  //   keysToRemove.forEach((key) => {
  //     sessionStorage.removeItem(key);
  //   });

  //   Object.keys(sessionStorage).forEach((key) => {
  //     if (
  //       key.startsWith("report_current_page_") ||
  //       key.startsWith("report_values_")
  //     ) {
  //       sessionStorage.removeItem(key);
  //     }
  //   });

  //   navigate("/");
  // };

  const goBackToLearning = () => {
    let targetIndex = slidesData.length - 1;
  
    while (targetIndex > 0 && slidesData[targetIndex]?.skipOnBack) {
      targetIndex -= 1;
    }
  
    sessionStorage.setItem("learning_current_slide_index", String(targetIndex));
  
    navigate("/learning");
  };
  
  const resetLearningSession = () => {
    sessionStorage.clear();
  
    navigate("/", { replace: true });
  };

  return (
    <div className="opening-page">
      <div className="ground-area">
        <img src={road} className="road-opening-page" />

        <img src={gader} className="gader-open" />

        <img
          src={lightingPole}
          className={`lighting-pole-left ${driveMode ? "pole-move-left" : ""}`}
        />

        <img
          src={lightingPole}
          className={`lighting-pole-right ${
            driveMode ? "pole-move-right" : ""
          }`}
        />

        <img src={bushLeft} className="bush-left-open" />
        <img src={bushRight} className="bush-right-open" />

        <img
          src={car}
          className={`car-opening-page ${driveMode ? "car-drive" : ""}`}
        />

        <div className="end-btns-flex-wrapper-2">
          <img
            src={BackToStudyBtn}
            alt="back"
            className="back-to-learning-btn"
            // onClick={() => navigate("/learning")}
            onClick={goBackToLearning}
          />
          <img
            src={StartOverBtn}
            alt="start again"
            className="start-again-btn"
            // onClick={resetLearningSession}
            onClick={resetLearningSession}
          />
        </div>
      </div>

      {/* <img
        src={BigCloud}
        alt="big cloud"
        className="big-cloud-opening-page-left"
      /> */}
      <img
        src={BigCloudBtn}
        className="big-cloud-opening-page-left"
        onClick={() =>
          (window.location.href =
            "https://madortill.github.io/traffic-learning-package/")
        }
      />
      <img
        src={BigCloud}
        alt="big cloud"
        className="big-cloud-opening-page-right"
      />
      <img
        src={SmallCloud}
        alt="small cloud"
        className="small-cloud-opening-page-left"
      />
      <img
        src={SmallCloud}
        alt="small cloud"
        className="small-cloud-opening-page-right"
      />
      <img
        src={tillBlackLogo}
        alt="till logo"
        className="till-logo-black-opening-page"
      />

      {/* אודות */}
      <div className="about-container" ref={popupRef}>
        <img
          src={aboutIcon}
          className="about-btn"
          onClick={() => setAboutOpen(!aboutOpen)}
        />

        {aboutOpen && (
          <div className="about-popup">
            <div className="about-section">
              <strong>מפתחת ראשית:</strong>
              <img src={mapal} className="about-dev-img" />
              <span>רב"ט קשת פרי</span>
            </div>

            <div className="about-section">
              <strong>גרפיקה:</strong>
              <span>רב"ט קשת פרי</span>
            </div>

            <div className="about-section">
              <strong>מומחי תוכן:</strong>
              <span>סגן עדן רוקח</span>
              <span>סמל שיר אשר לוי</span>
            </div>

            <div className="about-section">
              <strong>רמ״ד טי״ל:</strong>
              <span>סמ"ר קטיה מדבדב</span>
            </div>

            <div className="about-section">
              <strong>גרסה:</strong>
              <span>יוני 2026</span>
            </div>

            <div className="about-section memory-note">
              <span>
                הלומדה עוצבה בכתב ידו של סרן עידו ברוך ז"ל, מפקד צוות באגוז שנפל
                בקרב ברצועת עזה. הגופן באדיבות פרויקט ההנצחה "אות חיים".
              </span>
            </div>
          </div>
        )}
      </div>

      <div
        className={`end-content first ${inTopics ? "fade-out" : "fade-in"}`}
      >
        <img src={logo} className="logo-bahad13-end-page" />

        <div className="end-opening-page-header">וואוו כל הכבוד!!</div>

        <div className="end-page-header">סיימתם את הלומדה :)</div>

        {/* <button onClick={() => navigate("/")} className="start-btn-to-topics">
          לתחילת הלומדה
        </button> */}

        {/* <div className="end-btns-flex-wrapper">
          <button
            onClick={() => navigate("/learning")}
            className="back-btn-to-learning"
          >
            ‹ חזרה ללומדה
          </button>

          <button
            onClick={resetLearningSession}
            className="start-btn-to-topics"
          >
            להתחיל מחדש ›
          </button>
        </div> */}
      </div>
      {/* <div className="end-btns-flex-wrapper-2">
          <img
            src={BackToStudyBtn}
            alt="back"
            className="back-to-learning-btn"
            onClick={() => navigate("/learning")}
          />
          <img
            src={StartOverBtn}
            alt="start again"
            className="start-again-btn"
            onClick={resetLearningSession}
          />
        </div> */}
    </div>
  );
}

export default EndPage;
