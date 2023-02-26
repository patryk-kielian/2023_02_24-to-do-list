import Form from "./Form";
import Table from "./Table";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    {
      name: "Learn React",
      description: "Managing State, Escape Hatches, Effects",
      category: "Programming",
      date: "-",
      priority: "High",
      fulfillment: "30%",
    },
  ]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const onSubmit = function (event) {
    event.preventDefault();
    const dateInput = event.target.date.value;
    let formattedDate = "-";
    if (dateInput) {
      const date = new Date(dateInput);
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      formattedDate = date.toLocaleDateString(undefined, options);
    }
    setTodos([
      ...todos,
      {
        name: event.target.name.value,
        description: event.target.description.value,
        category: event.target.category.value,
        date: formattedDate.replace(", ", "\n"),
        priority: event.target.priority.value,
        fulfillment: `${event.target.fulfillment.value}%`,
      },
    ]);
    setShowForm(!showForm);
  };

  const toggleFormVisibility = function (todo = null) {
    setSelectedTodo(todo);
    setShowForm(!showForm);
  };

  const handleDelete = function (index) {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEdit = function (index) {
    const todo = todos[index];
    toggleFormVisibility(todo);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">React To-Do List</h1>
        <div className="controls-group">
          <button className="control-add" onClick={toggleFormVisibility}>
            Add a new to-do
          </button>
          <div>
            <button className="control-display selected">All</button>
            <button className="control-display">To-Do</button>
            <button className="control-display">Completed</button>
          </div>
        </div>
        <Table
          todos={todos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
      <div className="copyright">Patryk Kielian © 2023 all rights reserved</div>
      {showForm && (
        <Form
          onSubmit={onSubmit}
          toggleFormVisibility={toggleFormVisibility}
          selectedTodo={selectedTodo}
        />
      )}
    </>
  );
}
