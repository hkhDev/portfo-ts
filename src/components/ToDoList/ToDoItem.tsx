import React, { useState } from "react";

interface IProp {
  text: string;
  id: number;
  handleDelete: (id: number) => void;
}

function ToDoItem(props: IProp) {
  const [checked, setChecked] = useState<boolean>(false);

  function checkedItem() {
    setChecked(!checked);
    // change the boolean value of checked
  }

  return (
    <div>
      <li className="todo-li">
        <span onClick={checkedItem} className={checked ? "todo-crossItem" : ""}>
          {props.text}
        </span>
        <img
          className="todo-img"
          src="images/rubbish_bin.png"
          onClick={() => {
            props.handleDelete(props.id);
          }}
          alt="delete-button"
        ></img>
      </li>
    </div>
  );
}

export default ToDoItem;
