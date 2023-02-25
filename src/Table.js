export default function Table({ todos }) {
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
          {todos.map((todo) => (
            <tr key={todo.name}>
              <td>{todo.name}</td>
              <td>{todo.description}</td>
              <td>{todo.category}</td>
              <td>{todo.date}</td>
              <td>{todo.priority}</td>
              <td>{todo.fulfillment}</td>
              <td>{todo.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
