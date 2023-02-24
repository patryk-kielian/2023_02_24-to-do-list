export default function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">React To-Do List</h1>
        <div className="controls-group">
          <button className="control-add">Add a new to-do</button>
          <div>
            <button className="control-display selected">All</button>
            <button className="control-display">To-Do</button>
            <button className="control-display">Completed</button>
          </div>
        </div>
        <div className="content-group"></div>
      </div>
      <div className="copyright">Patryk Kielian © 2023 all rights reserved</div>
    </>
  );
}
