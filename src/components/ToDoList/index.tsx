import { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import "./index.scss";

function ToDoList() {
  const [items, setItems] = useState<string[]>([]);

  function addItem(inputText: string) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
      // add new item to the previous item array
    });
  }

  function handleDelete(id: number) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
        // delete the item that match the id
      });
    });
  }

  return (
    <div className="todo-body">
      <div className="todo-content">
        <div className="todo-heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea buttonClick={addItem} />
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                handleDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
