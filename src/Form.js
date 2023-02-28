export default function Form({ onSubmit, toggleFormVisibility, selectedTodo }) {
  function formatDateISO(dateString) {
    const [date, time] = dateString.split(" ");
    const [day, month, year] = date.split(".");
    const [hour, minute] = time.split(":");
    return `${year}-${month}-${day}T${hour}:${minute}`;
  }

  const dateISO =
    selectedTodo && selectedTodo.date !== "-"
      ? formatDateISO(selectedTodo.date)
      : null;

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
              defaultValue={selectedTodo && selectedTodo.name}
              placeholder="name for the task you’re going to do"
            ></input>
          </div>
          <div className="form-fields-row">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              defaultValue={selectedTodo && selectedTodo.description}
              placeholder="a short description of the task - can be omitted"
            ></textarea>
          </div>
          <div className="form-fields-row">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              defaultValue={selectedTodo && selectedTodo.category}
              placeholder="e.g. household, school, work"
            ></input>
          </div>
          <div className="form-fields-row">
            <label htmlFor="date">Date:</label>
            <input
              type="datetime-local"
              id="date"
              defaultValue={dateISO}
            ></input>
          </div>
        </div>
        <div className="form-fields-column">
          <div>
            <div className="form-fields-row">
              <label htmlFor="priority">Priority:</label>
              <select
                id="priority"
                defaultValue={selectedTodo && selectedTodo.priority}
              >
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
                defaultValue={
                  selectedTodo ? selectedTodo.fulfillment.slice(0, -1) : 0
                }
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
