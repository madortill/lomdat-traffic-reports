import React, { useEffect, useMemo, useState } from "react";
import "./ReportFillSlide.css";

import EventDetailsMenu from "./EventDetailsMenu/EventDetailsMenu";
import BeidatzReportPage1 from "./reportPages/BeidatzReportPage1";
import BeidatzReportPage2 from "./reportPages/BeidatzReportPage2";
import BeidatzReportPage3 from "./reportPages/BeidatzReportPage3";
import DamashReportPage1 from "./reportPages/DamashReportPage1";

import ReportPageNextBtn from "../../assets/ReportPageNextBtn.svg";
import ReportPagePrevBtn from "../../assets/ReportPagePrevBtn.svg";

const REPORTS_CONFIG = {
  beidatz: {
    pages: [
      { id: "beidatz-page-1", title: "עמוד 1", Component: BeidatzReportPage1 },
      { id: "beidatz-page-2", title: "עמוד 2", Component: BeidatzReportPage2 },
      { id: "beidatz-page-3", title: "עמוד 3", Component: BeidatzReportPage3 },
    ],
    eventDetails: [
      { id: "driver", label: "פרטי הנהג", image: "beidatz-driver.svg" },
      {
        id: "license",
        label: "פרטי הרישיון הצבאי",
        image: "beidatz-license.svg",
      },
      { id: "summary", label: "תקציר האירוע", image: "beidatz-summary.svg" },
    ],
    validation: {
      answers: {
        // דף 1
        serviceType: ["type2"],
        beidatzPersonalNumber: ["9484096"],
        beidatzRank: [
          "רב סרן",
          `רס"ן`,
          "רס''ן",
          "רב סרן.",
          "רס''ן.",
          `רס"ן.`,
          "רסן",
          "רסן.",
        ],
        beidatzLastName: ["שמחוני"],
        beidatzFirstName: ["אביב"],
        beidatzCorps: ["מודיעין"],
        beidatzUnit: ["8200"],
        beidatzAddress: [
          "הכרמים 22 ראשון לציון",
          "הכרמים 22, ראשון לציון",
          "הכרמים ,22 ראשון לציון",
          ".הכרמים 22 ראשון לציון",
          ".הכרמים 22, ראשון לציון",
          ".הכרמים 22, ראשון לציון",
        ],
        beidatzIdNumber: ["215886576"],
        beidatzPhoneNumber: ["053-228-0564", "0532280564"],
        beidatzYear: ["2026"],
        beidatzMonth: ["2"],
        beidatzDay: ["11"],
        beidatzWeekDay: ["ה"],
        beidatzMinute: ["35"],
        beidatzHour: ["13"],
        beidatzVehicleType: ["type1"],
        beidatzPoliceUnit: ["unit4"],
        beidatzDeliveryMethod: ["method1"],
        beidatzActivityFramework: ["opt2"],
        beidatzOffenseLocationType: ["loc4"],
        beidatzLoc4Field1: [
          `ש"ג צריפין`,
          "ש''ג צריפין",
          "ש''ג, צריפין",
          `ש"ג, צריפין`,
          `.ש"ג צריפין`,
          ".ש''ג, צריפין",
        ],
        beidatzBase: ["בית ליד", "בית-ליד", "בית ליד.", "בית-ליד."],
        beidatzOfficerFamilyName: ["פרי"],
        beidatzOfficerFirstName: ["דני"],
        beidatzLicenseNumber: ["2316547"],
        beidatzIsLicenseValid: ["yes"],
        beidatzLicenseType: ["B"],
        beidatzCivilPlateNumber: ["436-66-224", "43666224"],
        beidatzVehicleName: ["רנו קנגו", "רנו-קנגו", "רנו קנגו.", "רנו-קנגו."],
        beidatzPermit: ["no"],
        beidatzVehicleColor: ["כסוף"],
        // דף 2
        beidatzMainSection: ["main"],
        beidatzSubOption: ["option1"],
        beidatzSecondOfficerFirstName: ["דני"],
        beidatzSecondOfficerFamilyName: ["פרי"],
      },
      requiredOnly: [
        // דף 1
        "beidatzOfficerPersonalNumber",
        "beidatzOfficerRank",
        "isOfficerWitnessSignedBeidatz",
        // דף 2
        "beidatzDriverResponse",
        "isDriverSignedBeidatz",
        "isOfficerPage2SignedBeidatz",
        "beidatzReportDetails",
        "beidatzSecondOfficerPersonalNumber",
        "beidatzSecondOfficerRank",
        "isSecondOfficerSignedBeidatz",
      ],
    },
  },
  damash: {
    pages: [
      { id: "damash-page-1", title: "עמוד 1", Component: DamashReportPage1 },
    ],
    eventDetails: [
      { id: "soldier", label: "פרטי החיילת", image: "damash-soldier.svg" },
      { id: "summary", label: "תקציר האירוע", image: "damash-summary.svg" },
    ],
    validation: {
      answers: {
        selectedViolation: ["option1"],
        personalNumber: ["9494560"],
        rank: ["סמל"],
        lastName: ["כהן"],
        firstName: ["נועה"],
        corps: ["מודיעין"],
        unit: ["8200"],
        idNumber: ["215886573"],
        address: [
          "חבצלת 6 רמת גן",
          "חבצלת 6, רמת גן",
          "חבצלת ,6 רמת גן",
          ".חבצלת 6 רמת גן",
          ".חבצלת 6, רמת גן",
          ".חבצלת ,6 רמת גן",
        ],
        phoneNumber: ["054-356-5639", "0543565639"],
        eventDay: ["2"],
        eventMonth: ["1"],
        eventYear: ["2026"],
        weekDay: ["א"],
        eventMinute: ["00"],
        eventHour: ["09"],
        policeUnit: ["unit3"],
        policeUnitOtherDetails: [`פ"מ`, "פ''מ", "פמ"],
        deliveryMethod: ["method1"],
        base: [
          `מ"צ האשל`,
          "מ''צ האשל",
          "מצ האשל",
          "מצ, האשל",
          `מ"צ, האשל`,
          "מ''צ, האשל",
          "מצ ,האשל",
          `מ"צ ,האשל`,
          "מ''צ ,האשל",
          `.מ"צ האשל`,
          ".מ''צ האשל",
          ".מצ האשל",
          ".מצ, האשל",
          `.מ"צ, האשל`,
          ".מ''צ, האשל",
          ".מצ ,האשל",
          `.מ"צ ,האשל`,
          ".מ''צ ,האשל",
        ],
        witnessOfficerFirstName: ["רוני"],
        witnessOfficerFamilyName: ["כהן"],
        policeUnitSection: ["section3"],
        offenseLocationType: ["loc5"],
        loc5Field1: [
          `תחנה מרכזית באר שבע`,
          "תחנה מרכזית, באר שבע",
          "תחנה מרכזית ,באר שבע",
          "תחנה מרכזית. באר שבע",
          `.תחנה מרכזית באר שבע`,
          ".תחנה מרכזית, באר שבע",
          ".תחנה מרכזית ,באר שבע",
          ".תחנה מרכזית. באר שבע",
        ],
      },
      requiredOnly: [
        "offenseDescription",
        "circumstances",
        "recipientResponse",
        "isSigned",
        "witnessOfficerPersonalNumber",
        "witnessOfficerRank",
        "isOfficerWitnessSigned",
      ],
    },
  },
};

function ReportFillSlide({ data, isPreview = false }) {
  const reportKind = data?.reportKind || "beidatz";
  const reportConfig = REPORTS_CONFIG[reportKind];

  const pages = reportConfig.pages;
  const hasMultiplePages = pages.length > 1;

  // מפתחות ייחודיים לפי ה-ID של השקף / דוח
  const pageStorageKey = `report_current_page_${data.id}`;
  const valuesStorageKey = `report_values_${data.id}`;
  const countStorageKey = `report_check_count_${data.id}`;
  const validationStorageKey = `report_validation_results_${data.id}`;

  // 1. עמוד נוכחי
  const [currentPageIndex, setCurrentPageIndex] = useState(() => {
    const saved = sessionStorage.getItem(pageStorageKey);
    const parsed = Number(saved);
    if (Number.isInteger(parsed) && parsed >= 0 && parsed < pages.length)
      return parsed;
    return 0;
  });

  // 2. ערכי השדות
  const [formValues, setFormValues] = useState(() => {
    try {
      const saved = sessionStorage.getItem(valuesStorageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // 3. תוצאות הבדיקה
  const [validationResults, setValidationResults] = useState(() => {
    try {
      const saved = sessionStorage.getItem(validationStorageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // 4. מונה הבדיקות
  const [checkCount, setCheckCount] = useState(() => {
    const saved = sessionStorage.getItem(countStorageKey);
    return saved ? Number(saved) : 0;
  });

  // סינכרון המצב כאשר הדוח משתנה חיצונית (במידה והקומפוננטה לא עוברת Unmount)
  useEffect(() => {
    const savedPage = sessionStorage.getItem(pageStorageKey);
    const parsedPage = Number(savedPage);
    setCurrentPageIndex(
      Number.isInteger(parsedPage) &&
        parsedPage >= 0 &&
        parsedPage < pages.length
        ? parsedPage
        : 0
    );

    try {
      const savedVals = sessionStorage.getItem(valuesStorageKey);
      setFormValues(savedVals ? JSON.parse(savedVals) : {});
    } catch {
      setFormValues({});
    }

    try {
      const savedValid = sessionStorage.getItem(validationStorageKey);
      setValidationResults(savedValid ? JSON.parse(savedValid) : {});
    } catch {
      setValidationResults({});
    }

    const savedCount = sessionStorage.getItem(countStorageKey);
    setCheckCount(savedCount ? Number(savedCount) : 0);
  }, [
    data.id,
    pageStorageKey,
    valuesStorageKey,
    validationStorageKey,
    countStorageKey,
    pages.length,
  ]);

  // אפקטים לשמירה אוטומטית בסטורג' בכל פעם שהסטייט משתנה
  useEffect(() => {
    sessionStorage.setItem(
      validationStorageKey,
      JSON.stringify(validationResults)
    );
  }, [validationResults, validationStorageKey]);

  useEffect(() => {
    sessionStorage.setItem(pageStorageKey, String(currentPageIndex));
  }, [currentPageIndex, pageStorageKey]);

  useEffect(() => {
    sessionStorage.setItem(valuesStorageKey, JSON.stringify(formValues));
  }, [formValues, valuesStorageKey]);

  useEffect(() => {
    sessionStorage.setItem(countStorageKey, String(checkCount));
  }, [checkCount, countStorageKey]);

  const updateField = (fieldName, value) => {
    setFormValues((prev) => ({ ...prev, [fieldName]: value }));

    if (
      validationResults[fieldName] &&
      validationResults[fieldName] !== "correct"
    ) {
      setValidationResults((prev) => {
        const updated = { ...prev };
        delete updated[fieldName];
        return updated;
      });
    }
  };

  const isEverythingCorrect = useMemo(() => {
    const rules = reportConfig.validation;
    if (!rules || Object.keys(rules.answers).length === 0) return false;

    const allAnswersCorrect = Object.keys(rules.answers).every(
      (key) => validationResults[key] === "correct"
    );

    const correctLocation = rules.answers.offenseLocationType?.[0];
    let locFieldsCorrect = true;
    if (correctLocation === "loc5") {
      locFieldsCorrect = validationResults.loc5Field1 === "correct";
    }

    return allAnswersCorrect && locFieldsCorrect;
  }, [validationResults, reportConfig.validation]);

  const isFormComplete = useMemo(() => {
    const rules = reportConfig.validation;
    if (!rules) return false;

    const allAnswersFilled = Object.keys(rules.answers).every(
      (key) => formValues[key] !== undefined && formValues[key] !== ""
    );

    const allRequiredFilled = rules.requiredOnly.every(
      (key) => formValues[key] !== undefined && key in formValues
    );

    return allAnswersFilled && allRequiredFilled;
  }, [formValues, reportConfig.validation]);

  const handleValidate = () => {
    const rules = reportConfig.validation;
    if (!rules) return;

    const results = { ...validationResults };

    Object.keys(rules.answers).forEach((field) => {
      if (field.startsWith("loc") && field.includes("Field")) return;
      if (field === "policeUnitOtherDetails") return;
      if (validationResults[field] === "correct") return;

      const allowedAnswers = rules.answers[field];
      const rawUserValue = formValues[field];
      const userValue =
        typeof rawUserValue === "string" ? rawUserValue.trim() : rawUserValue;

      if (allowedAnswers.includes(userValue)) {
        results[field] = "correct";
      } else {
        results[field] = "incorrect";
      }
    });

    const correctLocation = rules.answers.offenseLocationType?.[0] || "loc3";
    const checkLocField = (locName, fieldName, fieldValue) => {
      if (formValues.offenseLocationType !== locName) return "";
      if (validationResults[fieldName] === "correct") return "correct";
      if (locName === correctLocation) {
        const allowedAnswers = rules.answers[fieldName];
        const userValue =
          typeof fieldValue === "string" ? fieldValue.trim() : fieldValue;
        if (allowedAnswers)
          return allowedAnswers.includes(userValue) ? "correct" : "incorrect";
        return userValue && userValue !== "" ? "correct" : "incorrect";
      }
      return "incorrect";
    };

    results.loc1Field1 = checkLocField(
      "loc1",
      "loc1Field1",
      formValues.loc1Field1
    );
    results.loc1Field2 = checkLocField(
      "loc1",
      "loc1Field2",
      formValues.loc1Field2
    );
    results.loc1Field3 = checkLocField(
      "loc1",
      "loc1Field3",
      formValues.loc1Field3
    );
    results.loc1Field4 = checkLocField(
      "loc1",
      "loc1Field4",
      formValues.loc1Field4
    );
    results.loc2Field1 = checkLocField(
      "loc2",
      "loc2Field1",
      formValues.loc2Field1
    );
    results.loc2Field2 = checkLocField(
      "loc2",
      "loc2Field2",
      formValues.loc2Field2
    );
    results.loc2Field3 = checkLocField(
      "loc2",
      "loc2Field3",
      formValues.loc2Field3
    );
    results.loc2Field4 = checkLocField(
      "loc2",
      "loc2Field4",
      formValues.loc2Field4
    );
    results.loc3Field1 = checkLocField(
      "loc3",
      "loc3Field1",
      formValues.loc3Field1
    );
    results.loc3Field2 = checkLocField(
      "loc3",
      "loc3Field2",
      formValues.loc3Field2
    );
    results.loc3Field3 = checkLocField(
      "loc3",
      "loc3Field3",
      formValues.loc3Field3
    );
    results.loc4Field1 = checkLocField(
      "loc4",
      "loc4Field1",
      formValues.loc4Field1
    );
    results.loc5Field1 = checkLocField(
      "loc5",
      "loc5Field1",
      formValues.loc5Field1
    );

    const correctPoliceUnit = rules.answers.policeUnit?.[0] || "unit3";
    if (formValues.policeUnit === "unit3") {
      if (validationResults.policeUnitOtherDetails !== "correct") {
        if (correctPoliceUnit === "unit3") {
          const allowedDetails = rules.answers.policeUnitOtherDetails;
          const userDetailsValue =
            typeof formValues.policeUnitOtherDetails === "string"
              ? formValues.policeUnitOtherDetails.trim()
              : formValues.policeUnitOtherDetails;
          if (allowedDetails) {
            results.policeUnitOtherDetails = allowedDetails.includes(
              userDetailsValue
            )
              ? "correct"
              : "incorrect";
          } else {
            results.policeUnitOtherDetails =
              userDetailsValue && userDetailsValue !== ""
                ? "correct"
                : "incorrect";
          }
        } else {
          results.policeUnitOtherDetails = "incorrect";
        }
      }
    } else {
      results.policeUnitOtherDetails = "";
    }

    rules.requiredOnly.forEach((field) => {
      if (formValues[field] !== undefined && formValues[field] !== "") {
        results[field] = "locked";
      }
    });

    setValidationResults(results);
    setCheckCount((prev) => prev + 1);
  };

  // --- מנגנון הגנה מפני חריגה מגבולות המערך בזמן החלפת דוחות ---
  // אם האינדקס הנוכחי גדול מכמות העמודים שיש, נשתמש בעמוד הראשון (אינדקס 0)
  const safePageIndex = currentPageIndex < pages.length ? currentPageIndex : 0;

  const currentPage = pages[safePageIndex];
  const CurrentReportPage = currentPage ? currentPage.Component : null;

  const isFirstPage = safePageIndex === 0;
  const isLastPage = safePageIndex === pages.length - 1;
  // -----------------------------------------------------------

  // אם משהו השתבש והעמוד לא נמצא, נמנע קריסה ונציג הודעת טעינה זמנית
  if (!CurrentReportPage) {
    return <div className="report-fill-slide">טוען...</div>;
  }

  return (
    <div
      className={`report-fill-slide ${isPreview ? "report-fill-preview" : ""}`}
    >
      {!isPreview && <EventDetailsMenu items={reportConfig.eventDetails} />}

      <div className="report-fill-viewer">
        {hasMultiplePages && !isFirstPage && (
          <img
            src={ReportPagePrevBtn}
            className="report-page-arrow report-page-arrow-right"
            onClick={() => setCurrentPageIndex((prev) => Math.max(prev - 1, 0))}
          />
        )}

        <div className="report-page-frame" key={currentPage.id}>
          <CurrentReportPage
            formValues={formValues}
            updateField={updateField}
            validationResults={validationResults}
          />
        </div>

        {hasMultiplePages && !isLastPage && (
          <img
            src={ReportPageNextBtn}
            className="report-page-arrow report-page-arrow-left"
            onClick={() =>
              setCurrentPageIndex((prev) =>
                Math.min(prev + 1, pages.length - 1)
              )
            }
          />
        )}
      </div>

      {!isPreview && (
        <div className="validation-footer-container">
          {checkCount > 0 && (
            <span className="validation-count-text">
              מספר בדיקות שבוצעו: <b>{checkCount}</b>
            </span>
          )}

          <div className="validation-btn-wrapper">
            <button
              type="button"
              disabled={!isFormComplete || isEverythingCorrect}
              onClick={handleValidate}
              className={`validation-submit-btn ${
                isEverythingCorrect ? "all-correct" : ""
              }`}
            >
              {isEverythingCorrect ? "הדו''ח הושלם בהצלחה!" : "בדוק תשובות"}
            </button>

            {isEverythingCorrect && (
              <div className="success-badge-checkmark">✓</div>
            )}
          </div>
        </div>
      )}

      {hasMultiplePages && (
        <div className="report-page-dots">
          {pages.map((page, index) => (
            <button
              key={page.id}
              className={`report-page-dot ${
                index === currentPageIndex ? "active" : ""
              }`}
              onClick={() => setCurrentPageIndex(index)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ReportFillSlide;
