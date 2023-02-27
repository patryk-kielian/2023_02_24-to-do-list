import Form from "./Form";
import Table from "./Table";
import Popup from "./Popup";
import { useState } from "react";

import { PLACEHOLDER_TODOS } from "./config";

export default function App() {
  const [todos, setTodos] = useState(PLACEHOLDER_TODOS);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("Something went wrong.");

  const onSubmit = function (event) {
    event.preventDefault();
    console.log(selectedTodo);
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

    const newTodo = {
      name: event.target.name.value,
      description: event.target.description.value,
      category: event.target.category.value,
      date: formattedDate.replace(", ", " "),
      priority: event.target.priority.value,
      fulfillment: `${event.target.fulfillment.value}%`,
    };

    if (selectedTodo) {
      let editedTodos = [...todos];
      let index = editedTodos.findIndex((todo) => todo.name === newTodo.name);
      editedTodos[index] = newTodo;
      setTodos(editedTodos);
    } else {
      setTodos([...todos, newTodo]);
    }

    setShowForm(!showForm);
  };

  const onSubmitEdit = function (event) {
    event.preventDefault();
    console.log(event);
  };

  /**
   * Opens or closes the form. If called to edit an existing form, it will set a selectedTodo to fill in the fields with existing values
   * @param {*} event
   * @param {*} todo
   */
  const toggleFormVisibility = function (event, todo = null) {
    setSelectedTodo(todo);
    setShowForm(!showForm);
  };

  const togglePopupVisibility = function () {
    setShowPopup(!showPopup);
  };

  const handleDelete = function (index) {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEdit = function (index) {
    const todo = todos[index];
    toggleFormVisibility(event, todo);
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
      {showPopup && (
        <Popup
          togglePopupVisibility={togglePopupVisibility}
          message={popupMessage}
        />
      )}
      <button onClick={togglePopupVisibility}></button>
    </>
  );
}
