import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import slidesData from "../../data/slides.json"; // ה-JSON שכתבנו בשלב הקודם
import OpeningSlides from "../../pages/OpeningSlides/OpeningSlides";
import "./LearningPage.css";

// לוגואים קבועים (תוכלי להחליף בנתיבים שלך)
import logoBahad13 from "../../assets/logo_shadow.svg";
import tillBlackLogo from "../../assets/till_blacklogo_shadow.svg";
import nextBtn from "../../assets/next-btn.svg";
import backBtn from "../../assets/back-btn.svg";

import road from "../../assets/road.svg";
import BigCloud from "../../assets/cloud-big.svg";
import SmallCloud from "../../assets/cloud-small.svg";
// import lightingPole from "../../assets/LightingPole.svg";
import bushLeft from "../../assets/bush-left.svg";
import bushRight from "../../assets/bush-right.svg";
import gader from "../../assets/gader.svg";

function LearningPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [canProceed, setCanProceed] = useState(true);
  const navigate = useNavigate();

  // ה-סלייד הנוכחי מתוך מערך הנתונים
  const slide = slidesData[currentSlideIndex];

  // בכל פעם שהסלייד משתנה, נבדוק ב-JSON אם הוא דורש נעילה
  useEffect(() => {
    if (slide) {
      // אם requireUnlock הוא true, כפתור ההמשך יינעל (false)
      setCanProceed(!slide.requireUnlock);
    }
  }, [currentSlideIndex, slide]);

  // הגנת בטיחות - אם אין סלייד, שלא יקרוס
  if (!slide) return null;

  // פונקציות ניווט
  const nextSlide = () => {
    const isLastSlide = currentSlideIndex === slidesData.length - 1;
    if (isLastSlide) {
      navigate("/end"); // סיום הלומדה
    } else {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  // שחרור החסימה (ייקרא מתוך קומפוננטת הוידאו כשהוא יסתיים)
  const handleVideoFinished = () => {
    setCanProceed(true);
  };

  return (
    <div className="learning-page-container">
      {/* לוגואים ואלמנטים קבועים ברקע */}
      <img src={logoBahad13} className="logo-bahad13-fixed" alt="בהד 13" />
      <img src={tillBlackLogo} className="logo-till-fixed" alt="מדור טיל" />

      {/* כביש + רכב */}
      <div className="ground-area">
        <img src={road} className="road-opening-page" />

        <img src={gader} className="gader-open" />

        <img src={bushLeft} className="bush-left-open" />
        <img src={bushRight} className="bush-right-open" />

        {/* <img
          src={lightingPole}
          className={`lighting-pole-left ${driveMode ? "pole-move-left" : ""}`}
        /> */}

        {/* <img
          src={lightingPole}
          className={`lighting-pole-right pole-move-right`}
        /> */}

      </div>

      {/* עננים */}
      <img src={BigCloud} className="big-cloud-opening-page-left" onClick={() => window.location.href = "https://madortill.github.io/traffic-learning-package/"} />
      <img src={BigCloud} className="big-cloud-opening-page-right" />
      <img src={SmallCloud} className="small-cloud-opening-page-left" />
      <img src={SmallCloud} className="small-cloud-opening-page-right" />


      {/* אזור התוכן המשתנה - Safe Area */}
      <div className="main-content-wrapper">
        <OpeningSlides data={slide} onVideoEnd={handleVideoFinished} />
      </div>

      {/* מערכת כפתורי הניווט הקבועה */}
      <div className="navigation-actions">
        {/* חץ קדימה / המשך */}
        <img
          src={nextBtn}
          onClick={canProceed ? nextSlide : null}
          className={`nav-arrow-btn next ${!canProceed ? "btn-disabled" : ""}`}
          alt="המשך"
        />

        {/* חץ אחורה / חזור - יוצג רק מסלייד 2 ומעלה */}
        {currentSlideIndex > 0 && (
          <img
            src={backBtn}
            onClick={prevSlide}
            className="nav-arrow-btn back"
            alt="חזור"
          />
        )}
      </div>
    </div>
  );
}

export default LearningPage;