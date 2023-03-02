import { useState, useEffect } from "react";

import Form from "./Form";
import Table from "./Table";
import Popup from "./Popup";
import Copyright from "./Copyright";

import { PLACEHOLDER_TODOS } from "./config";

export default function App() {
  const [todos, setTodos] = useState();
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [popup, setPopup] = useState({
    display: false,
    message: "Something went wrong.",
    method: "warning",
  });
  const [promise, setPromise] = useState(null);

  useEffect(() => {
    // No dependencies, runs only on load/reload
    // If localStorage doesn't have todos (app opened for the first time), set it to placeholder todos
    if (!localStorage.getItem("todos"))
      localStorage.setItem("todos", JSON.stringify(PLACEHOLDER_TODOS));
    // In any case, set todos in the app to the ones saved in local storage (now always unempty)
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  useEffect(() => {
    // Save updated todos to local storage
    if (todos) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onSubmit = function (event) {
    event.preventDefault();
    if (!event.target.name.value) {
      togglePopupVisibility(`Field "Name" cannot be empty!`);
      return;
    }
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

  /**
   * Opens or closes the form. If called to edit an existing form, it will set a selectedTodo to fill in the fields with existing values
   * @param {*} event
   * @param {*} todo
   */
  const toggleFormVisibility = function (event, todo = null) {
    setSelectedTodo(todo);
    setShowForm(!showForm);
  };

  const togglePopupVisibility = function (message = "Something went wrong!") {
    setPopup((prevPopup) => ({
      ...prevPopup,
      message: message,
      display: !prevPopup.display,
    }));
  };

  const handleDelete = function (index) {
    setPopup((prevPopup) => ({
      ...prevPopup,
      message: "Are you sure you want to delete this to-do?",
      display: true,
      decision: false,
      method: "prompt",
    }));

    return new Promise((resolveFn, rejectFn) => {
      setPromise({
        resolve: () => {
          resolveFn();
        },
        reject: () => {
          rejectFn();
        },
      });
    })
      .then(() => {
        let newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      })
      .catch(() => {
        console.log("User cancelled the delete operation.");
      });
  };

  // const handleDelete = function (index) {
  //   setPopup((prevPopup) => ({
  //     ...prevPopup,
  //     message: "Are you sure you want to delete this to-do?",
  //     display: true,
  //     decision: false,
  //     method: "prompt",
  //   }));

  //   return new Promise((resolve, reject) => {
  //     if (popup.decision) {
  //       let newTodos = [...todos];
  //       newTodos.splice(index, 1);
  //       setTodos(newTodos);
  //       resolve();
  //     } else {
  //       reject();
  //     }
  //   });
  // };

  const handleEdit = function (index) {
    const todo = todos[index];
    toggleFormVisibility(event, todo);
  };

  const handleCheckbox = function (index) {
    const editedFulfillment =
      todos[index].fulfillment === "100%" ? "0%" : "100%";
    const editedTodos = todos.map((todo, i) =>
      index === i ? { ...todo, fulfillment: editedFulfillment } : todo
    );
    setTodos(editedTodos);
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
          handleCheckbox={handleCheckbox}
        />
      </div>
      <Copyright />
      {showForm && (
        <Form
          onSubmit={onSubmit}
          toggleFormVisibility={toggleFormVisibility}
          selectedTodo={selectedTodo}
          togglePopupVisibility={togglePopupVisibility}
        />
      )}

      <Popup
        togglePopupVisibility={togglePopupVisibility}
        popup={popup}
        promise={promise}
      />
    </>
  );
}
