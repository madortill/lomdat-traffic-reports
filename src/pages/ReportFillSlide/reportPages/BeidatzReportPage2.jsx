import beidatz2 from "../../../assets/בידצ2.jpg";
import danisHatima from "../../../assets/danis-hatima.png";
import AvivsHatima from "../../../assets/Avivs-hatima.png";

function BeidatzReportPage2({
  formValues = {},
  updateField = () => {},
  validationResults = {},
  getValidationClass = () => "",
  isFieldLocked = () => false,
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
                className={`svg-report-input svg-report-textarea ${getValidationClass(
                  "beidatzDriverResponse"
                )}`}
                placeholder="הקלד את תגובת מקבל הדו''ח כאן..."
                value={formValues.beidatzDriverResponse || ""}
                onChange={(e) =>
                  updateField("beidatzDriverResponse", e.target.value)
                }
                disabled={isFieldLocked("beidatzDriverResponse")}
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
              } ${getValidationClass("isDriverSignedBeidatz")}`}
              onClick={() => {
                if (isFieldLocked("isDriverSignedBeidatz")) return;
                updateField("isDriverSignedBeidatz", true);
              }}
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
              } ${getValidationClass("isOfficerPage2SignedBeidatz")}`}
              onClick={() => {
                if (isFieldLocked("isOfficerPage2SignedBeidatz")) return;
                updateField("isOfficerPage2SignedBeidatz", true);
              }}
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
                className={`svg-report-input svg-report-textarea ${getValidationClass(
                  "beidatzReportDetails"
                )}`}
                placeholder="פרט את נסיבות המקרה והעבירה בהרחבה..."
                value={formValues.beidatzReportDetails || ""}
                onChange={(e) =>
                  updateField("beidatzReportDetails", e.target.value)
                }
                disabled={isFieldLocked("beidatzReportDetails")}
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
                className={`svg-x-checkbox ${getValidationClass(
                  "beidatzMainSection"
                )}`}
                type="button"
                onClick={() => {
                  if (isFieldLocked("beidatzMainSection")) return;

                  const newValue =
                    formValues.beidatzMainSection === "main" ? "" : "main";
                  updateField("beidatzMainSection", newValue);
                  // אם מורידים את הסימון הראשי, מאפסים את תת-האופציה
                  if (newValue !== "main") {
                    updateField("beidatzSubOption", "");
                  }
                }}
                disabled={isFieldLocked("beidatzMainSection")}
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
                    className={`svg-x-checkbox ${getValidationClass(
                      "beidatzSubOption"
                    )}`}
                    type="button"
                    onClick={() => {
                      if (isFieldLocked("beidatzSubOption")) return;

                      const newValue =
                        formValues.beidatzSubOption === "option1"
                          ? ""
                          : "option1";
                      updateField("beidatzSubOption", newValue);
                    }}
                    disabled={isFieldLocked("beidatzSubOption")}
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
                    className={`svg-x-checkbox ${getValidationClass(
                      "beidatzSubOption"
                    )}`}
                    type="button"
                    onClick={() => {
                      if (isFieldLocked("beidatzSubOption")) return;

                      const newValue =
                        formValues.beidatzSubOption === "option2"
                          ? ""
                          : "option2";
                      updateField("beidatzSubOption", newValue);
                    }}
                    disabled={isFieldLocked("beidatzSubOption")}
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
                className={`svg-report-input svg-report-input-personal-number svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzSecondOfficerPersonalNumber"
                )}`}
                placeholder="מספר אישי..."
                value={formValues.beidatzSecondOfficerPersonalNumber || ""}
                onChange={(e) =>
                  updateField(
                    "beidatzSecondOfficerPersonalNumber",
                    e.target.value.replace(/\D/g, "")
                  )
                }
                disabled={isFieldLocked("beidatzSecondOfficerPersonalNumber")}
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
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzSecondOfficerRank"
                )}`}
                placeholder="דרגה..."
                value={formValues.beidatzSecondOfficerRank || ""}
                onChange={(e) =>
                  updateField("beidatzSecondOfficerRank", e.target.value)
                }
                disabled={isFieldLocked("beidatzSecondOfficerRank")}
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
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzSecondOfficerFirstName"
                )}`}
                placeholder="שם פרטי..."
                value={formValues.beidatzSecondOfficerFirstName || ""}
                onChange={(e) =>
                  updateField("beidatzSecondOfficerFirstName", e.target.value)
                }
                disabled={isFieldLocked("beidatzSecondOfficerFirstName")}
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
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzSecondOfficerFamilyName"
                )}`}
                placeholder="שם משפחה..."
                value={formValues.beidatzSecondOfficerFamilyName || ""}
                onChange={(e) =>
                  updateField("beidatzSecondOfficerFamilyName", e.target.value)
                }
                disabled={isFieldLocked("beidatzSecondOfficerFamilyName")}
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
              } ${getValidationClass("isSecondOfficerSignedBeidatz")}`}
              onClick={() => {
                if (isFieldLocked("isSecondOfficerSignedBeidatz")) return;
                updateField("isSecondOfficerSignedBeidatz", true);
              }}
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
