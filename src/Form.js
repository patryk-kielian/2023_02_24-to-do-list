export default function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="form-title">Add a new to-do:</h2>
      <div className="form-fields">
        <div className="form-fields-column">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="name for the task you’re going to do"
          ></input>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="a short description of the task - can be omitted"
          ></input>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            placeholder="e.g. household, school, work"
          ></input>
          <label htmlFor="date">Date:</label>
          <input type="datetime-local" id="date"></input>
        </div>
        <div className="form-fields-column">
          <label htmlFor="priority">Priority:</label>
          <select id="priority">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <label for="fulfillment">Fulfillment [0-100%]:</label>
          <input
            type="range"
            id="fulfillment"
            name="vol"
            min="0"
            max="100"
          ></input>
          <input type="submit" value="Save"></input>
        </div>
      </div>
    </form>
  );
}
