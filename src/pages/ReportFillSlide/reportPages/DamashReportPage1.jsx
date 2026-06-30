import React, { useState } from "react";
import damashReportImage from "../../../assets/דוח-דמש.png";
import noasHatima from "../../../../public/Noas-hatima.svg";
import ronisHatima from "../../../../public/Ronis-hatima.svg";

// function DamashReportPage1({ formValues = {}, updateField = () => {} }) {
function DamashReportPage1({
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

      <g id="Layer_1-2" data-name="Layer_1" pointerEvents="none">
        <g>
          <image
            width="714"
            height="1125"
            transform="scale(2.13)"
            href={damashReportImage}
          />

          {/* פרטי הנאשם - כפתורי סימון איקס */}

          {/* אופציה 1 */}
          <rect
            className="cls-1"
            x="995.41"
            y="172.14"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="995.41" y="172.14" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.selectedViolation === "correct"
                    ? "validation-correct"
                    : validationResults.selectedViolation === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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

          {/* אופציה 2 */}
          <rect
            className="cls-1"
            x="869.41"
            y="172.14"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="869.41" y="172.14" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.selectedViolation === "correct"
                    ? "validation-correct"
                    : validationResults.selectedViolation === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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

          {/* אופציה 3 */}
          <rect
            className="cls-1"
            x="740.49"
            y="172.14"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="740.49" y="172.14" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.selectedViolation === "correct"
                    ? "validation-correct"
                    : validationResults.selectedViolation === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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

          {/* אופציה 4 */}
          <rect
            className="cls-1"
            x="595.9"
            y="172.14"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="595.9" y="172.14" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.selectedViolation === "correct"
                    ? "validation-correct"
                    : validationResults.selectedViolation === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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

          {/* אופציה 5 */}
          <rect
            className="cls-1"
            x="432.72"
            y="172.14"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="432.72" y="172.14" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.selectedViolation === "correct"
                    ? "validation-correct"
                    : validationResults.selectedViolation === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
            className="cls-1"
            x="1143.39"
            y="248.12"
            width="277.89"
            height="34.5"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1143.39" y="248.12" width="277.89" height="34.5">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-personal-number ${
                  validationResults.personalNumber === "correct"
                    ? "validation-correct"
                    : validationResults.personalNumber === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
            className="cls-1"
            x="987.65"
            y="252.03"
            width="142.43"
            height="30.59"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="987.65" y="252.03" width="142.43" height="30.59">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small ${
                  validationResults.rank === "correct"
                    ? "validation-correct"
                    : validationResults.rank === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="744.26" y="250.07" width="231.65" height="30.59">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small ${
                  validationResults.lastName === "correct"
                    ? "validation-correct"
                    : validationResults.lastName === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="529.05" y="250.07" width="203.47" height="30.59">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small ${
                  validationResults.firstName === "correct"
                    ? "validation-correct"
                    : validationResults.firstName === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="346.7" y="250.07" width="171.39" height="30.59">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small ${
                  validationResults.corps === "correct"
                    ? "validation-correct"
                    : validationResults.corps === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="127.57" y="250.07" width="212.87" height="30.59">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small ${
                  validationResults.unit === "correct"
                    ? "validation-correct"
                    : validationResults.unit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="850.57" y="306.42" width="574.43" height="33.65">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small ${
                  validationResults.address === "correct"
                    ? "validation-correct"
                    : validationResults.address === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="473.48" y="306.42" width="360.65" height="33.65">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-personal-number ${
                  validationResults.idNumber === "correct"
                    ? "validation-correct"
                    : validationResults.idNumber === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="127.57" y="306.42" width="334.04" height="33.65">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small ${
                  validationResults.phoneNumber === "correct"
                    ? "validation-correct"
                    : validationResults.phoneNumber === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
                className={`svg-report-select ${
                  validationResults.eventDay === "correct"
                    ? "validation-correct"
                    : validationResults.eventDay === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
                className={`svg-report-select ${
                  validationResults.eventMonth === "correct"
                    ? "validation-correct"
                    : validationResults.eventMonth === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
                className={`svg-report-select ${
                  validationResults.eventYear === "correct"
                    ? "validation-correct"
                    : validationResults.eventYear === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
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
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="457.7" y="396.81" width="133.57" height="64.17">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className={`svg-report-select ${
                  validationResults.weekDay === "correct"
                    ? "validation-correct"
                    : validationResults.weekDay === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                value={formValues.weekDay || ""}
                onChange={(e) => updateField("weekDay", e.target.value)}
              >
                <option value="">יום</option>
                {renderOptions(weekDays)}
              </select>
            </div>
          </foreignObject>

          {/* שעה - דרופדאון שעות */}
          <rect
            className="cls-1"
            x="279.78"
            y="396.81"
            width="99.13"
            height="49.57"
            style={{ pointerEvents: "none" }}
          />
          <rect
            className="cls-1"
            x="145.17"
            y="396.81"
            width="99.13"
            height="49.57"
            style={{ pointerEvents: "none" }}
          />

          {/* דקה */}
          <foreignObject x="279.78" y="396.81" width="99.13" height="49.57">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className={`svg-report-select svg-report-select-time ${
                  validationResults.eventMinute === "correct"
                    ? "validation-correct"
                    : validationResults.eventMinute === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                value={formValues.eventMinute || ""}
                onChange={(e) => updateField("eventMinute", e.target.value)}
              >
                <option value="">דקה</option>
                {renderOptions(minuteOptions)}
              </select>
            </div>
          </foreignObject>

          {/* שעה */}
          <foreignObject x="145.17" y="396.81" width="99.13" height="49.57">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <select
                className={`svg-report-select svg-report-select-time ${
                  validationResults.eventHour === "correct"
                    ? "validation-correct"
                    : validationResults.eventHour === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                value={formValues.eventHour || ""}
                onChange={(e) => updateField("eventHour", e.target.value)}
              >
                <option value="">שעה</option>
                {renderOptions(hourOptions)}
              </select>
            </div>
          </foreignObject>

          {/* תיאור העבירה - טקסט */}
          <rect
            className="cls-1"
            x="234"
            y="813.32"
            width="1017.44"
            height="148.7"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="234" y="813.32" width="1017.44" height="148.7">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-textarea-host"
            >
              <textarea
                className={`svg-report-textarea ${
                  validationResults.offenseDescription === "correct"
                    ? "validation-correct"
                    : validationResults.offenseDescription === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="פירוט תיאור העבירה..."
                value={formValues.offenseDescription || ""}
                onChange={(e) =>
                  updateField("offenseDescription", e.target.value)
                }
              />
            </div>
          </foreignObject>

          {/* בנסיבות - טקסט */}
          <rect
            className="cls-1"
            x="176.54"
            y="979.24"
            width="1135.48"
            height="112.7"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="176.54" y="979.24" width="1135.48" height="112.7">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-textarea-host"
            >
              <textarea
                className={`svg-report-textarea ${
                  validationResults.circumstances === "correct"
                    ? "validation-correct"
                    : validationResults.circumstances === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="פירוט הנסיבות..."
                value={formValues.circumstances || ""}
                onChange={(e) => updateField("circumstances", e.target.value)}
              />
            </div>
          </foreignObject>

          {/* תגובת מקבל הדו"ח - טקסט */}
          <rect
            className="cls-1"
            x="149.94"
            y="1327.89"
            width="1053.74"
            height="201.91"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="149.94" y="1327.89" width="1053.74" height="201.91">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-textarea-host"
            >
              <textarea
                className={`svg-report-textarea ${
                  validationResults.recipientResponse === "correct"
                    ? "validation-correct"
                    : validationResults.recipientResponse === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="דברי מקבל הדו״ח..."
                value={formValues.recipientResponse || ""}
                onChange={(e) =>
                  updateField("recipientResponse", e.target.value)
                }
              />
            </div>
          </foreignObject>

          {/* אישור קבלת הדו"ח - חתימה */}
          <g>
            {/* מלבן הלחיצה והעיצוב */}
            <rect
              x="1015.63"
              y="2150.03"
              width="192.74"
              height="70.38"
              /* ה-Class משתנה דינמית בשביל להעלים את המסגרת כשיש חתימה או להציג ולידציה */
              className={`svg-sign-clickable ${
                formValues.isSigned ? "is-signed" : ""
              } ${
                validationResults.isSigned === "correct"
                  ? "validation-correct"
                  : validationResults.isSigned === "incorrect"
                  ? "validation-incorrect"
                  : ""
              }`}
              onClick={() => updateField("isSigned", true)}
            />

            {/* הצגת תמונת החתימה */}
            {formValues.isSigned && (
              <image
                href={noasHatima}
                xlinkHref={noasHatima}
                x="1015.63"
                y="2150.03"
                width="192.74"
                height="70.38"
                preserveAspectRatio="xMidYMid meet"
                className="svg-sign-image"
              />
            )}
          </g>

          {/* יחידת השיטור - בחירת איקס */}
          {/* אפשרות 1 */}
          <rect
            className="cls-1"
            x="649.17"
            y="1703.32"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="649.17" y="1703.32" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.policeUnit === "correct"
                    ? "validation-correct"
                    : validationResults.policeUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "policeUnit",
                    formValues.policeUnit === "unit1" ? "" : "unit1"
                  )
                }
              >
                {formValues.policeUnit === "unit1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 2 */}
          <rect
            className="cls-1"
            x="469.17"
            y="1703.32"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="469.17" y="1703.32" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.policeUnit === "correct"
                    ? "validation-correct"
                    : validationResults.policeUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "policeUnit",
                    formValues.policeUnit === "unit2" ? "" : "unit2"
                  )
                }
              >
                {formValues.policeUnit === "unit2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 3 */}
          <rect
            className="cls-1"
            x="469.17"
            y="1756.53"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="469.17" y="1756.53" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.policeUnit === "correct"
                    ? "validation-correct"
                    : validationResults.policeUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "policeUnit",
                    formValues.policeUnit === "unit3" ? "" : "unit3"
                  )
                }
              >
                {formValues.policeUnit === "unit3" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* תיבת טקסט דינמית לאופציה השלישית - מופיעה רק אם unit3 נבחרה */}
          <rect
            className="cls-1"
            x="248.02"
            y="1756.53"
            width="130.83"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          {formValues.policeUnit === "unit3" && (
            <foreignObject x="248.02" y="1756.53" width="130.83" height="40.04">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                className="svg-input-host"
              >
                <input
                  type="text"
                  className={`svg-report-input svg-report-input-tiny ${
                    validationResults.policeUnitOtherDetails === "correct"
                      ? "validation-correct"
                      : validationResults.policeUnitOtherDetails === "incorrect"
                      ? "validation-incorrect"
                      : ""
                  }`}
                  placeholder="פירוט..."
                  value={formValues.policeUnitOtherDetails || ""}
                  onChange={(e) =>
                    updateField("policeUnitOtherDetails", e.target.value)
                  }
                />
              </div>
            </foreignObject>
          )}

          {/* אפשרות 4 */}
          <rect
            className="cls-1"
            x="649.17"
            y="1761.23"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="649.17" y="1761.23" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.policeUnit === "correct"
                    ? "validation-correct"
                    : validationResults.policeUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "policeUnit",
                    formValues.policeUnit === "unit4" ? "" : "unit4"
                  )
                }
              >
                {formValues.policeUnit === "unit4" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 5 */}
          <rect
            className="cls-1"
            x="850.31"
            y="1761.23"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="850.31" y="1761.23" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.policeUnit === "correct"
                    ? "validation-correct"
                    : validationResults.policeUnit === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "policeUnit",
                    formValues.policeUnit === "unit5" ? "" : "unit5"
                  )
                }
              >
                {formValues.policeUnit === "unit5" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* דרך מסירה - בחירה של איקס */}
          {/* אפשרות 1 */}
          <rect
            className="cls-1"
            x="1370.74"
            y="1703.32"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1370.74" y="1703.32" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.deliveryMethod === "correct"
                    ? "validation-correct"
                    : validationResults.deliveryMethod === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "deliveryMethod",
                    formValues.deliveryMethod === "method1" ? "" : "method1"
                  )
                }
              >
                {formValues.deliveryMethod === "method1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 2 */}
          <rect
            className="cls-1"
            x="1502.74"
            y="1703.32"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1190.74" y="1703.32" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.deliveryMethod === "correct"
                    ? "validation-correct"
                    : validationResults.deliveryMethod === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "deliveryMethod",
                    formValues.deliveryMethod === "method2" ? "" : "method2"
                  )
                }
              >
                {formValues.deliveryMethod === "method2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* בסיס השיטור - טקסט */}
          <rect
            className="cls-1"
            x="975.85"
            y="1776.56"
            width="182.48"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="975.85" y="1776.56" width="182.48" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                className={`svg-report-input svg-report-input-small ${
                  validationResults.base === "correct"
                    ? "validation-correct"
                    : validationResults.base === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="text"
                value={formValues.base || ""}
                onChange={(e) => updateField("base", e.target.value)}
              />
            </div>
          </foreignObject>

          {/* פרטי השוטר בעדים */}
          {/* מספר אישי - השוטר */}
          <rect
            className="cls-1"
            x="870.33"
            y="2048.9"
            width="226.96"
            height="35.38"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="870.33" y="2048.9" width="226.96" height="35.38">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                type="text"
                className={`svg-report-input svg-report-input-personal-number ${
                  validationResults.witnessOfficerPersonalNumber === "correct"
                    ? "validation-correct"
                    : validationResults.witnessOfficerPersonalNumber ===
                      "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="מספר אישי..."
                value={formValues.witnessOfficerPersonalNumber || ""}
                onChange={(e) =>
                  updateField("witnessOfficerPersonalNumber", e.target.value)
                }
              />
            </div>
          </foreignObject>

          {/* דרגה - השוטר טקסט */}
          <rect
            className="cls-1"
            x="695.02"
            y="2046.9"
            width="161.87"
            height="37.38"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="695.02" y="2046.9" width="161.87" height="37.38">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                type="text"
                className={`svg-report-input svg-report-input-tiny ${
                  validationResults.witnessOfficerRank === "correct"
                    ? "validation-correct"
                    : validationResults.witnessOfficerRank === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="דרגה..."
                value={formValues.witnessOfficerRank || ""}
                onChange={(e) =>
                  updateField("witnessOfficerRank", e.target.value)
                }
              />
            </div>
          </foreignObject>

          {/* שם פרטי - השוטר */}
          <rect
            className="cls-1"
            x="281.81"
            y="2046.82"
            width="134.61"
            height="36.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="281.81" y="2046.82" width="134.61" height="36.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                type="text"
                className={`svg-report-input svg-report-input-tiny ${
                  validationResults.witnessOfficerFirstName === "correct"
                    ? "validation-correct"
                    : validationResults.witnessOfficerFirstName === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="שם פרטי..."
                value={formValues.witnessOfficerFirstName || ""}
                onChange={(e) =>
                  updateField("witnessOfficerFirstName", e.target.value)
                }
              />
            </div>
          </foreignObject>

          {/* שם משפחה - השוטר */}
          <rect
            className="cls-1"
            x="427.81"
            y="2046.82"
            width="255.65"
            height="36.26"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="427.81" y="2046.82" width="255.65" height="36.26">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-input-host"
            >
              <input
                type="text"
                className={`svg-report-input svg-report-input-tiny ${
                  validationResults.witnessOfficerFamilyName === "correct"
                    ? "validation-correct"
                    : validationResults.witnessOfficerFamilyName === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                placeholder="שם משפחה..."
                value={formValues.witnessOfficerFamilyName || ""}
                onChange={(e) =>
                  updateField("witnessOfficerFamilyName", e.target.value)
                }
              />
            </div>
          </foreignObject>

          {/* חתימה - השוטר */}
          <g>
            <rect
              x="129.72"
              y="2046.82"
              width="143.22"
              height="36.26"
              className={`svg-sign-clickable ${
                formValues.isOfficerWitnessSigned ? "is-signed" : ""
              } ${
                validationResults.isOfficerWitnessSigned === "correct"
                  ? "validation-correct"
                  : validationResults.isOfficerWitnessSigned === "incorrect"
                  ? "validation-incorrect"
                  : ""
              }`}
              onClick={() => updateField("isOfficerWitnessSigned", true)}
            />

            {formValues.isOfficerWitnessSigned && (
              <image
                href={ronisHatima}
                xlinkHref={ronisHatima}
                x="129.72"
                y="2046.82"
                width="143.22"
                height="36.26"
                preserveAspectRatio="xMidYMid meet"
                className="svg-sign-image"
              />
            )}
          </g>

          {/* יחידות השיטור - בחירת איקס */}
          {/* אפשרות 1 */}
          <rect
            className="cls-1"
            x="1138.31"
            y="1601.58"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1138.31" y="1601.58" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.policeUnitSection === "correct"
                    ? "validation-correct"
                    : validationResults.policeUnitSection === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "policeUnitSection",
                    formValues.policeUnitSection === "section1"
                      ? ""
                      : "section1"
                  )
                }
              >
                {formValues.policeUnitSection === "section1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 2 */}
          <rect
            className="cls-1"
            x="937.61"
            y="1601.58"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="937.61" y="1601.58" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.policeUnitSection === "correct"
                    ? "validation-correct"
                    : validationResults.policeUnitSection === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "policeUnitSection",
                    formValues.policeUnitSection === "section2"
                      ? ""
                      : "section2"
                  )
                }
              >
                {formValues.policeUnitSection === "section2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 3*/}
          <rect
            className="cls-1"
            x="737.61"
            y="1601.58"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="737.61" y="1601.58" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.policeUnitSection === "correct"
                    ? "validation-correct"
                    : validationResults.policeUnitSection === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "policeUnitSection",
                    formValues.policeUnitSection === "section3"
                      ? ""
                      : "section3"
                  )
                }
              >
                {formValues.policeUnitSection === "section3" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 4 */}
          <rect
            className="cls-1"
            x="539.61"
            y="1601.58"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="539.61" y="1601.58" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.policeUnitSection === "correct"
                    ? "validation-correct"
                    : validationResults.policeUnitSection === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "policeUnitSection",
                    formValues.policeUnitSection === "section4"
                      ? ""
                      : "section4"
                  )
                }
              >
                {formValues.policeUnitSection === "section4" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 5 */}
          <rect
            className="cls-1"
            x="359.61"
            y="1601.58"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="359.61" y="1601.58" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.policeUnitSection === "correct"
                    ? "validation-correct"
                    : validationResults.policeUnitSection === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "policeUnitSection",
                    formValues.policeUnitSection === "section5"
                      ? ""
                      : "section5"
                  )
                }
              >
                {formValues.policeUnitSection === "section5" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* אפשרות 6 */}
          <rect
            className="cls-1"
            x="190.61"
            y="1601.58"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="190.61" y="1601.58" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.policeUnitSection === "correct"
                    ? "validation-correct"
                    : validationResults.policeUnitSection === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "policeUnitSection",
                    formValues.policeUnitSection === "section6"
                      ? ""
                      : "section6"
                  )
                }
              >
                {formValues.policeUnitSection === "section6" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* מקום ביצוע העבירה - בחירה של איקס ופירוט דינמי */}

          {/* ========================================== */}
          {/* אופציה 1 */}
          {/* ========================================== */}
          <rect
            className="cls-1"
            x="1373.41"
            y="475.01"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1373.41" y="475.01" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.offenseLocationType === "correct"
                    ? "validation-correct"
                    : validationResults.offenseLocationType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "offenseLocationType",
                    formValues.offenseLocationType === "loc1" ? "" : "loc1"
                  )
                }
              >
                {formValues.offenseLocationType === "loc1" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* שדות אופציה 1 (נפתחים רק בבחירת loc1) */}
          {formValues.offenseLocationType === "loc1" && (
            <>
              <rect
                className="cls-1"
                x="1223.15"
                y="471.58"
                width="93.98"
                height="29.45"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1223.15"
                y="471.58"
                width="93.98"
                height="29.45"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc1Field1 === "correct"
                        ? "validation-correct"
                        : validationResults.loc1Field1 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc1Field1 || ""}
                    onChange={(e) => updateField("loc1Field1", e.target.value)}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="1058.87"
                y="478.63"
                width="90.07"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1058.87"
                y="478.63"
                width="90.07"
                height="25.83"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc1Field2 === "correct"
                        ? "validation-correct"
                        : validationResults.loc1Field2 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc1Field2 || ""}
                    onChange={(e) => updateField("loc1Field2", e.target.value)}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="898.5"
                y="478.63"
                width="96.91"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject x="898.5" y="478.63" width="96.91" height="25.83">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc1Field3 === "correct"
                        ? "validation-correct"
                        : validationResults.loc1Field3 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc1Field3 || ""}
                    onChange={(e) => updateField("loc1Field3", e.target.value)}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="531.85"
                y="478.63"
                width="77.35"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject x="531.85" y="478.63" width="77.35" height="25.83">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc1Field4 === "correct"
                        ? "validation-correct"
                        : validationResults.loc1Field4 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc1Field4 || ""}
                    onChange={(e) => updateField("loc1Field4", e.target.value)}
                  />
                </div>
              </foreignObject>
            </>
          )}

          {/* ========================================== */}
          {/* אופציה 2 */}
          {/* ========================================== */}
          <rect
            className="cls-1"
            x="1373.41"
            y="521.96"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1373.41" y="521.96" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.offenseLocationType === "correct"
                    ? "validation-correct"
                    : validationResults.offenseLocationType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "offenseLocationType",
                    formValues.offenseLocationType === "loc2" ? "" : "loc2"
                  )
                }
              >
                {formValues.offenseLocationType === "loc2" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* שדות אופציה 2 (נפתחים רק בבחירת loc2) */}
          {formValues.offenseLocationType === "loc2" && (
            <>
              <rect
                className="cls-1"
                x="1231.47"
                y="512.67"
                width="77.35"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1231.47"
                y="512.67"
                width="77.35"
                height="25.83"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc2Field1 === "correct"
                        ? "validation-correct"
                        : validationResults.loc2Field1 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc2Field1 || ""}
                    onChange={(e) => updateField("loc2Field1", e.target.value)}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="1107.85"
                y="512.67"
                width="60.91"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1107.85"
                y="512.67"
                width="60.91"
                height="25.83"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc2Field2 === "correct"
                        ? "validation-correct"
                        : validationResults.loc2Field2 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc2Field2 || ""}
                    onChange={(e) => updateField("loc2Field2", e.target.value)}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="989.94"
                y="512.67"
                width="66.39"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject x="989.94" y="512.67" width="66.39" height="25.83">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc2Field3 === "correct"
                        ? "validation-correct"
                        : validationResults.loc2Field3 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc2Field3 || ""}
                    onChange={(e) => updateField("loc2Field3", e.target.value)}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="871.5"
                y="512.67"
                width="66.39"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject x="871.5" y="512.67" width="66.39" height="25.83">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc2Field4 === "correct"
                        ? "validation-correct"
                        : validationResults.loc2Field4 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc2Field4 || ""}
                    onChange={(e) => updateField("loc2Field4", e.target.value)}
                  />
                </div>
              </foreignObject>
            </>
          )}

          {/* ========================================== */}
          {/* אופציה 3 */}
          {/* ========================================== */}
          <rect
            className="cls-1"
            x="1373.41"
            y="573.62"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="1373.41" y="573.62" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.offenseLocationType === "correct"
                    ? "validation-correct"
                    : validationResults.offenseLocationType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "offenseLocationType",
                    formValues.offenseLocationType === "loc3" ? "" : "loc3"
                  )
                }
              >
                {formValues.offenseLocationType === "loc3" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* שדות אופציה 3 (נפתחים רק בבחירת loc3) */}
          {formValues.offenseLocationType === "loc3" && (
            <>
              <rect
                className="cls-1"
                x="1193.41"
                y="552.32"
                width="104.45"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1193.41"
                y="552.32"
                width="104.45"
                height="25.83"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc3Field1 === "correct"
                        ? "validation-correct"
                        : validationResults.loc3Field1 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc3Field1 || ""}
                    onChange={(e) => updateField("loc3Field1", e.target.value)}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="1046.28"
                y="549.09"
                width="43.16"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="1046.28"
                y="549.09"
                width="43.16"
                height="25.83"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc3Field2 === "correct"
                        ? "validation-correct"
                        : validationResults.loc3Field2 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc3Field2 || ""}
                    onChange={(e) => updateField("loc3Field2", e.target.value)}
                  />
                </div>
              </foreignObject>

              <rect
                className="cls-1"
                x="860.09"
                y="549.09"
                width="139.09"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="860.09"
                y="549.09"
                width="139.09"
                height="25.83"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc3Field3 === "correct"
                        ? "validation-correct"
                        : validationResults.loc3Field3 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc3Field3 || ""}
                    onChange={(e) => updateField("loc3Field3", e.target.value)}
                  />
                </div>
              </foreignObject>
            </>
          )}

          {/* ========================================== */}
          {/* אופציה 4 */}
          {/* ========================================== */}
          <rect
            className="cls-1"
            x="704.22"
            y="515.05"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="704.22" y="515.05" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.offenseLocationType === "correct"
                    ? "validation-correct"
                    : validationResults.offenseLocationType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "offenseLocationType",
                    formValues.offenseLocationType === "loc4" ? "" : "loc4"
                  )
                }
              >
                {formValues.offenseLocationType === "loc4" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* שדה אופציה 4 (נפתח רק בבחירת loc4) */}
          {formValues.offenseLocationType === "loc4" && (
            <>
              <rect
                className="cls-1"
                x="369.07"
                y="512.67"
                width="224.96"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="369.07"
                y="512.67"
                width="224.96"
                height="25.83"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc4Field1 === "correct"
                        ? "validation-correct"
                        : validationResults.loc4Field1 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc4Field1 || ""}
                    onChange={(e) => updateField("loc4Field1", e.target.value)}
                  />
                </div>
              </foreignObject>
            </>
          )}

          {/* ========================================== */}
          {/* אופציה 5 */}
          {/* ========================================== */}
          <rect
            className="cls-1"
            x="704.22"
            y="562.53"
            width="40.04"
            height="40.04"
            style={{ pointerEvents: "none" }}
          />
          <foreignObject x="704.22" y="562.53" width="40.04" height="40.04">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="svg-checkbox-host"
            >
              <button
                className={`svg-x-checkbox ${
                  validationResults.offenseLocationType === "correct"
                    ? "validation-correct"
                    : validationResults.offenseLocationType === "incorrect"
                    ? "validation-incorrect"
                    : ""
                }`}
                type="button"
                onClick={() =>
                  updateField(
                    "offenseLocationType",
                    formValues.offenseLocationType === "loc5" ? "" : "loc5"
                  )
                }
              >
                {formValues.offenseLocationType === "loc5" ? "×" : ""}
              </button>
            </div>
          </foreignObject>

          {/* שדה אופציה 5 (נפתח רק בבחירת loc5) */}
          {formValues.offenseLocationType === "loc5" && (
            <>
              <rect
                className="cls-1"
                x="297.59"
                y="552.32"
                width="346.74"
                height="25.83"
                style={{ pointerEvents: "none" }}
              />
              <foreignObject
                x="297.59"
                y="552.32"
                width="346.74"
                height="25.83"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  className="svg-input-host"
                >
                  <input
                    type="text"
                    className={`svg-report-input svg-report-input-tiny ${
                      validationResults.loc5Field1 === "correct"
                        ? "validation-correct"
                        : validationResults.loc5Field1 === "incorrect"
                        ? "validation-incorrect"
                        : ""
                    }`}
                    placeholder="..."
                    value={formValues.loc5Field1 || ""}
                    onChange={(e) => updateField("loc5Field1", e.target.value)}
                  />
                </div>
              </foreignObject>
            </>
          )}
        </g>
      </g>
    </svg>
  );
}

export default DamashReportPage1;
