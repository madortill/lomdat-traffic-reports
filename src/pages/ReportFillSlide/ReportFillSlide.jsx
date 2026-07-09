import React, { useEffect, useMemo, useState } from "react";
import "./ReportFillSlide.css";

import EventDetailsMenu from "./EventDetailsMenu/EventDetailsMenu";
import BeidatzReportPage1 from "./reportPages/BeidatzReportPage1";
import BeidatzReportPage2 from "./reportPages/BeidatzReportPage2";
import BeidatzReportPage3 from "./reportPages/BeidatzReportPage3";
import DamashReportPage1 from "./reportPages/DamashReportPage1";

import ReportPageNextBtn from "../../assets/ReportPageNextBtn.svg";
import ReportPagePrevBtn from "../../assets/ReportPagePrevBtn.svg";
import reportNotComplete from "../../assets/report-not-complete.png";
import zoomBtn from "../../assets/zoom-btn.png";

const REPORTS_CONFIG = {
  beidatz: {
    pages: [
      { id: "beidatz-page-1", title: "עמוד 1", Component: BeidatzReportPage1 },
      { id: "beidatz-page-2", title: "עמוד 2", Component: BeidatzReportPage2 },
      { id: "beidatz-page-3", title: "עמוד 3", Component: BeidatzReportPage3 },
    ],
    eventDetails: [
      {
        id: "driver",
        label: "פרטי הנהג",
        image: "beidatz-driver.svg",
        previewClassName: "event-details-preview-large",
      },
      {
        id: "license",
        label: "פרטי הרישיון הצבאי",
        image: "beidatz-license.svg",
      },
      {
        id: "summary",
        label: "תקציר האירוע",
        image: "beidatz-summary.svg",
      },
    ],
    validation: {
      answers: {
        // דף 1
        serviceType: ["type2"],
        beidatzPersonalNumber: ["9484096", "333"],
        beidatzRank: [
          "רב סרן",
          `רס"ן`,
          "רס''ן",
          "רב סרן.",
          "רס''ן.",
          `רס"ן.`,
          "רסן",
          "רסן.",
          "קק",
        ],
        beidatzLastName: ["שמחוני", "קק"],
        beidatzFirstName: ["אביב", "קק"],
        beidatzCorps: ["מודיעין", "קק"],
        beidatzUnit: ["8200", "333"],
        beidatzAddress: [
          "הכרמים 22 ראשון לציון",
          "הכרמים 22, ראשון לציון",
          "הכרמים ,22 ראשון לציון",
          ".הכרמים 22 ראשון לציון",
          ".הכרמים 22, ראשון לציון",
          ".הכרמים 22, ראשון לציון",
          ".הכרמים 22, רשלצ",
          "הכרמים 22, רשלצ",
          "הכרמים 22 רשלצ",
          ".הכרמים 22 רשלצ",
          ".הכרמים 22, רשל''צ",
          "הכרמים 22, רשל''צ",
          "הכרמים 22 רשל''צ",
          ".הכרמים 22 רשל''צ",
          `.הכרמים 22, רשל"צ`,
          `הכרמים 22, רשל"צ`,
          `הכרמים 22 רשל"צ`,
          `.הכרמים 22 רשל"צ`,
          "קק",
        ],
        beidatzIdNumber: ["215886576", "333"],
        beidatzPhoneNumber: ["053-228-0564", "0532280564", "333"],
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
          "קק",
        ],
        beidatzBase: ["בית ליד", "בית-ליד", "בית ליד.", "בית-ליד.", "קק"],
        beidatzOfficerFamilyName: ["פרי", "קק"],
        beidatzOfficerFirstName: ["דני", "קק"],
        beidatzLicenseNumber: ["2316547", "333"],
        beidatzIsLicenseValid: ["yes"],
        beidatzLicenseType: ["B"],
        beidatzCivilPlateNumber: ["436-66-224", "43666224", "333"],
        beidatzVehicleName: [
          "רנו קנגו",
          "רנו-קנגו",
          "רנו קנגו.",
          "רנו-קנגו.",
          "קק",
        ],
        beidatzPermit: ["no"],
        beidatzVehicleColor: ["כסוף", "קק"],

        // דף 2
        beidatzMainSection: ["main"],
        beidatzSubOption: ["option1"],
        beidatzSecondOfficerFirstName: ["דני", "קק"],
        beidatzSecondOfficerFamilyName: ["פרי", "קק"],

        // דף 3
        beidatzPage3LineOption: ["option1"],

        beidatzPage3SelectedOption: ["option1", "option2"],
        beidatzPage3Option1Text: [
          "436-66-224",
          "43666224",
          "436-66224",
          "43666-224",
          "333",
        ],
        beidatzPage3Option2Text: ["662", "333"],

        beidatzPage3MultiOption1: [true],
        beidatzPage3MultiOption2: [true],
        beidatzPage3MultiOption1Text: [
          "רנו קנגו",
          "רנו-קנגו",
          "רנו קנגו.",
          "רנו-קנגו.",
          "קק",
        ],
        beidatzPage3MultiOption2Text: ["כסוף", "כסוף.", "קק"],

        beidatzIdentifiedOffense: ["yes"],
        beidatzStopSignalMethod: ["method1"],
        beidatzVehicleStopOption: ["stop1"],
      },
      requiredOnly: [
        // דף 1
        "beidatzOfficerPersonalNumber",
        "beidatzOfficerRank",
        "isOfficerWitnessSignedBeidatz",
        "beidatzOffenseNature",
        "beidatzOffenseDetails",

        // דף 2
        "beidatzDriverResponse",
        "isDriverSignedBeidatz",
        "isOfficerPage2SignedBeidatz",
        "beidatzSecondOfficerPersonalNumber",
        "beidatzSecondOfficerRank",
        "isSecondOfficerSignedBeidatz",
        "beidatzPage2ReportDetail1",
        "beidatzPage2ReportDetail2",
        "beidatzPage2ReportDetail3",
        "beidatzPage2ReportDetail4",
        "beidatzPage2ReportDetail5",
        "beidatzPage2ReportDetail6",
        "beidatzPage2ReportDetail7",
        "beidatzPage2ReportDetail8",
        "beidatzPage2ReportDetail9",
        "beidatzPage2ReportDetail10",
        "beidatzPage2ReportDetail11",
        "beidatzPage2ReportDetail12",
        "beidatzPage2ReportDetail13",
        "beidatzPage2ReportDetail14",
        "beidatzPage2ReportDetail15",
        "beidatzPage2ReportDetail16",

        // דף 3
        "beidatzStopDetails",
      ],
      optionalOnly: [
        "beidatzPage3MultiOption3",
        "beidatzPage3MultiOption3Text",
      ],
    },
  },

  damash: {
    pages: [
      { id: "damash-page-1", title: "עמוד 1", Component: DamashReportPage1 },
    ],
    eventDetails: [
      {
        id: "soldier",
        label: "פרטי החיילת",
        image: "damash-soldier.svg",
        previewClassName: "event-details-preview-large",
      },
      {
        id: "summary",
        label: "תקציר האירוע",
        image: "damash-summary.svg",
      },
    ],
    validation: {
      answers: {
        selectedViolation: ["option1"],
        personalNumber: ["9494560", "333"],
        rank: ["סמל", "קק"],
        lastName: ["כהן", "קק"],
        firstName: ["נועה", "קק"],
        corps: ["מודיעין", "קק"],
        unit: ["8200", "333"],
        idNumber: ["215886573", "333"],
        address: [
          "חבצלת 6 רמת גן",
          "חבצלת 6, רמת גן",
          "חבצלת ,6 רמת גן",
          ".חבצלת 6 רמת גן",
          ".חבצלת 6, רמת גן",
          ".חבצלת ,6 רמת גן",      
          "חבצלת 6 רמת-גן",
          "חבצלת 6, רמת-גן",
          "חבצלת ,6 רמת-גן",
          ".חבצלת 6 רמת-גן",
          ".חבצלת 6, רמת-גן",
          ".חבצלת ,6 רמת-גן",
          "קק",
        ],
        phoneNumber: ["054-356-5639", "0543565639", "333"],
        eventDay: ["2"],
        eventMonth: ["1"],
        eventYear: ["2026"],
        weekDay: ["א"],
        eventMinute: ["00"],
        eventHour: ["09"],
        policeUnit: ["unit3"],
        policeUnitOtherDetails: [`פ"מ`, "פ''מ", "פמ", "קק"],
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
          "קק",
        ],
        witnessOfficerFirstName: ["רוני", "קק"],
        witnessOfficerFamilyName: ["כהן", "קק"],
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
          "קק",
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

function normalizeValue(value) {
  if (typeof value === "string") {
    return value.trim();
  }

  return value;
}

function hasFieldValue(value) {
  if (typeof value === "boolean") {
    return value === true;
  }

  if (value === undefined || value === null) {
    return false;
  }

  if (typeof value === "string") {
    return value.replace(/\u00A0/g, " ").trim() !== "";
  }

  return value !== "";
}

function ReportFillSlide({ data, isPreview = false, onUnlock = () => {} }) {
  const reportKind = data?.reportKind || "beidatz";
  const reportConfig = REPORTS_CONFIG[reportKind];

  const pages = reportConfig.pages;
  const hasMultiplePages = pages.length > 1;

  const pageStorageKey = `report_current_page_${data.id}`;
  const valuesStorageKey = `report_values_${data.id}`;
  const countStorageKey = `report_check_count_${data.id}`;
  const validationStorageKey = `report_validation_results_${data.id}`;

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

  const [validationResults, setValidationResults] = useState(() => {
    try {
      const saved = sessionStorage.getItem(validationStorageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [checkCount, setCheckCount] = useState(() => {
    const saved = sessionStorage.getItem(countStorageKey);
    return saved ? Number(saved) : 0;
  });

  const [isReportZoomed, setIsReportZoomed] = useState(false);

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

  useEffect(() => {
    sessionStorage.setItem(pageStorageKey, String(currentPageIndex));
  }, [currentPageIndex, pageStorageKey]);

  useEffect(() => {
    sessionStorage.setItem(valuesStorageKey, JSON.stringify(formValues));
  }, [formValues, valuesStorageKey]);

  useEffect(() => {
    sessionStorage.setItem(
      validationStorageKey,
      JSON.stringify(validationResults)
    );
  }, [validationResults, validationStorageKey]);

  useEffect(() => {
    sessionStorage.setItem(countStorageKey, String(checkCount));
  }, [checkCount, countStorageKey]);

  // useEffect(() => {
  //   if (!isReportZoomed) return;

  //   const originalOverflow = document.body.style.overflow;
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = originalOverflow;
  //   };
  // }, [isReportZoomed]);

  useEffect(() => {
    if (!isReportZoomed) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.body.classList.add("report-zoom-is-open");

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove("report-zoom-is-open");
    };
  }, [isReportZoomed]);

  const updateField = (fieldName, value) => {
    if (validationResults[fieldName] === "correct") return;
    if (validationResults[fieldName] === "locked") return;

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

  const shouldSkipValidationField = (fieldName) => {
    if (fieldName === "beidatzPage3Option1Text") {
      return formValues.beidatzPage3SelectedOption !== "option1";
    }
  
    if (fieldName === "beidatzPage3Option2Text") {
      return formValues.beidatzPage3SelectedOption !== "option2";
    }
  
    /*
      שדות מיקום ביצוע העבירה בביד"צ:
      כל שדה טקסט נדרש רק אם החניך סימן את האופציה שאליה הוא שייך.
      אם החניך סימן אופציה לא נכונה, לא נחייב אותו למלא את השדה של האופציה הנכונה,
      אבל הבחירה עצמה עדיין תיבדק ותצא incorrect.
    */
    if (fieldName.startsWith("beidatzLoc1Field")) {
      return formValues.beidatzOffenseLocationType !== "loc1";
    }
  
    if (fieldName.startsWith("beidatzLoc2Field")) {
      return formValues.beidatzOffenseLocationType !== "loc2";
    }
  
    if (fieldName.startsWith("beidatzLoc3Field")) {
      return formValues.beidatzOffenseLocationType !== "loc3";
    }
  
    if (fieldName.startsWith("beidatzLoc4Field")) {
      return formValues.beidatzOffenseLocationType !== "loc4";
    }
  
    if (fieldName.startsWith("beidatzLoc5Field")) {
      return formValues.beidatzOffenseLocationType !== "loc5";
    }
  
    return false;
  };

  const isFormComplete = useMemo(() => {
    const rules = reportConfig.validation;
    if (!rules) return false;

    const allAnswersFilled = Object.keys(rules.answers).every((key) => {
      if (shouldSkipValidationField(key)) return true;

      return hasFieldValue(formValues[key]);
    });

    const allRequiredFilled = rules.requiredOnly.every((key) => {
      return hasFieldValue(formValues[key]);
    });

    return allAnswersFilled && allRequiredFilled;
  }, [formValues, reportConfig.validation]);

  const getMissingFields = () => {
    const rules = reportConfig.validation;
    if (!rules) return { missingAnswers: [], missingRequired: [] };

    const missingAnswers = Object.keys(rules.answers).filter((key) => {
      if (shouldSkipValidationField(key)) return false;

      return !hasFieldValue(formValues[key]);
    });

    const missingRequired = rules.requiredOnly.filter((key) => {
      return !hasFieldValue(formValues[key]);
    });

    return {
      missingAnswers,
      missingRequired,
    };
  };

  const isEverythingCorrect = useMemo(() => {
    const rules = reportConfig.validation;
    if (!rules) return false;

    const allAnswersCorrect = Object.keys(rules.answers).every((key) => {
      if (shouldSkipValidationField(key)) return true;

      return validationResults[key] === "correct";
    });

    const allRequiredLocked = rules.requiredOnly.every((key) => {
      return validationResults[key] === "locked";
    });

    return allAnswersCorrect && allRequiredLocked;
  }, [validationResults, formValues, reportConfig.validation]);

  useEffect(() => {
    if (isPreview) return;

    const { missingAnswers, missingRequired } = getMissingFields();

    console.log("------ מצב כפתור בדיקת תשובות ------");
    console.log("isFormComplete:", isFormComplete);
    console.log("isEverythingCorrect:", isEverythingCorrect);

    console.table(
      missingAnswers.map((field) => ({
        type: "answer",
        field,
        value: formValues[field],
      }))
    );

    console.table(
      missingRequired.map((field) => ({
        type: "requiredOnly",
        field,
        value: formValues[field],
      }))
    );
  }, [formValues, isFormComplete, isEverythingCorrect, isPreview]);

  useEffect(() => {
    if (isPreview) return;

    if (isEverythingCorrect) {
      onUnlock();
    }
  }, [isEverythingCorrect, isPreview, onUnlock]);

  const checkNormalAnswer = (field, results) => {
    if (validationResults[field] === "correct") return;

    const rules = reportConfig.validation;
    const allowedAnswers = rules.answers[field];

    const userValue = normalizeValue(formValues[field]);

    if (allowedAnswers.includes(userValue)) {
      results[field] = "correct";
    } else {
      results[field] = "incorrect";
    }
  };

  const handleValidate = () => {
    const rules = reportConfig.validation;
    if (!rules) return;

    if (!isFormComplete) {
      const { missingAnswers, missingRequired } = getMissingFields();

      console.log("שדות תשובה חסרים:", missingAnswers);
      console.log("שדות חובה חסרים:", missingRequired);

      alert(
        `עדיין חסרים שדות בדוח.\n\nשדות תשובה חסרים:\n${missingAnswers.join(
          "\n"
        )}\n\nשדות חובה חסרים:\n${missingRequired.join("\n")}`
      );

      return;
    }

    const results = { ...validationResults };

    Object.keys(rules.answers).forEach((field) => {
      if (validationResults[field] === "correct") return;

      if (shouldSkipValidationField(field)) {
        results[field] = "";
        return;
      }

      /*
        שדות תלויים/מיוחדים.
        כרגע השארתי את ההחרגות שהיו אצלך כדי לא לשבור לוגיקה קיימת.
      */
      if (field.startsWith("loc") && field.includes("Field")) return;
      if (field.startsWith("beidatzLoc") && field.includes("Field")) return;
      if (field === "policeUnitOtherDetails") return;

      checkNormalAnswer(field, results);
    });

    /*
      לוגיקת מיקום לדמ"ש.
      אם בהמשך תרצי, נעשה גם גרסה מקבילה מסודרת לביד"צ.
    */
    if (rules.answers.offenseLocationType) {
      const correctLocation = rules.answers.offenseLocationType?.[0] || "loc3";

      const checkLocField = (locName, fieldName, fieldValue) => {
        if (formValues.offenseLocationType !== locName) return "";

        if (validationResults[fieldName] === "correct") {
          return "correct";
        }

        if (locName === correctLocation) {
          const allowedAnswers = rules.answers[fieldName];
          const userValue = normalizeValue(fieldValue);

          if (allowedAnswers) {
            return allowedAnswers.includes(userValue) ? "correct" : "incorrect";
          }

          return hasFieldValue(userValue) ? "correct" : "incorrect";
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
    }

    /*
  לוגיקת מיקום לביד"צ.
*/
    if (rules.answers.beidatzOffenseLocationType) {
      const correctBeidatzLocation =
        rules.answers.beidatzOffenseLocationType?.[0] || "loc4";

      const checkBeidatzLocField = (locName, fieldName, fieldValue) => {
        if (formValues.beidatzOffenseLocationType !== locName) return "";

        if (validationResults[fieldName] === "correct") {
          return "correct";
        }

        if (locName === correctBeidatzLocation) {
          const allowedAnswers = rules.answers[fieldName];
          const userValue = normalizeValue(fieldValue);

          if (allowedAnswers) {
            return allowedAnswers.includes(userValue) ? "correct" : "incorrect";
          }

          return hasFieldValue(userValue) ? "correct" : "incorrect";
        }

        return "incorrect";
      };

      results.beidatzLoc1Field1 = checkBeidatzLocField(
        "loc1",
        "beidatzLoc1Field1",
        formValues.beidatzLoc1Field1
      );

      results.beidatzLoc1Field2 = checkBeidatzLocField(
        "loc1",
        "beidatzLoc1Field2",
        formValues.beidatzLoc1Field2
      );

      results.beidatzLoc1Field3 = checkBeidatzLocField(
        "loc1",
        "beidatzLoc1Field3",
        formValues.beidatzLoc1Field3
      );

      results.beidatzLoc1Field4 = checkBeidatzLocField(
        "loc1",
        "beidatzLoc1Field4",
        formValues.beidatzLoc1Field4
      );

      results.beidatzLoc2Field1 = checkBeidatzLocField(
        "loc2",
        "beidatzLoc2Field1",
        formValues.beidatzLoc2Field1
      );

      results.beidatzLoc2Field2 = checkBeidatzLocField(
        "loc2",
        "beidatzLoc2Field2",
        formValues.beidatzLoc2Field2
      );

      results.beidatzLoc2Field3 = checkBeidatzLocField(
        "loc2",
        "beidatzLoc2Field3",
        formValues.beidatzLoc2Field3
      );

      results.beidatzLoc2Field4 = checkBeidatzLocField(
        "loc2",
        "beidatzLoc2Field4",
        formValues.beidatzLoc2Field4
      );

      results.beidatzLoc3Field1 = checkBeidatzLocField(
        "loc3",
        "beidatzLoc3Field1",
        formValues.beidatzLoc3Field1
      );

      results.beidatzLoc3Field2 = checkBeidatzLocField(
        "loc3",
        "beidatzLoc3Field2",
        formValues.beidatzLoc3Field2
      );

      results.beidatzLoc3Field3 = checkBeidatzLocField(
        "loc3",
        "beidatzLoc3Field3",
        formValues.beidatzLoc3Field3
      );

      results.beidatzLoc4Field1 = checkBeidatzLocField(
        "loc4",
        "beidatzLoc4Field1",
        formValues.beidatzLoc4Field1
      );

      results.beidatzLoc5Field1 = checkBeidatzLocField(
        "loc5",
        "beidatzLoc5Field1",
        formValues.beidatzLoc5Field1
      );
    }

    /*
      לוגיקת יחידה / פרטים נוספים בדמ"ש.
    */
    if (rules.answers.policeUnit) {
      const correctPoliceUnit = rules.answers.policeUnit?.[0] || "unit3";

      if (formValues.policeUnit === "unit3") {
        if (validationResults.policeUnitOtherDetails !== "correct") {
          if (correctPoliceUnit === "unit3") {
            const allowedDetails = rules.answers.policeUnitOtherDetails;
            const userDetailsValue = normalizeValue(
              formValues.policeUnitOtherDetails
            );

            if (allowedDetails) {
              results.policeUnitOtherDetails = allowedDetails.includes(
                userDetailsValue
              )
                ? "correct"
                : "incorrect";
            } else {
              results.policeUnitOtherDetails = hasFieldValue(userDetailsValue)
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
    }

    /*
      שדות requiredOnly:
      לא בודקים אם התוכן נכון.
      רק אם הוא מלא — נועלים אותו.
    */
    rules.requiredOnly.forEach((field) => {
      if (validationResults[field] === "locked") return;

      if (hasFieldValue(formValues[field])) {
        results[field] = "locked";
      }
    });

    rules.optionalOnly?.forEach((field) => {
      if (validationResults[field] === "locked") return;

      if (hasFieldValue(formValues[field])) {
        results[field] = "locked";
      }
    });

    const stillNotCorrectAnswers = Object.keys(rules.answers).filter(
      (field) => {
        if (shouldSkipValidationField(field)) return false;

        return results[field] !== "correct";
      }
    );

    const stillNotLockedRequired = rules.requiredOnly.filter((field) => {
      return results[field] !== "locked";
    });

    console.log("שדות תשובה שלא יצאו correct:", stillNotCorrectAnswers);
    console.log("שדות חובה שלא יצאו locked:", stillNotLockedRequired);

    console.table(
      stillNotCorrectAnswers.map((field) => ({
        field,
        value: formValues[field],
        result: results[field],
        allowedAnswers: rules.answers[field],
      }))
    );

    console.table(
      stillNotLockedRequired.map((field) => ({
        field,
        value: formValues[field],
        result: results[field],
      }))
    );

    setValidationResults(results);
    setCheckCount((prev) => prev + 1);
  };

  const getValidationClass = (fieldName) => {
    const result = validationResults[fieldName];

    if (result === "correct") return "validation-correct";
    if (result === "incorrect") return "validation-incorrect";
    if (result === "locked") return "validation-locked";

    return "";
  };

  const isFieldLocked = (fieldName) => {
    return (
      validationResults[fieldName] === "correct" ||
      validationResults[fieldName] === "locked"
    );
  };

  const safePageIndex = currentPageIndex < pages.length ? currentPageIndex : 0;
  const currentPage = pages[safePageIndex];
  const CurrentReportPage = currentPage ? currentPage.Component : null;

  const isFirstPage = safePageIndex === 0;
  const isLastPage = safePageIndex === pages.length - 1;

  const renderCurrentReportPage = () => (
    <div
      className={`report-page-frame ${
        isReportZoomed ? "report-page-frame-zoomed" : ""
      }`}
      key={currentPage.id}
    >
      <CurrentReportPage
        formValues={formValues}
        updateField={updateField}
        validationResults={validationResults}
        getValidationClass={getValidationClass}
        isFieldLocked={isFieldLocked}
      />
    </div>
  );

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
            alt="לעמוד הקודם"
          />
        )}

        {!isReportZoomed && renderCurrentReportPage()}

        {!isPreview && !isReportZoomed && (
          // <button
          //   type="button"
          //   className="report-zoom-btn"
          //   onClick={() => setIsReportZoomed(true)}
          // >
          //   הגדל דו״ח
          // </button>
          <img
            src={zoomBtn}
            className="report-zoom-btn-img"
            onClick={() => setIsReportZoomed(true)}
            alt="הגדל דוח"
          />
        )}

        {hasMultiplePages && !isLastPage && (
          <img
            src={ReportPageNextBtn}
            className="report-page-arrow report-page-arrow-left"
            onClick={() =>
              setCurrentPageIndex((prev) =>
                Math.min(prev + 1, pages.length - 1)
              )
            }
            alt="לעמוד הבא"
          />
        )}
      </div>

      {isReportZoomed && (
        <div
          className="report-zoom-overlay"
          onClick={() => setIsReportZoomed(false)}
        >
          <div
            className="report-zoom-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="report-zoom-close-btn"
              onClick={() => setIsReportZoomed(false)}
              aria-label="סגירת הגדלת הדוח"
            >
              ×
            </button>

            <div className="report-zoom-scroll-area">
              {renderCurrentReportPage()}
            </div>
          </div>
        </div>
      )}

      {!isPreview && checkCount > 0 && !isEverythingCorrect && (
        <img
          src={reportNotComplete}
          className="report-validation-feedback-image"
          alt="יש עדיין תשובות שצריך לתקן"
        />
      )}

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
              aria-label={`מעבר אל ${page.title}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ReportFillSlide;
