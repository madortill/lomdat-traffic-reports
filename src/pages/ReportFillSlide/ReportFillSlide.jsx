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
      answers: {},
      requiredOnly: [],
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
        address: ["חבצלת 6 רמת גן", "חבצלת 6, רמת גן", "חבצלת ,6 רמת גן"],
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
        base: [`מ"צ האשל`, "מ''צ האשל", "מצ האשל"],
        witnessOfficerFirstName: ["רוני"],
        witnessOfficerFamilyName: ["כהן"],
        policeUnitSection: ["section3"],
        offenseLocationType: ["loc5"],
        loc5Field1: [
          `תחנה מרכזית באר שבע`,
          "תחנה מרכזית, באר שבע",
          "תחנה מרכזית ,באר שבע",
          "תחנה מרכזית. באר שבע",
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

  const pageStorageKey = `report_current_page_${data.id}`;
  const valuesStorageKey = `report_values_${data.id}`;
  const countStorageKey = `report_check_count_${data.id}`;

  const [currentPageIndex, setCurrentPageIndex] = useState(() => {
    const saved = sessionStorage.getItem(pageStorageKey);
    const parsed = Number(saved);
    if (Number.isInteger(parsed) && parsed >= 0 && parsed < pages.length) {
      return parsed;
    }
    return 0;
  });

  const [formValues, setFormValues] = useState(() => {
    try {
      const saved = sessionStorage.getItem(valuesStorageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // סטייט לתוצאות הבדיקה הויזואלית (אדום/ירוק/תכלת)
  const [validationResults, setValidationResults] = useState({});

  // סטייט למונה הבדיקות
  const [checkCount, setCheckCount] = useState(() => {
    const saved = sessionStorage.getItem(countStorageKey);
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    sessionStorage.setItem(pageStorageKey, String(currentPageIndex));
  }, [currentPageIndex, pageStorageKey]);

  useEffect(() => {
    sessionStorage.setItem(valuesStorageKey, JSON.stringify(formValues));
  }, [formValues, valuesStorageKey]);

  useEffect(() => {
    sessionStorage.setItem(countStorageKey, String(checkCount));
  }, [checkCount, countStorageKey]);

  // עדכון השדה + הסרת הצבע שלו בזמן הקלדה/שינוי מחדש!
  const updateField = (fieldName, value) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    if (validationResults[fieldName]) {
      setValidationResults((prev) => {
        const updated = { ...prev };
        delete updated[fieldName];
        return updated;
      });
    }
  };

  // בדיקה האם הטופס מלא לחלוטין (משמש לנעילת/שחרור הכפתור)
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

  // פונקציית הבדיקה בלחיצה על הכפתור
  const handleValidate = () => {
    const rules = reportConfig.validation;
    if (!rules) return;

    const results = {};

    // 1. בדיקת נכונות רגילה לכל השדות הקבועים
    Object.keys(rules.answers).forEach((field) => {
      // נדלג גם על שדות המיקום הדינמיים וגם על שדה הפירוט של יחידת המשטרה
      if (field.startsWith("loc") && field.includes("Field")) return;
      if (field === "policeUnitOtherDetails") return; // דילוג לצורך בדיקה מותנית בהמשך

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

    // 2. לוגיקה דינמית ייעודית לשדות המיקום (הקוד הקיים שלך)
    const correctLocation = rules.answers.offenseLocationType?.[0] || "loc3";
    const checkLocField = (locName, fieldName, fieldValue) => {
      if (formValues.offenseLocationType !== locName) return "";
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

    // קריאות לשדות המיקום (loc1Field1, loc5Field1 וכו'...)
    results.loc1Field1 = checkLocField(
      "loc1",
      "loc1Field1",
      formValues.loc1Field1
    );
    // ... שאר שדות המיקום שכתבנו קודם ...
    results.loc5Field1 = checkLocField(
      "loc5",
      "loc5Field1",
      formValues.loc5Field1
    );

    // 3. לוגיקה דינמית עבור יחידת משטרה (policeUnit + policeUnitOtherDetails)
    const correctPoliceUnit = rules.answers.policeUnit?.[0] || "unit3";

    // אם המשתמש בחר ב-unit3 (בין אם זה נכון ובין אם לא)
    if (formValues.policeUnit === "unit3") {
      // אם unit3 היא אכן התשובה הנכונה בקונפיג
      if (correctPoliceUnit === "unit3") {
        const allowedDetails = rules.answers.policeUnitOtherDetails;
        const userDetailsValue =
          typeof formValues.policeUnitOtherDetails === "string"
            ? formValues.policeUnitOtherDetails.trim()
            : formValues.policeUnitOtherDetails;

        // אם הגדרת תשובות ספציפיות ב-answers עבור הפירוט, נבדוק מולן
        if (allowedDetails) {
          results.policeUnitOtherDetails = allowedDetails.includes(
            userDetailsValue
          )
            ? "correct"
            : "incorrect";
        } else {
          // אם לא הגדרת, פשוט נבדוק שהשדה לא ריק
          results.policeUnitOtherDetails =
            userDetailsValue && userDetailsValue !== ""
              ? "correct"
              : "incorrect";
        }
      } else {
        // אם המשתמש בחר ב-unit3 אבל היא בכלל לא התשובה הנכונה - האינפוט שלה נצבע ישר באדום
        results.policeUnitOtherDetails = "incorrect";
      }
    } else {
      // אם הוא לא בחר ב-unit3, השדה מוסתר ולא צריך לקבל שום צבע
      results.policeUnitOtherDetails = "";
    }

    // 4. סימון שדות שלא נבדקים אלא רק נדרשים
    rules.requiredOnly.forEach((field) => {
      if (formValues[field] !== undefined && formValues[field] !== "") {
        results[field] = "skipped";
      }
    });

    // עדכון הסטייט
    setValidationResults(results);
    setCheckCount((prev) => prev + 1);
  };

  const currentPage = pages[currentPageIndex];
  const CurrentReportPage = currentPage.Component;

  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === pages.length - 1;

  const goToPrevPage = () => {
    setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPageIndex((prev) => Math.min(prev + 1, pages.length - 1));
  };

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
            onClick={goToPrevPage}
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
            onClick={goToNextPage}
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
          <button
            type="button"
            disabled={!isFormComplete}
            onClick={handleValidate}
            className="validation-submit-btn"
          >
            בדוק תשובות
          </button>
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
              aria-label={`מעבר אל ${page.title}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ReportFillSlide;
