import beidatz2 from "../../../assets/בידצ2.jpg";
import danisHatima from "../../../assets/danis-hatima.png";
import AvivsHatima from "../../../assets/Avivs-hatima.png";
import Text from "../../../assets/beidatz-2-text-format.png";

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

          {/* פירוט הדוח בתוך הפורמט - טקסט ללא בדיקה אוטומטית */}
          <rect
            className="cls-1"
            x="1533.3"
            y="1152.91"
            width="290.89"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1533.3" y="1152.91" width="290.89" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail1"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail1 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail1", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail1")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="776.11"
            y="1152.91"
            width="290.89"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="776.11" y="1152.91" width="290.89" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail2"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail2 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail2", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail2")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="344.11"
            y="1152.91"
            width="290.89"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="344.11" y="1152.91" width="290.89" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail3"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail3 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail3", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail3")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="1453.46"
            y="1205.74"
            width="290.89"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1453.46" y="1205.74" width="290.89" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail4"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail4 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail4", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail4")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="954.54"
            y="1205.74"
            width="290.89"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="954.54" y="1205.74" width="290.89" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail5"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail5 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail5", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail5")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="565.98"
            y="1205.74"
            width="290.89"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="565.98" y="1205.74" width="290.89" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail6"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail6 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail6", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail6")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="1574"
            y="1258.57"
            width="186.78"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1574" y="1258.57" width="186.78" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail7"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail7 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail7", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail7")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="1335.7"
            y="1258.57"
            width="144.52"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1335.7" y="1258.57" width="144.52" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail8"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail8 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail8", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail8")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="1489.48"
            y="1311.39"
            width="163.3"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1489.48" y="1311.39" width="163.3" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail9"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail9 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail9", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail9")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="1049.26"
            y="1311.39"
            width="163.3"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1049.26" y="1311.39" width="163.3" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail10"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail10 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail10", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail10")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="719.57"
            y="1313.39"
            width="206.61"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="719.57" y="1313.39" width="206.61" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail11"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail11 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail11", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail11")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="1396.74"
            y="1469.87"
            width="267.83"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1396.74" y="1469.87" width="267.83" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail12"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail12 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail12", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail12")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="1538.48"
            y="1576.35"
            width="267.83"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1538.48" y="1576.35" width="267.83" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail13"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail13 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail13", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail13")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="949.48"
            y="1576.35"
            width="284.42"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="949.48" y="1576.35" width="284.42" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail14"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail14 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail14", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail14")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="321.83"
            y="1419.7"
            width="203.03"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="321.83" y="1419.7" width="203.03" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail15"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail15 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail15", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail15")}
              />
            </div>
          </foreignObject>

          <rect
            className="cls-1"
            x="1249.22"
            y="1779.43"
            width="247.77"
            height="42.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1249.22" y="1779.43" width="247.77" height="42.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                  "beidatzPage2ReportDetail16"
                )}`}
                type="text"
                value={formValues.beidatzPage2ReportDetail16 || ""}
                onChange={(e) =>
                  updateField("beidatzPage2ReportDetail16", e.target.value)
                }
                readOnly={isFieldLocked("beidatzPage2ReportDetail16")}
              />
            </div>
          </foreignObject>

          {/* נתון בדוח מראש */}
          <image
            width="1750"
            height="710"
            transform="translate(192 1161.65)"
            xlinkHref={Text}
            style={{ pointerEvents: "none" }}
          />
        </g>
      </g>
    </svg>
  );
}

export default BeidatzReportPage2;
