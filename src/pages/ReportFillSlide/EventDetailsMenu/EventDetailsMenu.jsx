import React, { useState } from "react";
import "./EventDetailsMenu.css";

function EventDetailsMenu({ items = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (item, event) => {
    setHoveredItem(item);
    setPreviewPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseMove = (event) => {
    setPreviewPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <div className="event-details-menu">
        <button
          className={`event-details-main-button ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          פרטי האירוע
          <span className="event-details-icon">!</span>
        </button>

        {isOpen && (
          <div className="event-details-dropdown">
            {items.map((item) => (
              <button
                key={item.id}
                className="event-details-option"
                type="button"
                onMouseEnter={(event) => handleMouseEnter(item, event)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <span>{item.label}</span>
                {item.icon && <img src={item.icon} alt="" />}
              </button>
            ))}
          </div>
        )}
      </div>

      {hoveredItem && (
        <div
          className="event-details-preview"
          style={{
            top: previewPosition.y,
            left: previewPosition.x,
          }}
        >
          <img src={hoveredItem.image} alt={hoveredItem.label} />
        </div>
      )}
    </>
  );
}

export default EventDetailsMenu;
