import beidatz3 from "../../../assets/בידצ3.jpg";
import personalNumber from "../../../assets/9494095.png";
import darga from "../../../assets/סמל.png";
import FamilyName from "../../../assets/אשר-לוי.png";
import FirstName from "../../../assets/שיר.png";
import shirsHatima from "../../../assets/shirs-hatima.png";
import distance from "../../../assets/מרחק.png";

function BeidatzReportPage3({
  formValues = {},
  updateField = () => {},
  validationResults = {},
  getValidationClass = () => "",
  isFieldLocked = () => false,
}) {
  const toggleBooleanField = (fieldName) => {
    if (isFieldLocked(fieldName)) return;
    updateField(fieldName, !formValues[fieldName]);
  };

  const getCircleBorderColor = (fieldName) => {
    if (validationResults[fieldName] === "correct") return "#7fbea2";
    if (validationResults[fieldName] === "incorrect") return "#f3b0b7";
    if (validationResults[fieldName] === "locked") return "#b0c4de";

    return "black";
  };

  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2132 3000"
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
          <image width="2132" height="3000" xlinkHref={beidatz3} />

          {/* סימון בקו - 2 אופציות */}
          {/* אופציה 1 */}
          <rect
            className="cls-1"
            x="1110.22"
            y="180.39"
            width="129.91"
            height="50.09"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1110.22" y="180.39" width="129.91" height="50.09">
            <div xmlns="http://www.w3.org/1999/xhtml" className="svg-line-host">
              <button
                className={`svg-line-checkbox ${getValidationClass(
                  "beidatzPage3LineOption"
                )}`}
                type="button"
                onClick={() => {
                  if (isFieldLocked("beidatzPage3LineOption")) return;

                  updateField(
                    "beidatzPage3LineOption",
                    formValues.beidatzPage3LineOption === "option1"
                      ? ""
                      : "option1"
                  );
                }}
                disabled={isFieldLocked("beidatzPage3LineOption")}
              >
                {formValues.beidatzPage3LineOption === "option1" && (
                  <span className="svg-line-mark" />
                )}
              </button>
            </div>
          </foreignObject>

          {/* אופציה 2 */}
          <rect
            className="cls-1"
            x="819.87"
            y="180.39"
            width="282.91"
            height="50.09"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="819.87" y="180.39" width="282.91" height="50.09">
            <div xmlns="http://www.w3.org/1999/xhtml" className="svg-line-host">
              <button
                className={`svg-line-checkbox ${getValidationClass(
                  "beidatzPage3LineOption"
                )}`}
                type="button"
                onClick={() => {
                  if (isFieldLocked("beidatzPage3LineOption")) return;

                  updateField(
                    "beidatzPage3LineOption",
                    formValues.beidatzPage3LineOption === "option2"
                      ? ""
                      : "option2"
                  );
                }}
                disabled={isFieldLocked("beidatzPage3LineOption")}
              >
                {formValues.beidatzPage3LineOption === "option2" && (
                  <span className="svg-line-mark" />
                )}
              </button>
            </div>
          </foreignObject>

          {/* אופציות - בחירה של איקס */}
          {/* אופציה 1 */}
          <rect
            className="cls-1"
            x="1847.43"
            y="258"
            width="30"
            height="27.13"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1847.43" y="258" width="30" height="27.13">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${getValidationClass(
                  "beidatzPage3SelectedOption"
                )}`}
                type="button"
                onClick={() => {
                  if (isFieldLocked("beidatzPage3SelectedOption")) return;

                  const newValue =
                    formValues.beidatzPage3SelectedOption === "option1"
                      ? ""
                      : "option1";

                  updateField("beidatzPage3SelectedOption", newValue);

                  if (newValue !== "option1") {
                    updateField("beidatzPage3Option1Text", "");
                  }

                  if (newValue === "option1") {
                    updateField("beidatzPage3Option2Text", "");
                  }
                }}
                disabled={isFieldLocked("beidatzPage3SelectedOption")}
              >
                {formValues.beidatzPage3SelectedOption === "option1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* נפתח בעקבות סימון אופציה 1 - טקסט*/}
          <rect
            className="cls-1"
            x="1240.13"
            y="230.48"
            width="343.17"
            height="61.17"
            style={{ pointerEvents: "none" }}
          />
          {formValues.beidatzPage3SelectedOption === "option1" && (
            <foreignObject x="1240.13" y="230.48" width="343.17" height="61.17">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                className="svg-input-host"
              >
                <input
                  className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                    "beidatzPage3Option1Text"
                  )}`}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formValues.beidatzPage3Option1Text || ""}
                  onChange={(e) =>
                    updateField(
                      "beidatzPage3Option1Text",
                      e.target.value.replace(/\D/g, "")
                    )
                  }
                  readOnly={isFieldLocked("beidatzPage3Option1Text")}
                />
              </div>
            </foreignObject>
          )}

          {/* אופציה 2 */}
          <rect
            className="cls-1"
            x="1193.74"
            y="261.13"
            width="30"
            height="27.13"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1193.74" y="261.13" width="30" height="27.13">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${getValidationClass(
                  "beidatzPage3SelectedOption"
                )}`}
                type="button"
                onClick={() => {
                  if (isFieldLocked("beidatzPage3SelectedOption")) return;

                  const newValue =
                    formValues.beidatzPage3SelectedOption === "option2"
                      ? ""
                      : "option2";

                  updateField("beidatzPage3SelectedOption", newValue);

                  if (newValue !== "option2") {
                    updateField("beidatzPage3Option2Text", "");
                  }

                  if (newValue === "option2") {
                    updateField("beidatzPage3Option1Text", "");
                  }
                }}
                disabled={isFieldLocked("beidatzPage3SelectedOption")}
              >
                {formValues.beidatzPage3SelectedOption === "option2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* נפתח בעקבות סימון אופציה 2 - טקסט */}
          <rect
            className="cls-1"
            x="707.96"
            y="236.74"
            width="241.43"
            height="61.17"
            style={{ pointerEvents: "none" }}
          />
          {formValues.beidatzPage3SelectedOption === "option2" && (
            <foreignObject x="707.96" y="236.74" width="241.43" height="61.17">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                className="svg-input-host"
              >
                <input
                  className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                    "beidatzPage3Option2Text"
                  )}`}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formValues.beidatzPage3Option2Text || ""}
                  onChange={(e) =>
                    updateField(
                      "beidatzPage3Option2Text",
                      e.target.value.replace(/\D/g, "")
                    )
                  }
                  readOnly={isFieldLocked("beidatzPage3Option2Text")}
                />
              </div>
            </foreignObject>
          )}

          {/* סימון באיקס - אפשר לסמן מספר אופציות */}
          {/* אופציה 1 */}
          <rect
            className="cls-1"
            x="1404.04"
            y="377.28"
            width="30"
            height="27.13"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1404.04" y="377.28" width="30" height="27.13">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${getValidationClass(
                  "beidatzPage3MultiOption1"
                )}`}
                type="button"
                onClick={() => {
                  toggleBooleanField("beidatzPage3MultiOption1");

                  if (formValues.beidatzPage3MultiOption1) {
                    updateField("beidatzPage3MultiOption1Text", "");
                  }
                }}
                disabled={isFieldLocked("beidatzPage3MultiOption1")}
              >
                {formValues.beidatzPage3MultiOption1 ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* נפתח בעקבות סימון אופציה 1 - טקסט */}
          <rect
            className="cls-1"
            x="950.3"
            y="355.7"
            width="311.83"
            height="55.17"
            style={{ pointerEvents: "none" }}
          />
          {formValues.beidatzPage3MultiOption1 && (
            <foreignObject x="950.3" y="355.7" width="311.83" height="55.17">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                className="svg-input-host"
              >
                <input
                  className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                    "beidatzPage3MultiOption1Text"
                  )}`}
                  type="text"
                  value={formValues.beidatzPage3MultiOption1Text || ""}
                  onChange={(e) =>
                    updateField("beidatzPage3MultiOption1Text", e.target.value)
                  }
                  readOnly={isFieldLocked("beidatzPage3MultiOption1Text")}
                />
              </div>
            </foreignObject>
          )}

          {/* אופציה 2 */}
          <rect
            className="cls-1"
            x="901.61"
            y="377.28"
            width="30"
            height="27.13"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="901.61" y="377.28" width="30" height="27.13">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${getValidationClass(
                  "beidatzPage3MultiOption2"
                )}`}
                type="button"
                onClick={() => {
                  toggleBooleanField("beidatzPage3MultiOption2");

                  if (formValues.beidatzPage3MultiOption2) {
                    updateField("beidatzPage3MultiOption2Text", "");
                  }
                }}
                disabled={isFieldLocked("beidatzPage3MultiOption2")}
              >
                {formValues.beidatzPage3MultiOption2 ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* נפתח בעקבות סימון אופציה 2 - טקסט */}
          <rect
            className="cls-1"
            x="653.3"
            y="355.7"
            width="160.39"
            height="55.17"
            style={{ pointerEvents: "none" }}
          />
          {formValues.beidatzPage3MultiOption2 && (
            <foreignObject x="653.3" y="355.7" width="160.39" height="55.17">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                className="svg-input-host"
              >
                <input
                  className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                    "beidatzPage3MultiOption2Text"
                  )}`}
                  type="text"
                  value={formValues.beidatzPage3MultiOption2Text || ""}
                  onChange={(e) =>
                    updateField("beidatzPage3MultiOption2Text", e.target.value)
                  }
                  readOnly={isFieldLocked("beidatzPage3MultiOption2Text")}
                />
              </div>
            </foreignObject>
          )}

          {/* אופציה 3 */}
          <rect
            className="cls-1"
            x="609.3"
            y="381.98"
            width="30"
            height="27.13"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="609.3" y="381.98" width="30" height="27.13">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className="svg-x-checkbox"
                type="button"
                onClick={() => {
                  toggleBooleanField("beidatzPage3MultiOption3");

                  if (formValues.beidatzPage3MultiOption3) {
                    updateField("beidatzPage3MultiOption3Text", "");
                  }
                }}
                disabled={isFieldLocked("beidatzPage3MultiOption3")}
              >
                {formValues.beidatzPage3MultiOption3 ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* נפתח בעקבות סימון אופציה 3 - טקסט */}
          <rect
            className="cls-1"
            x="174.35"
            y="363.26"
            width="341.17"
            height="55.17"
            style={{ pointerEvents: "none" }}
          />
          {formValues.beidatzPage3MultiOption3 && (
            <foreignObject x="174.35" y="363.26" width="341.17" height="55.17">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                className="svg-input-host"
              >
                <input
                  className={`svg-report-input svg-report-input-small-beidatz ${getValidationClass(
                    "beidatzPage3MultiOption3Text"
                  )}`}
                  type="text"
                  value={formValues.beidatzPage3MultiOption3Text || ""}
                  onChange={(e) =>
                    updateField("beidatzPage3MultiOption3Text", e.target.value)
                  }
                  readOnly={isFieldLocked("beidatzPage3MultiOption3Text")}
                />
              </div>
            </foreignObject>
          )}

          {/* האם זיהית את העבירה בעצמך? - בחירה של איקס */}
          {/* אופציה 1 - כן */}
          <rect
            className="cls-1"
            x="1327.52"
            y="423.13"
            width="54.39"
            height="54.39"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1327.52" y="423.13" width="54.39" height="54.39">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${getValidationClass(
                  "beidatzIdentifiedOffense"
                )}`}
                type="button"
                onClick={() => {
                  if (isFieldLocked("beidatzIdentifiedOffense")) return;

                  updateField(
                    "beidatzIdentifiedOffense",
                    formValues.beidatzIdentifiedOffense === "yes" ? "" : "yes"
                  );
                }}
                disabled={isFieldLocked("beidatzIdentifiedOffense")}
              >
                {formValues.beidatzIdentifiedOffense === "yes" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אופציה 2 - לא */}
          <rect
            className="cls-1"
            x="1207.74"
            y="424.7"
            width="54.39"
            height="54.39"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1207.74" y="424.7" width="54.39" height="54.39">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${getValidationClass(
                  "beidatzIdentifiedOffense"
                )}`}
                type="button"
                onClick={() => {
                  if (isFieldLocked("beidatzIdentifiedOffense")) return;

                  updateField(
                    "beidatzIdentifiedOffense",
                    formValues.beidatzIdentifiedOffense === "no" ? "" : "no"
                  );
                }}
                disabled={isFieldLocked("beidatzIdentifiedOffense")}
              >
                {formValues.beidatzIdentifiedOffense === "no" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אופן סימון עצירת הרכב - דרופדאון */}
          <rect
            className="cls-1"
            x="869.7"
            y="486.65"
            width="365.24"
            height="46.96"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="869.7" y="486.65" width="365.24" height="46.96">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-select-host"
            >
              <select
                className={`svg-report-select svg-report-select-beidatz ${getValidationClass(
                  "beidatzStopSignalMethod"
                )}`}
                value={formValues.beidatzStopSignalMethod || ""}
                onChange={(e) =>
                  updateField("beidatzStopSignalMethod", e.target.value)
                }
                disabled={isFieldLocked("beidatzStopSignalMethod")}
              >
                <option value="">בחר...</option>
                <option value="method1">סימון עם היד</option>
                <option value="method2">נפנוף בכומתה</option>
                <option value="method3">צ'קלקה</option>
                <option value="method4">הבהוב אורות</option>
              </select>
            </div>
          </foreignObject>

          {/* עצירת הרכב - בחירה של עיגול */}
          {/* אופציה 1 */}
          <rect
            className="cls-1"
            x="185.7"
            y="496.04"
            width="176.87"
            height="54.78"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject
            x="185.7"
            y="496.04"
            width="176.87"
            height="54.78"
            style={{ overflow: "visible" }}
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                className={`svg-circle-checkbox ${getValidationClass(
                  "beidatzVehicleStopOption"
                )}`}
                style={{
                  width: "150px",
                  height: "54px",
                  flexShrink: 0,
                  cursor: isFieldLocked("beidatzVehicleStopOption")
                    ? "not-allowed"
                    : "pointer",
                  background: "transparent",
                  borderRadius: "50%",
                  boxSizing: "border-box",
                  border:
                    formValues.beidatzVehicleStopOption === "stop1"
                      ? `6px solid ${getCircleBorderColor(
                          "beidatzVehicleStopOption"
                        )}`
                      : "none",
                }}
                type="button"
                onClick={() => {
                  if (isFieldLocked("beidatzVehicleStopOption")) return;

                  updateField(
                    "beidatzVehicleStopOption",
                    formValues.beidatzVehicleStopOption === "stop1"
                      ? ""
                      : "stop1"
                  );
                }}
                disabled={isFieldLocked("beidatzVehicleStopOption")}
              />
            </div>
          </foreignObject>

          {/* אופציה 2 */}
          <rect
            className="cls-1"
            x="1789"
            y="543"
            width="134.09"
            height="54.78"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject
            x="1789"
            y="543"
            width="134.09"
            height="54.78"
            style={{ overflow: "visible" }}
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                className={`svg-circle-checkbox ${getValidationClass(
                  "beidatzVehicleStopOption"
                )}`}
                style={{
                  width: "132px",
                  height: "54px",
                  flexShrink: 0,
                  cursor: isFieldLocked("beidatzVehicleStopOption")
                    ? "not-allowed"
                    : "pointer",
                  background: "transparent",
                  borderRadius: "50%",
                  boxSizing: "border-box",
                  border:
                    formValues.beidatzVehicleStopOption === "stop2"
                      ? `6px solid ${getCircleBorderColor(
                          "beidatzVehicleStopOption"
                        )}`
                      : "none",
                }}
                type="button"
                onClick={() => {
                  if (isFieldLocked("beidatzVehicleStopOption")) return;

                  updateField(
                    "beidatzVehicleStopOption",
                    formValues.beidatzVehicleStopOption === "stop2"
                      ? ""
                      : "stop2"
                  );
                }}
                disabled={isFieldLocked("beidatzVehicleStopOption")}
              />
            </div>
          </foreignObject>

          {/* אופציה 3 */}
          <rect
            className="cls-1"
            x="1527.09"
            y="543"
            width="242.61"
            height="54.78"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject
            x="1527.09"
            y="543"
            width="242.61"
            height="54.78"
            style={{ overflow: "visible" }}
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                className={`svg-circle-checkbox ${getValidationClass(
                  "beidatzVehicleStopOption"
                )}`}
                style={{
                  width: "210px",
                  height: "54px",
                  flexShrink: 0,
                  cursor: isFieldLocked("beidatzVehicleStopOption")
                    ? "not-allowed"
                    : "pointer",
                  background: "transparent",
                  borderRadius: "50%",
                  boxSizing: "border-box",
                  border:
                    formValues.beidatzVehicleStopOption === "stop3"
                      ? `6px solid ${getCircleBorderColor(
                          "beidatzVehicleStopOption"
                        )}`
                      : "none",
                }}
                type="button"
                onClick={() => {
                  if (isFieldLocked("beidatzVehicleStopOption")) return;

                  updateField(
                    "beidatzVehicleStopOption",
                    formValues.beidatzVehicleStopOption === "stop3"
                      ? ""
                      : "stop3"
                  );
                }}
                disabled={isFieldLocked("beidatzVehicleStopOption")}
              />
            </div>
          </foreignObject>

          {/* פירוט אופן עצירת הרכב - טקסט */}
          <rect
            className="cls-1"
            x="173.17"
            y="649.04"
            width="1596.52"
            height="78.65"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="173.17" y="649.04" width="1596.52" height="78.65">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-textarea-host"
            >
              <textarea
                className={`svg-report-textarea ${getValidationClass(
                  "beidatzStopDetails"
                )}`}
                placeholder="פירוט אופן עצירת הרכב..."
                value={formValues.beidatzStopDetails || ""}
                onChange={(e) =>
                  updateField("beidatzStopDetails", e.target.value)
                }
                readOnly={isFieldLocked("beidatzStopDetails")}
              />
            </div>
          </foreignObject>

          {/* ממולא מראש בדו"ח */}
          <image
            width="726"
            height="369"
            transform="translate(243.62 730.43) scale(.16)"
            xlinkHref={shirsHatima}
          />
          <image
            width="153"
            height="36"
            transform="translate(680.28 738.65) scale(.7)"
            xlinkHref={FamilyName}
          />
          <image
            width="68"
            height="29"
            transform="translate(1041.66 742.91) scale(.72)"
            xlinkHref={FirstName}
          />
          <image
            width="83"
            height="36"
            transform="translate(1286.24 739.03) scale(.63)"
            xlinkHref={darga}
          />
          <image
            width="243"
            height="34"
            transform="translate(1505.28 737.04) scale(.6)"
            xlinkHref={personalNumber}
          />
          <image
            width="90"
            height="17"
            transform="translate(1217.49 313.61) scale(2.11)"
            xlinkHref={distance}
          />
        </g>
      </g>
    </svg>
  );
}

export default BeidatzReportPage3;
