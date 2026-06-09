import React, { useState, useEffect } from "react";
import "./OpeningSlides.css";

function OpeningSlides({ data, onVideoEnd }) {
  const [typedText, setTypedText] = useState("");

  // אפקט טקסט נכתב בזמן אמת (עבור סלייד 2)
  useEffect(() => {
    if (data.typewriterEffect && data.text) {
      setTypedText(""); // איפוס
      let index = 0;
      const interval = setInterval(() => {
        setTypedText((prev) => prev + data.text.charAt(index));
        index++;
        if (index >= data.text.length) clearInterval(interval);
      }, 50); // מהירות הכתיבה (במילישניות)

      return () => clearInterval(interval);
    }
  }, [data]);

  return (
    <div className="opening-slide-container">
      {/* סלייד 1: תמונה צונחת */}
      {data.type === "openingDrop" && (
        <div className="drop-animation-wrapper">
          <img src={data.image} alt="פתיחה" className="dropping-image" />
        </div>
      )}

      {/* סלייד 2: שלט חוצות עם טקסט מקליד */}
      {data.type === "billboardText" && (
        <div className="billboard-wrapper">
          <img src={data.image} alt="שלט חוצות" className="billboard-bg" />
          <div className="billboard-content typewriter-text">{typedText}</div>
        </div>
      )}

      {/* סלייד 3: שלט חוצות עם סרטון */}
      {data.type === "billboardVideo" && (
        <div className="billboard-wrapper">
          <img src={data.image} alt="שלט חוצות" className="billboard-bg" />
          <div className="billboard-content video-inside">
            <video
              src={data.videoUrl}
              controls
              onEnded={onVideoEnd} /* קורא לפונקציה שמשחררת את כפתור ההמשך */
              className="learning-video"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default OpeningSlides;
