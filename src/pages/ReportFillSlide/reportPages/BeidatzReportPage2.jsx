import beidatz2 from "../../../assets/בידצ2.jpg";
import danisHatima from "../../../assets/danis-hatima.png";
import AvivsHatima from "../../../assets/Avivs-hatima.png";

function BeidatzReportPage2({
  formValues,
  updateField,
  validationResults = {},
}) {
  // שאר הקוד שלך נשאר בדיוק אותו הדבר
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2144 3000"
    >
      <defs>
        <style>
          {`.cls-1 {
        fill: none;
      }`}
        </style>
      </defs>

      <g id="Layer_1-2" data-name="Layer_1">
        <g>
          <image width="2144" height="3000" xlinkHref={beidatz2} />

          {/* === תגובת מקבל הדו"ח - טקסט ארוך === */}
          <rect
            className="cls-1"
            x="181"
            y="201.65"
            width="1768.7"
            height="209.74"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="181" y="201.65" width="1768.7" height="209.74">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
              style={{ width: "100%", height: "100%" }}
            >
              <textarea
                className={`svg-report-input svg-report-textarea ${
                  validationResults.beidatzDriverResponse === "locked"
    ? "validation-locked"
                    : validationResults.beidatzDriverResponse === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="הקלד את תגובת מקבל הדו''ח כאן..."
                value={formValues.beidatzDriverResponse || ""}
                onChange={(e) =>
                  updateField("beidatzDriverResponse", e.target.value)
                }
                disabled={validationResults.beidatzDriverResponse === "correct"}
                style={{ width: "100%", height: "100%", resize: "none" }}
              />
            </div>
          </foreignObject>

          {/* === חתימת מקבל הדו"ח - תמונה === */}
          <g>
            <rect
              x="1494.22"
              y="420.78"
              width="226.96"
              height="50.09"
              className={`cls-1 svg-sign-clickable ${
                formValues.isDriverSignedBeidatz ? "is-signed" : ""
              } ${
                validationResults.isDriverSignedBeidatz === "locked"
    ? "validation-locked"
                  : validationResults.isDriverSignedBeidatz === "incorrect"
                  ? "validation-incorrect"
                  : ""
              }`}
              onClick={() => updateField("isDriverSignedBeidatz", true)}
            />
            {formValues.isDriverSignedBeidatz && (
              <image
                href={formValues.driverSignatureUrl || AvivsHatima}
                xlinkHref={formValues.driverSignatureUrl || AvivsHatima}
                x="1484.22"
                y="405.78"
                width="247"
                height="80"
                preserveAspectRatio="xMidYMid meet"
                style={{ pointerEvents: "none" }}
                className="svg-sign-image"
              />
            )}
          </g>

          {/* === חתימת השוטר - תמונה === */}
          <g>
            <rect
              x="450.22"
              y="420.78"
              width="244.17"
              height="50.09"
              className={`cls-1 svg-sign-clickable ${
                formValues.isOfficerPage2SignedBeidatz ? "is-signed" : ""
              } ${
                validationResults.isOfficerPage2SignedBeidatz === "locked"
    ? "validation-locked"
                  : validationResults.isOfficerPage2SignedBeidatz ===
                    "incorrect"
                  ? "validation-incorrect"
                  : ""
              }`}
              onClick={() => updateField("isOfficerPage2SignedBeidatz", true)}
            />
            {formValues.isOfficerPage2SignedBeidatz && (
              <image
                href={danisHatima}
                xlinkHref={danisHatima}
                x="440.22"
                y="405.78"
                width="264"
                height="80"
                preserveAspectRatio="xMidYMid meet"
                style={{ pointerEvents: "none" }}
                className="svg-sign-image"
              />
            )}
          </g>

          {/* === פירוט הדו"ח - טקסט ארוך מאוד === */}
          <rect
            className="cls-1"
            x="184.13"
            y="1155.65"
            width="1765.57"
            height="807.65"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="184.13" y="1155.65" width="1765.57" height="807.65">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
              style={{ width: "100%", height: "100%" }}
            >
              <textarea
                className={`svg-report-input svg-report-textarea ${
                  validationResults.beidatzReportDetails === "locked"
    ? "validation-locked"
                    : validationResults.beidatzReportDetails === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="פרט את נסיבות המקרה והעבירה בהרחבה..."
                value={formValues.beidatzReportDetails || ""}
                onChange={(e) =>
                  updateField("beidatzReportDetails", e.target.value)
                }
                disabled={validationResults.beidatzReportDetails === "correct"}
                style={{
                  width: "100%",
                  height: "100%",
                  resize: "none",
                  padding: "15px",
                  lineHeight: "1.5",
                }}
              />
            </div>
          </foreignObject>

          {/* === סימון באיקס ראשי === */}
          <rect
            className="cls-1"
            x="979.7"
            y="2084.96"
            width="28.17"
            height="28.17"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="979.7" y="2084.96" width="28.17" height="28.17">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzMainSection === "correct"
                    ? "validation-correct"
                    : ""
                }`}
                type="button"
                onClick={() => {
                  const newValue =
                    formValues.beidatzMainSection === "main" ? "" : "main";
                  updateField("beidatzMainSection", newValue);
                  // אם מורידים את הסימון הראשי, מאפסים את תת-האופציה
                  if (newValue !== "main") {
                    updateField("beidatzSubOption", "");
                  }
                }}
                disabled={validationResults.beidatzMainSection === "correct"}
              >
                {formValues.beidatzMainSection === "main" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* === בחירה שנפתחת אחרי שהם לוחצים על האיקס הקודם === */}
          {formValues.beidatzMainSection === "main" && (
            <g>
              {/* אופציה 1 */}
              <rect
                className="cls-1"
                x="506.26"
                y="2072.22"
                width="58.22"
                height="53.22"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="506.26"
                y="2072.22"
                width="58.22"
                height="53.22"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-checkbox-host"
                >
                  <button
                    className={`svg-x-checkbox ${
                      validationResults.beidatzSubOption === "correct"
                        ? "validation-correct"
                        : ""
                    }`}
                    type="button"
                    onClick={() => {
                      const newValue =
                        formValues.beidatzSubOption === "option1"
                          ? ""
                          : "option1";
                      updateField("beidatzSubOption", newValue);
                    }}
                    disabled={validationResults.beidatzSubOption === "correct"}
                  >
                    {formValues.beidatzSubOption === "option1" ? "×" : ""}
                  </button>
                </div>
              </foreignObject>

              {/* אופציה 2 */}
              <rect
                className="cls-1"
                x="344.26"
                y="2072.22"
                width="58.22"
                height="53.22"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="344.26"
                y="2072.22"
                width="58.22"
                height="53.22"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-checkbox-host"
                >
                  <button
                    className={`svg-x-checkbox ${
                      validationResults.beidatzSubOption === "correct"
                        ? "validation-correct"
                        : ""
                    }`}
                    type="button"
                    onClick={() => {
                      const newValue =
                        formValues.beidatzSubOption === "option2"
                          ? ""
                          : "option2";
                      updateField("beidatzSubOption", newValue);
                    }}
                    disabled={validationResults.beidatzSubOption === "correct"}
                  >
                    {formValues.beidatzSubOption === "option2" ? "×" : ""}
                  </button>
                </div>
              </foreignObject>
            </g>
          )}

          {/* === מספר אישי השוטר - מספרים === */}
          <rect
            className="cls-1"
            x="1564"
            y="2339.87"
            width="225.39"
            height="53.22"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1564" y="2339.87" width="225.39" height="53.22">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className={`svg-report-input svg-report-input-personal-number svg-report-input-small-beidatz ${
                  validationResults.beidatzSecondOfficerPersonalNumber ===
                  "locked"
    ? "validation-locked"
                    : validationResults.beidatzSecondOfficerPersonalNumber ===
                      "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="מספר אישי..."
                value={formValues.beidatzSecondOfficerPersonalNumber || ""}
                onChange={(e) =>
                  updateField(
                    "beidatzSecondOfficerPersonalNumber",
                    e.target.value.replace(/\D/g, "")
                  )
                }
                disabled={
                  validationResults.beidatzSecondOfficerPersonalNumber ===
                  "correct"
                }
              />
            </div>
          </foreignObject>

          {/* === דרגה השוטר - טקסט === */}
          <rect
            className="cls-1"
            x="1424.7"
            y="2339.87"
            width="110.04"
            height="53.22"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1424.7" y="2339.87" width="110.04" height="53.22">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                type="text"
                className={`svg-report-input svg-report-input-small-beidatz ${
                  validationResults.beidatzSecondOfficerRank === "locked"
    ? "validation-locked"
                    : validationResults.beidatzSecondOfficerRank === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="דרגה..."
                value={formValues.beidatzSecondOfficerRank || ""}
                onChange={(e) =>
                  updateField("beidatzSecondOfficerRank", e.target.value)
                }
                disabled={
                  validationResults.beidatzSecondOfficerRank === "correct"
                }
              />
            </div>
          </foreignObject>

          {/* === שם פרטי השוטר - טקסט === */}
          <rect
            className="cls-1"
            x="1185.22"
            y="2339.87"
            width="200.35"
            height="53.22"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1185.22" y="2339.87" width="200.35" height="53.22">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                type="text"
                className={`svg-report-input svg-report-input-small-beidatz ${
                  validationResults.beidatzSecondOfficerFirstName === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzSecondOfficerFirstName ===
                      "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="שם פרטי..."
                value={formValues.beidatzSecondOfficerFirstName || ""}
                onChange={(e) =>
                  updateField("beidatzSecondOfficerFirstName", e.target.value)
                }
                disabled={
                  validationResults.beidatzSecondOfficerFirstName === "correct"
                }
              />
            </div>
          </foreignObject>

          {/* === שם משפחה השוטר - טקסט === */}
          <rect
            className="cls-1"
            x="853.39"
            y="2339.87"
            width="292.7"
            height="53.22"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="853.39" y="2339.87" width="292.7" height="53.22">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                type="text"
                className={`svg-report-input svg-report-input-small-beidatz ${
                  validationResults.beidatzSecondOfficerFamilyName === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzSecondOfficerFamilyName ===
                      "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="שם משפחה..."
                value={formValues.beidatzSecondOfficerFamilyName || ""}
                onChange={(e) =>
                  updateField("beidatzSecondOfficerFamilyName", e.target.value)
                }
                disabled={
                  validationResults.beidatzSecondOfficerFamilyName === "correct"
                }
              />
            </div>
          </foreignObject>

          {/* === חתימת השוטר - תמונה === */}
          <g>
            <rect
              x="609.22"
              y="2339.87"
              width="201.91"
              height="53.22"
              className={`cls-1 svg-sign-clickable ${
                formValues.isSecondOfficerSignedBeidatz ? "is-signed" : ""
              } ${
                validationResults.isSecondOfficerSignedBeidatz === "locked"
    ? "validation-locked"
                  : validationResults.isSecondOfficerSignedBeidatz ===
                    "incorrect"
                  ? "validation-incorrect"
                  : ""
              }`}
              onClick={() => updateField("isSecondOfficerSignedBeidatz", true)}
            />
            {formValues.isSecondOfficerSignedBeidatz && (
              <image
                href={danisHatima}
                xlinkHref={danisHatima}
                x="599.22"
                y="2325.87"
                width="222"
                height="80"
                preserveAspectRatio="xMidYMid meet"
                style={{ pointerEvents: "none" }}
                className="svg-sign-image"
              />
            )}
          </g>
        </g>
      </g>
    </svg>
  );
}

export default BeidatzReportPage2;
