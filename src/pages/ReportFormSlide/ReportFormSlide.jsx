import React, { useEffect, useMemo, useState } from "react";
import "./ReportFormSlide.css";

// בהמשך תחליפי את אלה ל-SVG האמיתיים של הדו"ח
// לדוגמה:
// import reportPage1 from "../../assets/report/report-page-1.svg";
// import reportPage2 from "../../assets/report/report-page-2.svg";
// import reportPage3 from "../../assets/report/report-page-3.svg";

// זמנית אפשר להשתמש באותה תמונה / placeholder
import reportPlaceholder from "../../assets/SVG/report-placeholder.svg";

// function ReportFormSlide({ data }) {
function ReportFormSlide({ data, isPreview = false }) {
  const storageKey = `report_form_current_page_${data?.id || "default"}`;

  const pages = useMemo(
    () => [
      {
        id: "page-1",
        title: "דף 1",
        image: reportPlaceholder,
      },
      {
        id: "page-2",
        title: "דף 2",
        image: reportPlaceholder,
      },
      {
        id: "page-3",
        title: "דף 3",
        image: reportPlaceholder,
      },
    ],
    []
  );

  const [currentPageIndex, setCurrentPageIndex] = useState(() => {
    const savedPageIndex = sessionStorage.getItem(storageKey);
    const parsedPageIndex = Number(savedPageIndex);

    if (
      Number.isInteger(parsedPageIndex) &&
      parsedPageIndex >= 0 &&
      parsedPageIndex < pages.length
    ) {
      return parsedPageIndex;
    }

    return 0;
  });

  useEffect(() => {
    sessionStorage.setItem(storageKey, String(currentPageIndex));
  }, [currentPageIndex, storageKey]);

  const currentPage = pages[currentPageIndex];

  const goToNextPage = () => {
    setCurrentPageIndex((prev) => {
      if (prev >= pages.length - 1) return prev;
      return prev + 1;
    });
  };

  const goToPrevPage = () => {
    setCurrentPageIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  };

  const goToPage = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
  };

  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === pages.length - 1;

  return (
    // <div className="report-slide-container">
    <div
      className={`report-slide-container ${
        isPreview ? "report-slide-preview" : ""
      }`}
    >
      <div className="report-viewer">
        {!isFirstPage && (
          <button
            className="report-page-arrow report-page-arrow-right"
            onClick={goToPrevPage}
            type="button"
            aria-label="לעמוד הקודם"
          >
            ‹
          </button>
        )}

        <div className="report-page-stage">
          <div className="report-page-paper" key={currentPage.id}>
            <img
              src={currentPage.image}
              alt={currentPage.title}
              className="report-page-image"
              draggable="false"
            />

            {/* 
              כאן בעתיד נמקם את כל השדות מעל הדו"ח.
              כל input יהיה absolute לפי אחוזים.
            */}
            <div className="report-fields-layer">
              {currentPageIndex === 0 && (
                <>
                  <input
                    className="report-input report-input-demo-name"
                    placeholder="שם הנהג"
                    type="text"
                  />

                  <input
                    className="report-input report-input-demo-id"
                    placeholder="מספר אישי"
                    type="text"
                  />

                  <button
                    className="report-checkbox-demo"
                    type="button"
                    aria-label="סימון לדוגמה"
                  >
                    ×
                  </button>
                </>
              )}

              {currentPageIndex === 1 && (
                <>
                  <textarea
                    className="report-textarea report-textarea-demo"
                    placeholder="פירוט נסיבות האירוע"
                  />
                </>
              )}

              {currentPageIndex === 2 && (
                <>
                  <input
                    className="report-input report-input-demo-signature"
                    placeholder="חתימה"
                    type="text"
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {!isLastPage && (
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

      <div className="report-page-dots" aria-label="מעבר בין עמודי הדו״ח">
        {pages.map((page, index) => (
          <button
            key={page.id}
            className={`report-page-dot ${
              index === currentPageIndex ? "active" : ""
            }`}
            onClick={() => goToPage(index)}
            type="button"
            aria-label={`מעבר אל ${page.title}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ReportFormSlide;
