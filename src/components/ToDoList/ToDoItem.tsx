import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            props.handleDelete(props.id);
          }}
          className="todo-img"
        />
      </li>
    </div>
  );
}

export default ToDoItem;
