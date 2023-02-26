export default function Table({ todos, handleDelete, handleEdit }) {
  return (
    <div className="content-group">
      <table>
        <thead>
          <tr>
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
              <td>{todo.name}</td>
              <td>{todo.description}</td>
              <td>{todo.category}</td>
              <td>{todo.date}</td>
              <td>{todo.priority}</td>
              <td>{todo.fulfillment}</td>
              <td>
                <button className="btn-table">
                  <span
                    className="material-symbols-outlined"
                    onClick={() => handleEdit(index)}
                  >
                    edit_note
                  </span>
                </button>
                <button className="btn-table">
                  <span
                    className="material-symbols-outlined"
                    onClick={() => handleDelete(index)}
                  >
                    delete
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
