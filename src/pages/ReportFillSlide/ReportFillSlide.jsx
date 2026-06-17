import React, { useEffect, useMemo, useState } from "react";
import "./ReportFillSlide.css";

import EventDetailsMenu from "./EventDetailsMenu/EventDetailsMenu";

import BeidatzReportPage1 from "./reportPages/BeidatzReportPage1";
import BeidatzReportPage2 from "./reportPages/BeidatzReportPage2";
import BeidatzReportPage3 from "./reportPages/BeidatzReportPage3";
import DamashReportPage1 from "./reportPages/DamashReportPage1";

const REPORTS_CONFIG = {
  beidatz: {
    pages: [
      {
        id: "beidatz-page-1",
        title: "עמוד 1",
        Component: BeidatzReportPage1,
      },
      {
        id: "beidatz-page-2",
        title: "עמוד 2",
        Component: BeidatzReportPage2,
      },
      {
        id: "beidatz-page-3",
        title: "עמוד 3",
        Component: BeidatzReportPage3,
      },
    ],
    eventDetails: [
      {
        id: "driver",
        label: "פרטי הנהג",
        image: "beidatz-driver.svg",
      },
      // {
      //   id: "vehicle",
      //   label: "פרטי הרכב",
      //   image: "beidatz-vehicle.svg",
      // },
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
  },

  damash: {
    pages: [
      {
        id: "damash-page-1",
        title: "עמוד 1",
        Component: DamashReportPage1,
      },
    ],
    eventDetails: [
      {
        id: "soldier",
        label: "פרטי החיילת",
        image: "damash-soldier.svg",
      },
      {
        id: "summary",
        label: "תקציר האירוע",
        image: "damash-summary.svg",
      },
    ],
  },
};

function ReportFillSlide({ data, isPreview = false }) {
  const reportKind = data?.reportKind || "beidatz";
  const reportConfig = REPORTS_CONFIG[reportKind];

  const pages = reportConfig.pages;
  const hasMultiplePages = pages.length > 1;

  const pageStorageKey = `report_current_page_${data.id}`;
  const valuesStorageKey = `report_values_${data.id}`;

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

  useEffect(() => {
    sessionStorage.setItem(pageStorageKey, String(currentPageIndex));
  }, [currentPageIndex, pageStorageKey]);

  useEffect(() => {
    sessionStorage.setItem(valuesStorageKey, JSON.stringify(formValues));
  }, [formValues, valuesStorageKey]);

  const updateField = (fieldName, value) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
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
          <button
            className="report-page-arrow report-page-arrow-right"
            onClick={goToPrevPage}
            type="button"
            aria-label="לעמוד הקודם"
          >
            ‹
          </button>
        )}
  
        <div className="report-page-frame" key={currentPage.id}>
          <CurrentReportPage
            formValues={formValues}
            updateField={updateField}
          />
        </div>
  
        {hasMultiplePages && !isLastPage && (
          <button
            className="report-page-arrow report-page-arrow-left"
            onClick={goToNextPage}
            type="button"
            aria-label="לעמוד הבא"
          >
            ›
          </button>
        )}
      </div>
  
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
