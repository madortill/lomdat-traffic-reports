import React, { useState } from "react";
import "./EventDetailsMenu.css";

function EventDetailsMenu({ items = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const nextOpen = !prev;

      if (!nextOpen) {
        setHoveredItem(null);
      }

      return nextOpen;
    });
  };

  return (
    <div className="event-details-menu">
      <button
        className={`event-details-main-button ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        type="button"
      >
        פרטי האירוע
        <span className="event-details-icon">!</span>
      </button>

      {isOpen && (
        <div className="event-details-content">
          <div className="event-details-dropdown">
            {items.map((item) => (
              <button
                key={item.id}
                className={`event-details-option ${
                  hoveredItem?.id === item.id ? "active" : ""
                }`}
                type="button"
                onMouseEnter={() => handleMouseEnter(item)}
                onFocus={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                onBlur={handleMouseLeave}
              >
                <span>{item.label}</span>
                {item.icon && <img src={item.icon} alt="" />}
              </button>
            ))}
          </div>

          {hoveredItem && (
            <div
              className={`event-details-preview ${
                hoveredItem.previewClassName || ""
              }`}
            >
              <img src={hoveredItem.image} alt={hoveredItem.label} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EventDetailsMenu;
