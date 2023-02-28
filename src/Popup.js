export default function Popup({ togglePopupVisibility, message, popupMethod }) {
  if (popupMethod)
    return (
      <div className="popup-overlay">
        <div className="popup-container">
          <h4 className="popup-message">{message}</h4>
          <button
            className="popup-button form-button"
            onClick={togglePopupVisibility}
          >
            OK
          </button>
          {popupMethod === "prompt" ? (
            <button
              className="popup-button form-button"
              onClick={togglePopupVisibility}
            >
              Cancel
            </button>
          ) : null}
        </div>
      </div>
    );
}
