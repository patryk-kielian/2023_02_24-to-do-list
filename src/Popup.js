export default function Popup({ togglePopupVisibility, message }) {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h4 className="popup-message">{message}</h4>
        <button className="popup-button" onClick={togglePopupVisibility}>
          OK
        </button>
      </div>
    </div>
  );
}
