export default function Form({ onSubmit, toggleFormVisibility }) {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="form-title">Add a new to-do:</h2>
      <div className="form-fields">
        <div className="form-fields-column">
          <div className="form-fields-row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="name for the task you’re going to do"
            ></input>
          </div>
          <div className="form-fields-row">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              placeholder="a short description of the task - can be omitted"
            ></textarea>
          </div>
          <div className="form-fields-row">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              placeholder="e.g. household, school, work"
            ></input>
          </div>
          <div className="form-fields-row">
            <label htmlFor="date">Date:</label>
            <input type="datetime-local" id="date"></input>
          </div>
        </div>
        <div className="form-fields-column">
          <div>
            <div className="form-fields-row">
              <label htmlFor="priority">Priority:</label>
              <select id="priority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div className="form-fields-row">
              <label htmlFor="fulfillment">Fulfillment [0-100%]:</label>
              <input
                type="range"
                id="fulfillment"
                name="vol"
                min="0"
                max="100"
              ></input>
            </div>
          </div>
          <div className="form-buttons">
            <button className="form-button save" type="submit" value="Save">
              Save
            </button>
            <button
              className="form-button cancel"
              onClick={toggleFormVisibility}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
