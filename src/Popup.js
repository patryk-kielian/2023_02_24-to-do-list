export default function Popup({ togglePopupVisibility, popup, promise }) {
  if (popup.display)
    return (
      <div className="popup-overlay">
        <div className="popup-container">
          <h4 className="popup-message">{popup.message}</h4>
          <button
            className="popup-button form-button"
            onClick={() => {
              togglePopupVisibility();
              promise.resolve();
            }}
          >
            OK
          </button>
          {popup.method === "prompt" ? (
            <button
              className="popup-button form-button"
              onClick={() => {
                togglePopupVisibility();
                promise.reject();
              }}
            >
              Cancel
            </button>
          ) : null}
        </div>
      </div>
    );
}
