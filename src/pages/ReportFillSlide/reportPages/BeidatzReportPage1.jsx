import personalNumber from "../../../assets/9494095.png";
import darga from "../../../assets/סמל.png";
import FamilyName from "../../../assets/אשר-לוי.png";
import FirstName from "../../../assets/שיר.png";
import shirsHatima from "../../../assets/shirs-hatima.png";
import beidatzPaper from "../../../assets/בידצ1.jpg";

function BeidatzReportPage1({
  formValues,
  updateField,
  validationResults = {},
}) {
  const renderNumberOptions = (from, to) => {
    return Array.from({ length: to - from + 1 }, (_, index) => {
      const value = from + index;

      return (
        <option key={value} value={value}>
          {value}
        </option>
      );
    });
  };

  const weekDays = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];

  const renderOptions = (options) => {
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  const hourOptions = Array.from({ length: 24 }, (_, index) =>
    String(index).padStart(2, "0")
  );

  const minuteOptions = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];

  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2129 3000"
    >
      <defs>
        <style>
          {`
            .cls-1, .cls-2, .cls-3 {
              fill: none;
            }

            .cls-2 {
              stroke-width: 4px;
            }

            .cls-2, .cls-3 {
              stroke: #000;
              stroke-miterlimit: 10;
            }

            .cls-3 {
              stroke-width: 3px;
            }
          `}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer_1">
        <g>
          <image width="2129" height="3000" xlinkHref={beidatzPaper} />

          {/* סוג שירות - בחירה של איקס */}
          {/* אפשרות 1 */}
          <rect
            className="cls-1"
            x="1357.59"
            y="262.5"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1357.59" y="262.5" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.serviceType === "correct"
                    ? "validation-correct"
                    : validationResults.serviceType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "serviceType",
                    formValues.serviceType === "type1" ? "" : "type1"
                  )
                }
                disabled={validationResults.serviceType === "correct"}
              >
                {formValues.serviceType === "type1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 2 */}
          <rect
            className="cls-1"
            x="1180.72"
            y="262.5"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1180.72" y="262.5" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.serviceType === "correct"
                    ? "validation-correct"
                    : validationResults.serviceType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "serviceType",
                    formValues.serviceType === "type2" ? "" : "type2"
                  )
                }
                disabled={validationResults.serviceType === "correct"}
              >
                {formValues.serviceType === "type2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 3 */}
          <rect
            className="cls-1"
            x="1002.8"
            y="262.5"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1002.8" y="262.5" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.serviceType === "correct"
                    ? "validation-correct"
                    : validationResults.serviceType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "serviceType",
                    formValues.serviceType === "type3" ? "" : "type3"
                  )
                }
                disabled={validationResults.serviceType === "correct"}
              >
                {formValues.serviceType === "type3" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 4 */}
          <rect
            className="cls-1"
            x="802.46"
            y="262.5"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="802.46" y="262.5" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.serviceType === "correct"
                    ? "validation-correct"
                    : validationResults.serviceType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "serviceType",
                    formValues.serviceType === "type4" ? "" : "type4"
                  )
                }
                disabled={validationResults.serviceType === "correct"}
              >
                {formValues.serviceType === "type4" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 5 */}
          <rect
            className="cls-1"
            x="577.07"
            y="262.5"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="577.07" y="262.5" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.serviceType === "correct"
                    ? "validation-correct"
                    : validationResults.serviceType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "serviceType",
                    formValues.serviceType === "type5" ? "" : "type5"
                  )
                }
                disabled={validationResults.serviceType === "correct"}
              >
                {formValues.serviceType === "type5" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* מספר אישי - טקסט מספרים */}
          <rect
            className="cls-1"
            x="1554.54"
            y="365.48"
            width="336"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1554.54" y="359.48" width="336" height="50.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-personal-number svg-report-input-small-beidatz ${
                  validationResults.beidatzPersonalNumber === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzPersonalNumber === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="text"
                inputMode="numeric"
                value={formValues.beidatzPersonalNumber || ""}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, "");
                  updateField("beidatzPersonalNumber", onlyNumbers);
                }}
                disabled={validationResults.beidatzPersonalNumber === "correct"}
              />
            </div>
          </foreignObject>

          {/* דרגה - טקסט */}
          <rect
            className="cls-1"
            x="1337.89"
            y="382.7"
            width="204.78"
            height="28.83"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1337.89" y="377.48" width="204.78" height="45.09">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${
                  validationResults.beidatzRank === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzRank === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="text"
                value={formValues.beidatzRank || ""}
                onChange={(e) => updateField("beidatzRank", e.target.value)}
                disabled={validationResults.beidatzRank === "correct"}
              />
            </div>
          </foreignObject>

          {/* שם משפחה - טקסט */}
          <rect
            className="cls-1"
            x="997.98"
            y="377.48"
            width="333.91"
            height="45.09"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="997.98" y="377.48" width="333.91" height="45.09">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${
                  validationResults.beidatzLastName === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzLastName === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="text"
                value={formValues.beidatzLastName || ""}
                onChange={(e) => updateField("beidatzLastName", e.target.value)}
                disabled={validationResults.beidatzLastName === "correct"}
              />
            </div>
          </foreignObject>

          {/* שם פרטי - טקסט */}
          <rect
            className="cls-1"
            x="694.52"
            y="377.48"
            width="297.91"
            height="45.09"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="694.52" y="377.48" width="297.91" height="45.09">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${
                  validationResults.beidatzFirstName === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzFirstName === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="text"
                value={formValues.beidatzFirstName || ""}
                onChange={(e) =>
                  updateField("beidatzFirstName", e.target.value)
                }
                disabled={validationResults.beidatzFirstName === "correct"}
              />
            </div>
          </foreignObject>

          {/* חיל - טקסט */}
          <rect
            className="cls-1"
            x="454"
            y="377.48"
            width="241.83"
            height="45.09"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="454" y="377.48" width="241.83" height="45.09">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${
                  validationResults.beidatzCorps === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzCorps === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="text"
                value={formValues.beidatzCorps || ""}
                onChange={(e) => updateField("beidatzCorps", e.target.value)}
                disabled={validationResults.beidatzCorps === "correct"}
              />
            </div>
          </foreignObject>

          {/* יחידה - טקסט */}
          <rect
            className="cls-1"
            x="149.29"
            y="377.48"
            width="298.65"
            height="45.09"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="149.29" y="377.48" width="298.65" height="45.09">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${
                  validationResults.beidatzUnit === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="text"
                value={formValues.beidatzUnit || ""}
                onChange={(e) => updateField("beidatzUnit", e.target.value)}
                disabled={validationResults.beidatzUnit === "correct"}
              />
            </div>
          </foreignObject>

          {/* כתובת אזרחית - טקסט */}
          <rect
            className="cls-1"
            x="1138.07"
            y="444.78"
            width="820.04"
            height="45.2"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1138.07" y="444.78" width="820.04" height="45.2">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${
                  validationResults.beidatzAddress === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzAddress === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="text"
                value={formValues.beidatzAddress || ""}
                onChange={(e) => updateField("beidatzAddress", e.target.value)}
                disabled={validationResults.beidatzAddress === "correct"}
              />
            </div>
          </foreignObject>

          {/* תעודת זהות - טקסט מספרים */}
          <rect
            className="cls-1"
            x="623.83"
            y="429.43"
            width="440.67"
            height="49.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="623.83" y="429.43" width="440.67" height="49.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-personal-number svg-report-input-small-beidatz ${
                  validationResults.beidatzIdNumber === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzIdNumber === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="text"
                inputMode="numeric"
                value={formValues.beidatzIdNumber || ""}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, "");
                  updateField("beidatzIdNumber", onlyNumbers);
                }}
                disabled={validationResults.beidatzIdNumber === "correct"}
              />
            </div>
          </foreignObject>

          {/* טלפון נייד - טקסט מספרים */}
          <rect
            className="cls-1"
            x="149.29"
            y="442.8"
            width="468.67"
            height="44.39"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="149.29" y="442.8" width="468.67" height="44.39">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small-beidatz ${
                  validationResults.beidatzPhoneNumber === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzPhoneNumber === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="text"
                inputMode="numeric"
                value={formValues.beidatzPhoneNumber || ""}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, "");
                  updateField("beidatzPhoneNumber", onlyNumbers);
                }}
                disabled={validationResults.beidatzPhoneNumber === "correct"}
              />
            </div>
          </foreignObject>

          {/* תאריך - דרופדאון מספרים */}
          {/* שנה */}
          <rect
            className="cls-1"
            x="1130.14"
            y="520.37"
            width="144.82"
            height="66.52"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1130.14" y="520.37" width="144.82" height="66.52">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className={`svg-report-select ${
                  validationResults.beidatzYear === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzYear === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                value={formValues.beidatzYear || ""}
                onChange={(e) => updateField("beidatzYear", e.target.value)}
                disabled={validationResults.beidatzYear === "correct"}
              >
                <option value="">שנה</option>
                {renderNumberOptions(2025, 2026, false)}
              </select>
            </div>
          </foreignObject>

          {/* חודש */}
          <rect
            className="cls-1"
            x="978.32"
            y="520.37"
            width="144.82"
            height="66.52"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="978.32" y="520.37" width="144.82" height="66.52">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className={`svg-report-select ${
                  validationResults.beidatzMonth === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzMonth === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                value={formValues.beidatzMonth || ""}
                onChange={(e) => updateField("beidatzMonth", e.target.value)}
                disabled={validationResults.beidatzMonth === "correct"}
              >
                <option value="">חודש</option>
                {renderNumberOptions(1, 12, true)}{" "}
                {/* true יגרום להצגה כ-01, 02... */}
              </select>
            </div>
          </foreignObject>

          {/* יום */}
          <rect
            className="cls-1"
            x="826.66"
            y="520.37"
            width="144.82"
            height="66.52"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="826.66" y="520.37" width="144.82" height="66.52">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className={`svg-report-select ${
                  validationResults.beidatzDay === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzDay === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                value={formValues.beidatzDay || ""}
                onChange={(e) => updateField("beidatzDay", e.target.value)}
                disabled={validationResults.beidatzDay === "correct"}
              >
                <option value="">יום</option>
                {renderNumberOptions(1, 31, true)}{" "}
                {/* true יגרום להצגה כ-01, 02... */}
              </select>
            </div>
          </foreignObject>

          {/* יום בשבוע - דרופדאון ימים */}
          <rect
            className="cls-1"
            x="605.83"
            y="547.41"
            width="192.22"
            height="79.39"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="605.83" y="547.41" width="192.22" height="79.39">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className={`svg-report-select ${
                  validationResults.beidatzWeekDay === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzWeekDay === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                value={formValues.beidatzWeekDay || ""}
                onChange={(e) => updateField("beidatzWeekDay", e.target.value)}
                disabled={validationResults.beidatzWeekDay === "correct"}
              >
                <option value="">יום</option>
                {renderOptions(weekDays)}
              </select>
            </div>
          </foreignObject>

          {/* שעה - דרופדאון שעות */}
          {/* דקה */}
          <rect
            className="cls-1"
            x="350.84"
            y="522.37"
            width="144.82"
            height="66.52"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="350.84" y="522.37" width="144.82" height="66.52">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className={`svg-report-select svg-report-select-time ${
                  validationResults.beidatzMinute === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzMinute === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                value={formValues.beidatzMinute || ""}
                onChange={(e) => updateField("beidatzMinute", e.target.value)}
                disabled={validationResults.beidatzMinute === "correct"}
              >
                <option value="">דקה</option>
                {renderOptions(minuteOptions)}
              </select>
            </div>
          </foreignObject>

          {/* שעה */}
          <rect
            className="cls-1"
            x="176.32"
            y="522.37"
            width="144.82"
            height="66.52"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="176.32" y="522.37" width="144.82" height="66.52">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className={`svg-report-select svg-report-select-time ${
                  validationResults.beidatzHour === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzHour === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                value={formValues.beidatzHour || ""}
                onChange={(e) => updateField("beidatzHour", e.target.value)}
                disabled={validationResults.beidatzHour === "correct"}
              >
                <option value="">שעה</option>
                {renderOptions(hourOptions)}
              </select>
            </div>
          </foreignObject>

          {/* סוג הרכב - בחירה של איקס */}
          {/* אפשרות 1 */}
          <rect
            className="cls-1"
            x="525.85"
            y="714.96"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="525.85" y="714.96" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzVehicleType === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzVehicleType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzVehicleType",
                    formValues.beidatzVehicleType === "type1" ? "" : "type1"
                  )
                }
                disabled={validationResults.beidatzVehicleType === "correct"}
              >
                {formValues.beidatzVehicleType === "type1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 2 */}
          <rect
            className="cls-1"
            x="324.13"
            y="721.28"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="324.13" y="721.28" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzVehicleType === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzVehicleType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzVehicleType",
                    formValues.beidatzVehicleType === "type2" ? "" : "type2"
                  )
                }
                disabled={validationResults.beidatzVehicleType === "correct"}
              >
                {formValues.beidatzVehicleType === "type2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* יחידת השיטור - בחירה של איקס */}
          {/* אפשרות 1 */}
          <rect
            className="cls-1"
            x="1560.8"
            y="1661.07"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1560.8" y="1661.07" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzPoliceUnit === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzPoliceUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzPoliceUnit",
                    formValues.beidatzPoliceUnit === "unit1" ? "" : "unit1"
                  )
                }
                disabled={validationResults.beidatzPoliceUnit === "correct"}
              >
                {formValues.beidatzPoliceUnit === "unit1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 2 */}
          <rect
            className="cls-1"
            x="1364.37"
            y="1664.2"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1364.37" y="1664.2" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzPoliceUnit === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzPoliceUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzPoliceUnit",
                    formValues.beidatzPoliceUnit === "unit2" ? "" : "unit2"
                  )
                }
                disabled={validationResults.beidatzPoliceUnit === "correct"}
              >
                {formValues.beidatzPoliceUnit === "unit2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 3 */}
          <rect
            className="cls-1"
            x="1165.59"
            y="1664.2"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1165.59" y="1664.2" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzPoliceUnit === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzPoliceUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzPoliceUnit",
                    formValues.beidatzPoliceUnit === "unit3" ? "" : "unit3"
                  )
                }
                disabled={validationResults.beidatzPoliceUnit === "correct"}
              >
                {formValues.beidatzPoliceUnit === "unit3" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 4 */}
          <rect
            className="cls-1"
            x="966.91"
            y="1665.2"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="966.91" y="1665.2" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzPoliceUnit === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzPoliceUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzPoliceUnit",
                    formValues.beidatzPoliceUnit === "unit4" ? "" : "unit4"
                  )
                }
                disabled={validationResults.beidatzPoliceUnit === "correct"}
              >
                {formValues.beidatzPoliceUnit === "unit4" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 5 */}
          <rect
            className="cls-1"
            x="784.3"
            y="1663.2"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="784.3" y="1663.2" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzPoliceUnit === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzPoliceUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzPoliceUnit",
                    formValues.beidatzPoliceUnit === "unit5" ? "" : "unit5"
                  )
                }
                disabled={validationResults.beidatzPoliceUnit === "correct"}
              >
                {formValues.beidatzPoliceUnit === "unit5" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 6 */}
          <rect
            className="cls-1"
            x="593.87"
            y="1663.2"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="593.87" y="1663.2" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzPoliceUnit === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzPoliceUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzPoliceUnit",
                    formValues.beidatzPoliceUnit === "unit6" ? "" : "unit6"
                  )
                }
                disabled={validationResults.beidatzPoliceUnit === "correct"}
              >
                {formValues.beidatzPoliceUnit === "unit6" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* דרך מסירה - בחירה של איקס */}
          {/* אפשרות 1 */}
          <rect
            className="cls-1"
            x="1895.98"
            y="1778.46"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1895.98" y="1778.46" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzDeliveryMethod === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzDeliveryMethod === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzDeliveryMethod",
                    formValues.beidatzDeliveryMethod === "method1"
                      ? ""
                      : "method1"
                  )
                }
                disabled={validationResults.beidatzDeliveryMethod === "correct"}
              >
                {formValues.beidatzDeliveryMethod === "method1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 2 */}
          <rect
            className="cls-1"
            x="1669.02"
            y="1778.46"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1669.02" y="1778.46" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzDeliveryMethod === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzDeliveryMethod === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzDeliveryMethod",
                    formValues.beidatzDeliveryMethod === "method2"
                      ? ""
                      : "method2"
                  )
                }
                disabled={validationResults.beidatzDeliveryMethod === "correct"}
              >
                {formValues.beidatzDeliveryMethod === "method2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* במסגרת פעילות - בחירה של איקס */}
          {/* אופציה 1 */}
          <rect
            className="cls-1"
            x="1165.59"
            y="1844.2"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1165.59" y="1844.2" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzActivityFramework === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzActivityFramework === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzActivityFramework",
                    formValues.beidatzActivityFramework === "opt1" ? "" : "opt1"
                  )
                }
                disabled={
                  validationResults.beidatzActivityFramework === "correct"
                }
              >
                {formValues.beidatzActivityFramework === "opt1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אופציה 2 */}
          <rect
            className="cls-1"
            x="923.15"
            y="1783.33"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="923.15" y="1783.33" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzActivityFramework === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzActivityFramework === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzActivityFramework",
                    formValues.beidatzActivityFramework === "opt2" ? "" : "opt2"
                  )
                }
                disabled={
                  validationResults.beidatzActivityFramework === "correct"
                }
              >
                {formValues.beidatzActivityFramework === "opt2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אופציה 3 */}
          <rect
            className="cls-1"
            x="923.15"
            y="1844.2"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="923.15" y="1844.2" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzActivityFramework === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzActivityFramework === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzActivityFramework",
                    formValues.beidatzActivityFramework === "opt3" ? "" : "opt3"
                  )
                }
                disabled={
                  validationResults.beidatzActivityFramework === "correct"
                }
              >
                {formValues.beidatzActivityFramework === "opt3" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אופציה 4 */}
          <rect
            className="cls-1"
            x="673.64"
            y="1783.33"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="673.64" y="1783.33" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzActivityFramework === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzActivityFramework === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "beidatzActivityFramework",
                    formValues.beidatzActivityFramework === "opt4" ? "" : "opt4"
                  )
                }
                disabled={
                  validationResults.beidatzActivityFramework === "correct"
                }
              >
                {formValues.beidatzActivityFramework === "opt4" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אופציה 5 */}
          <rect
            className="cls-1"
            x="673.64"
            y="1844.2"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="673.64" y="1844.2" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzActivityFramework === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzActivityFramework === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() => {
                  const newValue =
                    formValues.beidatzActivityFramework === "opt5"
                      ? ""
                      : "opt5";
                  updateField("beidatzActivityFramework", newValue);
                  // אם מורידים את הסימון, מאפסים גם את שדה הטקסט
                  if (newValue !== "opt5") {
                    updateField("beidatzActivityFrameworkOtherText", "");
                  }
                }}
                disabled={
                  validationResults.beidatzActivityFramework === "correct"
                }
              >
                {formValues.beidatzActivityFramework === "opt5" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* נפתח בעקבות לחיצה על אופציה 5 - טקסט */}
          <rect
            className="cls-1"
            x="294.28"
            y="1818.23"
            width="281.41"
            height="51.93"
            style={{ pointerEvents: "none" }}
          />
          {formValues.beidatzActivityFramework === "opt5" && (
            <foreignObject x="294.28" y="1818.23" width="281.41" height="51.93">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                className="svg-input-host"
              >
                <input
                  className={`svg-report-input svg-report-input-small ${
                    validationResults.beidatzActivityFrameworkOtherText ===
                    "correct"
                      ? "validation-correct"
                      : validationResults.beidatzActivityFrameworkOtherText ===
                        "incorrect"
                      ? "validation-incorrect"
                      : ""
                  }`}
                  type="text"
                  placeholder="פירוט..."
                  value={formValues.beidatzActivityFrameworkOtherText || ""}
                  onChange={(e) =>
                    updateField(
                      "beidatzActivityFrameworkOtherText",
                      e.target.value
                    )
                  }
                  disabled={
                    validationResults.beidatzActivityFrameworkOtherText ===
                    "correct"
                  }
                />
              </div>
            </foreignObject>
          )}

          {/* מהות העבירה - טקסט */}
          <rect
            className="cls-1"
            x="239.17"
            y="1088.93"
            width="1497.24"
            height="148.7"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="239.17" y="1088.93" width="1497.24" height="148.7">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-textarea-host"
            >
              <textarea
                className={`svg-report-textarea ${
                  validationResults.beidatzOffenseNature === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzOffenseNature === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="מהות העבירה..."
                value={formValues.beidatzOffenseNature || ""}
                onChange={(e) =>
                  updateField("beidatzOffenseNature", e.target.value)
                }
                disabled={validationResults.beidatzOffenseNature === "correct"}
              />
            </div>
          </foreignObject>

          {/* פרטי העבירה - טקסט */}
          <rect
            className="cls-1"
            x="189.09"
            y="1456.76"
            width="1451.76"
            height="161.22"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="189.09" y="1456.76" width="1451.76" height="161.22">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-textarea-host"
            >
              <textarea
                className={`svg-report-textarea ${
                  validationResults.beidatzOffenseDetails === "correct"
                    ? "validation-correct"
                    : validationResults.beidatzOffenseDetails === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="פרטי העבירה..."
                value={formValues.beidatzOffenseDetails || ""}
                onChange={(e) =>
                  updateField("beidatzOffenseDetails", e.target.value)
                }
                disabled={validationResults.beidatzOffenseDetails === "correct"}
              />
            </div>
          </foreignObject>

          {/* מקום ביצוע העבירה - בחירה של איקסים וטקסט */}

          {/* === אופציה 1 === */}
          <rect
            className="cls-1"
            x="1888.54"
            y="646.02"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1888.54" y="646.02" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzOffenseLocationType === "correct"
                    ? "validation-correct"
                    : ""
                }`}
                type="button"
                onClick={() => {
                  const newValue =
                    formValues.beidatzOffenseLocationType === "loc1"
                      ? ""
                      : "loc1";
                  updateField("beidatzOffenseLocationType", newValue);
                  if (newValue !== "loc1") {
                    updateField("beidatzLoc1Field1", "");
                    updateField("beidatzLoc1Field2", "");
                    updateField("beidatzLoc1Field3", "");
                    updateField("beidatzLoc1Field4", "");
                  }
                }}
                disabled={
                  validationResults.beidatzOffenseLocationType === "correct"
                }
              >
                {formValues.beidatzOffenseLocationType === "loc1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* שדות אופציה 1 - מופיעים רק בבחירת loc1 */}
          {formValues.beidatzOffenseLocationType === "loc1" && (
            <>
              <rect
                className="cls-1"
                x="1628.3"
                y="646.02"
                width="162.87"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1628.3"
                y="646.02"
                width="162.87"
                height="46.52"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc1Field1 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc1Field1 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc1Field1 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc1Field1", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc1Field1 === "correct"}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="1369.26"
                y="646.02"
                width="140.96"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1369.26"
                y="646.02"
                width="140.96"
                height="46.52"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc1Field2 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc1Field2 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc1Field2 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc1Field2", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc1Field2 === "correct"}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="1157.17"
                y="646.02"
                width="106.91"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1157.17"
                y="646.02"
                width="106.91"
                height="46.52"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc1Field3 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc1Field3 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc1Field3 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc1Field3", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc1Field3 === "correct"}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="620.83"
                y="646.02"
                width="85.03"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject x="620.83" y="646.02" width="85.03" height="46.52">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc1Field4 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc1Field4 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc1Field4 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc1Field4", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc1Field4 === "correct"}
                  />
                </div>
              </foreignObject>
            </>
          )}

          {/* === אופציה 2 === */}
          <rect
            className="cls-1"
            x="1888.54"
            y="710.72"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1888.54" y="710.72" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzOffenseLocationType === "correct"
                    ? "validation-correct"
                    : ""
                }`}
                type="button"
                onClick={() => {
                  const newValue =
                    formValues.beidatzOffenseLocationType === "loc2"
                      ? ""
                      : "loc2";
                  updateField("beidatzOffenseLocationType", newValue);
                  if (newValue !== "loc2") {
                    updateField("beidatzLoc2Field1", "");
                    updateField("beidatzLoc2Field2", "");
                    updateField("beidatzLoc2Field3", "");
                    updateField("beidatzLoc2Field4", "");
                  }
                }}
                disabled={
                  validationResults.beidatzOffenseLocationType === "correct"
                }
              >
                {formValues.beidatzOffenseLocationType === "loc2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* שדות אופציה 2 - מופיעים רק בבחירת loc2 */}
          {formValues.beidatzOffenseLocationType === "loc2" && (
            <>
              <rect
                className="cls-1"
                x="1637.7"
                y="699.24"
                width="140.96"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1637.7"
                y="699.24"
                width="140.96"
                height="46.52"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc2Field1 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc2Field1 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc2Field1 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc2Field1", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc2Field1 === "correct"}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="1445.17"
                y="699.24"
                width="94.78"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1445.17"
                y="699.24"
                width="94.78"
                height="46.52"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc2Field2 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc2Field2 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc2Field2 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc2Field2", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc2Field2 === "correct"}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="1253.43"
                y="699.24"
                width="105.43"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1253.43"
                y="699.24"
                width="105.43"
                height="46.52"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc2Field3 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc2Field3 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc2Field3 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc2Field3", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc2Field3 === "correct"}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="1059.5"
                y="699.24"
                width="105.43"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1059.5"
                y="699.24"
                width="105.43"
                height="46.52"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc2Field4 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc2Field4 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc2Field4 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc2Field4", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc2Field4 === "correct"}
                  />
                </div>
              </foreignObject>
            </>
          )}

          {/* === אופציה 3 === */}
          <rect
            className="cls-1"
            x="1888.54"
            y="767.33"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1888.54" y="767.33" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzOffenseLocationType === "correct"
                    ? "validation-correct"
                    : ""
                }`}
                type="button"
                onClick={() => {
                  const newValue =
                    formValues.beidatzOffenseLocationType === "loc3"
                      ? ""
                      : "loc3";
                  updateField("beidatzOffenseLocationType", newValue);
                  if (newValue !== "loc3") {
                    updateField("beidatzLoc3Field1", "");
                    updateField("beidatzLoc3Field2", "");
                    updateField("beidatzLoc3Field3", "");
                  }
                }}
                disabled={
                  validationResults.beidatzOffenseLocationType === "correct"
                }
              >
                {formValues.beidatzOffenseLocationType === "loc3" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* שדות אופציה 3 - מופיעים רק בבחירת loc3 */}
          {formValues.beidatzOffenseLocationType === "loc3" && (
            <>
              <rect
                className="cls-1"
                x="1597"
                y="752.46"
                width="172.89"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject x="1597" y="752.46" width="172.89" height="46.52">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc3Field1 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc3Field1 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc3Field1 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc3Field1", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc3Field1 === "correct"}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="1363"
                y="752.46"
                width="71.15"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject x="1363" y="752.46" width="71.15" height="46.52">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc3Field2 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc3Field2 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc3Field2 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc3Field2", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc3Field2 === "correct"}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="1059.5"
                y="752.46"
                width="229.51"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1059.5"
                y="752.46"
                width="229.51"
                height="46.52"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc3Field3 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc3Field3 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc3Field3 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc3Field3", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc3Field3 === "correct"}
                  />
                </div>
              </foreignObject>
            </>
          )}

          {/* === אופציה 4 === */}
          <rect
            className="cls-1"
            x="996.98"
            y="704"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="996.98" y="704" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzOffenseLocationType === "correct"
                    ? "validation-correct"
                    : ""
                }`}
                type="button"
                onClick={() => {
                  const newValue =
                    formValues.beidatzOffenseLocationType === "loc4"
                      ? ""
                      : "loc4";
                  updateField("beidatzOffenseLocationType", newValue);
                  if (newValue !== "loc4") {
                    updateField("beidatzLoc4Field1", "");
                  }
                }}
                disabled={
                  validationResults.beidatzOffenseLocationType === "correct"
                }
              >
                {formValues.beidatzOffenseLocationType === "loc4" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* שדות אופציה 4 - מופיעים רק בבחירת loc4 */}
          {formValues.beidatzOffenseLocationType === "loc4" && (
            <>
              <rect
                className="cls-1"
                x="680.57"
                y="699.24"
                width="191.32"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="680.57"
                y="699.24"
                width="191.32"
                height="46.52"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc4Field1 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc4Field1 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc4Field1 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc4Field1", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc4Field1 === "correct"}
                  />
                </div>
              </foreignObject>
            </>
          )}

          {/* === אופציה 5 === */}
          <rect
            className="cls-1"
            x="996.98"
            y="765.04"
            width="43.76"
            height="43.76"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="996.98" y="765.04" width="43.76" height="43.76">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.beidatzOffenseLocationType === "correct"
                    ? "validation-correct"
                    : ""
                }`}
                type="button"
                onClick={() => {
                  const newValue =
                    formValues.beidatzOffenseLocationType === "loc5"
                      ? ""
                      : "loc5";
                  updateField("beidatzOffenseLocationType", newValue);
                  if (newValue !== "loc5") {
                    updateField("beidatzLoc5Field1", "");
                  }
                }}
                disabled={
                  validationResults.beidatzOffenseLocationType === "correct"
                }
              >
                {formValues.beidatzOffenseLocationType === "loc5" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* שדות אופציה 5 - מופיעים רק בבחירת loc5 */}
          {formValues.beidatzOffenseLocationType === "loc5" && (
            <>
              <rect
                className="cls-1"
                x="633.61"
                y="752.46"
                width="274.27"
                height="46.52"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="633.61"
                y="752.46"
                width="274.27"
                height="46.52"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    placeholder=""
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.beidatzLoc5Field1 === "correct"
                        ? "validation-correct"
                        : validationResults.beidatzLoc5Field1 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    value={formValues.beidatzLoc5Field1 || ""}
                    onChange={(e) =>
                      updateField("beidatzLoc5Field1", e.target.value)
                    }
                    disabled={validationResults.beidatzLoc5Field1 === "correct"}
                  />
                </div>
              </foreignObject>
            </>
          )}

          {/* בסיס השיטור - טקסט */}
          <rect
            className="cls-1"
            x="1333.59"
            y="1840.11"
            width="257.45"
            height="51.93"
          />

{/* מספר אישי השוטר - טקסט מספרים */}
<rect
            className="cls-1"
            x="1170.28"
            y="2046.54"
            width="332.61"
            height="51.93"
          />

          {/* דרגה השוטר - טקסט */}
          <rect
            className="cls-1"
            x="847.07"
            y="2046.54"
            width="313.61"
            height="51.93"
          />

          {/* שם משפחה השוטר - טקסט */}
          <rect
            className="cls-1"
            x="553.2"
            y="2046.54"
            width="284.65"
            height="51.93"
          />

          {/* שם פרטי השוטר - הטקסט */}
          <rect
            className="cls-1"
            x="355.98"
            y="2045.54"
            width="192.26"
            height="51.93"
          />

          {/* חתימה השוטר - תמונה */}
          <rect
            className="cls-1"
            x="145.85"
            y="2044.54"
            width="204"
            height="51.93"
          />

          {/* ======================================================================================== */}

          <rect
            className="cls-1"
            x="1116.18"
            y="862.5"
            width="410.12"
            height="67.33"
          />
          <rect
            className="cls-1"
            x="1246.49"
            y="970.63"
            width="435.82"
            height="51.93"
          />

          <rect
            className="cls-1"
            x="341.58"
            y="949.24"
            width="352.95"
            height="76.24"
          />

          <rect
            className="cls-1"
            x="488.32"
            y="855.33"
            width="188.21"
            height="76.24"
          />
          <rect
            className="cls-1"
            x="148.66"
            y="855.33"
            width="230.86"
            height="76.24"
          />
          <rect
            className="cls-1"
            x="148.66"
            y="955.5"
            width="100.06"
            height="69.98"
          />
          <rect
            className="cls-1"
            x="955.91"
            y="880.33"
            width="45.39"
            height="39.13"
          />
          <rect
            className="cls-1"
            x="892.23"
            y="880.37"
            width="45.39"
            height="39.13"
          />

          <path
            className="cls-2"
            d="M1843.26,185.99c-29.61-7.41-70.55.35-81.1,19.83-10.84,20.03,14.89,44.29,49.76,47.82,33,3.34,67.97-12.49,70.04-32.66,1.64-15.99-17.9-29.78-38.71-34.99Z"
          />
          <path
            className="cls-3"
            d="M1691.46,2115.9c-19.94-5.9-47.51.28-54.61,15.77-7.3,15.93,10.03,35.21,33.51,38.02,22.23,2.66,45.77-9.93,47.17-25.97,1.11-12.71-12.05-23.68-26.07-27.82Z"
          />
          <image
            width="243"
            height="34"
            transform="translate(1209.87 2117.83)"
            xlinkHref={personalNumber}
          />
          <image
            width="83"
            height="36"
            transform="translate(969.17 2114.83)"
            xlinkHref={darga}
          />
          <image
            width="153"
            height="36"
            transform="translate(619.02 2114.83)"
            xlinkHref={FamilyName}
          />
          <image
            width="68"
            height="29"
            transform="translate(418.11 2120.33)"
            xlinkHref={FirstName}
          />
          <image
            width="726"
            height="369"
            transform="translate(183.62 2102.18) scale(.18)"
            xlinkHref={shirsHatima}
          />
        </g>
      </g>
    </svg>
  );
}

export default BeidatzReportPage1;
