// import React, { useEffect, useRef, useState } from "react";
import React, { useLayoutEffect, useRef, useState } from "react";
import "./CompletionPopupSlide.css";
import backBtn from "../../assets/back-btn.svg";

function CompletionPopupSlide({ data, onContinue, onBack }) {
  const [passwordValue, setPasswordValue] = useState("");
  const [wasPasswordTouched, setWasPasswordTouched] = useState(false);

  const hasAutoContinued = useRef(false);

  const passwordApprovedStorageKey = `completion_password_approved_${data.id}`;

  const correctPassword = data.password || "";
  const isPasswordCorrect =
    data.who !== "end" || passwordValue.trim() === correctPassword;

  // useEffect(() => {
  //   if (data.who !== "end") return;

  //   const wasAlreadyApproved =
  //     sessionStorage.getItem(passwordApprovedStorageKey) === "true";

  //   if (!wasAlreadyApproved) return;
  //   if (hasAutoContinued.current) return;

  //   hasAutoContinued.current = true;
  //   onContinue();
  // }, [data.who, passwordApprovedStorageKey, onContinue]);
  useLayoutEffect(() => {
    if (data.who !== "end") return;

    const wasAlreadyApproved =
      sessionStorage.getItem(passwordApprovedStorageKey) === "true";

    if (!wasAlreadyApproved) return;
    if (hasAutoContinued.current) return;

    hasAutoContinued.current = true;
    onContinue();
  }, [data.who, passwordApprovedStorageKey, onContinue]);

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
    setWasPasswordTouched(true);
  };

  const handleEndContinue = () => {
    if (!isPasswordCorrect) {
      setWasPasswordTouched(true);
      return;
    }

    sessionStorage.setItem(passwordApprovedStorageKey, "true");
    onContinue();
  };

  const wasAlreadyApproved =
    data.who === "end" &&
    sessionStorage.getItem(passwordApprovedStorageKey) === "true";

  if (wasAlreadyApproved) {
    return null;
  }

  return (
    <div className="completion-popup-overlay">
      <div
        className={`completion-popup-card ${
          data.who === "end"
            ? "completion-popup-card-end"
            : "completion-popup-card-instructions"
        }`}
      >
        {onBack && (
          <button
            className="completion-popup-back-btn"
            type="button"
            onClick={onBack}
            aria-label="חזרה לסלייד הקודם"
          >
            <img src={backBtn} alt="חזרה" />
          </button>
        )}

        {data.who === "end" && (
          <>
            <h2 className="completion-popup-title">{data.title1}</h2>
            <h2 className="completion-popup-title">{data.title2}</h2>

            {data.subtitle && (
              <p className="completion-popup-subtitle">{data.subtitle}</p>
            )}

            <div className="password-btn-container">
              <input
                type="password"
                id="userPassword"
                name="password"
                placeholder="סיסמה..."
                className={`password-popup ${
                  wasPasswordTouched && passwordValue && !isPasswordCorrect
                    ? "password-popup-error"
                    : ""
                } ${
                  wasPasswordTouched && isPasswordCorrect
                    ? "password-popup-correct"
                    : ""
                }`}
                value={passwordValue}
                onChange={handlePasswordChange}
              />

              <button
                className={`completion-popup-button ${
                  !isPasswordCorrect ? "completion-popup-button-disabled" : ""
                }`}
                type="button"
                onClick={handleEndContinue}
                disabled={!isPasswordCorrect}
              >
                {data.buttonLabel}
                <span className="completion-popup-arrow">‹</span>
              </button>
            </div>
          </>
        )}

        {data.who === "instructions" && (
          <>
            <p className="completion-popup-text">{data.text}</p>

            <p className="completion-popup-subtitle">{data.subtitle}</p>

            <p className="completion-popup-mini-text">{data.miniText}</p>

            <button
              className="completion-popup-button"
              type="button"
              onClick={onContinue}
            >
              {data.buttonLabel}
              <span className="completion-popup-arrow">‹</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CompletionPopupSlide;
