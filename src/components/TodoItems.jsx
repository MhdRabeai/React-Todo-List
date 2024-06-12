import "./css/TodoItems.css";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import cross from "../assets/cross.png";

export const TodoItems = ({ id, text, display, setTodos }) => {
  function deleteTodo(id) {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.id !== id);
    setTodos(data);
  }
  function toggle(id) {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        console.log(data[i].id);
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
      }
    }
    setTodos(data);
  }

  return (
    <div className="todo-items">
      <div
        className={`todo-items-container ${display}`}
        onClick={() => toggle(id)}
      >
        {display == "" ? (
          <img src={not_tick} alt="img" />
        ) : (
          <img src={tick} alt="img" />
        )}

        <div className="todo-items-text">{text}</div>
      </div>
      <img
        className="todo-items-cross"
        src={cross}
        alt="img"
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
};
