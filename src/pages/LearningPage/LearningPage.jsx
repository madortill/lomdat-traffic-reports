import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import slidesData from "../../data/slides.json";
import "./LearningPage.css";

import OpeningSlides from "../../pages/OpeningSlides/OpeningSlides";
import ReportFormSlide from "../../pages/ReportFormSlide/ReportFormSlide";

import logoBahad13 from "../../assets/logo_shadow.svg";
import tillBlackLogo from "../../assets/till_blacklogo_shadow.svg";
import tillWhiteLogo from "../../assets/till_whitelogo.svg";
import backBtn from "../../assets/back-btn.svg";

import road from "../../assets/road.svg";
import BigCloud from "../../assets/cloud-big.svg";
import SmallCloud from "../../assets/cloud-small.svg";
import bushLeft from "../../assets/bush-left.svg";
import bushRight from "../../assets/bush-right.svg";
import gader from "../../assets/gader.svg";

const SESSION_KEYS = {
  currentSlideIndex: "learning_current_slide_index",
  completedSlides: "learning_completed_slides",
};

function getInitialSlideIndex() {
  const savedIndex = sessionStorage.getItem(SESSION_KEYS.currentSlideIndex);
  const parsedIndex = Number(savedIndex);

  if (
    Number.isInteger(parsedIndex) &&
    parsedIndex >= 0 &&
    parsedIndex < slidesData.length
  ) {
    return parsedIndex;
  }

  return 0;
}

function getInitialCompletedSlides() {
  try {
    const savedCompletedSlides = sessionStorage.getItem(
      SESSION_KEYS.completedSlides
    );

    if (!savedCompletedSlides) return {};

    return JSON.parse(savedCompletedSlides);
  } catch (error) {
    console.error(
      "Failed to parse completed slides from sessionStorage",
      error
    );
    return {};
  }
}

function LearningPage() {
  const [currentSlideIndex, setCurrentSlideIndex] =
    useState(getInitialSlideIndex);
  const [completedSlides, setCompletedSlides] = useState(
    getInitialCompletedSlides
  );
  const [canProceed, setCanProceed] = useState(true);

  const navigate = useNavigate();

  const slide = slidesData[currentSlideIndex];

  const isSlideCompleted = slide?.id
    ? Boolean(completedSlides[slide.id])
    : false;

  useEffect(() => {
    sessionStorage.setItem(
      SESSION_KEYS.currentSlideIndex,
      String(currentSlideIndex)
    );
  }, [currentSlideIndex]);

  useEffect(() => {
    sessionStorage.setItem(
      SESSION_KEYS.completedSlides,
      JSON.stringify(completedSlides)
    );
  }, [completedSlides]);

  useEffect(() => {
    if (!slide) return;

    const slideAlreadyCompleted = slide.id && completedSlides[slide.id];

    if (slideAlreadyCompleted) {
      setCanProceed(true);
      return;
    }

    setCanProceed(!slide.requireUnlock);
  }, [currentSlideIndex, slide, completedSlides]);

  const handleSlideUnlocked = useCallback((slideId) => {
    if (!slideId) return;

    setCompletedSlides((prev) => {
      if (prev[slideId]) return prev;

      return {
        ...prev,
        [slideId]: true,
      };
    });

    setCanProceed(true);
  }, []);

  if (!slide) return null;

  const navigationConfig = {
    hideNextUntilUnlocked: slide.navigation?.hideNextUntilUnlocked || false,
  
    next: {
      show: true,
      label: "המשך",
      position: "bottomCenter",
      ...slide.navigation?.next,
    },
  
    back: {
      show: currentSlideIndex > 0,
      variant: "image",
      label: "חזור",
      position: "bottomCenter",
      ...slide.navigation?.back,
    },
  };

  const nextSlide = () => {
    if (!canProceed) return;

    const isLastSlide = currentSlideIndex === slidesData.length - 1;

    if (isLastSlide) {
      navigate("/end");
    } else {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const renderBackButton = () => {
    if (!navigationConfig.back.show || currentSlideIndex === 0) return null;
  
    const wrapperClasses = [
      "single-nav-action",
      `nav-position-${navigationConfig.back.position}`,
    ].join(" ");
  
    return (
      <div className={wrapperClasses}>
        {navigationConfig.back.variant === "text" ? (
          <button
            className="nav-back-text-btn"
            onClick={prevSlide}
            type="button"
          >
            {navigationConfig.back.label}
          </button>
        ) : (
          <img
            src={backBtn}
            onClick={prevSlide}
            className="nav-back-image-btn"
            alt={navigationConfig.back.label}
          />
        )}
      </div>
    );
  };

  const renderNextButton = () => {
    if (!navigationConfig.next.show) return null;
  
    if (navigationConfig.hideNextUntilUnlocked && !canProceed) {
      return null;
    }
  
    const wrapperClasses = [
      "single-nav-action",
      `nav-position-${navigationConfig.next.position}`,
    ].join(" ");
  
    return (
      <div className={wrapperClasses}>
        <button
          className={`nav-next-btn ${!canProceed ? "btn-disabled" : ""}`}
          onClick={canProceed ? nextSlide : undefined}
          disabled={!canProceed}
          type="button"
        >
          {navigationConfig.next.label}
        </button>
      </div>
    );
  };

  const renderNavigation = () => {
    if (slide.navigation?.hidden) return null;
  
    return (
      <>
        {renderBackButton()}
        {renderNextButton()}
      </>
    );
  };

  const renderSlide = () => {
    switch (slide.type) {
      case "reportForm":
        return <ReportFormSlide data={slide} />;
  
      default:
        return (
          <OpeningSlides
            data={slide}
            isCompleted={isSlideCompleted}
            onUnlock={handleSlideUnlocked}
          />
        );
    }
  };

  return (
    <div className={`learning-page-container ${slide.theme === "damash" ? "learning-page-container-damash" : ""}`}>
      <img src={logoBahad13} className="logo-bahad13-fixed" alt="בהד 13" />
      <img src={slide.type !== "reportForm" ? tillBlackLogo : tillWhiteLogo} className="logo-till-fixed" alt="מדור טיל" />

      {slide.type !== "reportForm" && slide.theme !== "damash" && <div className="ground-area">
        <img src={road} className="road-opening-page" alt="" />
        <img src={gader} className="gader-open" alt="" />
        <img src={bushLeft} className="bush-left-open" alt="" />
        <img src={bushRight} className="bush-right-open" alt="" />

      <img src={BigCloud} className="big-cloud-opening-page-left" alt="" />
      <img src={BigCloud} className="big-cloud-opening-page-right" alt="" />
      <img src={SmallCloud} className="small-cloud-opening-page-left" alt="" />
      <img src={SmallCloud} className="small-cloud-opening-page-right" alt="" />
      </div>}

      {/* <div className="main-content-wrapper">
        <OpeningSlides
          data={slide}
          isCompleted={isSlideCompleted}
          onUnlock={handleSlideUnlocked}
        />
      </div> */}
      <div className={`main-content-wrapper ${slide.type === "reportForm" ? "main-content-wrapper-background" : ""}`}>{renderSlide()}</div>

      {renderNavigation()}
    </div>
  );
}

export default LearningPage;
