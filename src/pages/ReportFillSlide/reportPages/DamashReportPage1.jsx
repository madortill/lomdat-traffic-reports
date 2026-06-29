import damashReportImage from "../../../assets/דוח-דמש.png";

function DamashReportPage1({ formValues = {}, updateField = () => {} }) {
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

  const hourOptions = [
    "08:00",
    "08:35",
    "09:00",
    "09:35",
    "10:00",
    "10:35",
    "11:00",
    "11:35",
    "12:00",
    "12:35",
    "13:00",
    "13:35",
    "14:00",
    "14:35",
    "15:00",
    "15:35",
    "16:00",
    "16:35",
    "17:00",
    "17:35",
    "18:00",
    "18:35",
    "19:00",
  ];

  const renderOptions = (options) => {
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1521.4 2397.16"
      className="report-svg"
    >
      <defs>
        <style>
          {`
            .cls-1 {
              fill: none;
            }
          `}
        </style>
      </defs>

      <g id="Layer_1-2" dataName="Layer_1" pointerEvents="none">
        <g>
          <image
            width="714"
            height="1125"
            transform="scale(2.13)"
            href={damashReportImage}
          />

          {/* פרטי הנאשם - כפתורי סימון איקס */}
          <rect
            class="cls-1"
            x="995.41"
            y="172.14"
            width="40.04"
            height="40.04"
          />

          <rect
            class="cls-1"
            x="869.41"
            y="172.14"
            width="40.04"
            height="40.04"
          />

          <rect
            class="cls-1"
            x="740.49"
            y="172.14"
            width="40.04"
            height="40.04"
          />

          <rect
            class="cls-1"
            x="595.9"
            y="172.14"
            width="40.04"
            height="40.04"
          />

          <rect
            class="cls-1"
            x="432.72"
            y="172.14"
            width="40.04"
            height="40.04"
          />

          <foreignObject x="995.41" y="172.14" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className="svg-x-checkbox"
                type="button"
                onClick={() =>
                  updateField(
                    "selectedViolation",
                    formValues.selectedViolation === "option1" ? "" : "option1"
                  )
                }
              >
                {formValues.selectedViolation === "option1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          <foreignObject x="869.41" y="172.14" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className="svg-x-checkbox"
                type="button"
                onClick={() =>
                  updateField(
                    "selectedViolation",
                    formValues.selectedViolation === "option2" ? "" : "option2"
                  )
                }
              >
                {formValues.selectedViolation === "option2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          <foreignObject x="740.49" y="172.14" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className="svg-x-checkbox"
                type="button"
                onClick={() =>
                  updateField(
                    "selectedViolation",
                    formValues.selectedViolation === "option3" ? "" : "option3"
                  )
                }
              >
                {formValues.selectedViolation === "option3" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          <foreignObject x="595.9" y="172.14" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className="svg-x-checkbox"
                type="button"
                onClick={() =>
                  updateField(
                    "selectedViolation",
                    formValues.selectedViolation === "option4" ? "" : "option4"
                  )
                }
              >
                {formValues.selectedViolation === "option4" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          <foreignObject x="432.72" y="172.14" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className="svg-x-checkbox"
                type="button"
                onClick={() =>
                  updateField(
                    "selectedViolation",
                    formValues.selectedViolation === "option5" ? "" : "option5"
                  )
                }
              >
                {formValues.selectedViolation === "option5" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* מספר אישי - מספרים */}
          <rect
            class="cls-1"
            x="1143.39"
            y="248.12"
            width="277.89"
            height="34.5"
          />

          <foreignObject x="1143.39" y="248.12" width="277.89" height="34.5">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className="svg-report-input svg-report-input-personal-number"
                type="text"
                inputMode="numeric"
                value={formValues.personalNumber || ""}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, "");
                  updateField("personalNumber", onlyNumbers);
                }}
              />
            </div>
          </foreignObject>

          {/* דרגה - טקסט */}
          <rect
            class="cls-1"
            x="987.65"
            y="252.03"
            width="142.43"
            height="30.59"
          />

          <foreignObject x="987.65" y="252.03" width="142.43" height="30.59">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className="svg-report-input svg-report-input-small"
                type="text"
                value={formValues.rank || ""}
                onChange={(e) => updateField("rank", e.target.value)}
              />
            </div>
          </foreignObject>

          {/* שם משפחה - טקסט */}
          <rect
            className="cls-1"
            x="744.26"
            y="250.07"
            width="231.65"
            height="30.59"
          />

          <foreignObject x="744.26" y="250.07" width="231.65" height="30.59">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className="svg-report-input svg-report-input-small"
                type="text"
                value={formValues.lastName || ""}
                onChange={(e) => updateField("lastName", e.target.value)}
              />
            </div>
          </foreignObject>

          {/* שם פרטי - טקסט */}
          <rect
            className="cls-1"
            x="529.05"
            y="250.07"
            width="203.47"
            height="30.59"
          />

          <foreignObject x="529.05" y="250.07" width="203.47" height="30.59">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className="svg-report-input svg-report-input-small"
                type="text"
                value={formValues.firstName || ""}
                onChange={(e) => updateField("firstName", e.target.value)}
              />
            </div>
          </foreignObject>

          {/* חיל - טקסט */}
          <rect
            className="cls-1"
            x="346.7"
            y="250.07"
            width="171.39"
            height="30.59"
          />

          <foreignObject x="346.7" y="250.07" width="171.39" height="30.59">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className="svg-report-input svg-report-input-small"
                type="text"
                value={formValues.corps || ""}
                onChange={(e) => updateField("corps", e.target.value)}
              />
            </div>
          </foreignObject>

          {/* יחידה - מספרים */}
          <rect
            className="cls-1"
            x="127.57"
            y="250.07"
            width="212.87"
            height="30.59"
          />

          <foreignObject x="127.57" y="250.07" width="212.87" height="30.59">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className="svg-report-input svg-report-input-small"
                type="text"
                inputMode="numeric"
                value={formValues.unit || ""}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, "");
                  updateField("unit", onlyNumbers);
                }}
              />
            </div>
          </foreignObject>

          {/* כתובת אזרחית - טקסט */}
          <rect
            className="cls-1"
            x="850.57"
            y="306.42"
            width="574.43"
            height="33.65"
          />

          <foreignObject x="850.57" y="306.42" width="574.43" height="33.65">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className="svg-report-input svg-report-input-small"
                type="text"
                value={formValues.address || ""}
                onChange={(e) => updateField("address", e.target.value)}
              />
            </div>
          </foreignObject>

          {/* תעודת זהות - מספרים */}
          <rect
            className="cls-1"
            x="473.48"
            y="306.42"
            width="360.65"
            height="33.65"
          />

          <foreignObject x="473.48" y="306.42" width="360.65" height="33.65">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className="svg-report-input svg-report-input-personal-number"
                type="text"
                inputMode="numeric"
                value={formValues.idNumber || ""}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, "");
                  updateField("idNumber", onlyNumbers);
                }}
              />
            </div>
          </foreignObject>

          {/* טלפון נייד - מספרים */}
          <rect
            className="cls-1"
            x="127.57"
            y="309.55"
            width="334.04"
            height="30.52"
          />

          <foreignObject x="127.57" y="309.55" width="334.04" height="30.52">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className="svg-report-input svg-report-input-small"
                type="text"
                inputMode="numeric"
                value={formValues.phoneNumber || ""}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, "");
                  updateField("phoneNumber", onlyNumbers);
                }}
              />
            </div>
          </foreignObject>

          {/* תאריך - דרופדאון מספרים */}

          <rect
            className="cls-1"
            x="619.44"
            y="396.81"
            width="99.13"
            height="49.57"
            style={{ pointerEvents: "none" }}
          />

          <rect
            className="cls-1"
            x="727.44"
            y="396.81"
            width="99.13"
            height="49.57"
            style={{ pointerEvents: "none" }}
          />

          <rect
            className="cls-1"
            x="835.96"
            y="396.81"
            width="99.13"
            height="49.57"
            style={{ pointerEvents: "none" }}
          />

          {/* יום */}
          <foreignObject x="619.44" y="396.81" width="99.13" height="49.57">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className="svg-report-select"
                value={formValues.eventDay || ""}
                onChange={(e) => updateField("eventDay", e.target.value)}
              >
                <option value="">יום</option>
                {renderNumberOptions(1, 31)}
              </select>
            </div>
          </foreignObject>

          {/* חודש */}
          <foreignObject x="727.44" y="396.81" width="99.13" height="49.57">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className="svg-report-select"
                value={formValues.eventMonth || ""}
                onChange={(e) => updateField("eventMonth", e.target.value)}
              >
                <option value="">חודש</option>
                {renderNumberOptions(1, 12)}
              </select>
            </div>
          </foreignObject>

          {/* שנה */}
          <foreignObject x="835.96" y="396.81" width="99.13" height="49.57">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className="svg-report-select"
                value={formValues.eventYear || ""}
                onChange={(e) => updateField("eventYear", e.target.value)}
              >
                <option value="">שנה</option>
                {renderNumberOptions(2020, 2026)}
              </select>
            </div>
          </foreignObject>

          {/* יום בשבוע - דרופדאון ימים */}
          <rect
            className="cls-1"
            x="457.7"
            y="396.81"
            width="133.57"
            height="64.17"
          />

          <foreignObject x="457.7" y="396.81" width="133.57" height="64.17">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className="svg-report-select"
                value={formValues.weekDay || ""}
                onChange={(e) => updateField("weekDay", e.target.value)}
              >
                <option value="">יום</option>
                {renderOptions(weekDays)}
              </select>
            </div>
          </foreignObject>

          {/* =========================================================== */}

          <rect
            className="cls-1"
            x="1373.41"
            y="475.01"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="1138.31"
            y="1601.58"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="539.61"
            y="1601.58"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="1370.74"
            y="1703.32"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="649.17"
            y="1703.32"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="469.17"
            y="1703.32"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="469.17"
            y="1756.53"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="649.17"
            y="1761.23"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="850.31"
            y="1761.23"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="975.85"
            y="1776.56"
            width="182.48"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="870.33"
            y="2048.9"
            width="226.96"
            height="35.38"
          />
          <rect
            className="cls-1"
            x="695.02"
            y="2046.9"
            width="161.87"
            height="37.38"
          />
          <rect
            className="cls-1"
            x="1015.63"
            y="2169.03"
            width="192.74"
            height="37.38"
          />
          <rect
            className="cls-1"
            x="281.81"
            y="2046.82"
            width="134.61"
            height="36.26"
          />
          <rect
            className="cls-1"
            x="129.72"
            y="2046.82"
            width="143.22"
            height="36.26"
          />
          <rect
            className="cls-1"
            x="248.02"
            y="1756.53"
            width="130.83"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="1373.41"
            y="521.96"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="1373.41"
            y="573.62"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="704.22"
            y="515.05"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="704.22"
            y="562.53"
            width="40.04"
            height="40.04"
          />
          <rect
            className="cls-1"
            x="1223.15"
            y="471.58"
            width="93.98"
            height="29.45"
          />
          <rect
            className="cls-1"
            x="1058.87"
            y="478.63"
            width="90.07"
            height="25.83"
          />
          <rect
            className="cls-1"
            x="898.5"
            y="478.63"
            width="96.91"
            height="25.83"
          />
          <rect
            className="cls-1"
            x="531.85"
            y="478.63"
            width="77.35"
            height="25.83"
          />
          <rect
            className="cls-1"
            x="1231.47"
            y="512.67"
            width="77.35"
            height="25.83"
          />
          <rect
            className="cls-1"
            x="1107.85"
            y="512.67"
            width="60.91"
            height="25.83"
          />
          <rect
            className="cls-1"
            x="989.94"
            y="512.67"
            width="66.39"
            height="25.83"
          />
          <rect
            className="cls-1"
            x="871.5"
            y="512.67"
            width="66.39"
            height="25.83"
          />
          <rect
            className="cls-1"
            x="1193.41"
            y="552.32"
            width="104.45"
            height="25.83"
          />
          <rect
            className="cls-1"
            x="860.09"
            y="549.09"
            width="139.09"
            height="25.83"
          />
          <rect
            className="cls-1"
            x="369.07"
            y="512.67"
            width="224.96"
            height="25.83"
          />
          <rect
            className="cls-1"
            x="297.59"
            y="552.32"
            width="346.74"
            height="25.83"
          />
          <rect
            className="cls-1"
            x="234"
            y="813.32"
            width="1017.44"
            height="148.7"
          />
          <rect
            className="cls-1"
            x="176.54"
            y="979.24"
            width="1135.48"
            height="112.7"
          />
          <rect
            className="cls-1"
            x="149.94"
            y="1327.89"
            width="1053.74"
            height="201.91"
          />
          <rect
            className="cls-1"
            x="1046.28"
            y="549.09"
            width="43.16"
            height="25.83"
          />

          <rect
            className="cls-1"
            x="279.78"
            y="396.81"
            width="99.13"
            height="49.57"
          />
          <rect
            className="cls-1"
            x="145.17"
            y="396.81"
            width="99.13"
            height="49.57"
          />
        </g>
      </g>
    </svg>
  );
}

export default DamashReportPage1;
