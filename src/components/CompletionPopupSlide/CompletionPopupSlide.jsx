import React from "react";
import "./CompletionPopupSlide.css";

function CompletionPopupSlide({ data, onContinue }) {
  return (
    <div className="completion-popup-overlay">
      <div className="completion-popup-card">
        <h2 className="completion-popup-title">{data.title}</h2>

        <p className="completion-popup-subtitle">{data.subtitle}</p>

        <button
          className="completion-popup-button"
          type="button"
          onClick={onContinue}
        >
          {data.buttonLabel}
          <span className="completion-popup-arrow">‹</span>
        </button>
      </div>
    </div>
  );
}

export default CompletionPopupSlide;