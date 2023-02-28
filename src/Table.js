export default function Table({
  todos,
  handleDelete,
  handleEdit,
  handleCheckbox,
}) {
  return (
    <div className="content-group">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Task</th>
            <th>Description</th>
            <th>Category</th>
            <th>When</th>
            <th>Priority</th>
            <th>Fulfillment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.name}>
              <td>
                <button
                  className="btn-checkbox"
                  onClick={() => handleCheckbox(index)}
                >
                  <span className="material-symbols-outlined">
                    {todo.fulfillment === "100%"
                      ? "check_box"
                      : "check_box_outline_blank"}
                  </span>
                </button>
              </td>
              <td>{todo.name}</td>
              <td>{todo.description}</td>
              <td>{todo.category}</td>
              <td>{todo.date}</td>
              <td>{todo.priority}</td>
              <td>{todo.fulfillment}</td>
              <td>
                <button className="btn-table" onClick={() => handleEdit(index)}>
                  <span className="material-symbols-outlined">edit_note</span>
                </button>
                <button
                  className="btn-table"
                  onClick={() => handleDelete(index)}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
