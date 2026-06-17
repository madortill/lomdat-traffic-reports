import { useState, useRef, useEffect, useMemo } from "react";
import "./NavbarLearning.css";

function NavbarLearning({
  sections,
  currentSlide,
  setCurrentSlide,
  maxVisitedSlide,
  onBackToPrevChapter,
}) {
  const [open, setOpen] = useState(false);

  const activeRef = useRef(null);
  const navbarRef = useRef(null);

  const activeSection = useMemo(() => {
    const sortedSections = [...sections].sort(
      (a, b) => a.slideIndex - b.slideIndex
    );

    let currentSection = sortedSections[0];

    for (const section of sortedSections) {
      if (currentSlide >= section.slideIndex) {
        currentSection = section;
      }
    }

    return currentSection;
  }, [sections, currentSlide]);

  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    setOpen(false);
  }, [currentSlide]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleJump = (slideIndex) => {
    if (slideIndex > maxVisitedSlide) return;

    setCurrentSlide(slideIndex);
    setOpen(false);
  };

  useEffect(() => {
    if (open && activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [open, currentSlide]);

  return (
    <div className="learning-navbar" ref={navbarRef}>
      <button className="navbar-toggle" onClick={toggleNavbar} type="button">
        {activeSection?.title || "לומדה"}
      </button>

      <div className={`navbar-dropdown ${open ? "open" : ""}`}>
        {onBackToPrevChapter && (
          <button
            className="plate special-back-plate"
            onClick={onBackToPrevChapter}
            type="button"
          >
            <div className="plate-title">חזרה לפרק הקודם</div>
            <div className="plate-il">IL</div>
          </button>
        )}

        {sections.map((section) => {
          const locked = section.slideIndex > maxVisitedSlide;

          const isActive =
            activeSection && activeSection.slideIndex === section.slideIndex;

          return (
            <button
              key={section.slideIndex}
              ref={isActive ? activeRef : null}
              className={`
                plate
                ${locked ? "locked" : ""}
                ${isActive ? "active" : ""}
              `}
              onClick={() => handleJump(section.slideIndex)}
              type="button"
              disabled={locked}
            >
              <div className="plate-title">{section.title}</div>
              <div className="plate-il">IL</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default NavbarLearning;
